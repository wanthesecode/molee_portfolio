import DecorativeShape from './DecorativeShape';

const services = [
  {
    icon: '🎨',
    title: 'Social Media Design',
    description: 'Eye-catching posts, stories & reels covers that make your feed pop.',
    tags: ['Instagram', 'Facebook', 'Stories'],
  },
  {
    icon: '🎬',
    title: 'Motion Graphics',
    description: 'Smooth animations & transitions for reels, stories and brand videos.',
    tags: ['After Effects', 'Reels', '9:16'],
  },
  {
    icon: '🖨️',
    title: 'Print Design',
    description: 'Professional banners, standees, menus & posters for any occasion.',
    tags: ['Banners', 'Standees', 'Menus', 'Posters'],
  },
  {
    icon: '✏️',
    title: 'Logo & Branding',
    description: 'Memorable logos and brand identities that tell your story.',
    tags: ['Logos', 'Wordmarks', 'Brand Identity'],
  },
  {
    icon: '📦',
    title: 'Packaging Design',
    description: 'Shelf-ready packaging that stands out and speaks to your customer.',
    tags: ['Labels', 'Boxes', 'Product Design'],
  },
  {
    icon: '🖥️',
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
              <span className='text-4xl mb-4 block'>{service.icon}</span>
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
