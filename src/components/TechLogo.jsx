import React from 'react'

export const TechLogo = ({ name, size = 16, className = '' }) => {
  const norm = (name || '').toLowerCase().trim()

  // Flutter
  if (norm.includes('flutter')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <path d="M14.314 0L2.3 12 6.072 15.772 21.857 0h-7.543z" fill="#02569B" />
        <path d="M14.286 11.971L7.543 18.714l3.771 3.772 3.772-3.772 6.771-6.743h-7.571z" fill="#0175C2" />
        <path d="M11.314 15.743l2.972-2.972 3.771 3.772-2.971 2.971z" fill="#29B6F6" />
      </svg>
    )
  }

  // Dart
  if (norm.includes('dart')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <path d="M4.108 4.108A4.95 4.95 0 0 1 7.608 2.65H17.5l-3.35 3.35H7.608c-.73 0-1.4.3-1.88.77l-1.62-2.662z" fill="#0081C6" />
        <path d="M2.65 7.608c0-1.3.52-2.48 1.458-3.5L6.77 6.77c-.47.48-.77 1.15-.77 1.88v6.542L2.65 11.84V7.608z" fill="#00B4AB" />
        <path d="M6 8.65v11.242l3.35 3.35v-11.24L6 8.648z" fill="#00B4AB" />
        <path d="M9.35 23.242h6.542c1.3 0 2.48-.52 3.5-1.458l-2.662-2.662c-.48.47-1.15.77-1.88.77H9.35v3.35z" fill="#0081C6" />
        <path d="M19.392 21.784c.938-.938 1.458-2.2 1.458-3.5V8.408l-3.35-3.35v13.226c0 .73-.3 1.4-.77 1.88l2.662 1.62z" fill="#01579B" />
        <path d="M14.15 6H7.608a2.64 2.64 0 0 0-1.88.77L16.23 17.27c.48-.48.77-1.15.77-1.88V6h-2.85z" fill="#29B6F6" />
      </svg>
    )
  }

  // React
  if (norm.includes('react')) {
    return (
      <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={`tech-logo-svg ${className}`}>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  }

  // JavaScript
  if (norm === 'javascript' || norm === 'js') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
        <path d="M7 16.5c.5.8 1.4 1.3 2.5 1.3 1.3 0 2.1-.7 2.1-1.7 0-1.2-.9-1.6-2.3-2.2-1.8-.7-3-1.6-3-3.6 0-1.8 1.4-3.3 3.6-3.3 1.6 0 2.7.6 3.4 1.9l-1.8 1.2c-.4-.7-.9-1-1.6-1-.8 0-1.4.5-1.4 1.2 0 .8.6 1.2 1.9 1.7 2 .8 3.4 1.7 3.4 3.8 0 2.2-1.7 3.5-4.2 3.5-2.2 0-3.6-1.1-4.3-2.6l1.7-1.2zm9 4.3c-1.3 0-2.3-.4-3-1.1l1.4-1.5c.4.4.9.7 1.5.7.8 0 1.3-.4 1.3-1.4V7.2h2.2v10.3c0 2.1-1.3 3.3-3.4 3.3z" fill="#000"/>
      </svg>
    )
  }

  // TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <rect width="24" height="24" rx="4" fill="#3178C6"/>
        <path d="M5 9.2h6.4V11H8.7v7.5H6.6V11H5V9.2zm8.2 5.5c.6.5 1.4.8 2.2.8.9 0 1.4-.4 1.4-1 0-.6-.5-.9-1.6-1.3-1.7-.6-2.7-1.3-2.7-2.7 0-1.6 1.3-2.6 3.1-2.6 1.3 0 2.3.4 2.9 1l-1 1.4c-.5-.4-1.1-.7-1.9-.7-.7 0-1.1.3-1.1.8 0 .5.4.8 1.4 1.2 1.8.7 2.8 1.4 2.8 2.8 0 1.7-1.3 2.7-3.4 2.7-1.5 0-2.8-.5-3.6-1.3l1.5-1.4z" fill="#FFF"/>
      </svg>
    )
  }

  // Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
      </svg>
    )
  }

  // HTML5 / CSS3
  if (norm.includes('html') || norm.includes('css')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <path d="M4 3l1.6 17.5L12 22.5l6.4-2L20 3H4z" fill="#E34F26"/>
        <path d="M12 4.8v15.9l4.9-1.5 1.3-14.4H12z" fill="#EF652A"/>
        <path d="M8.2 8.2h7.6l-.3 3.3H9.4l.2 2.4h5.6l-.3 3.5-2.9.9-2.9-.9-.2-2H7.2l.3 3.5 4.5 1.4 4.5-1.4.6-6.4H8l.2-2.4z" fill="#FFF"/>
      </svg>
    )
  }

  // Python
  if (norm.includes('python')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <path d="M11.914 2c-4.463 0-4.184 1.935-4.184 1.935l.005 2.006h4.254v.602H5.975S2 6.088 2 10.554c0 4.467 3.483 4.312 3.483 4.312h2.079v-2.915s-.112-3.483 3.428-3.483h5.882s3.315.056 3.315-3.315c0-3.37-2.97-3.153-2.97-3.153h-1.632V2h-3.671zm-2.036 1.258a.784.784 0 1 1 0 1.567.784.784 0 0 1 0-1.567z" fill="#3776AB"/>
        <path d="M12.086 22c4.463 0 4.184-1.935 4.184-1.935l-.005-2.006h-4.254v-.602h6.014S22 17.912 22 13.446c0-4.467-3.483-4.312-3.483-4.312h-2.079v2.915s.112 3.483-3.428 3.483H7.128s-3.315-.056-3.315 3.315c0 3.37 2.97 3.153 2.97 3.153h1.632V22h3.671zm2.036-1.258a.784.784 0 1 1 0-1.567.784.784 0 0 1 0 1.567z" fill="#FFD43B"/>
      </svg>
    )
  }

  // Flask
  if (norm.includes('flask')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <path d="M10 2v3.5a1 1 0 0 1-.2.6L4.5 14.8A5 5 0 0 0 9 22h6a5 5 0 0 0 4.5-7.2L14.2 6.1a1 1 0 0 1-.2-.6V2h-4z" stroke="#00d8ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.5 2h7M7 16h10" stroke="#00d8ff" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="10" cy="18" r="1" fill="#00d8ff" />
        <circle cx="13.5" cy="17.5" r="1.2" fill="#00d8ff" />
      </svg>
    )
  }

  // FastAPI
  if (norm.includes('fastapi')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <circle cx="12" cy="12" r="10" fill="#059669"/>
        <path d="M13.5 4.5L7 13.5h5l-1.5 6 6.5-9h-5l1.5-6z" fill="#FFF"/>
      </svg>
    )
  }

  // Node.js
  if (norm.includes('node')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#339933"/>
        <path d="M12 4.2L5 8.2v7.6l7 4 7-4V8.2l-7-4z" fill="#222"/>
        <path d="M12 6.5l5 2.9v5.8L12 18l-5-2.8V9.4l5-2.9z" fill="#5FA04E"/>
      </svg>
    )
  }

  // RESTful APIs
  if (norm.includes('rest') || norm.includes('api')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`tech-logo-svg ${className}`}>
        <path d="M16 18l6-6-6-6"/>
        <path d="M8 6l-6 6 6 6"/>
        <line x1="10" y1="18" x2="14" y2="6"/>
      </svg>
    )
  }

  // PostgreSQL
  if (norm.includes('postgres')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <path d="M12 2C7 2 3.5 5.5 3.5 10c0 3.8 2.5 7 6.2 7.8v2.2c0 .6.4 1 1 1h2.6c.6 0 1-.4 1-1v-2.2c3.7-.8 6.2-4 6.2-7.8 0-4.5-3.5-8-8.5-8z" fill="#336791"/>
        <path d="M10 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#FFF"/>
        <path d="M8.5 13c1 1.5 2.5 2 3.5 2s2.5-.5 3.5-2" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  }

  // IIS Server Configuration
  if (norm.includes('iis') || norm.includes('server')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`tech-logo-svg ${className}`}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
        <path d="M17 6h1"/>
        <path d="M14 18h4"/>
      </svg>
    )
  }

  // Git
  if (norm === 'git') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <path d="M21.6 10.7l-8.3-8.3a2.5 2.5 0 0 0-3.5 0L8.2 4 10.6 6.4a2.2 2.2 0 0 1 2.8 2.8l2.3 2.3a2.2 2.2 0 1 1-1.3 1.3l-2.2-2.2v5a2.2 2.2 0 1 1-1.8 0V10.2a2.2 2.2 0 0 1-1.2-2.9L6.8 5 2.4 9.4a2.5 2.5 0 0 0 0 3.5l8.3 8.3a2.5 2.5 0 0 0 3.5 0l7.4-7.4a2.5 2.5 0 0 0 0-3.1z" fill="#F05032"/>
      </svg>
    )
  }

  // GitHub
  if (norm.includes('github')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#FFF"/>
      </svg>
    )
  }

  // VS Code
  if (norm.includes('vs code') || norm.includes('vscode')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <path d="M17.5 2.5L7.2 10.3 3.5 7.5 2 8.4l3.5 3.6L2 15.6l1.5.9 3.7-2.8 10.3 7.8 4.5-2.2V4.7L17.5 2.5z" fill="#007ACC"/>
        <path d="M17.5 2.5L9.6 12l7.9 9.5 4.5-2.2V4.7L17.5 2.5z" fill="#1F9CF0"/>
        <path d="M22 4.7l-4.5 7.3 4.5 7.3V4.7z" fill="#0065A9"/>
      </svg>
    )
  }

  // Postman
  if (norm.includes('postman')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-logo-svg ${className}`}>
        <circle cx="12" cy="12" r="10.5" fill="#FF6C37"/>
        <path d="M16.5 9.5c0 1.5-.8 2.6-2.2 3.1l2.5 3.9h-2.3l-2.1-3.4h-1.6v3.4H9V7.5h5c1.6 0 2.5 1 2.5 2zm-2.2.8c0-.7-.5-1.1-1.3-1.1h-2.2v2.3h2.2c.8 0 1.3-.4 1.3-1.2z" fill="#FFF"/>
      </svg>
    )
  }

  // Default fallback code tag icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`tech-logo-svg ${className}`}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
