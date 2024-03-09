import React, { useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap';

import { MyAlert } from './alert';


export const Formulario: React.FC = () => {
	const [validated, setValidated] = useState(false);
	const [formData, setFormData] = useState({
		nombre: "",
		email: "",
		password: "",
		rePassword: ""
	});

	const [alertMessage, setAlertMessage] = useState<string | null>(null);

	const handleChange = (fieldName: string, value: string) => {
		setFormData({ ...formData, [fieldName]: value });
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();

		console.log("validando")
		const form = event.currentTarget;
		if (form.checkValidity() === false || formData.nombre === '' || formData.email === '' || formData.password === '' || formData.rePassword === '' ) {
			event.stopPropagation();
			setAlertMessage('Todos los campos son obligatorios');
		}else if (formData.password !== formData.rePassword) {
			setAlertMessage('Las contraseñas no coinciden');
		}else {
			setAlertMessage('Las contraseñas coinciden');
		}

		setValidated(true);
	};

	const formFields = [
		{ name: "nombre", placeholder: "Nombre", type: "text" },
		{ name: "email", placeholder: "tuemail@ejemplo.com", type: "email" },
		{ name: "password", placeholder: "Contraseña", type: "password" },
		{ name: "rePassword", placeholder: "Confirma tu contraseña", type: "password" }
	];

	return (
		<div className="Formulario-container">
			<Form noValidate validated={validated} onSubmit={handleSubmit}>

				{formFields.map((field) => (
					<InputGroup className="mb-3" key={field.name}>
						<Form.Control
							placeholder={field.placeholder}
							name={field.name}
							onChange={(e) => handleChange(field.name, e.target.value)}
							type={field.type}
							required
						/>
						{/* <p>{field.name}: {formData[field.name]}</p> */}
					</InputGroup>
				))}
				<div className="d-grid gap-2">
					<Button type="submit" variant="primary" size="sm" className="my-2">
						Crear cuenta
					</Button>
				</div>
				{validated && <MyAlert message={alertMessage} />}
			</Form>
		</div>
	);
};
