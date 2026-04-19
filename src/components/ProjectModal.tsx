import { useEffect } from 'react';
import type { PortfolioItem } from '../data/portfolio';

interface Props {
  item: PortfolioItem;
  onClose: () => void;
}

export default function ProjectModal({ item, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className='fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/80 backdrop-blur-sm p-4 md:p-8'
      onClick={onClose}>
      <div
        className='relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl'
        onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-charcoal hover:bg-blush-light hover:text-blush-dark transition-colors cursor-pointer'
          aria-label='Close'>
          <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        {/* Media area */}
        <div
          className={`w-full max-h-[70vh] bg-gradient-to-br ${item.color} rounded-t-3xl overflow-hidden relative flex items-center justify-center`}>
          {item.video ? (
            <video
              src={item.video}
              controls
              autoPlay
              playsInline
              className='w-full max-h-[70vh] object-contain bg-black'
            />
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className='w-full max-h-[70vh] object-contain'
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          )}
          {/* Fallback decorative element */}
          {!item.video && (
            <div className='absolute inset-0 flex items-center justify-center'>
              <span className='font-display text-6xl md:text-8xl text-white/20 tracking-wider'>
                {item.title.split(' ')[0]?.toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className='p-8 md:p-12'>
          <div className='flex flex-wrap items-center gap-3 mb-4'>
            <span className='px-3 py-1 rounded-full bg-blush-light text-blush-dark text-xs font-body tracking-wide'>
              {item.category}
            </span>
            <span className='px-3 py-1 rounded-full bg-lavender-light text-lavender text-xs font-body tracking-wide'>
              {item.tag}
            </span>
            {item.year && (
              <span className='px-3 py-1 rounded-full border border-charcoal/10 text-warm-gray text-xs font-body tracking-wide'>
                {item.year}
              </span>
            )}
          </div>

          <h2 className='font-display text-4xl md:text-5xl tracking-wider text-charcoal mb-4'>
            {item.title.toUpperCase()}
          </h2>

          <p className='font-body text-warm-gray text-lg leading-relaxed mb-6 max-w-2xl'>
            {item.description}
          </p>

          {item.tools && item.tools.length > 0 && (
            <div>
              <p className='font-body text-xs tracking-[0.2em] uppercase text-blush-dark mb-3'>
                Tools Used
              </p>
              <div className='flex flex-wrap gap-2'>
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className='px-4 py-2 rounded-full border border-charcoal/10 text-charcoal text-sm font-body tracking-wide'>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
