import React, { useEffect } from 'react';
import ViewMyWorkBtn from './ViewMyWorkBtn';
import FotoHeader from '../assets/images/Foto Edit Alex Nov.jpeg';
import Typed from 'typed.js';

function Header() {
    useEffect(() => {
        const typed = new Typed('.auto-type', {
            strings: ["Back-End", "Front-End", "Full-Stack"],
            typeSpeed: 95,
            backSpeed: 125,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []); 

    return ( 
        <header id='header' style={{ backgroundColor: '#FFF7F3', paddingBottom:'100px', paddingTop: '50px', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{ textAlign: 'center', marginRight: '20px' }}>
                <h3 className='text-secondary fw-bold'>Alex Chávez</h3>
                <h1 className='text-capitalize text-primary'  >
                   <span style={{ color: 'black' }}> Desarrollador Jr <br /> <span className="auto-type"></span></span>
                </h1>
                <ViewMyWorkBtn />
            </div>
            <img 
                className='img-fluid rounded-circle shadow my-5' 
                src={FotoHeader} 
                alt="Foto de Alex Chávez" 
                style={{ 
                    width: '300px', 
                    height: '300px', 
                    objectFit: 'cover',
                    borderRadius: '50%'
                }} 
            /> 
        </header>
    );
}

export default Header;
