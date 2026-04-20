import DecorativeShape from './DecorativeShape';

const services = [
  {
    icon: (
      <svg
        className='w-8 h-8'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'>
        <rect x='2' y='2' width='20' height='20' rx='3' />
        <circle cx='12' cy='12' r='4' />
        <line x1='18' y1='6' x2='18' y2='6.01' />
      </svg>
    ),
    title: 'Social Media Design',
    description: 'Eye-catching posts, stories & reels covers that make your feed pop.',
    tags: ['Instagram', 'Facebook', 'Stories'],
  },
  {
    icon: (
      <svg
        className='w-8 h-8'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'>
        <polygon points='23 7 16 12 23 17 23 7' />
        <rect x='1' y='5' width='15' height='14' rx='2' />
      </svg>
    ),
    title: 'Motion Graphics',
    description: 'Smooth animations & transitions for reels, stories and brand videos.',
    tags: ['After Effects', 'Reels', '9:16'],
  },
  {
    icon: (
      <svg
        className='w-8 h-8'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'>
        <polyline points='6 9 6 2 18 2 18 9' />
        <path d='M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2' />
        <rect x='6' y='14' width='12' height='8' />
      </svg>
    ),
    title: 'Print Design',
    description: 'Professional banners, standees, menus & posters for any occasion.',
    tags: ['Banners', 'Standees', 'Menus', 'Posters'],
  },
  {
    icon: (
      <svg
        className='w-8 h-8'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path d='M12 2L2 7l10 5 10-5-10-5z' />
        <path d='M2 17l10 5 10-5' />
        <path d='M2 12l10 5 10-5' />
      </svg>
    ),
    title: 'Logo & Branding',
    description: 'Memorable logos and brand identities that tell your story.',
    tags: ['Logos', 'Wordmarks', 'Brand Identity'],
  },
  {
    icon: (
      <svg
        className='w-8 h-8'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
        <polyline points='3.27 6.96 12 12.01 20.73 6.96' />
        <line x1='12' y1='22.08' x2='12' y2='12' />
      </svg>
    ),
    title: 'Packaging Design',
    description: 'Shelf-ready packaging that stands out and speaks to your customer.',
    tags: ['Labels', 'Boxes', 'Product Design'],
  },
  {
    icon: (
      <svg
        className='w-8 h-8'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'>
        <rect x='2' y='3' width='20' height='14' rx='2' />
        <line x1='8' y1='21' x2='16' y2='21' />
        <line x1='12' y1='17' x2='12' y2='21' />
      </svg>
    ),
    title: 'UI Design',
    description: 'Clean, modern web interfaces and landing pages that convert.',
    tags: ['Figma', 'Web Design', 'Landing Pages'],
  },
];

export default function Services() {
  return (
    <section id='services' className='py-24 px-6 bg-cream relative overflow-hidden'>
      <DecorativeShape className='absolute top-10 -left-80 w-[700px] h-auto text-peach/[0.08] -rotate-12' />

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <p className='font-body text-sm tracking-[0.3em] uppercase text-blush-dark mb-3'>
            ✦ What I Do
          </p>
          <h2 className='font-display text-6xl md:text-8xl tracking-wider text-charcoal'>
            SERVICES
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, i) => (
            <div
              key={i}
              className='group p-8 rounded-3xl bg-white border border-blush/10 hover:border-blush/40 transition-all duration-300 hover:shadow-lg hover:shadow-blush/10'>
              <div className='w-12 h-12 rounded-2xl bg-blush-light/60 flex items-center justify-center text-blush-dark mb-4'>
                {service.icon}
              </div>
              <h3 className='font-heading text-xl font-semibold text-charcoal mb-2'>
                {service.title}
              </h3>
              <p className='font-body text-warm-gray leading-relaxed mb-4'>{service.description}</p>
              <div className='flex flex-wrap gap-2'>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className='px-3 py-1 rounded-full bg-blush-light text-blush-dark text-xs font-body tracking-wide'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
