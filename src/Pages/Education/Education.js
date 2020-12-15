import React from 'react'
import { Row, Col} from 'antd';

import './Education.scss';

export default function Education() {
    return (
        <div className='header'>
            <Row gutter={24}>
                <Col span={4} />
                <Col span={16}>
                    <h2 className='title'>Formación Académica</h2>
                </Col>
                <Col span={4} />
            </Row>
            <Row gutter={24}>
                <Col span={3} />
                <Col span={18} >
                    <div className='estudios'>
                        <div className='estudios__info'>
                            <h2>WEB DEVELOPER Full-Stack MERN.</h2>
                            <p>2020 Ironhack Madrid.</p>
                            <p>Bootcamp de Programador web full stack MERN, trabajando con React, Express, Nodejs, MongoDB, JavaScript, Handlebars, Bootstrap, Bulma, Ajax y Jasmine para testing. Control de versiones con Git y GitHub. Integracion de API`s de terceros. Codigo limpio, modular y eficiente. Metodologías ágiles.</p>
                        </div>
                        <div className='estudios__image'><img src='https://pbs.twimg.com/profile_images/1286260896629751808/598SrDML_400x400.jpg' alt='logo' /></div>
                    </div>
                    <div className='estudios'>
                        <div className='estudios__info'>
                            <h2>Sistemas microinformáticos y redes.</h2>
                            <p>2019 Masterd</p>
                            <p> Curso en sistemas microinformaticos y redes. Certificado ECDL y certificado de Microsoft MTA. Arquitectura de ordenadores, Microinformática - periféricos y seguridad y colaboración en línea.</p>
                        </div>
                        <div className='estudios__image'><img src='https://s3-eu-west-1.amazonaws.com/tpd/logos/5b548c1501a50a0001464a37/0x0.png' alt='logo' /></div>
                    </div>
                    <div className='estudios'>
                        <div className='estudios__info'>
                            <h2>Curso profesional de Python.</h2>
                            <p>2019 AEPI.</p>
                            <p>Curso profesional de Python en AEPI. Conocimientos adquiridos: ESTRUCTURA Y ELEMENTOS DEL LENGUAJE, MÉTODOS PRINCIPALES DEL OBJETO STRING, TIPOS DE DATOS COMPLEJOS, FUNCIONES DEFINIDAS POR EL USUARIO, MÓDULOS, PAQUETES Y NAMESPACES, PROGRAMACION ORIENTADA A OBJETOS, CONVERSIÓN DE TIPOS, FICHEROS, BASES DE DATOS RELACIONALES SQL, INTRODUCCION A APLICACIONES WEB CON PYTHON Y DJANGO. </p>
                        </div>
                        <div className='estudios__image'><img src='https://lh3.googleusercontent.com/CaeEIGj1Zf72ku-7bHeF99Zw6mHwyaLf5nkzlFK3lKev2FHn5PF8odeEEFDPPWP5YQ' alt='logo' /></div>
                    </div>   
                </Col>
                <Col span={3} />
            </Row>
            <div className='certificaciones'>
                <Row gutter={24}>
                    <Col span={4} />
                    <Col span={16}>
                        <h2 className='title' style={{color:'snow'}}>Certificaciones</h2>
                    </Col>
                    <Col span={4} />
                </Row>
                <Row gutter={24} className='cards'>
                    {certificaciones.map(item => (
                        <Col xl={4} lg={5} md={10} sm={4}  className='card'>
                            <h2>{item.title}</h2>
                            <h4>{item.empresa}</h4>
                            <p>{item.expedido}</p>
                            {item.credential && <p>{item.credential}</p>}
                            {item.enlace && <a href={item.enlace} target='_blank'>Ver certificación</a>}
                    </Col>
                    ))}
                </Row>
            </div>
            <Row gutter={24}>
                <Col span={4} />
                <Col span={16}>
                    <h2 className='title'>Cursos</h2>
                </Col>
                <Col span={4} />
            </Row>
            <Row gutter={24} className='cards'>
                {cursos.map(item => (
                    <Col xl={4} lg={5} md={10} sm={4} className='card'>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>Fecha : {item.date}</p>
                    </Col>
                ))}
            </Row>
        </div>
    )
}


const cursos = [
    {
        title: 'Web Personal MERN Full Stack: MongoDB, Express, React y Node',
        description: 'Desarrollo Full Stack, creando una web personal con el Stack MERN (MongoDB, Express, React y NodeJS) la ultima tecnología.',
        date:'11/2020'
    },
    {
        title: 'React JS - Curso de introducción desde cero y primeros pasos',
        description: 'Aprende los fundamentos básicos de React desde cero y paso a paso con Víctor Robles. Instalación, Componentes, JSX y más',
        date:'02/2020'
    }
]

const certificaciones = [
    {
        title: 'WEB full Stack Bootcamp August 2020',
        empresa: 'Ironhack',
        expedido: 'Expedición: oct. 2020',
        enlace: 'https://www.credential.net/52f48a4d-adab-417f-8031-a1c072d6671b#gs.mex9p3',
        credential: 'ID de la credencial 24878950'
    },
    {
        title: 'Curso profesional de  Python',
        empresa: 'Asociacion española de programadores informáticos',
        expedido: 'Expedición: nov. 2019'
    },
    {
        title: 'Networking fundamentals MTA',
        empresa: 'Microsoft',
        expedido: 'Expedición: feb. 2019',
        credential: 'ID de la credencial Sp8c-uGHK'
    },
    {
        title: 'Sistemas microinformaticos y redes',
        empresa: 'MasterD',
        expedido: 'Expedición: feb. 2019',
        
    },
    {
        title: 'Certificacion ECDL sistemas microinformaticos y redes.',
        empresa: 'ECDL Spain',
        expedido: 'Expedición: nov. 2018',
        
    }
]