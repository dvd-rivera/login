import React from 'react';

interface SocialButtonProps {
  icon: string;
}

export const SocialButton: React.FC<SocialButtonProps> = (props) => {
  return (
    <>
      <i className={props.icon}></i>
    </>
  );
};

