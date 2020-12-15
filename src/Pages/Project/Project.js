import React from 'react';


import './Project.scss';
import imgGame from '../../assets/png/boat-vs-submarine.png';
import imgWeb from '../../assets/png/imgWebPersonal.png';
import imgPortfolio from '../../assets/png/imgportfolio.png';

export default function Project() {
    return (
        <div className='project'>
            <h1 style={{color:'#fff'}}>Proyectos</h1>
            
            {MyProject.map(item => <div className={item.class}><div className="dtl27">
                <img src={item.img} alt={item.title} style={{width:'50%'}} />
                <div className="dtl">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={item.url} target='_blank' rel="noreferrer">Ver proyecto</a>
                    
                </div>
                <div className='min'>
                    <h3 >{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            </div>
            </div>)}
        </div>
    )
}



const MyProject = [
    {
        title: 'Movies-ddf',
        img: 'https://user-images.githubusercontent.com/60430655/96006957-50207e00-0e3e-11eb-9269-46340d69ac2a.png',
        description: 'Single page aplication de información de películas, series y actores, creada con Reactjs, Nodejs, JavaScript, Bootstrap y API`s',
        url: 'https://movies-ddf.herokuapp.com',
        class: 'movie'
    },
    {
        title: 'Clash-royale',
        img: 'https://user-images.githubusercontent.com/60430655/94181067-3c1cd880-fe9f-11ea-828d-0326946ecdc7.png',
        description: 'Aplicación creada en back con Express, Nodejs, Ajax y API`s y Handlebars para el front. Aplicacion para ver estadisticas de juegos y CRUD de usuario para agregar cartas a tu mazo. Enalace a tu perfil de juego para conocer tus estadisticas.',
        url: 'https://github.com/scmoreira/Clash-Royale-Project',
        class: 'royale'
    },
    {
        title: 'Boat vs Submarine',
        img: `${imgGame}`,
        description: 'Juego de submarinos contra barco, las eliminaciones dan más puntuacion y los peces te quitan puntos. El juego esta creado en canvas 2D y javascript.',
        url: 'https://daviddiaz-github.github.io/Boat_Submarines/',
        class: 'boat'
    },
    {
        title: 'Web Personal',
        img: `${imgWeb}`,
        description: 'Web Personal creada mediante un curso de udemy. Realizada con stack MERN, Hooks y Ant-desing.',
        url: 'https://eloquent-villani-3d205e.netlify.app',
        class:'web'
    },
    {
        title: 'Portfolio',
        img: `${imgPortfolio}`,
        description: 'Mi portfolio creado con ReactJs y Ant-design.',
        url: 'https://david-diaz-portfolio.netlify.app',
        class: 'boat'
    }
];