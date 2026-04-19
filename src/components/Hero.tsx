export default function Hero() {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center px-6 pt-20 bg-cream relative overflow-hidden'>
      {/* Decorative blobs */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-blush/20 rounded-full blur-3xl' />
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-lavender/20 rounded-full blur-3xl' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-peach/15 rounded-full blur-3xl' />

      <div className='relative z-10 text-center max-w-5xl'>
        <p className='font-body text-sm tracking-[0.3em] uppercase text-blush-dark mb-6'>
          ✦ Creative Designer ✦
        </p>

        <h1 className='font-display text-[clamp(4rem,12vw,11rem)] leading-[0.85] tracking-wider text-charcoal mb-8'>
          DESIGN
          <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blush-dark via-lavender to-blush'>
            THAT SPEAKS
          </span>
        </h1>

        <p className='font-body text-warm-gray text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed'>
          Crafting visuals that captivate — from dreamy social media content to stunning print
          designs & motion graphics.
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <a
            href='#work'
            className='px-8 py-3.5 rounded-full bg-charcoal text-cream font-body text-sm tracking-wide hover:bg-blush-dark transition-all duration-300 hover:scale-105'>
            View My Work
          </a>
          <a
            href='/resume/Molee-Resume-2026.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='px-8 py-3.5 rounded-full border-2 border-blush-dark text-blush-dark font-body text-sm tracking-wide hover:bg-blush-dark hover:text-cream transition-all duration-300'>
            View Resume ↗
          </a>
          <a
            href='#contact'
            className='px-8 py-3.5 rounded-full border-2 border-charcoal/20 text-charcoal font-body text-sm tracking-wide hover:border-blush-dark hover:text-blush-dark transition-all duration-300'>
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-gray'>
        <span className='font-body text-xs tracking-widest uppercase'>Scroll</span>
        <div className='w-px h-8 bg-gradient-to-b from-warm-gray to-transparent' />
      </div>
    </section>
  );
}
