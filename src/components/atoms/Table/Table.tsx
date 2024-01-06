import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import {
  Empty,
  Pagination,
  Row,
  Select,
  Space,
  Table as TableAntd,
  Typography,
} from 'antd';
import { TableProps as TablePropsAntd } from 'antd/lib/table';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './Table.scss';

export interface PaginateProp {
  page: number;
  take: number;
}

interface HasId {
  id?: any;
  externalId?: any;
  devEui?: string;
  deveui?: string;
}

interface PaginateOptions {
  table: PaginateProp;
  setTable: (value: any) => void;
  total: number;
  pageCount: number;
}

const pageSizeOptions = [{ value: 5 }, { value: 10 }, { value: 20 }];
const DEFAULT_BOTTOM_HEIGHT = 65;

type TableProps<T> = TablePropsAntd<T> & {
  paginate?: PaginateOptions;
  hasCustomHeight?: boolean;
};

export const Table = <T extends HasId>({
  paginate,
  dataSource,
  hasCustomHeight = false,
  ...rest
}: TableProps<T>) => {
  const [topHeight, setTopHeight] = useState(0);
  const { t } = useTranslation();
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const { current } = tableRef;
    if (current) {
      const { top } = current.getBoundingClientRect();
      setTopHeight(top + DEFAULT_BOTTOM_HEIGHT);
    }
  }, [dataSource, topHeight]);

  return (
    <>
      <TableAntd
        {...rest}
        style={{
          boxShadow: '0 6px 8px -6px #ededed',
          position: 'relative',
          maxHeight: `${
            hasCustomHeight ? '250px' : `calc(100vh - ${topHeight}px)`
          }`,
          overflowX: 'auto',
        }}
        ref={tableRef}
        sticky={true}
        dataSource={dataSource}
        rowKey={(record) =>
          record.id || record.externalId || record.devEui || record.deveui
        }
        scroll={{ x: 'max-content' }}
        pagination={false}
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={t('TABLE.EMPTY')}
            />
          ),
        }}
      />
      {paginate && (
        <Row
          justify="space-between"
          style={{
            padding: '3px 10px 10px 10px',
            background: '#F7F7F7',
          }}
        >
          <Space>
            <Typography>
              {t('TABLE.DISPLAY')}
              <Select
                style={{ marginLeft: 5, marginRight: 5, width: 70 }}
                defaultValue={paginate.table.take}
                onChange={(value: number) => {
                  paginate.setTable({
                    ...paginate.table,
                    take: value,
                    page: 1,
                  });
                }}
                options={pageSizeOptions}
                getPopupContainer={(triggerNode: HTMLElement) =>
                  triggerNode.parentNode as HTMLElement
                }
              />
            </Typography>
          </Space>

          <Pagination
            showSizeChanger={false}
            current={paginate.table.page}
            total={paginate.total}
            pageSize={paginate.table.take}
            itemRender={(_, type: string, originalElement) => {
              switch (type) {
                case 'prev':
                  return <ArrowLeftOutlined />;
                case 'next':
                  return <ArrowRightOutlined />;
                default:
                  return originalElement;
              }
            }}
            onChange={(page: number) => {
              paginate.setTable({
                ...paginate.table,
                page: page,
              });
            }}
          />
        </Row>
      )}
    </>
  );
};
