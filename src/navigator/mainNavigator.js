import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile86487Navigator from '../features/UserProfile86487/navigator';
import Tutorial86486Navigator from '../features/Tutorial86486/navigator';
import NotificationList86458Navigator from '../features/NotificationList86458/navigator';
import Settings86457Navigator from '../features/Settings86457/navigator';
import Settings86449Navigator from '../features/Settings86449/navigator';
import UserProfile86447Navigator from '../features/UserProfile86447/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile86487: { screen: UserProfile86487Navigator },
Tutorial86486: { screen: Tutorial86486Navigator },
NotificationList86458: { screen: NotificationList86458Navigator },
Settings86457: { screen: Settings86457Navigator },
Settings86449: { screen: Settings86449Navigator },
UserProfile86447: { screen: UserProfile86447Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
