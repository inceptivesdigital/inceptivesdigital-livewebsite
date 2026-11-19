import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Plus, Minus, RotateCcw } from 'lucide-react'

const CARTO_KEY = 'cb1_5a2b_1_3371ea5b098290637fc30de4'

const cities = [
  { name: 'San Francisco', coords: [37.7749, -122.4194], label: 'left' },
  { name: 'Austin', coords: [30.2672, -97.7431], label: 'right' },
  { name: 'Toronto', coords: [43.6532, -79.3832], label: 'top' },
  { name: 'New York', coords: [40.7128, -74.006], label: 'right' },
  { name: 'London', coords: [51.5074, -0.1278], label: 'right' },
  {
    name: 'Dubai',
    coords: [25.2048, 55.2708],
    label: 'left',
    address: 'Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates',
  },
  {
    name: 'Pakistan',
    coords: [24.8716, 67.0599],
    label: 'right',
    address: 'Office No. 1, Najeeb Center 172-B Tariq Road, PECHS Karachi, Pakistan',
  },
  { name: 'Singapore', coords: [1.3521, 103.8198], label: 'right' },
]

// Clean pinpoint with subtle soft dot and transparent label (no bg, no padding, font-weight: 500)
const pinHtml = (name, position) => `
  <div class="id-city-pin id-city-pin--${position || 'right'}">
    <div class="id-city-pin__dot"></div>
    <div class="id-city-pin__label">${name}</div>
  </div>`

export default function ContactMap() {
  const mapEl = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!mapEl.current) return

    // Safely remove any existing Leaflet instance to avoid "Map container is already initialized"
    if (mapRef.current) {
      mapRef.current.remove()
      mapRef.current = null
    }
    if (mapEl.current._leaflet_id) {
      delete mapEl.current._leaflet_id
    }

    try {
      const map = L.map(mapEl.current, {
        center: [25, 12],
        zoom: 2,
        minZoom: 2,
        maxZoom: 6,
        dragging: false, // Lock screen in place: no mouse dragging or panning
        zoomControl: false,
        scrollWheelZoom: true,
        doubleClickZoom: false,
        touchZoom: false,
        boxZoom: false,
        keyboard: false,
        worldCopyJump: false,
        attributionControl: true,
      })
      mapRef.current = map

      const cartoUrl = `https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png?key=${CARTO_KEY}`
      const esriUrl =
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'

      // Primary CARTO Dark Matter basemap
      const primaryLayer = L.tileLayer(cartoUrl, {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions" target="_blank" rel="noreferrer">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      })

      // Automatic fallback if CARTO is unreachable or blocked
      primaryLayer.on('tileerror', () => {
        if (!map._hasFallback) {
          map._hasFallback = true
          map.removeLayer(primaryLayer)
          L.tileLayer(esriUrl, {
            attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
            maxZoom: 16,
          }).addTo(map)
        }
      })

      primaryLayer.addTo(map)

      // Add pins: glowing dot + city name heading
      cities.forEach((c) => {
        const icon = L.divIcon({
          className: 'id-pin-wrap',
          html: pinHtml(c.name, c.label),
          iconSize: [0, 0],
          iconAnchor: [0, 0],
        })
        L.marker(c.coords, {
          icon,
          title: c.address ? `${c.name} — ${c.address}` : c.name,
        }).addTo(map)
      })

      // Automatic resize recalculations for 100% fullwidth rendering
      const triggerResize = () => {
        if (mapRef.current) mapRef.current.invalidateSize()
      }
      window.addEventListener('resize', triggerResize)
      const t1 = setTimeout(triggerResize, 80)
      const t2 = setTimeout(triggerResize, 350)
      const t3 = setTimeout(triggerResize, 900)

      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
        clearTimeout(t3)
        window.removeEventListener('resize', triggerResize)
        map.remove()
        mapRef.current = null
      }
    } catch (err) {
      console.error('Error initializing map:', err)
    }
  }, [])

  const handleZoomIn = () => {
    if (mapRef.current) mapRef.current.zoomIn()
  }

  const handleZoomOut = () => {
    if (mapRef.current) mapRef.current.zoomOut()
  }

  const handleReset = () => {
    if (mapRef.current) mapRef.current.setView([25, 12], 2)
  }

  return (
    <section className="py-16 sm:py-24 bg-black overflow-hidden w-full relative isolate z-0">
      {/* Centered Heading */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white text-center tracking-tight leading-tight">
          We Bring One Product Standard to <span className="text-[#00CE44]">Seven Cities</span>
        </h2>
      </div>

      {/* 100% Full-Width Edge-to-Edge Map Container (isolated stacking context) */}
      <div className="relative isolate z-0 w-full border-t border-b border-white/10 overflow-hidden bg-[#090909] shadow-2xl">
        <div
          ref={mapEl}
          style={{ height: '580px', width: '100%', minHeight: '450px' }}
          className="w-full h-[450px] sm:h-[560px] lg:h-[620px]"
          role="region"
          aria-label="Map of Inceptives Digital offices"
        />

        {/* Dedicated Zoom In, Zoom Out & Reset Controls */}
        <div className="absolute top-6 right-6 sm:right-8 z-[500] flex flex-col gap-2">
          <button
            type="button"
            onClick={handleZoomIn}
            aria-label="Zoom in"
            title="Zoom in"
            className="w-11 h-11 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-white/15 text-white hover:text-black hover:bg-[#00CE44] hover:border-[#00CE44] flex items-center justify-center transition-all duration-200 shadow-lg cursor-pointer active:scale-95"
          >
            <Plus className="w-5 h-5 stroke-[2.5]" />
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            aria-label="Zoom out"
            title="Zoom out"
            className="w-11 h-11 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-white/15 text-white hover:text-black hover:bg-[#00CE44] hover:border-[#00CE44] flex items-center justify-center transition-all duration-200 shadow-lg cursor-pointer active:scale-95"
          >
            <Minus className="w-5 h-5 stroke-[2.5]" />
          </button>
          <button
            type="button"
            onClick={handleReset}
            aria-label="Reset map view"
            title="Reset view"
            className="w-11 h-11 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-white/15 text-white hover:text-black hover:bg-[#00CE44] hover:border-[#00CE44] flex items-center justify-center transition-all duration-200 shadow-lg cursor-pointer active:scale-95"
          >
            <RotateCcw className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Quick tip at bottom left */}
        <div className="absolute bottom-4 left-6 sm:left-8 z-[500] hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-sm border border-white/10 text-xs text-white/80 select-none pointer-events-none shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#00CE44]" />
          <span>Locked global overview • Zoom in / out in place</span>
        </div>
      </div>

      {/* Styles for pins and labels without Inceptives flag */}
      <style>{`
        .leaflet-container, .leaflet-grab, .leaflet-touch-drag {
          background-color: #090909 !important;
          width: 100% !important;
          height: 100% !important;
          font-family: inherit;
          cursor: default !important;
        }
        .leaflet-pane, .leaflet-tile, .leaflet-marker-icon, .leaflet-marker-shadow,
        .leaflet-tile-container, .leaflet-pane > svg, .leaflet-pane > canvas {
          position: absolute;
          left: 0;
          top: 0;
        }
        .leaflet-tile {
          user-select: none;
          -webkit-user-drag: none;
          max-width: none !important;
          max-height: none !important;
        }
        .id-pin-wrap { background: transparent; border: 0; }
        .id-city-pin {
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 0;
          cursor: pointer;
        }
        /* Soft, calm, gentle dot that is easy on the eyes */
        .id-city-pin__dot {
          position: absolute;
          left: -4px;
          top: -4px;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #00CE44;
          opacity: 0.85;
          box-shadow: 0 0 5px rgba(0, 206, 68, 0.4);
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .id-city-pin:hover .id-city-pin__dot {
          transform: scale(1.4);
          opacity: 1;
          box-shadow: 0 0 8px rgba(0, 206, 68, 0.7);
        }
        /* Clean text: no background, padding: 0, font-weight: 500 */
        .id-city-pin__label {
          position: absolute;
          left: 10px;
          top: -8px;
          white-space: nowrap;
          color: #ffffff;
          font-weight: 500;
          font-size: 13px;
          line-height: 1;
          padding: 0;
          background: transparent;
          border: none;
          box-shadow: none;
          backdrop-filter: none;
          text-shadow: 0 1px 4px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1);
          transition: color 0.2s ease;
          letter-spacing: -0.01em;
        }
        .id-city-pin:hover .id-city-pin__label {
          color: #00CE44;
        }
        .id-city-pin--left .id-city-pin__label {
          left: auto;
          right: 10px;
        }
        .id-city-pin--top .id-city-pin__label {
          left: 0;
          top: -18px;
          transform: translateX(-40%);
        }
        .leaflet-control-attribution { background: rgba(0,0,0,.65) !important; color: #888 !important; font-size: 10px !important; }
        .leaflet-control-attribution a { color: #aaa !important; }
      `}</style>
    </section>
  )
}
