// This file defines TypeScript types and interfaces used throughout the application.

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    status: 'completed' | 'in-progress' | 'upcoming';
}

export interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Experience {
    company: string;
    position: string;
    duration: string;
    description: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}