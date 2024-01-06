import { Button as ButtonAntd, ButtonProps, Tooltip } from 'antd';
import { FC } from 'react';

type Prop = {
  variant: 'primary' | 'success' | 'danger' | 'white' | 'none';
  children: JSX.Element;
  handleAction?: () => void;
  tooltip?: string;
} & ButtonProps;

export const ButtonAction: FC<Prop> = ({
  variant,
  children,
  handleAction,
  tooltip,
  ...props
}) => {
  return (
    <Tooltip title={tooltip}>
      <ButtonAntd
        {...props}
        className={`btn-action ${variant}`}
        onClick={handleAction}
      >
        {children}
      </ButtonAntd>
    </Tooltip>
  );
};
