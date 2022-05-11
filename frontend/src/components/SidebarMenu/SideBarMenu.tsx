import { StyledSidebarMenu, StyledSidebarItem } from './SidebarMenu.styled';
import { FileExclamationOutlined, ExclamationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

type iconTypes = 'FileExclamationOutlined' | 'ExclamationOutlined';

interface itemProp {
  label: string;
  href: string;
  icon: iconTypes;
}

interface itemsProp {
  items: itemProp[];
}

const customIcons = {
  FileExclamationOutlined: <FileExclamationOutlined />,
  ExclamationOutlined: <ExclamationOutlined />,
};

export const SidebarMenu = ({ items }: itemsProp) => {
  const menuItems = items.map(({ label, icon, href }) => ({
    key: label,
    label: (
      <Link to={href}>
        {customIcons[icon]}
        {label}
      </Link>
    ),
  }));
  return <StyledSidebarMenu items={menuItems} />;
};
