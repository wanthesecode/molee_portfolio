import DecorativeShape from './DecorativeShape';

export default function Contact() {
  return (
    <section id='contact' className='py-24 px-6 bg-cream relative overflow-hidden'>
      {/* Decorative shapes */}
      <DecorativeShape className='absolute -top-20 -right-60 w-[700px] h-auto text-blush/[0.06] rotate-180' />
      <DecorativeShape className='absolute -bottom-40 -left-60 w-[600px] h-auto text-lavender/[0.07] rotate-90' />

      {/* Decorative blobs */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-blush/10 rounded-full blur-3xl' />
      <div className='absolute bottom-0 left-0 w-72 h-72 bg-lavender/10 rounded-full blur-3xl' />

      <div className='max-w-3xl mx-auto text-center relative z-10'>
        <p className='font-body text-sm tracking-[0.3em] uppercase text-blush-dark mb-3'>
          ✦ Get In Touch
        </p>
        <h2 className='font-display text-6xl md:text-9xl tracking-wider text-charcoal mb-6'>
          LET'S CREATE
          <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blush-dark via-lavender to-peach'>
            TOGETHER
          </span>
        </h2>
        <p className='font-body text-warm-gray text-lg leading-relaxed mb-10 max-w-lg mx-auto'>
          Have a project in mind? I'd love to hear about it. Drop me a message and let's make
          something beautiful.
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <a
            href="mailto:mahfuza.molee@gmail.com?subject=Hi%20Molee,%20I'd%20Love%20to%20Work%20With%20You!"
            className='inline-flex items-center gap-2 px-10 py-4 rounded-full bg-charcoal text-cream font-body text-lg tracking-wide hover:bg-blush-dark transition-all duration-300 hover:scale-105'>
            Say Hello ♡
          </a>
          <a
            href='https://wa.me/8801676716892?text=Hi%20Molee!%20I%20visited%20your%20portfolio%20and%20I%E2%80%99d%20love%20to%20discuss%20a%20project%20with%20you.%20%E2%9C%A8'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-10 py-4 rounded-full border-2 border-charcoal/20 text-charcoal font-body text-lg tracking-wide hover:border-blush-dark hover:text-blush-dark transition-all duration-300'>
            WhatsApp ↗
          </a>
        </div>
      </div>
    </section>
  );
}
