import React, { useContext } from 'react';
import { skills } from '../data.js';
import { LanguageContext } from './LanguageContext'; // Importa el contexto de idioma

function Skills() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="bg-background" id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-3xl font-bold title-font text-accent mb-4">
                        {language === 'en' ? 'SKILLS & TECHNOLOGIES' : 'HABILIDADES Y TECNOLOGÍAS'}
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        {language === 'en' 
                            ? 'In this section, you will find a summary of the skills and technologies I apply to carry out projects.'
                            : 'En esta sección, encontrarás un resumen de las habilidades y tecnologías que aplico para llevar a cabo proyectos.' 
                        }
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <span className="title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
