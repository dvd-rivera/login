import React from 'react';
import { SocialButton } from './SocialButton';
import { Alert } from 'react-bootstrap';
import { Formulario } from './Formulario';

interface SocialMedia {
  nombre: string;
  icon: string;
}

const socialMedia: SocialMedia[] = [
  { nombre: 'facebook', icon: 'fa-brands fa-facebook' },
  { nombre: 'github', icon: 'fa-brands fa-github' },
  { nombre: 'linkedin', icon: 'fa-brands fa-linkedin-in' },
];

const Registro: React.FC = () => {
  return (
    <>
      {socialMedia.map((media, index) => (
        <SocialButton
          key={index}
          icon={media.icon}
        />
      ))}
      <Formulario />
      <Alert/>
    </>
  );
};

export default Registro;