import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: FiLinkedin, href: 'https://linkedin.com/in/juan-david-rozo-fer', label: 'LinkedIn' },
        { icon: FiGithub, href: 'https://github.com/juandax777', label: 'GitHub' },
        { icon: FiMail, href: 'mailto:rozojuanm10@gmail.com', label: 'Email' },
    ];

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 dark:bg-slate-950 text-white py-12"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 font-bold text-xl mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm">
                                JR
                            </div>
                            <span>Juan Rozo</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Ingeniero de Sistemas enfocado en transformar datos complejos en decisiones estratégicas.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>
                                <a href="#about" className="hover:text-blue-400 transition-colors">
                                    Sobre Mí
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="hover:text-blue-400 transition-colors">
                                    Experiencia
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-blue-400 transition-colors">
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-blue-400 transition-colors">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="font-bold mb-4">Sígueme</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-lg bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-gray-400 text-sm text-center md:text-left"
                        >
                            &copy; {new Date().getFullYear()} Juan David Rozo Fernández. Todos los derechos reservados.
                        </motion.p>

                        {/* Scroll to Top */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-colors"
                        >
                            <FiArrowUp className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>

                {/* Made with love */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center text-gray-500 text-xs mt-4"
                >
                    Hecho con <span className="text-red-500">❤️</span> usando React + Vite + Tailwind CSS
                </motion.p>
            </div>
        </motion.footer>
    );
};

export default Footer;