import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function About() {
    const { language } = useContext(LanguageContext);

    return (
        <section id="about" className="bg-background p-6 flex justify-center items-center min-h-screen">
            <div className="bg-white shadow-xl rounded-lg p-6 max-w-3xl">
                <h1 className="text-accent leading-7 text-center font-bold text-3xl mb-6">
                    {language === 'en' ? 'ABOUT.' : 'SOBRE MÍ.'}
                </h1>
                <p className="text-text text-justify text-medium leading-7 mb-3 font-sans">
                    {language === 'en' 
                        ? "I'm Irene, a web developer in the early stages of my career. Earlier this year, I completed an intensive web development bootcamp, where I immersed myself in a practical learning environment that allowed me to acquire and apply key skills from day one."
                        : "Soy Irene, una desarrolladora web en los primeros pasos de mi carrera profesional. A principios de este año completé un intensivo bootcamp de desarrollo web, donde estuve inmersa en un entorno de aprendizaje práctico que me permitió adquirir y aplicar habilidades clave desde el primer día."
                    }
                </p>
                <p className="text-text text-justify text-medium leading-7 mb-3 font-sans">
                    {language === 'en'
                        ? "During the bootcamp, I worked on multiple practical projects covering both front-end and back-end, using a variety of technologies. On the front-end, I specialized in HTML, CSS, JavaScript, React, and TypeScript. On the back-end, I gained experience with Node.js, Express, and databases such as MongoDB, developing robust and efficient applications. Additionally, I have developed skills in testing, using tools like Mocha to ensure code quality and reliability."
                        : "Durante el bootcamp, trabajé en múltiples proyectos prácticos que abarcaron tanto front-end como back-end, utilizando una variedad de tecnologías. En el front-end, me especialicé en HTML, CSS, JavaScript, React y TypeScript. En el back-end, adquirí experiencia con Node.js, Express y bases de datos como MongoDB, desarrollando aplicaciones robustas y eficientes. Además, he desarrollado habilidades en testing, utilizando herramientas como Mocha para asegurar la calidad y fiabilidad del código."
                    }
                </p>
                <p className="text-text text-justify text-medium leading-7 mb-3 font-sans">
                    {language === 'en'
                        ? "Throughout this time, I have been working on personal projects to consolidate my knowledge, while learning new technologies like PHP, MySQL, and Laravel. Currently, I have the opportunity to participate in a collaborative project with an experienced team in the industry, serving as a Junior Developer. This experience allows me to learn from experienced professionals and actively contribute to the project's development."
                        : "Durante este tiempo, he estado realizando proyectos por mi cuenta para consolidar conocimientos, mientras aprendo tecnologías nuevas como PHP, MySQL y Laravel. Actualmente, tengo la oportunidad de participar en un proyecto colaborativo con un equipo experimentado en el sector, desempeñando el rol de Junior Developer. Esta experiencia me está permitiendo aprender de profesionales experimentados y contribuir al desarrollo del proyecto."
                    }
                </p>
                <p className="text-text text-justify text-medium leading-7 mb-3 font-sans">
                    {language === 'en'
                        ? "My main motivation is to solve problems and create solutions that improve people's lives. I am passionate about continuous learning and always seek new opportunities to expand my knowledge and improve my skills."
                        : "Mi mayor motivación es resolver problemas y crear soluciones que mejoren la vida de las personas. Me apasiona el aprendizaje continuo y siempre busco nuevas oportunidades para expandir mis conocimientos y mejorar mis habilidades."
                    }
                </p>
                <p className="text-text text-justify text-medium leading-7 mb-3 font-sans">
                    {language === 'en'
                        ? "I am excited about the opportunities that the future holds for me and am looking to collaborate on projects that allow me to continue growing professionally and contribute with my knowledge. If you have a project in mind or simply want to know more about my work, feel free to contact me!"
                        : "Estoy emocionada por las oportunidades que el futuro me depara y busco colaborar en proyectos que me permitan seguir creciendo profesionalmente y contribuir con mis conocimientos. Si tienes un proyecto en mente o simplemente quieres saber más sobre mi trabajo, ¡no dudes en contactar conmigo!"
                    }
                </p>
            </div>
        </section>
    );
}

export default About;
