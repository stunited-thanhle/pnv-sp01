import { Button, ListPage, TextField } from '@atoms';
import { lowercaseFirstLetter, yupSync } from '@helpers';
import { IBreadcrumbItem } from '@molecules';
import { Col, Form, Input, Row, Select, Space } from 'antd';
import { Rule } from 'antd/lib/form';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { EmployeeSchema } from './EmployeeSchema';

const EmployeeCreate: FC = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const validator = [yupSync(EmployeeSchema)] as unknown as Rule[];

  const breadcrumbItems: IBreadcrumbItem[] = [
    { key: 'applications' },
    { key: 'applications_create' },
  ];

  return (
    <ListPage
      page={breadcrumbItems}
      title={t('TABLE.APPLICATION_CREATE')}
      extra={
        <>
          <Button htmlType="submit" form="form-applications" type="primary">
            {t('ACTION.SAVE')}
          </Button>
        </>
      }
    >
      <Form
        className="px-6 pt-6"
        form={form}
        id="form-applications"
        labelAlign="left"
        wrapperCol={{ span: 24 }}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Col xs={23} sm={23} md={23} lg={23} xl={11}>
                <TextField
                  label={t('Name')}
                  name="name"
                  rules={validator}
                  required
                  normalize={(value) => value.trimStart().replace(/\s+/g, ' ')}
                >
                  <Input
                    placeholder={t('Name', {
                      name: lowercaseFirstLetter(t('Name')),
                    })}
                  />
                </TextField>
              </Col>
              <Col xs={23} sm={23} md={23} lg={23} xl={11}>
                <TextField
                  label={t('Type')}
                  name="type"
                  required
                  rules={validator}
                >
                  <Select
                    getPopupContainer={(triggerNode: HTMLElement) =>
                      triggerNode.parentNode as HTMLElement
                    }
                    placeholder={t('Select', {
                      name: t('Type').toLowerCase(),
                    })}
                  ></Select>
                </TextField>
              </Col>
              <Col xs={23} sm={23} md={23} lg={23} xl={11}>
                <TextField
                  label={t('Desc')}
                  name="description"
                  rules={validator}
                  normalize={(value) => value.trimStart().replace(/\s+/g, ' ')}
                >
                  <Input.TextArea
                    placeholder={t('VALIDATE.PLACEHOLDER', {
                      name: lowercaseFirstLetter(t('Desc')),
                    })}
                    className="textarea"
                  />
                </TextField>
              </Col>
            </Space>
          </Col>
        </Row>
      </Form>
    </ListPage>
  );
};
export default EmployeeCreate;
