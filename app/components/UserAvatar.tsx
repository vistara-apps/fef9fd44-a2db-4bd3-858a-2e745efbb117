'use client';

interface UserAvatarProps {
  src?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const sizeClasses = {
  small: 'w-8 h-8 text-sm',
  medium: 'w-12 h-12 text-base',
  large: 'w-16 h-16 text-lg'
};

export function UserAvatar({ src, alt = 'User', size = 'medium', className = '' }: UserAvatarProps) {
  const sizeClass = sizeClasses[size];
  
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${sizeClass} rounded-full object-cover border-2 border-border ${className}`}
      />
    );
  }

  // Generate a color based on the alt text for consistent colors
  const colors = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-teal-500',
    'from-yellow-500 to-orange-500',
    'from-red-500 to-pink-500',
    'from-indigo-500 to-purple-500'
  ];
  
  const colorIndex = alt.charCodeAt(0) % colors.length;
  const gradientClass = colors[colorIndex];

  return (
    <div className={`${sizeClass} rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center font-semibold text-white border-2 border-border ${className}`}>
      {alt.charAt(0).toUpperCase()}
    </div>
  );
}
