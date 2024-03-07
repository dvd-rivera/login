import React from 'react'
import { SocialButton } from './socialButton'

interface socialMedia {
  nombre: string;
  icon: string;
}

const socialMedia = [
  { nombre: 'facebook', icon: 'fa-brands fa-facebook' },
  { nombre: 'github', icon: 'fa-brands fa-github' },
  { nombre: 'linkedin', icon: 'fa-brands fa-linkedin-in' },
]

export const Registro = () => {
  return (
    <>
      {socialMedia.map((media, index) => (
        <SocialButton
          key={index}
          icon={media.icon}
        />
      ))}
    </>
  )
}
