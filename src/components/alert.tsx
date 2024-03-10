import { Alert } from "react-bootstrap"
import React from "react"

interface MyAlertProps {
  message: string | null;
}

export const MyAlert: React.FC<MyAlertProps> = ({ message }) => {

  return (
    <>
      <div>
        <Alert variant={message === 'Se ha creado exitosamente su cuenta' ? 'success' : 'danger'}>
            <div className="alert-message">
              {message}
            </div>
        </Alert>
      </div>
    </>
  );
};
