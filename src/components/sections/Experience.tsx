import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiZap, FiCpu, FiDatabase, FiGitBranch, FiSearch, FiTool } from 'react-icons/fi';

const Experience: React.FC = () => {
    const experiences = [
        {
            title: 'Auxiliar de Desarrollo Operacional',
            company: 'Litigando.com',
            duration: 'Dic 2023 - Jul 2025',
            location: 'Remoto',
            description: 'Desarrollé soluciones backend de alto impacto para automatización de procesos operacionales, análisis de datos y optimización de infraestructura empresarial.',
            responsibilities: [
                { icon: FiZap, text: 'Diseñé pipelines de automatización en Python para extracción, transformación y análisis de datos operacionales, integrando múltiples fuentes heterogéneas y ejecutando consultas SQL optimizadas para business intelligence.', color: 'from-yellow-400 to-orange-500' },
                { icon: FiCpu, text: 'Participé en Neuro Cruzador: sistema de deduplicación inteligente basado en redes neuronales y fuzzy matching que detecta registros duplicados en BD mediante búsquedas vectoriales y similitud semántica.', color: 'from-purple-400 to-pink-500' },
                { icon: FiDatabase, text: 'Contribuí a BIMO: solución de bases de datos vectoriales con embeddings semánticos e índices HNSW para optimizar búsqueda y matching de información.', color: 'from-blue-400 to-cyan-500' },
                { icon: FiGitBranch, text: 'Implementé herramientas backend en Python/FastAPI con schedulers, job queues y monitoreo de procesos; desarrollé web scraping avanzado con rotación de IP (Tor) y consumo de APIs REST/GraphQL.', color: 'from-green-400 to-emerald-500' },
                { icon: FiTool, text: 'Proporcioné soporte técnico y mantenimiento de aplicaciones Java/Spring Boot en Apache Tomcat, incluyendo optimización de performance y análisis de logs.', color: 'from-red-400 to-rose-500' },
            ],
            technologies: ['Python', 'FastAPI', 'SQL', 'Tor', 'APIs REST/GraphQL', 'Java', 'Spring Boot', 'Apache Tomcat', 'Bases de Datos Vectoriales', 'Embeddings Semánticos'],
            type: 'Empleo',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="experience" className="py-20 bg-white dark:bg-slate-950">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="container mx-auto"
            >
                {/* Title */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Experiencia <span className="gradient-text">Profesional</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="mb-12 relative flex justify-center"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-3">
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
                                >
                                    <div className="w-full h-full rounded-full bg-white dark:bg-slate-950 m-1" />
                                </motion.div>
                            </div>

                            {/* Content Card */}
                            <motion.div
                                whileHover={{ x: 10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                                className="ml-12 md:ml-0 md:w-4/5 p-6 bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-lg transition-all"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                            <FiBriefcase className="text-blue-500" />
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 mt-1">
                                            <FiCalendar className="w-4 h-4" />
                                            {exp.duration} • {exp.location}
                                        </p>
                                    </div>
                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                                        {exp.type}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                                {/* Responsibilities */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Responsabilidades y Logros:</h4>
                                    <div className="space-y-3">
                                        {exp.responsibilities.map((resp, idx) => {
                                            const IconComponent = resp.icon;
                                            return (
                                                <motion.div
                                                    key={idx}
                                                    whileHover={{ x: 5, boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.15)' }}
                                                    className={`bg-gradient-to-r ${resp.color} p-4 rounded-lg shadow-md transition-all cursor-pointer group`}
                                                >
                                                    <div className="flex gap-3 items-start">
                                                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                                                            <IconComponent className="w-5 h-5 text-gray-900 dark:text-white" />
                                                        </div>
                                                        <span className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed">
                                                            {resp.text}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tecnologías:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-slate-700"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;