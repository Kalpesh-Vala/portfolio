'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Loading from './Loading';

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#achievements', label: 'Achievements' },
    { href: '/#contact', label: 'Contact' },
  ];

  const handleNavClick = async (e, href) => {
    e.preventDefault();
    setIsLoading(true);
    if (pathname !== '/') {
      await router.push(href);
    } else {
      const element = document.querySelector(href.replace('/', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <nav className="sticky top-0 z-50 bg-white shadow-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200">
            Kalpesh Vala
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link text-gray-600 hover:text-gray-800 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Kalpesh-Vala"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 hover:text-gray-800 transition-all duration-200"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kalpesh-vala-1b2458249"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 hover:text-gray-800 transition-all duration-200"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;