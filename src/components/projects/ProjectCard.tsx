import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

interface Project {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    status?: string;
    link?: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const isCompleted = project.status === 'Completado';

    return (
        <motion.a
            href={project.link || '#'}
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.98 }}
            className="group h-full"
        >
            <div className="h-full bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-800 flex flex-col">
                {/* Header with gradient background */}
                <motion.div
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                />

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    {/* Title and Status */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.name}
                        </h3>
                        {project.status && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                                    isCompleted
                                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                                        : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                                }`}
                            >
                                {isCompleted && <FiCheckCircle className="w-3 h-3" />}
                                {project.status}
                            </motion.div>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="px-2.5 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Link */}
                    <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group/link"
                    >
                        <span>Ver Proyecto</span>
                        <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                    </motion.div>
                </div>
            </div>
        </motion.a>
    );
};

export default ProjectCard;