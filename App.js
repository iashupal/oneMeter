/* eslint-disable camelcase */
import React, { Component } from "react";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { View, StyleSheet, Image } from "react-native";
import CustomDrawer from "@components/CustomDrawer";
import ProfileSettingScreen from "@screens/ProfileSettingScreen";
import ApplicationStatusScreen from "@screens/ApplicationStatusScreen";
import MetricCoinScreen from "@screens/MetricCoinScreen";
import ServiceCenterScreen from "@screens/ServiceCenterScreen";
import GuideScreen from "@screens/GuideScreen";
import NoticeScreen from "@screens/NoticeScreen";
import profile from "@assets/icons/profile/profile.png";
import calendar from "@assets/icons/calendar/calendar.png";
import coin from "@assets/icons/coin/coin.png";
import customer from "@assets/icons/customer/customer.png";
import alarm from "@assets/icons/alarm/alarm.png";
import guide from "@assets/icons/guide/guide.png";
import MainTabNav from "@screens/MainTabNav";
import FindIdScreen from "@screens/FindIdScreen";
import FindPwdScreen from "@screens/FindPwdScreen";
import TopMenu from "./src/components/TopMenu";
import EditPassword from "./src/screens/EditPassword";
import ConfirmPassword from "./src/screens/ConfirmPassword";
import PurchaseHistory from "./src/screens/PurchaseHistory";
import LoadingScreen from "./src/screens/LoadingScreen";
import LoginScreen from "./src/screens/LoginScreen";

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    const { navigationProps } = this.props;
    navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View>
        <TopMenu onPress={this.toggleDrawer.bind(this)} />
      </View>
    );
  }
}

const ProfileNavigator = createStackNavigator({
  First: {
    screen: ProfileSettingScreen,
    navigationOptions: ({ navigation }) => ({
      // headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      header: null
    })
  },
  ConfirmPassword: {
    screen: ConfirmPassword,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  EditPassword: {
    screen: EditPassword,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});
const ApplicationStatusNavigator = createStackNavigator({
  Second: {
    screen: ApplicationStatusScreen,
    navigationOptions: ({ navigation }) => ({
      // headerLeft: <NavigationDrawerStructure navigationProps={navigation} />
      header: null
    })
  }
});
const MetricCoinNavigator = createStackNavigator({
  Third: {
    screen: MetricCoinScreen,
    navigationOptions: ({ navigation }) => ({
      // headerLeft: <NavigationDrawerStructure navigationProps={navigation} />
      header: null
    })
  },
  PurchaseHistory: {
    screen: PurchaseHistory,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});
const ServiceCenterNavigator = createStackNavigator({
  Fourth: {
    screen: ServiceCenterScreen,
    navigationOptions: ({ navigation }) => ({
      // headerLeft: <NavigationDrawerStructure navigationProps={navigation} />
      header: null
    })
  }
});
const NoticeScreenNavigator = createStackNavigator({
  Fifth: {
    screen: NoticeScreen,
    navigationOptions: ({ navigation }) => ({
      // headerLeft: <NavigationDrawerStructure navigationProps={navigation} />
      header: null
    })
  }
});
// const Screen6_StackNavigator = createStackNavigator({
// 	Sixth: {
// 		screen: GuideScreen,
// 		navigationOptions: ({ navigation }) => ({
// 			headerLeft: <NavigationDrawerStructure navigationProps={navigation} />
// 		})
// 	}
// });
const HomeNavigator = createStackNavigator({
  Seventh: {
    screen: MainTabNav,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      drawerLabel: () => null
      // header: null
    })
  }
});

const DrawerNavigator = createDrawerNavigator(
  {
    프로필: {
      // PROFILE - SETTING SCREEN
      screen: ProfileNavigator,
      navigationOptions: {
        drawerIcon: <Image source={profile} />
      }
    },
    응모현황: {
      screen: ApplicationStatusNavigator,
      navigationOptions: {
        drawerIcon: <Image source={calendar} />
      }
    },
    미터코인: {
      screen: MetricCoinNavigator,
      navigationOptions: {
        drawerIcon: <Image source={coin} />
      }
    },
    고객센터: {
      screen: ServiceCenterNavigator,
      navigationOptions: {
        drawerIcon: <Image source={customer} />
      }
    },
    알림: {
      screen: NoticeScreenNavigator,
      navigationOptions: {
        drawerIcon: <Image source={alarm} />
      }
    },
    // 가이드: {
    // 	screen: Screen6_StackNavigator,
    // 	navigationOptions: {
    // 		drawerIcon: <Image source={guide} />
    // 	}
    // },

    Home: {
      screen: HomeNavigator,
      navigationOptions: ({ navigation }) => {
        return {
          drawerLabel: () => null
        };
      }
    }
  },
  {
    initialRouteName: "Home",
    drawerPosition: "left",
    contentComponent: props => <CustomDrawer {...props} />,
    drawerToggle: "DrawerToggle",
    fontSize: 16,
    letterSpacing: 0.5,
    color: "rgb(51,51,51)",
    fontWeight: 500
  }
);

const AuthNavigator = createStackNavigator({
  Home: {
    screen: DrawerNavigator,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  FindId: { screen: FindIdScreen },
  FindPwd: { screen: FindPwdScreen }
});

// const AppContainer = createAppContainer(DrawerNavigator, AuthNavigator);

const AuthFlow = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: LoadingScreen,
      App: DrawerNavigator,
      Auth: AuthNavigator
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

// TODO: - SafeAreaView
// const App = () => {
//   return <AuthFlow />;
// };

export default AuthFlow;
