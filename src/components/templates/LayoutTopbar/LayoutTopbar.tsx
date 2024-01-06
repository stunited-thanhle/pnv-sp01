import { Col, Layout, Row } from 'antd';
import { FC, useRef } from 'react';

import { justified, justify } from '@app/assets/images';
import { DropProfile } from '@app/components/molecules';
import './LayoutTopbar.scss';

interface ISubMenuItem {
  key: string;
  icon: any;
  permission: string;
}

interface funcProps {
  handleCollapsed: () => void;
  collapsed: boolean;
}

export interface IMenu {
  key: string;
  permissions: string[];
  children?: ISubMenuItem[];
}

const { Header } = Layout;

const LayoutTopbar: FC<funcProps> = ({ handleCollapsed, collapsed }) => {
  const squareBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Header ref={squareBoxRef}>
      <Row align="middle">
        <Col xs={2} sm={2} md={2} onClick={handleCollapsed}>
          <img
            src={collapsed ? justify : justified}
            alt="Logo"
            style={{ height: '25px', cursor: 'pointer' }}
          />
        </Col>
        <Col className="drop-profile" xs={22} sm={22} md={22}>
          <DropProfile />
        </Col>
      </Row>
    </Header>
  );
};

export default LayoutTopbar;
