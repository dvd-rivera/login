import React, { EventHandler } from 'react';
import { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const Formulario: React.FC = () => {
	const [nombre, setNombre] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [rePassword, setRePassword] = useState("")
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event: any) => {
		event.preventDefault();

		console.log("validando")
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.stopPropagation();

		} else if (password != rePassword) {
			console.log("las constraseñas no son iguales")
		} 

		setValidated(true);
	};

	return (
		<div className="Formulario-container">
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<InputGroup className="mb-3">
					<Form.Control
						placeholder="Nombre"
						name='Nombre'
						onChange={(e) => setNombre(e.target.value)}
						required
					/>
				</InputGroup>
				<InputGroup className="mb-3">
					<Form.Control
						placeholder="tuemail@ejemplo.com"
						name='E-mail'
						onChange={(e) => setEmail(e.target.value)}
						type='email'
						required
					/>
				</InputGroup>
				<InputGroup className="mb-3">
					<Form.Control
						placeholder="Contraseña"
						name='Nombre'
						onChange={(e) => setPassword(e.target.value)}
						required
						type='password'
					/>
				</InputGroup>
				<InputGroup className="mb-3">
					<Form.Control
						placeholder="Confirma tu contraseña"
						name='Nombre'
						onChange={(e) => setRePassword(e.target.value)}
						type='password'
						required
					/>
				</InputGroup>
				<div className="d-grid gap-2">
					<Button type="submit" variant="primary" size="sm" className='my-2'>
						Crear cuenta
					</Button>
				</div>
			</Form>
		</div>
	);
};
