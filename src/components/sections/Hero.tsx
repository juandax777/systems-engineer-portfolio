import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';
import Button from '../ui/Button';

const Hero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-10 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                />
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                />
            </div>

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 container mx-auto px-4 py-20 text-center max-w-4xl"
            >
                {/* Avatar/Badge */}
                <motion.div
                    variants={itemVariants}
                    className="mb-8"
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl"
                    >
                        <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                            <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">JR</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
                >
                    Juan David
                    <br />
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Rozo Fernández
                    </span>
                </motion.h1>

                {/* Headline */}
                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-semibold"
                >
                    Ingeniero de Sistemas | Python, Data & Cloud
                </motion.p>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
                >
                    Transformo datos complejos en decisiones estratégicas. Especialista en automatización Python, análisis de datos y soluciones cloud (AWS/GCP).
                </motion.p>

                {/* Location & Contact Quick Links */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center gap-4 mb-12"
                >
                    <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                        <span className="text-2xl">📍</span>
                        <span className="text-lg font-medium">Bogotá, Colombia</span>
                    </div>

                    {/* Contact Links */}
                    <motion.div
                        className="flex gap-4 justify-center flex-wrap"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <a
                            href="mailto:rozojuanm10@gmail.com"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            <FiMail className="w-5 h-5" />
                            <span className="text-sm hidden sm:inline">Email</span>
                        </a>
                        <a
                            href="tel:+573224017526"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            <FiPhone className="w-5 h-5" />
                            <span className="text-sm hidden sm:inline">+57 322 4017 526</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/juan-david-rozo-fer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            <FiLinkedin className="w-5 h-5" />
                            <span className="text-sm hidden sm:inline">LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/juandax777"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            <FiGithub className="w-5 h-5" />
                            <span className="text-sm hidden sm:inline">GitHub</span>
                        </a>
                    </motion.div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    variants={itemVariants}
                    className="flex gap-4 justify-center mb-16 flex-wrap"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary px-8 py-4 text-lg font-semibold"
                    >
                        Contáctame
                    </motion.a>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-outline px-8 py-4 text-lg font-semibold"
                    >
                        Ver Proyectos
                    </motion.a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center"
                >
                    <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <FiArrowDown className="w-8 h-8" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;