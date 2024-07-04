import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartProvider } from "./context/CartContext";
import ProductPage from "./screens/ProductPage";
import CheckoutScreen from "./screens/CheckoutScreen";
import TabIcon from "./components/TabIcon";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderSuccessScreen from "./screens/OrderSuccessScreen";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderSuccess"
        component={OrderSuccessScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  const screenOptions = {
    tabBarShowLabel: false,

    tabBarActiveTintColor: "#049EFE",
    tabBarInactiveTintColor: "#617078",

    tabBarStyle: {
      backgroundColor: "#fff",
      height: 100,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      zindex: 1,
    },
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Products"
        component={ProductPage}
        options={{
          title: "Products",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="Products" color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          title: "Checkout",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="Checkout" color={color} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}
