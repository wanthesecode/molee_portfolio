export default function About() {
  return (
    <section id='about' className='py-24 px-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Image */}
          <div className='relative'>
            <div className='aspect-[3/4] rounded-3xl overflow-hidden'>
              <img src='/images/molee.png' alt='Molee' className='w-full h-full object-cover' />
            </div>
            {/* Floating card */}
            <div className='absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl shadow-blush/10 border border-blush/10'>
              <p className='font-display text-4xl text-charcoal'>3+</p>
              <p className='font-body text-xs text-warm-gray tracking-wide'>
                Years of creating magic
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className='font-body text-sm tracking-[0.3em] uppercase text-blush-dark mb-3'>
              ✦ About Me
            </p>
            <h2 className='font-display text-5xl md:text-7xl tracking-wider text-charcoal mb-6'>
              HI, I'M
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blush-dark to-lavender pl-4'>
                MOLEE
              </span>
            </h2>
            <p className='font-body text-warm-gray text-lg leading-relaxed mb-6'>
              I'm a visual designer who genuinely loves turning rough ideas into sharp, memorable creative. Most days you'll find me working across brand identities, social campaigns, motion graphics, and print.
            </p>
            <p className='font-body text-warm-gray leading-relaxed mb-8'>
              My focus is always on visual clarity, storytelling, and giving brands a distinct personality that clicks with real people. When I step away from the canvas, I'm usually exploring design trends, testing animation ideas, or grabbing an iced coffee. ☕
            </p>

            <div className='flex flex-wrap gap-3'>
              {['Photoshop', 'Illustrator', 'After Effects', 'Figma', 'Ai Tools'].map((tool) => (
                <span
                  key={tool}
                  className='px-4 py-2 rounded-full border border-charcoal/10 text-charcoal text-sm font-body tracking-wide hover:bg-blush-light hover:border-blush/30 transition-colors duration-300'>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
