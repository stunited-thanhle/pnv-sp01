import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { ButtonAction } from '@atoms';
import i18n from '@config/i18n';
import { Image as AntdImage } from 'antd';
import { Translation } from 'react-i18next';

export const ApplicationsColumnsTable = (
  handleAction: (key: string, item: any) => void,
) => [
  {
    title: <Translation>{(t) => t('TABLE.ACTIONS')}</Translation>,
    dataIndex: 'actions',
    key: 'actions',
    fixed: 'left',
    width: 150,
    render: (_text: any, record: any) => (
      <>
        <ButtonAction
          variant="primary"
          tooltip={i18n.t('ACTION.UPDATE')}
          handleAction={() => handleAction('update', record)}
        >
          <EyeOutlined />
        </ButtonAction>
        <ButtonAction
          variant="danger"
          handleAction={() => handleAction('delete', record)}
          tooltip={i18n.t('ACTION.DELETE')}
        >
          <DeleteOutlined />
        </ButtonAction>
      </>
    ),
  },
  {
    title: <Translation>{(t) => t('Avatar')}</Translation>,
    dataIndex: 'avatar',
    key: 'avatar',
    render: (avatar: any) => {
      return (
        <AntdImage
          width={50}
          height={50}
          style={{ borderRadius: '50px' }}
          src={avatar}
        />
      );
    },
    width: 100,
  },
  {
    title: <Translation>{(t) => t('APPLICATIONS.NAME')}</Translation>,
    dataIndex: 'name',
    width: 150,
  },
  {
    title: <Translation>{(t) => t('Email')}</Translation>,
    dataIndex: 'email',
    key: 'email',
    sorter: {
      compare: (a: any, b: any) => a.email.localeCompare(b.email),
      multiple: 1,
    },
  },
  {
    title: <Translation>{(t) => t('Phone')}</Translation>,
    dataIndex: 'phone',
    key: 'phone',
    responsive: ['lg'],
  },
  {
    title: <Translation>{(t) => t('Position')}</Translation>,
    dataIndex: 'position',
    key: 'position',
    filters: [
      {
        text: 'Front-end Dev',
        value: 'fe',
      },
      {
        text: 'Back-end Dev',
        value: 'be',
      },
      {
        text: 'Fullstack Dev',
        value: 'fullstack',
      },
      {
        text: 'Business Analyst',
        value: 'ba',
      },
      {
        text: 'Quality Assurance',
        value: 'qa',
      },
      {
        text: 'DevOps Engineer',
        value: 'devops',
      },
      {
        text: 'UX-UI',
        value: 'ux-ui',
      },
    ],
    onFilter: (value: any, record: any) => record.position.indexOf(value) === 0,
    render: (position: any) => {
      switch (position) {
        case 'fe':
          return 'Front-end Dev';
        case 'be':
          return 'Back-end Dev';
        case 'fullstack':
          return 'FullStack Dev';
        case 'ba':
          return 'Business Analyst';
        case 'qa':
          return 'Quality Assurance';
        case 'devops':
          return 'DevOps Engineer';
        case 'ux_ui':
          return 'UX-UI';
        default:
          return '';
      }
    },
  },
  {
    title: <Translation>{(t) => t('Manager')}</Translation>,
    dataIndex: 'manager',
    key: 'manager',
    render: (manager: any) => {
      if (manager) {
        return manager.name;
      } else return <Translation>{(t) => t('EMPLOYEE.NOMANAGER')}</Translation>;
    },
    responsive: ['lg'],
  },
];
