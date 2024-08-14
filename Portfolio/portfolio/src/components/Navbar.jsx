import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Navbar() {
    const { language, changeLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (event) => {
        changeLanguage(event.target.value);
    };

    return (
        <header className="md:sticky top-0 z-10 bg-nav shadow-lg">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <label htmlFor="language" className="mr-2 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 24 24"><path fill="#000000" d="M12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 2q2.075 0 3.888.788t3.174 2.15t2.15 3.175T22 12q0 2.05-.788 3.875t-2.15 3.188t-3.175 2.15T12 22m0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075T12 19.95m-2.6-.4q-.45-.825-.787-1.713T8.05 16H5.1q.725 1.25 1.813 2.175T9.4 19.55m5.2 0q1.4-.45 2.488-1.375T18.9 16h-2.95q-.225.95-.562 1.838T14.6 19.55M4.25 14h3.4q-.075-.5-.112-.987T7.5 12t.038-1.012T7.65 10h-3.4q-.125.5-.187.988T4 12t.063 1.013t.187.987m5.4 0h4.7q.075-.5.113-.987T14.5 12t-.038-1.012T14.35 10h-4.7q-.075.5-.112.988T9.5 12t.038 1.013t.112.987m6.7 0h3.4q.125-.5.188-.987T20 12t-.062-1.012T19.75 10h-3.4q.075.5.113.988T16.5 12t-.038 1.013t-.112.987m-.4-6h2.95q-.725-1.25-1.812-2.175T14.6 4.45q.45.825.788 1.713T15.95 8M10.1 8h3.8q-.3-1.1-.775-2.075T12 4.05q-.65.9-1.125 1.875T10.1 8m-5 0h2.95q.225-.95.563-1.838T9.4 4.45Q8 4.9 6.912 5.825T5.1 8"/></svg>
                    </label>
                    <select
                        id="language"
                        value={language}
                        onChange={handleLanguageChange}
                        className="border border-gray-300 rounded p-1"
                    >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                    </select>
                </div>
                <h1 className="title-font font-medium text-black mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl font-bold text-accent">
                        {language === 'en' ? 'About me' : 'Sobre mí'}
                    </a>
                </h1>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#skills" className="mr-5 text-gray-700 hover:text-accent transition duration-300">
                        {language === 'en' ? 'Skills' : 'Habilidades'}
                    </a>
                    <a href="#projects" className="mr-5 text-gray-700 hover:text-accent transition duration-300">
                        {language === 'en' ? 'Projects' : 'Proyectos'}
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-accent-light rounded-full text-white text-base mt-4 md:mt-0 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    {language === 'en' ? 'Contact' : 'Contacto'}
                </a>
            </div>
        </header>
    );
}

export default Navbar;
