import { Space } from 'antd';
import { FC, ReactNode } from 'react';

import { Card } from '@atoms';
import { Breadcrumb, IBreadcrumbItem } from '@molecules';
import './ListPage.scss';

type Props = {
  children: ReactNode;
  page: IBreadcrumbItem[];
  extra?: ReactNode;
  title?: ReactNode;
  className?: string;
};

export const ListPage: FC<Props> = ({
  children,
  page,
  extra,
  title,
  className,
}: Props) => {
  return (
    <>
      <div className="breadcrumb-wrapper">
        <Space direction="horizontal" className="breadcrumb__button">
          <Breadcrumb items={page} />
          <Space direction="horizontal">{extra}</Space>
        </Space>
      </div>
      <div className="card-container">
        <Card
          style={{
            overflow: 'hidden',
          }}
          className={className ? `list-page ${className}` : 'list-page'}
          title={title}
        >
          {children}
        </Card>
      </div>
    </>
  );
};
