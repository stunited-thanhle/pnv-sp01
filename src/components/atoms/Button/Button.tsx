import { Button as ButtonAntd } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import { FC } from 'react';

import './Button.scss';

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const className = props.className ? props.className : '';
  return (
    <ButtonAntd {...props} className={`button ${className}`}>
      {children}
    </ButtonAntd>
  );
};
