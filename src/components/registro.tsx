import React from 'react';
import { SocialButton } from './socialButton';
import { MyAlert } from './alert';
import { Formulario } from './formulario';
import { Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

interface SocialMedia {
  nombre: string;
  icon: string;
}

interface alertProps {
  name: string
  email: string
  password: string
}

const dataAlert: alertProps = {
  name: "string",
  email: "string",
  password: "string"
}

const socialMedia: SocialMedia[] = [
  { nombre: 'facebook', icon: 'fa-brands fa-facebook' },
  { nombre: 'github', icon: 'fa-brands fa-github' },
  { nombre: 'linkedin', icon: 'fa-brands fa-linkedin-in' },
];

const Registro: React.FC = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className='text-center fw-bold'>Crea una cuenta</Card.Title>
          <div className="row my-3 mx-auto">
            {socialMedia.map((media) => (
              <div key={media.nombre} className="col d-flex justify-content-center">
                <SocialButton
                  icon={media.icon}
                />
              </div>
            ))}
          </div>
          <Formulario />
          <MyAlert name="hola" email={''} password={''} />
        </Card.Body>
      </Card>
    </>
  );
};

export default Registro;