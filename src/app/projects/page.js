'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

const ProjectsPage = () => {
  const allProjects = [
    {
      title: 'Project 1',
      description: 'A comprehensive description of your first project. Include the problem it solves, the technologies used, and your role in development.',
      image: '/project1.jpg',
      github: 'https://github.com/yourusername/project1',
      demo: 'https://project1-demo.com',
      video: 'https://youtube.com/watch?v=project1',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      highlights: [
        'Implemented real-time data synchronization',
        'Reduced loading time by 60%',
        'Integrated third-party APIs'
      ]
    },
    {
      title: 'Project 2',
      description: 'Detailed explanation of your second project. Discuss the challenges faced and how you overcame them.',
      image: '/project2.jpg',
      github: 'https://github.com/yourusername/project2',
      demo: 'https://project2-demo.com',
      video: 'https://youtube.com/watch?v=project2',
      tags: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
      highlights: [
        'Developed RESTful API endpoints',
        'Implemented JWT authentication',
        'Containerized application deployment'
      ]
    },
    // Add more projects as needed
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">All Projects</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              A collection of my work and side projects
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Key Highlights
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
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
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <FaPlay className="w-4 h-4" />
                      <span>Video</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;