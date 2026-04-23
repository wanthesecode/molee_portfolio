import { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolio';
import type { PortfolioItem } from '../data/portfolio';
import ProjectModal from './ProjectModal';

export default function Work() {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const featuredIds = [
    'gp-5g-motion',
    'apex-boshonto',
    'diploma-chilled-coffee',
    'dse-lost-friends',
    'lays-new-flavors',
    'hw-free-maid',
    'restaurant-posters',
    // 'war-promo',
    'frutzzy-concept',
    'diploma-droolecious-desert',
  ];
  const featured = featuredIds
    .map((id) => portfolioItems.find((p) => p.id === id))
    .filter((p): p is PortfolioItem => !!p);

  return (
    <section id='work' className='py-24 px-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='font-body text-sm tracking-[0.3em] uppercase text-blush-dark mb-3'>
            ✦ Portfolio
          </p>
          <h2 className='font-display text-6xl md:text-8xl tracking-wider text-charcoal'>
            SELECTED WORK
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className='columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5'>
          {featured.map((project) => (
            <div
              key={project.id}
              className='break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer'
              onClick={() => setSelected(project)}>
              <div
                className={`${project.aspect} bg-gradient-to-br ${project.color} w-full transition-transform duration-500 group-hover:scale-105 relative`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover absolute inset-0'
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>

              <div className='absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-cream'>
                <span className='font-body text-xs tracking-[0.2em] uppercase mb-2 text-blush-light'>
                  {project.category}
                </span>
                <h3 className='font-display text-3xl tracking-wider'>
                  {project.title.toUpperCase()}
                </h3>
                <span className='mt-3 text-xs tracking-wide text-cream/60'>Click to view ✦</span>
              </div>

              {project.video && (
                <div className='absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300'>
                  <div className='w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg'>
                    <svg
                      className='w-9 h-9 text-charcoal ml-1'
                      viewBox='0 0 24 24'
                      fill='currentColor'>
                      <path d='M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z' />
                    </svg>
                  </div>
                </div>
              )}

              <span className='absolute top-3 right-3 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-body text-charcoal tracking-wide'>
                {project.category}
              </span>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className='text-center mt-12'>
          <Link
            to='/portfolio'
            className='inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-charcoal text-cream font-body text-sm tracking-wide hover:bg-blush-dark transition-all duration-300 hover:scale-105'>
            View All Work ✦
          </Link>
        </div>
      </div>

      {selected && <ProjectModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
