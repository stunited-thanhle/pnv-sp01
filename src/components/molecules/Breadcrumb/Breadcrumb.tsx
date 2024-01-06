import { HomeOutlined, RightOutlined } from '@ant-design/icons';
import { Breadcrumb as BreadcrumbAntd } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Breadcrumb.scss';

export interface IBreadcrumbItem {
  key: string;
  route?: string;
  title?: string;
}

interface Props {
  items: IBreadcrumbItem[];
}

const { Item } = BreadcrumbAntd;

export const Breadcrumb = ({ items }: Props) => {
  const { t } = useTranslation();

  return (
    <BreadcrumbAntd
      style={{ paddingTop: 15, paddingBottom: 10 }}
      separator={<RightOutlined style={{ fontSize: 10 }} />}
    >
      <Item>
        <Link to="/dashboard">
          <HomeOutlined />
        </Link>
      </Item>

      {items.map(({ key, route, title }, index, items) => {
        if (index === items.length - 1) {
          return (
            <Item key={index}>
              {key && t(`BREADCRUMB.${key.toUpperCase()}`)} {title}
            </Item>
          );
        }

        return (
          <Item key={index}>
            <Link to={route ?? `/${key}`}>
              {key && t(`BREADCRUMB.${key.toUpperCase()}`)} {title}
            </Link>
          </Item>
        );
      })}
    </BreadcrumbAntd>
  );
};
