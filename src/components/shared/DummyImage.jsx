import { ImageIcon } from 'lucide-react'

const sizeMap = {
  sm:   'h-24 w-24',
  md:   'h-40 w-full',
  lg:   'h-64 w-full',
  xl:   'h-80 w-full',
  full: 'h-full w-full min-h-48',
}

const DummyImage = ({ label = '', initials = '', size = 'md', className = '', icon: Icon = ImageIcon }) => (
  <div
    aria-label={label || 'Image placeholder'}
    role="img"
    className={`relative flex flex-col items-center justify-center gap-3 bg-bg-card border border-teal-border overflow-hidden ${sizeMap[size] ?? sizeMap.md} ${className}`}
  >
    <div
      className="absolute inset-0 opacity-20"
      style={{ background: 'radial-gradient(circle at center, rgba(0,201,167,0.3) 0%, transparent 70%)' }}
    />
    <Icon size={initials ? 28 : 36} className="relative z-10 text-teal-primary opacity-50" aria-hidden="true" />
    {initials && (
      <span className="relative z-10 font-inter font-semibold text-lg text-white/30 tracking-wider">{initials}</span>
    )}
    {label && !initials && (
      <span className="relative z-10 font-inter text-xs text-white/20 tracking-wide">{label}</span>
    )}
  </div>
)

export default DummyImage
