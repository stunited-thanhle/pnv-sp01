import { Card as CardAntd, CardProps } from 'antd';
import { FC } from 'react';

export const Card: FC<CardProps> = ({ children, style, ...props }) => (
  <CardAntd
    {...props}
    style={{
      ...style,
      borderRadius: 10,
      boxShadow: '0 0 30px #d2d2f280',
      width: '100%',
    }}
  >
    {children}
  </CardAntd>
);
