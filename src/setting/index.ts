import { DeviceType } from '@/store/types';

export const projectName = 'Vue3-Admin-Arco';

export default {
  theme: 'light',
  sideTheme: 'white',
  themeColor: '#165dff',
  projectName,
  layoutMode: 'ltr',
  sideWidth: 210,
  pageAnim: 'opacity',
  isFixedNavBar: true,
  deviceType: DeviceType.PC,
  isCollapse: false,
  actionBar: {
    isShowSearch: true,
    isShowMessage: true,
    isShowFullScreen: true,
  },
};