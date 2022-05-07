import { gold } from '@ant-design/colors';

export type Colors = {
  primary: string;
  secondary: string;
  regularText: string;
  activePrimary: string;
  hoverPrimary: string;
  activeSecondary: string;
  hoverSecondary: string;
  disabled: string;
  star: string;
  doneTaskBackground: string;
  transparent: string;
};

export const colors: Colors = {
  primary: '#4eadc5',
  secondary: '#648bb2',
  regularText: '#000',
  activePrimary: '#0082a3',
  hoverPrimary: '#20f7e9',
  activeSecondary: '#EDF5E1',
  hoverSecondary: '#8EE4AF',
  disabled: '#ededed',
  star: gold[5],
  doneTaskBackground: '#eee',
  transparent: 'transparent',
};
