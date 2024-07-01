import React from 'react'
import About from './About'
import Navbar from './Navbar'
import Skills from './Skills'
import Projects from './Projects'
import '../index.css'

function Index() {
    return (
        <body className='bg-animated'>
            <Navbar></Navbar>
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
                    <div className="text-center md:text-left">
                        <p className="relative inline-block text-accent font-mono font-bold text-sm">
                            👋 HI!, my name is
                            <span className="absolute inset-0 bg-gray-300 mix-blend-multiply z-0 transform -skew-y-6"></span>
                        </p>
                        <h1 className="text-black font-sans font-bold text-4xl mb-2">Irene Roldán.</h1>
                        <h3 className="text-secundary font-sans font-bold text-3xl mb-1">I build websites as a full stack developer.</h3>
                        <p className="text-text font-sans text-lg mb-10">I am a junior web developer, specializing in building efficient and engaging digital experiences. Currently, I am focused on learning new technologies and strengthening my skills. My goal is to effectively apply my abilities to create innovative solutions and advance in my career in web development.</p>
                    </div>

                    <div className="md:fixed md:right-10 md:top-1/2 md:transform md:-translate-y-1/2 md:flex md:flex-col md:items-center md:gap-4">
                        <a href="https://www.linkedin.com/in/irene-roldan-montiel" className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 24 24">
                                <path fill="#000000" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                            </svg>
                        </a>
                        <a href="https://github.com/Ireneroldan" className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 24 24">
                                <path fill="#000000" d="M20.116 5.901a3.883 3.883 0 0 0-.26-.31a4.413 4.413 0 0 0 .21-.76a5.284 5.284 0 0 0-.35-2.8s-1.12-.35-3.69 1.38a12.477 12.477 0 0 0-3.35-.45a12.604 12.604 0 0 0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.263 5.263 0 0 0-.35 2.77a4.21 4.21 0 0 0 .22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 0 0-1.12 3.3a7.686 7.686 0 0 0 .04.85c.32 4.43 3.27 5.46 6.08 5.78a2.558 2.558 0 0 0-.77 1.39a4.022 4.022 0 0 0-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.695 5.695 0 0 0-1.834-2.413a1.179 1.179 0 0 1-.17-.112a1.001 1.001 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.003.812.81 1.337 1.143 1.515a4.466 4.466 0 0 1 .923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098l.004.268a1 1 0 0 0 1 1h4.714a1 1 0 0 0 1-1s.008-3.16.008-3.69a4.024 4.024 0 0 0-.13-1.09l-.002-.006l.004.006c-.009-.035-.022-.063-.032-.097a2.532 2.532 0 0 0-.74-1.293l.012.021l-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a7.687 7.687 0 0 0 .04-.85a5.23 5.23 0 0 0-1.11-3.3Z" />
                            </svg>
                        </a>
                        <a href="mailto:irene.roldan.montiel@gmail.com" className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 24 24"><path fill="#000000" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>
                        </a>
                    </div>
                </div>
            </div>

            <About></About>
            <Skills></Skills>
            <Projects></Projects>

            <footer className="bg-background w-full px-4 py-8 text-center">
                <h3 className="text-primary font-bold text-lg" id="contact">CONTACT</h3>
                <p className="text-text my-2"><strong>Email:</strong> irene.roldan.montiel@gmail.com</p>
                <p className="text-text my-2"><strong>LinkedIn:</strong> irene-roldan-montiel</p>
                <p className="text-text my-2"><strong>GitHub:</strong> irene-roldan-montiel</p>
                <p className="text-text">Barcelona, Spain</p>
                <p></p>
            </footer>
        </body>

    )
}
export default Index