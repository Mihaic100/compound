import fullWidthTwig from './full-width.twig';
import withSidebarTwig from './with-sidebar.twig';

import mainMenu from '../03-organisms/menus/main-menu/main-menu.yml';
import socialMenu from '../03-organisms/menus/social/social-menu.yml';
import footerMenu from '../03-organisms/menus/footer/footer-menu.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Templates/Layouts',
  parameters: {
    layout: 'fullscreen',
  },
};

export const fullWidth = () =>
  fullWidthTwig({ ...mainMenu, ...socialMenu, ...footerMenu });

export const withSidebar = () =>
  withSidebarTwig({ ...mainMenu, ...socialMenu, ...footerMenu });
