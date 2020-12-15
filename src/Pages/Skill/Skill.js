import React from 'react'
import { Row, Col, Typography } from 'antd';




import './Skill.scss';
import mongo from '../../assets/png/mongo.png';
import express from '../../assets/png/express.png';
import react from '../../assets/png/react.png';
import node from '../../assets/png/node.png';
import bootstrap from '../../assets/png/bootstrap.png';
import js from '../../assets/png/js.png';
import python from '../../assets/png/python.png';
import mysql from '../../assets/png/mysql.png';
import html from '../../assets/png/html.png';
import css from '../../assets/png/css.png';
import sass from '../../assets/png/sass.png';

export default function Skill() {
    const { Paragraph } = Typography;
    return (
        <div className='skill'>
            <div className='skill__cards'>
                <Row gutter={24} className='row-skill'>
                    {skill.map(item => (
                        <Col xl={4} lg={5} md={10} sm={4} className='skill__card' style={{padding:'0px'}}>
                            <img src={item.img} alt={item.title} />
                            <div className='skill__card-item'>
                                <h2>{item.title}</h2> 
                                {/* {item.png && <img src={item.png} alt={item.title} />} */}
                            </div>
                            <Paragraph ellipsis={{ rows: 4, expandable: true, symbol: 'more' }}>{item.description}</Paragraph>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}


const skill = [{
        img: 'https://b.marfeelcache.com/statics/i/ps/www.muylinux.com/wp-content/uploads/2019/01/mongodb.png?width=1200&enable=upscale',
        title: 'MongoDB',
        png: `${mongo}`,
        description: 'MongoDB es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales, MongoDB guarda estructuras de datos BSON(una especificación similar a JSON) con un esquema dinámico, haciendo que la integración de los datos en ciertas aplicaciones sea más fácil y rápida.'
    },
    {
        img: 'https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-Lgyno4NC7rhy49BAEjN%2F-Lh14lb3LH4C886qWxYA%2F-Lh1DZeIUQennGd9RiHe%2FScreen%20Shot%202019-06-10%20at%2011.30.20%20AM.png?alt=media&token=784b79f6-81b5-4308-97a2-155afb9d496f',
        title: 'Express',
        png: `${express}`,
        description: 'Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.'
    },
    {
        img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png',
        title: 'React Js',
        png: `${react}`,
        description: 'React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.'
    },
    {
        img: 'https://www.silversites.es/wp-content/uploads/2019/06/node-js.jpg',
        title: 'Node.js',
        png: `${node}`,
        description: 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.'
    },
    {
        img: 'https://miro.medium.com/proxy/1*Ra-gkqfPqbWVhgP3tR-0Cg.png',
        title: 'Hooks',
        description: 'Los Hooks son una nueva incorporación en React 16.8. Te permiten usar estado y otras características de React sin escribir una clase.'
    },
    {
        img: 'https://d8285fmxt3duy.cloudfront.net/public/articulos/img/java-script1.jpg',
        title: 'JavaScript',
        png: `${js}`,
        description: 'JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,2​ basado en prototipos, imperativo, débilmente tipado y dinámico.'
    },
    {
        img: 'https://i.blogs.es/46244e/python/1366_521.jpg',
        title: 'Python',
        png: `${python}`,
        description: 'Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código. Se trata de un lenguaje de programación multiparadigma, ya que soporta orientación a objetos, programación imperativa y, en menor medida, programación funcional. Es un lenguaje interpretado, dinámico y multiplataforma.'
    },
    {
        img: 'https://disenowebakus.net/imagenes/articulos/html5.jpg',
        title: 'Html 5',
        png: `${html}`,
        description: 'HTML 5 (HyperText Markup Language, versión 5) es la quinta revisión importante del lenguaje básico de la World Wide Web, HTML. HTML5 especifica dos variantes de sintaxis para HTML: una «clásica», HTML (text/html), conocida como HTML5, y una variante XHTML conocida como sintaxis XHTML 5 que deberá servirse con sintaxis XML (application/xhtml+xml).'
    },
    {
        img: 'https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png',
        title: 'CSS',
        png: `${css}`,
        description: 'CSS son las siglas de “Cascading Style Sheets” (hojas de estilo en cascada). CSS es un lenguaje para la composición y estructuración de páginas web (HTML o XML).'
    },
    {
        img: 'https://el.javier.pro/wp-content/uploads/2016/10/sass-logo-wall.jpg',
        title: 'SASS',
        png: `${sass}`,
        description: 'Sass es un metalenguaje de Hojas de Estilo en Cascada (CSS). Es un lenguaje de script que es traducido a CSS. SassScript es el lenguaje de script en sí mismo.'
    },
    {
        img: 'https://serv3.raiolanetworks.es/blog/wp-content/uploads/bootstrap-social-share.png',
        title: 'Bootstrap',
        png: `${bootstrap}`,
        description: 'Bootstrap es un framework front-end utilizado para desarrollar aplicaciones web y sitios mobile first.'
    },
    {
        img: 'https://www.nobleprog.com.ec/sites/hitrahr/files/category_images/height100_scale/ant_design_training.png?t=657a5cd8',
        title: 'Ant-design',
        description: 'Un sistema de diseño para productos de nivel empresarial. Cree una experiencia laboral eficiente y agradable.'
    },
    {
        img: 'https://programacion.net/files/article/20160322050344_handlebars.jpg',
        title: 'Handlebars',
        description: 'Handlebars.js es un popular motor de plantillas que es potente, fácil de usar y tiene una gran comunidad. Se basa en el lenguaje de plantillas de Moustache , pero lo mejora de varias formas importantes. Con Handlebars, puede separar la generación de HTML del resto de su JavaScript y escribir código más limpio.'
    },
    {
        img: 'https://blog.trescomatres.com/wp-content/uploads/2017/03/banner-mysql.jpg',
        title: 'MySql',
        png: `${mysql}`,
        description: 'MySQL es un sistema de gestión de base de datos (SGBD) de código abierto. El SGBD MySQL pertenece actualmente a Oracle. Funciona con un modelo cliente-servidor.'
    },
    {
        img: 'https://www.akamai.com/es/es/multimedia/images/video/akamai-api-video-thumbnail.jpg?imwidth=1366',
        title: 'API`s',
        description: 'API es el acrónimo utilizado para Application Programming Interface, o en español, Interfaz de Programación de Aplicaciones. Básicamente es una interfaz que permite la comunicación entre dos sistemas o plataformas diferentes, lo que permite agregar diversas funciones a sitios web y aplicaciones.'
    },
]