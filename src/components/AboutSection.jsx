import React from 'react';
import MyCarousel from './Carrousel';

const AboutSection = () => {
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap')
    </style>
    return (
        <div className='bg-dark text-light py-5' id='about' style={{minHeight:'500px'}}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 text-center'>
                        <h3 className='text-start'></h3>
                        <div className="text-start" style={{ borderBottom: '3px dotted white',margin:'5px', }}></div>
                        <p className="text-start fs-lg" style={{fontSize: "1.5rem"}}>
                            Soy estudiante de Ingenería en sistemas computacionales, concluyendo un bootcamp de Desarrollo Web Full Stack.<br /> 
                            Me encuentro en la búsqueda de nuevos desafíos profesionales.
                        </p>
                    </div>
                </div>
                <div style={{margin: '50px'}}>
                    <h3 style={{ fontWeight: 'lighter' }}>Habilidades <span style={{ fontWeight: 'bold' }}>Técnicas</span></h3>
                    <MyCarousel />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
