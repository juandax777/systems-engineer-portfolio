import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../../components/projects/ProjectCard';

describe('ProjectCard', () => {
    const project = {
        title: 'Sample Project',
        description: 'This is a sample project description.',
        technologies: ['React', 'TypeScript', 'Vite'],
        link: 'https://example.com',
    };

    test('renders project title', () => {
        render(<ProjectCard project={project} />);
        const titleElement = screen.getByText(/Sample Project/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders project description', () => {
        render(<ProjectCard project={project} />);
        const descriptionElement = screen.getByText(/This is a sample project description./i);
        expect(descriptionElement).toBeInTheDocument();
    });

    test('renders project technologies', () => {
        render(<ProjectCard project={project} />);
        project.technologies.forEach(tech => {
            const techElement = screen.getByText(tech);
            expect(techElement).toBeInTheDocument();
        });
    });

    test('renders project link', () => {
        render(<ProjectCard project={project} />);
        const linkElement = screen.getByRole('link', { name: /view project/i });
        expect(linkElement).toHaveAttribute('href', project.link);
    });
});