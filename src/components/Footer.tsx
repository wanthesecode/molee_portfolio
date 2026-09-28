export default function Footer() {
  return (
    <footer className='py-8 px-6 bg-charcoal text-center'>
      <p className='font-display text-2xl tracking-wider text-cream/80 mb-2'>
        MOLEE<span className='text-blush'>.</span>
      </p>
      <p className='font-body text-sm text-cream/40 tracking-wide'>
        © {new Date().getFullYear()} • Designed with care by Molee
      </p>
    </footer>
  );
}
