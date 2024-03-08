import React from 'react';

interface SocialButtonProps {
  icon: string;
}

export const SocialButton: React.FC<SocialButtonProps> = (props) => {

  return (
    <>
      <div className='socialMediaContainer'>
        <a href="#">
          <i className={props.icon}></i>
        </a>
      </div>
    </>
  );
};

