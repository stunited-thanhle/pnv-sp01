import { DeleteOutlined } from '@ant-design/icons';
import { Col, Input, Row, Space, TablePaginationConfig } from 'antd';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useGetClients } from '@app/hooks/useEmployee';
import { Button, ListPage, Table, TextField } from '@atoms';
import { ModalTypeEnum } from '@constants';
import { IBreadcrumbItem, openModal } from '@molecules';
import { ApplicationsColumnsTable } from '../ColumnTable/ApplicationListColumn';

const ApplicationList: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [table, setTable] = useState({
    page: 1,
    take: 5,
  });
  const [filters, setFilters] = useState({
    searchByName: '',
    searchByEmail: '',
  });

  const paginateOptions = {
    searchByName: filters?.searchByName,
    searchByEmail: filters?.searchByEmail,
    page: table.page,
    take: table.take,
  };
  const {
    data: employees,
    isLoading,
    refetch,
  } = useGetClients(paginateOptions);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTable({
      page: pagination.current || 1,
      take: pagination.pageSize || 5,
    });
  };

  const handleClear = async () => {
    await setTable({
      page: 1,
      take: table.take,
    });
    refetch();
  };

  const handleSearch = async () => {
    await setTable({
      page: 1,
      take: table.take,
    });
    refetch();
  };

  const handleAction = (key: string, item: any) => {
    switch (key) {
      case 'update':
        navigate(`/application/${item.id}`);
        break;
      case 'delete':
        openModal(
          () => {
            // onDeleteApplication(item.id);
          },
          ModalTypeEnum.CONFIRM,
          <DeleteOutlined />,
          t('MODAL.CONFIRM_DELETE', { name: item.name }),
          t('MODAL.TITLE_DELETE', { name: item.name }),
        );
        break;
    }
  };

  const breadcrumbItems: IBreadcrumbItem[] = [{ key: 'applications' }];

  return (
    <ListPage
      page={breadcrumbItems}
      extra={
        <Space>
          <Button
            type="primary"
            color="#cf3ad600"
            onClick={() => navigate('/users/create')}
          >
            {t('Create')}
          </Button>
        </Space>
      }
      title={t('TABLE.APPLICATION_TITLE')}
    >
      <Row gutter={[8, 8]} className="mt-6 ml-2 !important">
        <Col xs={24} sm={24} md={6}>
          <TextField>
            <Input
              placeholder={t('VALIDATE.PLACEHOLDER', {
                name: t('AIRCONDITION.NAME').toLowerCase(),
              })}
              allowClear
              onChange={(e) => {
                if (e.type === 'click') {
                  handleClear();
                }
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  searchByName: e.target.value,
                }));
              }}
            />
          </TextField>
        </Col>
        <Col xs={24} sm={24} md={6}>
          <TextField>
            <Input
              placeholder={t('Email', {
                name: t('Email').toLowerCase(),
              })}
              allowClear
              onChange={(e) => {
                if (e.type === 'click') {
                  handleClear();
                }
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  searchByEmail: e.target.value,
                }));
              }}
            />
          </TextField>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6}>
          <Row justify="space-between">
            <Button type="primary" onClick={() => handleSearch()}>
              {t('TABLE.SEARCH')}
            </Button>
          </Row>
        </Col>
      </Row>
      <Table
        loading={isLoading}
        columns={ApplicationsColumnsTable(handleAction)}
        onChange={handleTableChange}
        paginate={{
          table,
          setTable,
          total: employees?.meta?.itemCount,
          pageCount: 10,
        }}
        dataSource={employees?.data || []}
      />
    </ListPage>
  );
};
export default ApplicationList;
