'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: 'https://github.com/Kalpesh-Vala',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/kalpesh-vala-1b2458249',
      label: 'LinkedIn'
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      href: 'mailto:valakalpesh6175@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center text-gray-400">
            <p className="mb-2">&copy; {new Date().getFullYear()} Kalpesh Vala. All rights reserved.</p>
            <p className="text-sm">
              Built with
              <span className="text-red-500 mx-1">❤</span>
              using Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;