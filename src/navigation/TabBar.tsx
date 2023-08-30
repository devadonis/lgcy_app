import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/Home";
import { MyProfileScreen } from "../screens/Profile/MyProfile";
import { NotiViewScreen } from "../screens/Notification/NotiView";
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import ChatDetailScreen from "../screens/ChatDetailScreen/ChatDetailScreen";
import { Icon } from "../components/Icon";
import { GalleryScreen } from "../screens/Content/Gallery";
import { theme } from "../global/styles";
import PostShareScreen from "../screens/PostShareScreen/PostShareScreen";
import { LikesViewScreen } from "../screens/Likes/Likes";
import AccountSettings from "../screens/SettingsScreens/AccountSettings";
import Settings from "../screens/SettingsScreens/Settings";
import ProfileSettings from "../screens/SettingsScreens/ProfileSettings";
import ChangePassword from "../screens/SettingsScreens/ChangePassword";
import ChangePhoneNumber from "../screens/SettingsScreens/ChangePhoneNumber";
import ChangeUserName from "../screens/SettingsScreens/ChangeUsername";
import { AppStackParamList, RootStackScreenProps } from ".";
import { CompositeScreenProps } from "@react-navigation/native";
import Search from "../screens/Search/Search";
import TimelineView from "../screens/Timeline/TimelineView";
import Members from "../screens/Members/Members";
import CreateNewPostDetail from "../screens/Content/CreateNewPostDetailScreen";
import AnimatedBottomTabs from "../UI/AnimatedBottomTabs/AnimatedBottomTabs";

export type TabStackList = {
  Home: undefined;
  ChatScreen: undefined;
  Gallery: undefined;
  NotiView: undefined;
  MyProfile: { userId: number } | undefined;
  ChatDetailScreen: undefined;
  ChatStack: undefined;
  PostShareScreen: undefined;
  LikesView: undefined;
  AccountSettings: undefined;
  ProfileSettings: undefined;
  Settings: undefined;
  ChangePassword: undefined;
  ChangePhoneNumber: undefined;
  ChangeUserName: undefined;
  Search: undefined;
  CreateNewPostDetail: undefined;
  TimelineView: { userId: number } | undefined;
  Members: undefined;
};

const Tab = createBottomTabNavigator<TabStackList>();


const AnimatedCreateNewPostDetail = (props: any) => (
  <AnimatedBottomTabs index={1}>
    <CreateNewPostDetail {...props} />
  </AnimatedBottomTabs>
);

const AnimatedPostShareScreen = (props: any) => (
  <AnimatedBottomTabs index={1}>
    <PostShareScreen {...props} />
  </AnimatedBottomTabs>
);


export type HomeTabScreenProps<T extends keyof TabStackList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabStackList, T>,
    RootStackScreenProps<keyof AppStackParamList>
  >;

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      backBehavior="history"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="home"
              color={focused ? theme.colors.black : theme.colors.gray500}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="contact"
              color={focused ? theme.colors.black : theme.colors.gray500}
              size={22}
              height={17}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="plus"
              color={focused ? theme.colors.black : theme.colors.gray500}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotiView"
        component={NotiViewScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="bell"
              color={focused ? theme.colors.black : theme.colors.gray500}
              size={20}
              height={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="user"
              color={focused ? theme.colors.black : theme.colors.gray500}
              size={18}
              height={21}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PostShareScreen"
        component={AnimatedPostShareScreen}
        options={{
          headerShown: false,
          title: "",
          tabBarShowLabel: false,
          tabBarItemStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="LikesView"
        component={LikesViewScreen}
        options={{
          headerShown: false,
          title: "",
          tabBarShowLabel: false,
          tabBarItemStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="ChatDetailScreen"
        component={ChatDetailScreen}
        options={{
          headerShown: false,
          title: "",
          tabBarShowLabel: false,
          tabBarItemStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="AccountSettings"
        component={AccountSettings}
        options={{
          headerShown: false,
          title: "",
          tabBarShowLabel: false,
          tabBarItemStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          title: "",
          tabBarShowLabel: false,
          tabBarItemStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        options={{
          headerShown: false,
          title: "",
          tabBarShowLabel: false,
          tabBarItemStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerShown: false,
          title: "",
          tabBarShowLabel: false,
          tabBarItemStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="ChangePhoneNumber"
        component={ChangePhoneNumber}
        options={{
          headerShown: false,
          title: "",
          tabBarShowLabel: false,
          tabBarItemStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="ChangeUserName"
        component={ChangeUserName}
        options={{
          headerShown: false,
          title: "",
          tabBarShowLabel: false,
          tabBarItemStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          title: "",
          tabBarShowLabel: false,
          tabBarItemStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="TimelineView"
        component={TimelineView}
        options={{
          headerShown: false,
          title: "",
          tabBarShowLabel: false,
          tabBarItemStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="Members"
        component={Members}
        options={{
          headerShown: false,
          title: "",
          tabBarShowLabel: false,
          tabBarItemStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="CreateNewPostDetail"
        component={AnimatedCreateNewPostDetail}
        options={{
          headerShown: false,
          title: "",
          tabBarShowLabel: false,
          tabBarItemStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
