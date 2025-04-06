'use client';

import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      title: 'AWS Certified Developer',
      description: 'Earned AWS Developer Associate certification, demonstrating expertise in cloud development.',
      date: '2023',
      icon: '🏆'
    },
    {
      title: 'Hackathon Winner',
      description: 'First place in University Hackathon for developing an innovative solution.',
      date: '2023',
      icon: '🥇'
    },
    {
      title: 'Research Paper Publication',
      description: 'Published research paper on Machine Learning applications in International Conference.',
      date: '2022',
      icon: '📄'
    },
    {
      title: 'Google Cloud Certification',
      description: 'Completed Google Cloud Platform fundamentals certification.',
      date: '2022',
      icon: '☁️'
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex items-start space-x-6"
            >
              <div className="text-4xl flex-shrink-0">{achievement.icon}</div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.date}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;