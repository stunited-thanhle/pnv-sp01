import i18n from '@config/i18n';
import { ModalTypeEnum } from '@constants';
import { Modal, Row, Typography } from 'antd';
import './openModal.scss';

export const openModal = (
  haddleOkeAction: () => void,
  type: ModalTypeEnum,
  icon: any,
  content: string,
  title: string,
  textBtn?: string,
  childrenContent?: string,
) => {
  Modal[type]({
    icon: (
      <Row justify="center" style={{ marginBottom: '1rem' }}>
        {icon}
      </Row>
    ),
    title: (
      <Row justify="center" style={{ fontWeight: 600 }}>
        {title}
      </Row>
    ),
    className: 'modal-open',
    content: (
      <>
        <Row justify="center" style={{ fontWeight: 500 }}>
          {content}
        </Row>
        <Row style={{ fontWeight: 600 }} justify="center">
          {childrenContent}
        </Row>
      </>
    ),
    cancelText: (
      <Typography style={{ fontWeight: 500 }}>
        {i18n.t('BUTTON.CANCEL')}
      </Typography>
    ),
    okText: textBtn ? (
      textBtn
    ) : (
      <Typography style={{ fontWeight: 500, color: '#FFFFFF' }}>
        {i18n.t('BUTTON.OK')}
      </Typography>
    ),
    onOk() {
      haddleOkeAction();
    },
  });
};
