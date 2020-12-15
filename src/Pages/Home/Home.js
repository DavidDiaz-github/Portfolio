import { Button, Modal, Input, Row, Col } from 'antd';
import React,{ useState } from 'react';
import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
    UserOutlined
} from '@ant-design/icons';
import Particles from 'react-particles-js';

import './Home.scss';

export default function Home() {
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalContent, setModalContent] = useState('')
    console.log('isvisible',isVisibleModal);
    const contact = () => {
        setIsVisibleModal(true)
        setModalContent(
            <MyForm setIsVisibleModal={setIsVisibleModal} />
        )
    }
    const closed = () => {
        setIsVisibleModal(false)
    }
    
    return (
      <div className='home' >
        <Particles params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            color: {
              value: "#fff"
            },
            polygon: {
              nb_sides: 2
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#000000"
              },
              image: {
                src: "img/github.svg",
                width: 150,
                height: 150
              }
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                size_min: 0.1,
                sync: true
              }
            },
            line_linked: {
              enable_auto: true,
              distance: 200,
              color: "#fff",
              opacity: 1,
              width: 0.3,
              codensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
              }
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            }
          },
          retina_detect: true
        }} />
        
            <div className='home__card'>
                <h1>David Díaz</h1>
                <h2>Programador Web</h2>
                <Button type='primary' className='btn-contact' onClick={contact}>Contacta</Button>
                <div classname='home__ul'>
                    <ul className='ul'>
                        <li><a href='https://github.com/DavidDiaz-github/' target='_blank'><GithubOutlined /></a></li>
                        <li><a href='https://www.linkedin.com/in/david-diaz-fueyo/' target='_blank' ><LinkedinOutlined /></a></li>
                        <li><a href='mailto:david1_43@hotmail.com'><MailOutlined /></a></li>
                    </ul>
                </div>
            </div>
            <Modal
                centered={true}
                title='Contacto'
                visible={isVisibleModal}
                footer={null}
                style={{ textAlign: 'center', fontSize: '23px' }}
                onCancel={closed}
            >
                {modalContent}
            </Modal>
        </div>
    )
}




class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
      
  }

    render() {
      const { status } = this.state;
      const { TextArea } = Input;
      
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xpzojyol"
        method="POST"
      >
        <Row gutter={24}>
                <Col span={24} className='modal'>
                    <Input 
                        type='text'
                        name='text'
                        prefix={<UserOutlined />}
                        placeholder='Nombre'
                    />
                </Col>
                <Col span={24} className='modal'>
                    <Input 
                        type='email'
                        name='email'
                        prefix={<MailOutlined />}
                        placeholder='Correo electronico'
                    />
                </Col>
                <Col span={24} className='modal'>
                    <TextArea 
                        
                        type='textarea'
                        name='mensaje'
                        placeholder='Mensaje'
                    />
                </Col>
            </Row>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className='btn-send'>Enviar</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      console.log(data);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
          this.setState({ status: "SUCCESS" });
          this.props.setIsVisibleModal(false)
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}