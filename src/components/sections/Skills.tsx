import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiCloud, FiGitBranch } from 'react-icons/fi';

const Skills: React.FC = () => {
  const skillsData = [
    {
      category: 'Lenguajes',
      icon: FiCode,
      color: 'from-blue-500 to-blue-600',
      skills: ['Python', 'Java', 'C', 'SQL', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Backend',
      icon: FiServer,
      color: 'from-purple-500 to-purple-600',
      skills: ['Spring Boot', 'APIs REST', 'Node.js', 'FastAPI'],
    },
    {
      category: 'Datos & IA',
      icon: FiCode,
      color: 'from-pink-500 to-pink-600',
      skills: ['Pandas', 'OpenCV', 'YOLO', 'Power BI', 'Scikit-learn', 'TensorFlow'],
    },
    {
      category: 'Bases de Datos',
      icon: FiDatabase,
      color: 'from-green-500 to-green-600',
      skills: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB'],
    },
    {
      category: 'Cloud',
      icon: FiCloud,
      color: 'from-orange-500 to-orange-600',
      skills: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
    },
    {
      category: 'Versionamiento',
      icon: FiGitBranch,
      color: 'from-red-500 to-red-600',
      skills: ['Git', 'GitHub', 'GitLab'],
    },
    {
      category: 'Idiomas',
      icon: FiCode,
      color: 'from-indigo-500 to-indigo-600',
      skills: ['Español (C1)', 'Inglés (B1)'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.1, rotate: 2 },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto"
      >
        {/* Title */}
        <motion.div
          variants={categoryVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((category, catIdx) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={catIdx}
                variants={categoryVariants}
                whileHover={{ y: -10 }}
                className={`bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md hover:shadow-2xl transition-all border border-gray-100 dark:border-slate-700`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skills Badges */}
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, idx) => (
                    <motion.button
                      key={idx}
                      variants={skillVariants}
                      whileHover="hover"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 text-gray-900 dark:text-white font-semibold text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Progress Section */}
        <motion.div
          variants={categoryVariants}
          className="mt-16 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nivel de Proficiencia
          </h3>
          <div className="space-y-6">
            {[
              { name: 'Python', level: 95 },
              { name: 'SQL', level: 90 },
              { name: 'AWS/GCP', level: 85 },
              { name: 'Java', level: 80 },
              { name: 'React/TypeScript', level: 85 },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                variants={categoryVariants}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                  <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;