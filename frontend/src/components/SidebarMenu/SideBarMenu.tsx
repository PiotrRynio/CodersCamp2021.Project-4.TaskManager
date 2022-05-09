import { StyledSidebarMenu, StyledSidebarItem } from './SidebarMenu.styled';
import * as AntdIcons from '@ant-design/icons';

interface itemProp {
  label: string;
  href: string;
  icon: string;
}

interface itemsProp {
  items: itemProp[];
}

export const SidebarMenu = ({ items }: itemsProp) => {
  return (
    <StyledSidebarMenu>
      {items.map((item) => {
        const CustomIcon = (type: string) => {
          // eslint-disable-next-line no-console
          const AntdIcon = AntdIcons[type];
          return <AntdIcon />;
        };
        return (
          <StyledSidebarItem>
            {CustomIcon(item?.icon)}
            {item?.label}
          </StyledSidebarItem>
        );
      })}
    </StyledSidebarMenu>
  );
};
