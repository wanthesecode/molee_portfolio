import { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioItems, categories } from '../data/portfolio';
import type { PortfolioCategory, PortfolioItem } from '../data/portfolio';
import ProjectModal from './ProjectModal';

export default function PortfolioPage() {
  const [active, setActive] = useState<PortfolioCategory>('All');
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const filtered =
    active === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === active);

  return (
    <div className='min-h-screen bg-cream font-body text-charcoal'>
      {/* Header */}
      <header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-cream/80 border-b border-blush/20'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <Link to='/' className='font-display text-3xl tracking-wider text-charcoal'>
            MOLEE<span className='text-blush-dark'>.</span>
          </Link>
          <Link
            to='/'
            className='px-5 py-2 rounded-full bg-charcoal text-cream text-sm font-body tracking-wide hover:bg-blush-dark transition-colors duration-300'>
            ← Back Home
          </Link>
        </div>
      </header>

      <main className='pt-28 pb-24 px-6'>
        <div className='max-w-7xl mx-auto'>
          {/* Title */}
          <div className='text-center mb-12'>
            <p className='font-body text-sm tracking-[0.3em] uppercase text-blush-dark mb-3'>
              ✦ Browse All
            </p>
            <h1 className='font-display text-6xl md:text-9xl tracking-wider text-charcoal'>
              PORTFOLIO
            </h1>
          </div>

          {/* Category filters */}
          <div className='flex flex-wrap items-center justify-center gap-3 mb-12'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-body tracking-wide transition-all duration-300 cursor-pointer ${
                  active === cat
                    ? 'bg-charcoal text-cream'
                    : 'bg-white border border-charcoal/10 text-warm-gray hover:border-blush/40 hover:text-blush-dark'
                }`}>
                {cat}
                {cat !== 'All' && (
                  <span className='ml-1.5 text-xs opacity-60'>
                    ({portfolioItems.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className='columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5'>
            {filtered.map((project) => (
              <div
                key={project.id}
                className='break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer'
                onClick={() => setSelected(project)}>
                {/* Image / gradient placeholder */}
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

                {/* Hover overlay */}
                <div className='absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-cream'>
                  <span className='font-body text-xs tracking-[0.2em] uppercase mb-2 text-blush-light'>
                    {project.category}
                  </span>
                  <h3 className='font-display text-3xl tracking-wider'>
                    {project.title.toUpperCase()}
                  </h3>
                  <span className='mt-3 text-xs tracking-wide text-cream/60'>Click to view ✦</span>
                </div>

                {/* Play button for video items */}
                {project.video && (
                  <div className='absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300'>
                    <div className='w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg'>
                      <svg
                        className='w-9 h-9 text-[#82756a] ml-0'
                        viewBox='0 0 24 24'
                        fill='currentColor'>
                        <path d='M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z' />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Category badge */}
                <span className='absolute top-3 right-3 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-body text-charcoal tracking-wide'>
                  {project.category}
                </span>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className='text-center text-warm-gray font-body mt-16'>
              Nothing here just yet, but check back soon! ✦
            </p>
          )}
        </div>
      </main>

      {/* Modal */}
      {selected && <ProjectModal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
