import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const Certificates: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const specialization = {
        title: 'AWS Cloud Solutions Architect',
        provider: 'Amazon Web Services (Coursera)',
        completedDate: 'April 28, 2026',
        duration: 'Approximately 2 months at 10 hours a week',
        grade: 'Specialization Certificate',
        description: 'Professional Specialization in AWS Cloud Solutions Architecture. Completed 4 advanced courses with 100% grade achievement.',
        verifyLink: 'https://coursera.org/verify/professional-cert/7PXT6HCQOT99',
        skills: [
            'Cloud Solutions Architecture',
            'AWS Services',
            'Cloud Security',
            'Cloud Infrastructure',
            'Data Lakes',
            'Solution Architecture',
        ],
        icon: '🏆',
    };

    const certificates = [
        {
            title: 'AWS Cloud Technical Essentials',
            provider: 'Amazon Web Services',
            completedDate: 'January 20, 2026',
            duration: '20 hours (approximately)',
            grade: '100%',
            verifyLink: 'https://coursera.org/verify/MXE6O4WEBVH4',
            skills: [
                'AWS Terminology & Concepts',
                'AWS Security & IAM',
                'Amazon EC2, Lambda, ECS',
                'Amazon RDS, DynamoDB, S3',
                'Cloud Computing',
            ],
        },
        {
            title: 'Architecting Solutions on AWS',
            provider: 'Amazon Web Services',
            completedDate: 'February 23, 2026',
            duration: '22 hours (approximately)',
            grade: '100%',
            verifyLink: 'https://coursera.org/verify/4P06HSP7NOEX',
            skills: [
                'Solution Architecture',
                'Cloud Engineering',
                'Serverless Computing',
                'IT Security Architecture',
                'Event-Driven Programming',
                'Cloud Computing',
            ],
        },
        {
            title: 'Building Data Lakes on AWS',
            provider: 'Amazon Web Services',
            completedDate: 'April 1, 2026',
            duration: '11 hours (approximately)',
            grade: '100%',
            verifyLink: 'https://coursera.org/verify/H4Q22B1HKI4I',
            skills: [
                'Data Lakes Architecture',
                'Data Engineering',
                'Data Governance',
                'Data Warehousing',
                'AWS Services for Data',
                'Data Security',
            ],
        },
        {
            title: 'Exam Prep: AWS Certified Solutions Architect - Associate',
            provider: 'Amazon Web Services',
            completedDate: 'April 28, 2026',
            duration: '8 hours (approximately)',
            grade: '100%',
            verifyLink: 'https://coursera.org/verify/V55R88S54C4U',
            skills: [
                'AWS Solutions Architect Exam',
                'Disaster Recovery',
                'Cloud Storage',
                'Network Architecture',
                'Infrastructure Architecture',
                'Cloud Security',
            ],
        },
    ];

    return (
        <section id="certificates" className="py-20 bg-white dark:bg-slate-950">
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
                        <span className="gradient-text">Certificaciones</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Certificaciones profesionales en AWS Cloud Solutions Architecture
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
                </motion.div>

                {/* Special Specialization */}
                <motion.div
                    variants={itemVariants}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-lg p-8 shadow-lg border-2 border-blue-200 dark:border-blue-900">
                        <div className="flex items-start gap-4 mb-6">
                            <span className="text-5xl">{specialization.icon}</span>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                                        {specialization.title}
                                    </h3>
                                </div>
                                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                                    {specialization.provider}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    <span className="font-semibold">Completado:</span> {specialization.completedDate} | {specialization.duration}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-6">
                                    {specialization.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {specialization.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={specialization.verifyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                                >
                                    Verificar Certificado
                                    <FiExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Individual Certificates */}
                <motion.div
                    variants={itemVariants}
                    className="mb-8"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                        <FiAward className="w-6 h-6" />
                        Certificados de Cursos
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                            className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-slate-700"
                        >
                            <div className="mb-4">
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                    {cert.title}
                                </h4>
                                <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                                    {cert.provider}
                                </p>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                <span className="font-semibold">Completado:</span> {cert.completedDate}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                <span className="font-semibold">Duración:</span> {cert.duration}
                            </p>

                            <div className="mb-6">
                                <p className="text-gray-700 dark:text-gray-300 font-semibold text-sm mb-2">
                                    Habilidades Clave:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.slice(0, 3).map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={cert.verifyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm"
                            >
                                Verificar Certificado
                                <FiExternalLink className="w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Key Achievements */}
                <motion.div
                    variants={itemVariants}
                    className="mt-16 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-8"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        🎯 Logros Principales
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-2">
                                Especialización Certificada
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                Completé la especialización profesional AWS Cloud Solutions Architect
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-pink-600 dark:text-pink-400 mb-2">
                                61+ Horas Completadas
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                Más de 61 horas de formación profesional en AWS completadas
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">Desempeño Excelente</h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                Calificación perfecta en todos los cursos AWS completados
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Certificates;
