import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const navItems = [
    { label: 'Work', href: isHome ? '#work' : '/#work' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: isHome ? '#services' : '/#services' },
    { label: 'About', href: isHome ? '#about' : '/#about' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-cream/80 border-b border-blush/20'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <Link to='/' className='font-display text-3xl tracking-wider text-charcoal'>
          MOLEE<span className='text-blush-dark'>.</span>
        </Link>

        {/* Desktop */}
        <ul className='hidden md:flex items-center gap-8 font-body text-sm tracking-wide text-warm-gray'>
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                <Link
                  to={item.href}
                  className='hover:text-blush-dark transition-colors duration-300'>
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className='hover:text-blush-dark transition-colors duration-300'>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className='hidden md:flex items-center gap-3'>
          <a
            href='/resume/Molee-Resume-2026.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='px-5 py-2 rounded-full border border-blush-dark text-blush-dark text-sm font-body tracking-wide hover:bg-blush-dark hover:text-cream transition-colors duration-300'>
            Resume ↗
          </a>
          <a
            href={isHome ? '#contact' : '/#contact'}
            className='px-5 py-2 rounded-full bg-charcoal text-cream text-sm font-body tracking-wide hover:bg-blush-dark transition-colors duration-300'>
            Let's Talk ✦
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className='md:hidden text-charcoal'
          onClick={() => setOpen(!open)}
          aria-label='Toggle menu'>
          <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            {open ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 8h16M4 16h16'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className='md:hidden bg-cream/95 backdrop-blur-md border-t border-blush/20 px-6 py-6'>
          <ul className='flex flex-col gap-4 font-body text-lg text-charcoal'>
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className='hover:text-blush-dark transition-colors'>
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className='hover:text-blush-dark transition-colors'>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a
                href='/resume/Molee-Resume-2026.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex px-5 py-2 rounded-full border border-blush-dark text-blush-dark text-sm tracking-wide'>
                View Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
