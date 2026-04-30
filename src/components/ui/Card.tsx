import React from 'react';

interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
    technologies: string[];
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, technologies }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />}
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-700 mt-2">{description}</p>
                <div className="mt-4">
                    <h3 className="text-sm font-medium">Technologies:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;