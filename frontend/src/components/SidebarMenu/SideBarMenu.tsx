import { StyledSidebarMenu } from './SidebarMenu.styled';
import {
  ExclamationOutlined,
  BlockOutlined,
  ContainerOutlined,
  FundProjectionScreenOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

type iconTypes =
  | 'ExclamationOutlined'
  | 'BlockOutlined'
  | 'ContainerOutlined'
  | 'FundProjectionScreenOutlined';

interface itemProp {
  label: string;
  href: string;
  icon: iconTypes;
}

interface itemsProp {
  items: itemProp[];
}

const customIcons = {
  ExclamationOutlined: <ExclamationOutlined />,
  BlockOutlined: <BlockOutlined />,
  ContainerOutlined: <ContainerOutlined />,
  FundProjectionScreenOutlined: <FundProjectionScreenOutlined />,
};

export const SidebarMenu = ({ items }: itemsProp) => {
  const menuItems = items.map(({ label, icon, href }) => ({
    key: label,
    label: (
      <div>
        <Link to={href}>
          {customIcons[icon]}
          <span>{label}</span>
        </Link>
      </div>
    ),
  }));
  return <StyledSidebarMenu items={menuItems} />;
};
