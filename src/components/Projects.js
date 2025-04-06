'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Credit Card Fraud Detection System',
      description: 'Web app to detect fraudulent transactions using Isolation Forest and Logistic Regression with Flask. Supports real-time detection via transaction uploads and stores data in MongoDB.',
      image: '/fraud-detection.jpg',
      github: 'https://github.com/kalpeshvala/fraud-detection-system', // replace with your actual link
      demo: 'https://fraud-demo.kalpeshvala.com', // optional - replace or remove
      video: 'https://youtu.be/fraud-detection-demo', // optional
      tags: ['Flask', 'MongoDB', 'Machine Learning', 'Python', 'HTML/CSS']
    },
    {
      title: 'E-Commerce Platform Development',
      description: 'Dynamic e-commerce platform built using JSP, Servlets, and MySQL with Docker deployment. Includes secure payment gateway integration and interactive UI via JSTL.',
      image: '/ecommerce.png',
      github: 'https://github.com/kalpeshvala/ecommerce-platform', // replace with your actual link
      demo: 'https://ecommerce-demo.kalpeshvala.com', // optional
      video: 'https://youtu.be/ecommerce-demo', // optional
      tags: ['JSP', 'Servlets', 'MySQL', 'Docker', 'JDBC']
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Full-stack chat app with Go backend (Gin), WebSocket integration, JWT authentication, and modern Next.js frontend. Enables real-time messaging and secure login.',
      image: '/chat-app.png',
      github: 'https://github.com/kalpeshvala/chat-app', // replace with your actual link
      demo: 'https://chatapp.kalpeshvala.com', // optional
      video: 'https://youtu.be/chatapp-demo', // optional
      tags: ['Go', 'Next.js', 'WebSocket', 'JWT', 'Gin']
    },
  ];
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                 <Image
                   src={project.image}
                   alt={project.title}
                   fill
                   className="object-cover"
                 />
               </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FaPlay className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;