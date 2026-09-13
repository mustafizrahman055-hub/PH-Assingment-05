export const TechLogo = ({ type, size = 32, className = '' }) => {
  if (typeof type === 'string' && (type.startsWith('http://') || type.startsWith('https://') || type.startsWith('/') || type.endsWith('.svg') || type.endsWith('.png'))) {
    return (
      <img 
        src={type} 
        width={size} 
        height={size} 
        alt="" 
        className={className} 
        style={{ objectFit: 'contain' }} 
      />
    );
  }

  
  switch (type) {
    case 'react':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <circle cx="16" cy="16" r="3" fill="#00D8FF" />
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#00D8FF" strokeWidth="2" />
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#00D8FF" strokeWidth="2" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#00D8FF" strokeWidth="2" transform="rotate(120 16 16)" />
        </svg>
      );

    case 'vue':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M19.5 4H26.5L16 22L5.5 4H12.5L16 10L19.5 4Z" fill="#41B883" />
          <path d="M19.5 4H16L12.5 4H7L16 19.5L25 4H19.5Z" fill="#35495E" />
          <path d="M19.5 4H26.5L16 22L5.5 4H12.5L16 10L19.5 4Z" fill="#41B883" />
        </svg>
      );

    case 'svelte':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M25.5 9.5C24.3 6.3 21 4.5 17.5 5.2C14.8 5.7 12 7.7 11.2 10.3C10.5 12.6 11.2 14.6 12.7 15.6C11.5 16.8 10.6 18.5 10.8 20.5C11.1 23.7 13.9 26.2 17.2 26.5C20.8 26.8 24.1 24.5 24.9 21.1C25.4 19.1 24.9 17.3 23.6 16.1C24.7 14.8 25.7 12.3 25.5 9.5ZM17.2 23.8C15.5 23.8 14.1 22.5 14 20.8C13.9 19.4 14.8 18.2 16.2 17.8L20.5 16.7C21.8 17.3 22.4 18.6 22.1 20C21.6 22.1 19.5 23.8 17.2 23.8ZM15 15.3C13.7 14.7 13.1 13.4 13.4 12C13.9 9.9 16 8.2 18.3 8.2C20 8.2 21.4 9.5 21.5 11.2C21.6 12.6 20.7 13.8 19.3 14.2L15 15.3Z" fill="#FF3E00" />
        </svg>
      );

    case 'nextjs':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="16" fill="#000000" />
          <path d="M22.5 22.5L13.2 10.5H10.5V21.5H12.8V13.8L20.8 24.1C21.4 23.6 22 23.1 22.5 22.5Z" fill="#FFFFFF" />
          <path d="M21.5 10.5H19.2V21.5H21.5V10.5Z" fill="#FFFFFF" />
        </svg>
      );

    case 'nodejs':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M16 3L3.9 10V24L16 31L28.1 24V10L16 3Z" fill="#5FA04E" />
          <path d="M16 3L28.1 10V24L16 31V17L22 13.5V10.5L16 14V3Z" fill="#68A063" />
          <path d="M16 17V31L3.9 24V10L16 17Z" fill="#396C35" />
        </svg>
      );

    case 'postgresql':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M16 4C9.4 4 4 9.4 4 16C4 21.5 7.7 26.1 12.8 27.5C12.5 25.5 12.6 23.1 13 21C11.5 20.8 10 19.5 10 17.5C10 15.5 11.5 14.5 13 14.5C13 12 15 9.5 18 9.5C21 9.5 23 11 23 13.5C24.5 13.5 26 14.5 26 16.5C26 18.5 24.5 20 23 20.5C23.2 22.5 23.5 25 23.2 27.5C28.3 26.1 32 21.5 32 16C32 9.4 26.6 4 16 4Z" fill="#336791" />
          <circle cx="16" cy="14" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    case 'redis':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M16 4L4 9.5L16 15L28 9.5L16 4Z" fill="#DC382D" />
          <path d="M4 13.5L16 19L28 13.5L28 17L16 22.5L4 17V13.5Z" fill="#B91C1C" />
          <path d="M4 21L16 26.5L28 21L28 24.5L16 30L4 24.5V21Z" fill="#991B1B" />
        </svg>
      );

    case 'javascript':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#F7DF1E" />
          <path d="M17.5 25C18.5 25.8 19.8 26.3 21.4 26.3C24 26.3 25.4 25.1 25.4 23C25.4 19.8 21.1 19.4 21.1 17.6C21.1 16.8 21.8 16.2 22.9 16.2C24 16.2 25 16.7 25.8 17.4L27.2 15C26 14.1 24.6 13.6 23 13.6C20.4 13.6 18.7 15 18.7 17.4C18.7 20.5 23 20.8 23 22.7C23 23.5 22.1 24.1 21 24.1C19.6 24.1 18.3 23.4 17.5 22.5L17.5 25ZM11 25.8C12.8 25.8 14.2 25.1 15.2 23.8L13.5 21.9C12.8 22.8 12.1 23.3 11 23.3C9.7 23.3 8.9 22.6 8.9 20.8V14H11.5V11.5H6.5V20.8C6.5 24 8.2 25.8 11 25.8Z" fill="#000000" />
        </svg>
      );

    case 'typescript':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <rect width="32" height="32" rx="6" fill="#3178C6" />
          <path d="M19.5 25C20.5 25.8 21.8 26.3 23.4 26.3C26 26.3 27.4 25.1 27.4 23C27.4 19.8 23.1 19.4 23.1 17.6C23.1 16.8 23.8 16.2 24.9 16.2C26 16.2 27 16.7 27.8 17.4L29.2 15C28 14.1 26.6 13.6 25 13.6C22.4 13.6 20.7 15 20.7 17.4C20.7 20.5 25 20.8 25 22.7C25 23.5 24.1 24.1 23 24.1C21.6 24.1 20.3 23.4 19.5 22.5L19.5 25ZM5 16.3H10.5V26H13.5V16.3H19V13.6H5V16.3Z" fill="#FFFFFF" />
        </svg>
      );

    case 'java':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M12.5 25.5C12.5 25.5 14 26.5 16.5 26.5C19.5 26.5 21.5 24.5 21.5 24.5C21.5 24.5 20.5 25.2 18.5 25.2C15.5 25.2 12.5 25.5 12.5 25.5ZM13.8 22.2C13.8 22.2 15.5 23 17.8 23C20.8 23 22.8 21.2 22.8 21.2C22.8 21.2 21.5 22 19 22C16.5 22 13.8 22.2 13.8 22.2ZM19.2 16.5C20.5 17.8 21.8 19.2 21.8 20.5C20.8 20.5 19 19.8 17.8 18.5C16.8 17.5 16.2 16 16.2 14.8C17.5 15.2 18.5 15.8 19.2 16.5ZM13 18.5C10 18.5 7.5 17 7.5 17C7.5 17 9.2 17.8 12.2 17.8C15.8 17.8 19.8 16.8 21.2 15C20.2 16.8 16.2 18.5 13 18.5ZM16 5C16 5 13.5 8.5 16.5 12.2C14.2 10.8 14.5 8.2 16 5Z" fill="#E51F24" />
          <path d="M22 10.5C22 10.5 21.2 11.5 19.5 12C21.2 11.2 22.5 9.8 22.5 8.5C21 9.5 19 10 17 10.2C18.8 8.8 19.8 7 19.8 5C17.8 7 15.2 8.5 13.5 10.2C12.8 9.2 12.5 7.8 13.2 6.5C11.5 8 11.2 10.2 12 12C9.5 13.5 7.8 15.2 7 16.5C9.5 14.5 13 13.5 16 13.5C20 13.5 23.5 15.2 24.5 16.5C24.5 16.5 25.5 14 22 10.5Z" fill="#1C69B3" />
        </svg>
      );

    case 'tailwindcss':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M9 11.5C10.5 9.5 12.5 8.8 15 9.4C16.8 9.8 18.1 11.1 19.6 12.6C22 15 24.7 17.8 30 17.8C30 17.8 30 17.8 30 17.8C28.5 19.8 26.5 20.5 24 19.9C22.2 19.5 20.9 18.2 19.4 16.7C17 14.3 14.3 11.5 9 11.5ZM2 17.8C3.5 15.8 5.5 15.1 8 15.7C9.8 16.1 11.1 17.4 12.6 18.9C15 21.3 17.7 24.1 23 24.1C21.5 26.1 19.5 26.8 17 26.2C15.2 25.8 13.9 24.5 12.4 23C10 20.6 7.3 17.8 2 17.8Z" fill="#38BDF8" />
        </svg>
      );

    case 'docker':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M29.5 16.2C28.8 15.7 27.5 15.5 26.3 16C25.5 14.5 24 13.5 22.2 13.5C21.9 13.5 21.5 13.5 21.2 13.6V11.5H24.5V8.5H21.2V5.5H17.8V8.5H14.5V5.5H11.2V8.5H14.5V11.5H11.2V8.5H7.8V11.5H4.5V14.5H7.8V11.5H11.2V14.5H14.5V11.5H17.8V14.5H21.2C20.6 15 20.2 15.7 20 16.5H2.5C2 17.5 1.5 19 1.5 20.5C1.5 25.5 5.5 28.5 11.5 28.5C19 28.5 24.2 23.5 26 19.5C27.5 19.8 29.2 19 29.8 18C30.2 17.4 30.1 16.7 29.5 16.2Z" fill="#2496ED" />
          <rect x="7.8" y="11.5" width="3.4" height="3" fill="#2496ED" />
          <rect x="11.2" y="11.5" width="3.4" height="3" fill="#2496ED" />
          <rect x="14.5" y="11.5" width="3.4" height="3" fill="#2496ED" />
          <rect x="17.8" y="11.5" width="3.4" height="3" fill="#2496ED" />
          <rect x="11.2" y="8.5" width="3.4" height="3" fill="#2496ED" />
          <rect x="14.5" y="8.5" width="3.4" height="3" fill="#2496ED" />
          <rect x="17.8" y="8.5" width="3.4" height="3" fill="#2496ED" />
          <rect x="14.5" y="5.5" width="3.4" height="3" fill="#2496ED" />
        </svg>
      );

    default:
      return null;
  }
};
