import React from 'react';
import {useState} from 'react'
import { Form, InputGroup } from 'react-bootstrap';

export const Formulario: React.FC = () => {
  const [nombre, setNombre] = useState("")

  return (
    <div className="Formulario-container">
      {nombre}
      <InputGroup className="mb-3">
        <Form.Control
          name='Nombre'
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="tuemail@ejemplo.com"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Contraseña"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Confirma tu contraseña"
        />
      </InputGroup>
    </div>
  );
};
