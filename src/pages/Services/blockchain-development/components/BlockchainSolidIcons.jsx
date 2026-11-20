import React from 'react'

export function BlockchainSolidIcon({ name, className = 'w-10 h-10 text-[#00CE44]' }) {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    className,
    'aria-hidden': 'true',
  }

  switch (name) {
    // 8 Service Tab Icons
    case 'blockchain-app':
      return (
        <svg {...props}>
          <path d="M12 2L4 6.5v5L12 16l8-4.5v-5L12 2zm-8 12v3.5L12 22l8-4.5V14l-8 4.5L4 14z" />
        </svg>
      )
    case 'nft-dev':
      return (
        <svg {...props}>
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm-2 13H8.2V9h1.6l2.4 3.4V9H14v6h-1.6L10 11.6V15z" />
        </svg>
      )
    case 'nft-marketplace':
      return (
        <svg {...props}>
          <path d="M4 4h16l2 5H2l2-5zm-1 7h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9zm6 3v5h6v-5H9z" />
        </svg>
      )
    case 'metaverse':
      return (
        <svg {...props}>
          <path d="M4 7a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4.2l1.8-2.4a2.5 2.5 0 0 1 4 0L15.8 17H20a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3H4zm3.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm9 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        </svg>
      )
    case 'crypto-wallet':
      return (
        <svg {...props}>
          <path d="M3 6a3 3 0 0 1 3-3h12a2 2 0 0 1 2 2v2h-6a3 3 0 0 0 0 6h6v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm11 3h7v4h-7a2 2 0 0 1 0-4zm1 1.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </svg>
      )
    case 'dapp':
      return (
        <svg {...props}>
          <path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm14 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-8-5.5h2v4.4l4.5 2.6-1 1.7L12 14.6 7.5 17.2l-1-1.7L11 12.9V8.5z" />
        </svg>
      )
    case 'defi':
      return (
        <svg {...props}>
          <path d="M12 2C6.5 2 2 4 2 6.5S6.5 11 12 11s10-2 10-4.5S17.5 2 12 2zm0 11c-4.7 0-8.6-1.4-10-3.4V13c0 2.5 4.5 4.5 10 4.5s10-2 10-4.5V9.6c-1.4 2-5.3 3.4-10 3.4zm0 5.5c-4.7 0-8.6-1.4-10-3.4V18c0 2.5 4.5 4.5 10 4.5s10-2 10-4.5v-2.9c-1.4 2-5.3 3.4-10 3.4z" />
        </svg>
      )
    case 'other':
      return (
        <svg {...props}>
          <path d="M19.4 13a7.9 7.9 0 0 0 .1-1 7.9 7.9 0 0 0-.1-1l2.1-1.6-2-3.4-2.5 1a7.4 7.4 0 0 0-1.7-1L15 3h-4l-.4 2.6a7.4 7.4 0 0 0-1.7 1l-2.5-1-2 3.4L6.5 11a7.9 7.9 0 0 0-.1 1c0 .3 0 .7.1 1l-2.1 1.6 2 3.4 2.5-1c.5.4 1.1.7 1.7 1L11 21h4l.4-2.6c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.4L19.4 13zM13 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
        </svg>
      )

    // 9 Cross-Industry Icons
    case 'healthcare':
      return (
        <svg {...props}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 0 1 7.5 3c1.74 0 3.41.81 4.5 2.09A6 6 0 0 1 16.5 3 5.5 5.5 0 0 1 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    case 'fitness':
      return (
        <svg {...props}>
          <path d="M2 9h3v6H2V9zm4-3h3v12H6V6zm9 0h3v12h-3V6zm4 3h3v6h-3V9zM9 10.5h6v3H9v-3z" />
        </svg>
      )
    case 'elearning':
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
    case 'automotive':
      return (
        <svg {...props}>
          <path d="M18.9 6a1.5 1.5 0 0 0-1.4-1H6.5a1.5 1.5 0 0 0-1.4 1L3 12v7a1 1 0 0 0 1 1h1.5a1.5 1.5 0 0 0 1.5-1.5V17h10v1.5a1.5 1.5 0 0 0 1.5 1.5H20a1 1 0 0 0 1-1v-7l-2.1-6zM6.8 7.5h10.4l1.1 3.5H5.7l1.1-3.5zM6.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      )
    case 'travel':
      return (
        <svg {...props}>
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      )
    case 'fintech':
      return (
        <svg {...props}>
          <path d="M12 2L2 7v2h20V7L12 2zM4 11v7h3v-7H4zm6.5 0v7h3v-7h-3zM17 11v7h3v-7h-3zM2 20v2h20v-2H2z" />
        </svg>
      )
    case 'gaming':
      return (
        <svg {...props}>
          <path d="M6.5 6C3.5 6 2 8.7 2 12.2c0 3.2 1.7 5.8 3.8 5.8 1.4 0 2.3-.9 3.2-2.2h6c.9 1.3 1.8 2.2 3.2 2.2 2.1 0 3.8-2.6 3.8-5.8C22 8.7 20.5 6 17.5 6h-11zm1.5 3h1.5v1.5H11V12H9.5v1.5H8V12H6.5v-1.5H8V9zm8.5.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-2.3 2.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
        </svg>
      )
    case 'ecommerce':
      return (
        <svg {...props}>
          <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM2 3h3.2l2.2 10.4A2 2 0 0 0 9.4 15h8.4a2 2 0 0 0 1.9-1.4L22 6H6.4L5.8 3.2A1 1 0 0 0 4.8 2H2v1z" />
        </svg>
      )

    // Solid Calendar Icon
    case 'calendar':
      return (
        <svg {...props}>
          <path d="M7 2v2H5a2 2 0 0 0-2 2v3h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zM3 11v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9H3zm4 3h3v3H7v-3z" />
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
