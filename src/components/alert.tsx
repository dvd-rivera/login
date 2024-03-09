import { Alert } from "react-bootstrap"
import React from "react"

interface MyAlertProps {
  message: string | null;
}

export const MyAlert: React.FC<MyAlertProps> = ({ message }) => {

  return (
    <>
      <div>
        <Alert variant={message === 'Las contraseñas coinciden' ? 'success' : 'danger'}>
            <div className="alert-message">
              {message}
            </div>
        </Alert>
      </div>
    </>
  );
};
