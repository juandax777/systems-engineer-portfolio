import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact: React.FC = () => {
    const googleFormUrl = 'https://forms.gle/W233xbrjPJe9XzrZ8';

    const handleOpenForm = () => {
        window.open(googleFormUrl, '_blank');
    };

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

    const contactLinks = [
        {
            label: 'Email',
            icon: FiMail,
            href: 'mailto:rozojuanm10@gmail.com',
            value: 'rozojuanm10@gmail.com',
            color: 'from-blue-500 to-blue-600',
        },
        {
            label: 'Teléfono',
            icon: FiPhone,
            href: 'tel:+573224017526',
            value: '+57 322 4017 526',
            color: 'from-green-500 to-green-600',
        },
        {
            label: 'LinkedIn',
            icon: FiLinkedin,
            href: 'https://linkedin.com/in/juan-david-rozo-fer',
            value: 'juan-david-rozo-fer',
            color: 'from-blue-600 to-blue-700',
        },
        {
            label: 'GitHub',
            icon: FiGithub,
            href: 'https://github.com/juandax777',
            value: 'juandax777',
            color: 'from-gray-700 to-gray-900',
        },
    ];

    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-950">
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
                        Ponte en <span className="gradient-text">Contacto</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        ¿Tienes una oportunidad o pregunta? Me encantaría saber de ti.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Contact Form */}
                    <motion.div
                        variants={itemVariants}
                    >
                        <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 rounded-lg p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envíame un mensaje</h3>
                            
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                ¿Tienes una oferta laboral, proyecto de colaboración, consulta o simplemente quieres saludar? 
                                Completa el formulario y te responderé pronto.
                            </p>

                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleOpenForm}
                                className="w-full btn-primary py-4 font-semibold text-lg flex items-center justify-center gap-2"
                            >
                                <span>📝</span>
                                Abrir Formulario de Contacto
                            </motion.button>

                            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
                                El formulario se abrirá en una nueva pestaña
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Información de Contacto
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                Puedes contactarme a través de cualquiera de estos canales. 
                                Respondo rápidamente a todos los mensajes.
                            </p>
                        </div>

                        {/* Contact Links */}
                        <div className="space-y-4">
                            {contactLinks.map((link, idx) => {
                                const Icon = link.icon;
                                return (
                                    <motion.a
                                        key={idx}
                                        href={link.href}
                                        target={link.label !== 'Email' && link.label !== 'Teléfono' ? '_blank' : undefined}
                                        rel={link.label !== 'Email' && link.label !== 'Teléfono' ? 'noopener noreferrer' : undefined}
                                        whileHover={{ x: 10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                                        className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-slate-700"
                                    >
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className={`p-3 rounded-lg bg-gradient-to-br ${link.color}`}
                                        >
                                            <Icon className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white">{link.label}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{link.value}</p>
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Social Links */}
                        <div className="pt-4">
                            <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">
                                Sígueme en redes sociales:
                            </p>
                            <div className="flex gap-4">
                                <motion.a
                                    href="https://linkedin.com/in/juan-david-rozo-fer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                                >
                                    <FiLinkedin className="w-6 h-6" />
                                </motion.a>
                                <motion.a
                                    href="https://github.com/juandax777"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <FiGithub className="w-6 h-6" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;