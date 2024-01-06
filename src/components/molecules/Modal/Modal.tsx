import { Modal as ModalAntd, ModalProps } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Modal: FC<ModalProps> = ({ children, ...props }) => {
  const className = props.className ? props.className : '';
  const { t } = useTranslation();

  return (
    <ModalAntd
      className={`modal ${className}`}
      centered={true}
      okText={t('BUTTON.APPLY')}
      cancelText={t('BUTTON.CANCEL')}
      okButtonProps={{ className: 'button', type: 'primary' }}
      cancelButtonProps={{ className: 'button' }}
      {...props}
    >
      {children}
    </ModalAntd>
  );
};
