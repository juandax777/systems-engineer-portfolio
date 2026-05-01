import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';

const About: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const educationList = [
        {
            school: 'Universidad Central',
            program: 'Ingeniería de Sistemas',
            year: '2021 - presente',
            semester: 'Noveno semestre',
            focus: 'Software, Datos y Cloud',
        },
        {
            school: 'Universidad Pedagógica Nacional',
            program: 'Inglés Intensivo',
            year: '2025 - presente',
            focus: 'Desarrollo de competencias de idioma',
        },
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
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
                        Sobre <span className="gradient-text">Mí</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Bio */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="text-3xl">💼</span>
                                Perfil Profesional
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                Estudiante de últimos semestres de Ingeniería de Sistemas con más de 1.5 años de experiencia en automatización con Python 
                                y análisis de datos operacionales. Especializado en extracción, limpieza y consulta de datos con SQL, 
                                construcción de dashboards en Excel y despliegue de soluciones backend en GCP y AWS.
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                Apasionado por transformar datos complejos en decisiones estratégicas. Enfocado en análisis de negocio, 
                                pensamiento analítico, arquitectura cloud y desarrollo de soluciones escalables. Certificado en AWS Cloud Solutions Architect.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-4"
                    >
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <h4 className="text-3xl font-bold text-blue-500 mb-2">1.5+</h4>
                            <p className="text-gray-600 dark:text-gray-400">Años de experiencia</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <h4 className="text-3xl font-bold text-purple-500 mb-2">10+</h4>
                            <p className="text-gray-600 dark:text-gray-400">Proyectos completados</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <h4 className="text-3xl font-bold text-pink-500 mb-2">5+</h4>
                            <p className="text-gray-600 dark:text-gray-400">Certificaciones obtenidas</p>
                        </div>
                    </motion.div>
                </div>

                {/* Education */}
                <motion.div
                    variants={itemVariants}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                        <FiBookOpen className="w-6 h-6" />
                        Educación
                    </h3>
                    <div className="space-y-4">
                        {educationList.map((edu, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 10 }}
                                className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.program}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
                                    </div>
                                    <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                                        {edu.year}
                                    </span>
                                </div>
                                {edu.semester && (
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        <span className="font-semibold">Semestre:</span> {edu.semester}
                                    </p>
                                )}
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Enfoque:</span> {edu.focus}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Key Highlights */}
                <motion.div
                    variants={itemVariants}
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                        <FiAward className="w-6 h-6" />
                        Especialidades
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { title: 'Automatización', desc: 'Python, Excel, Macros' },
                            { title: 'Análisis de Datos', desc: 'SQL, Pandas, Dashboards' },
                            { title: 'Cloud Computing', desc: 'AWS, GCP, Docker' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-lg p-4 text-center"
                            >
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;