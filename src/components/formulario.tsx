import React, { useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap';

interface HijoProps {
	formValidatedValue: (valor: boolean) => void;
	alertMessageProps: (valor: string | null) => void;
  }

export const Formulario: React.FC<HijoProps> = ({formValidatedValue,alertMessageProps}) => {
	const [formData, setFormData] = useState({
		nombre: "",
		email: "",
		password: "",
		rePassword: ""
	});

	const [validated, setValidated] = useState(false);

	const handleChange = (fieldName: string, value: string) => {
		setFormData({ ...formData, [fieldName]: value });
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		console.log("validando")
		const form = event.currentTarget;
		if (form.checkValidity() === false || formData.nombre === '' || formData.email === '' || formData.password === '' || formData.rePassword === '' ) {
		  event.stopPropagation();
		  alertMessageProps('Todos los campos son obligatorios');
		} else if (formData.password !== formData.rePassword) {
			alertMessageProps('Las contraseñas no coinciden');
		} else {
			alertMessageProps('Se ha creado exitosamente su cuenta');
		}
		formValidatedValue(true)
		setValidated(true)
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
			</Form>
		</div>
	);
};
