import { Alert } from "react-bootstrap"
import React from "react"

interface alertProps {
  name: string
  email: string
  password: string
}

export const MyAlert: React.FC<alertProps> = (data) => {
  return (
    <>
    <div>
      <Alert variant="danger">
        {data.name}
      </Alert>
    </div>
    </>
  );
};

 