import React from 'react'

export function SolidIcon({ name, className = 'w-10 h-10 text-[#00CE44]' }) {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    className,
    'aria-hidden': 'true',
  }

  switch (name) {
    case 'rocket':
      return (
        <svg {...props}>
          <path d="M12 2c3.5 2 6 5.8 6 10.5 0 1.4-.3 2.7-.8 3.9l2.3 2.3-3.1.8-1.4-1.4H9l-1.4 1.4-3.1-.8 2.3-2.3A10.6 10.6 0 0 1 6 12.5C6 7.8 8.5 4 12 2zm0 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM9.5 19.5h5L12 23l-2.5-3.5z" />
        </svg>
      )
    case 'award':
      return (
        <svg {...props}>
          <path d="M12 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 3.2 1.2 2.4 2.6.4-1.9 1.8.5 2.6L12 11.1l-2.4 1.3.5-2.6-1.9-1.8 2.6-.4L12 5.2zM8 16.5V22l4-2 4 2v-5.5a8.9 8.9 0 0 1-8 0z" />
        </svg>
      )
    case 'check':
      return (
        <svg {...props}>
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.2 14.2L6.6 12l1.4-1.4 2.8 2.8 5.6-5.6 1.4 1.4-7 7z" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 2L4 5v6.1c0 5.1 3.4 9.8 8 10.9 4.6-1.1 8-5.8 8-10.9V5l-8-3zm-1 13.5-3.5-3.5 1.4-1.4L11 12.7l4.6-4.6 1.4 1.4-6 6z" />
        </svg>
      )
    case 'smartphone':
      return (
        <svg {...props}>
          <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5 18a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM8 5v11h8V5H8z" />
        </svg>
      )
    case 'cart':
      return (
        <svg {...props}>
          <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM2 3h3.2l2.2 10.4A2 2 0 0 0 9.4 15h8.4a2 2 0 0 0 1.9-1.4L22 6H6.4L5.8 3.2A1 1 0 0 0 4.8 2H2v1z" />
        </svg>
      )
    case 'cloud':
      return (
        <svg {...props}>
          <path d="M19.4 10.1A7 7 0 0 0 6.1 8.5 5 5 0 0 0 6 18.5h13a4.5 4.5 0 0 0 .4-8.4z" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...props}>
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-3.1a15 15 0 0 0-1.4-3.6A8 8 0 0 1 18.9 8zM12 4c.9 1.2 1.6 2.6 2 4h-4c.4-1.4 1.1-2.8 2-4zM4.3 14a8.2 8.2 0 0 1 0-4h3.4a16.5 16.5 0 0 0 0 4H4.3zm.8 2h3.1c.3 1.3.8 2.5 1.4 3.6A8 8 0 0 1 5.1 16zm3.1-8H5.1a8 8 0 0 1 4.5-3.6A15 15 0 0 0 8.2 8zM12 20c-.9-1.2-1.6-2.6-2-4h4c-.4 1.4-1.1 2.8-2 4zm2.3-6h-4.6a14.4 14.4 0 0 1 0-4h4.6a14.4 14.4 0 0 1 0 4zm.1 5.6c.6-1.1 1.1-2.3 1.4-3.6h3.1a8 8 0 0 1-4.5 3.6zm1.9-5.6a16.5 16.5 0 0 0 0-4h3.4a8.2 8.2 0 0 1 0 4h-3.4z" />
        </svg>
      )
    case 'design':
      return (
        <svg {...props}>
          <path d="M3 17.25V21h3.75L17.8 9.95l-3.75-3.75L3 17.25zM20.7 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
      )
    case 'server':
      return (
        <svg {...props}>
          <path d="M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm3 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4zm3 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </svg>
      )
    case 'refresh':
      return (
        <svg {...props}>
          <path d="M12 2a10 10 0 1 0 9.5 13h-2.8a7.4 7.4 0 1 1-1.3-7.6L14 10h8V2l-2.8 2.8A9.9 9.9 0 0 0 12 2z" />
        </svg>
      )
    case 'trending':
      return (
        <svg {...props}>
          <path d="M3 19h18v2H3v-2zm1-3 5.5-5.5 3.5 3.5L19 8v3h2V4h-7v2h3l-4 4-3.5-3.5L2.5 13.5 4 16z" />
        </svg>
      )
    case 'zap':
      return (
        <svg {...props}>
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      )
    case 'layers':
      return (
        <svg {...props}>
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 12.5L4.3 10.7 2 12l10 5 10-5-2.3-1.3L12 14.5zm0 4L4.3 14.7 2 16l10 5 10-5-2.3-1.3L12 18.5z" />
        </svg>
      )
    case 'lock':
      return (
        <svg {...props}>
          <path d="M17 9h-1V7a4 4 0 1 0-8 0v2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm-7-2a2 2 0 1 1 4 0v2h-4V7zm2 10.5a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6z" />
        </svg>
      )
    case 'filecheck':
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-3 15.5-3-3 1.4-1.4 1.6 1.6 3.6-3.6 1.4 1.4-5 5zM13 9V3.5L18.5 9H13z" />
        </svg>
      )
    case 'brain':
      return (
        <svg {...props}>
          <path d="M9.5 2A3.5 3.5 0 0 0 6 5.5a3 3 0 0 0-2.5 3c0 1 .5 2 1.3 2.5A3.5 3.5 0 0 0 4 13.5 3.5 3.5 0 0 0 7 17a3 3 0 0 0 4 2.8V2h-1.5zm5 0H13v17.8a3 3 0 0 0 4-2.8 3.5 3.5 0 0 0 3-3.5c0-1-.4-1.9-1-2.5.8-.5 1.3-1.4 1.3-2.5a3 3 0 0 0-2.3-3A3.5 3.5 0 0 0 14.5 2z" />
        </svg>
      )
    case 'ar':
      return (
        <svg {...props}>
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.3L18.7 8 12 11.7 5.3 8 12 4.3zM5 9.8l6 3.3v6.6l-6-3.3V9.8zm8 9.9v-6.6l6-3.3v6.6l-6 3.3z" />
        </svg>
      )
    case 'blocks':
      return (
        <svg {...props}>
          <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
        </svg>
      )
    case 'cpu':
      return (
        <svg {...props}>
          <path d="M9 2v2H7a2 2 0 0 0-2 2v2H3v2h2v4H3v2h2v2a2 2 0 0 0 2 2h2v2h2v-2h2v2h2v-2h2a2 2 0 0 0 2-2v-2h2v-2h-2v-4h2V8h-2V6a2 2 0 0 0-2-2h-2V2h-2v2h-2V2H9zm0 7h6v6H9V9z" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...props}>
          <path d="M3 13h4v8H3v-8zm7-6h4v14h-4V7zm7-4h4v18h-4V3z" />
        </svg>
      )
    case 'fintech':
      return (
        <svg {...props}>
          <path d="M12 2L2 7v2h20V7L12 2zM4 11v7h3v-7H4zm6.5 0v7h3v-7h-3zM17 11v7h3v-7h-3zM2 20v2h20v-2H2z" />
        </svg>
      )
    case 'health':
      return (
        <svg {...props}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 0 1 7.5 3c1.74 0 3.41.81 4.5 2.09A6 6 0 0 1 16.5 3 5.5 5.5 0 0 1 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    case 'education':
      return (
        <svg {...props}>
          <path d="M12 3L1 9l11 6 9-4.9V17h2V9L12 3zm-7 9.2V16l7 3.8 7-3.8v-3.8L12 16l-7-3.8z" />
        </svg>
      )
    case 'realestate':
      return (
        <svg {...props}>
          <path d="M12 3L2 12h3v9h6v-6h2v6h6v-9h3L12 3z" />
        </svg>
      )
    case 'logistics':
      return (
        <svg {...props}>
          <path d="M2 5a2 2 0 0 1 2-2h11v12H2V5zm14 3h3.5L22 11.5V15h-6V8zM6.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm11 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
        </svg>
      )
    case 'travel':
      return (
        <svg {...props}>
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      )
    case 'food':
      return (
        <svg {...props}>
          <path d="M11 2v7a3 3 0 0 1-2 2.8V22H7V11.8A3 3 0 0 1 5 9V2h2v5h1V2h2v5h1V2zm7 0c2 0 3 2.5 3 6s-1 5-2 5.5V22h-2V2h1z" />
        </svg>
      )
    case 'users':
      return (
        <svg {...props}>
          <path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 2c-3 0-6 1.5-6 4.5V20h12v-2.5c0-3-3-4.5-6-4.5zm8 0c-.8 0-1.5.1-2.2.3 1.4 1 2.2 2.4 2.2 4.2V20h6v-2.5c0-2.8-2.7-4.5-6-4.5z" />
        </svg>
      )
    case 'legal':
      return (
        <svg {...props}>
          <path d="M11 2h2v3h7v2h-2.1l3.1 7h-7l3.1-7H13v12h5v2H6v-2h5V7H6.9L10 14H3l3.1-7H4V5h7V2z" />
        </svg>
      )
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}
