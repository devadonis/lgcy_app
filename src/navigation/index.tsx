import {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  StackNavigationProp,
  StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import CreateUserName from "../screens/CreateUserName";
import CreatePassword from "../screens/CreatePassword";
import ForgotPassword from "../screens/ForgotPassword";
import UpdatePassword from "../screens/UpdatePassword";
import { PostViewScreen } from "../screens/Post/PostView";
import { ProfileScreen } from "../screens/Profile/Profile";
import { NewTimelineScreen } from "../screens/Timeline/NewTimeline";
import TabStack, { TabStackList } from "./TabBar";
import { CommentsViewScreen } from "../screens/Comments/CommentsView";
import { SelectStyleScreen } from "../screens/SelectStyle/SelectStyle";
import { VideoScreen } from "../screens/Content/Video";
import CreateNewPostDetail from "../screens/Content/CreateNewPostDetailScreen";
import ChatDetailScreen from "../screens/ChatDetailScreen/ChatDetailScreen";
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import SearchUser from "../screens/SearchUser/SearchUser";
import Search from "../screens/Search/Search";

export type AppStackParamList = {
  LoginScreen: undefined;
  CreateAccountScreen: undefined;
  CreateUserName: undefined;
  CreatePassword: undefined;
  ForgotPassword: undefined;
  UpdatePassword: undefined;
  AppStack: undefined;
  Home: undefined;
  PostView: undefined;
  NewTimeline: undefined;
  NotiView: undefined;
  CommentsView: undefined;
  Filter: undefined;
  Video: undefined;
  ChatDetailScreen: undefined;
  NewPost: undefined;
  SearchUser: undefined;
  SearchUserFromHome: undefined;
  TabStack: NavigatorScreenParams<TabStackList>;
};

export type RootStackScreenProps<T extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, T>;

export type IgcyScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabStackList, "Home">,
  StackScreenProps<AppStackParamList>
>;

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackList, "Home">,
  StackNavigationProp<AppStackParamList>
>;

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="PostView" component={PostViewScreen} />
      <Stack.Screen name="NewTimeline" component={NewTimelineScreen} />
      <Stack.Screen name="CommentsView" component={CommentsViewScreen} />

      <Stack.Screen name="Filter" component={SelectStyleScreen} />
      <Stack.Screen name="Video" component={VideoScreen} />
      <Stack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />
      <Stack.Screen name="SearchUser" component={SearchUser} />
      <Stack.Screen name="SearchUserFromHome" component={Search} />
    </Stack.Navigator>
  );
};

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppStack" component={AppStack} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />
        <Stack.Screen name="CreateUserName" component={CreateUserName} />
        <Stack.Screen name="CreatePassword" component={CreatePassword} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
