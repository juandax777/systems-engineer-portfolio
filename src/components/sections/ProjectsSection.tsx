import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../projects/ProjectCard';

const ProjectsSection: React.FC = () => {
    const projectsData = [
        {
            id: 1,
            name: 'Parqueadero',
            description: 'Sistema de gestión de parqueadero con 20 espacios, costo de 100 pesos por minuto y almacenamiento local de datos. Interfaz completa para registrar entrada/salida de vehículos.',
            technologies: ['Java', 'Swing', 'File I/O'],
            status: 'Completado',
            link: 'https://github.com/juandax777/Parqueadero',
        },
        {
            id: 2,
            name: 'Gestionador de Apuestas Deportes',
            description: 'Aplicación para gestionar apuestas deportivas. Permite crear, consultar y gestionar apuestas con diferentes eventos y deportes.',
            technologies: ['Java', 'OOP', 'UI/UX'],
            status: 'Completado',
            link: 'https://github.com/juandax777/Gestionador-de-Apuestas-Deportes',
        },
        {
            id: 3,
            name: 'ClaseSoftspring',
            description: 'Proyecto de clase usando Spring Framework. Implementación de una aplicación backend con Spring Boot siguiendo buenas prácticas de arquitectura.',
            technologies: ['Java', 'Spring Boot', 'Spring Framework'],
            status: 'Completado',
            link: 'https://github.com/juandax777/ClaseSoftspring',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
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
                        Mis <span className="gradient-text">Proyectos</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
                        Proyectos destacados en IA, cloud computing y desarrollo backend que demuestran 
                        mis capacidades técnicas y experiencia en soluciones escalables.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    variants={itemVariants}
                    className="text-center"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Explora mis 15 repositorios y contribuciones en GitHub.
                    </p>
                    <motion.a
                        href="https://github.com/juandax777"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-outline px-8 py-3 inline-block"
                    >
                        Ver en GitHub
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ProjectsSection;