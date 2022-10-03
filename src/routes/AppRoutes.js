import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../pages/Dashboard";
import DetailsPackages from "../pages/DetailsPackages";
import DetailsHotels from "../pages/DetailsHotels";
import DetailsContractedPackages from "../pages/DetailsContractedPackages";
import NewsTravelers from "../pages/NewsTravelers";
import Wallet from "../pages/Wallet";
import CheckoutPlan from "../pages/CheckoutPlan";
import HiringHotelDetails from "../pages/HiringHotelDetails";
import Contact from "../pages/Contact";
import CongratulationPlan from "../pages/CongratulationPlan";
import PaymentHistory from "../pages/PaymentHistory";
import Scheduling from "../pages/Scheduling";
import HotelScheduling from "../pages/HotelScheduling";
import MyReservations from "../pages/MyReservations";
import HiringPackageDetails from "../pages/HiringPackageDetails";
import CongratulationPackage from "../pages/CongratulationPackage";
import CongratulationHotel from "../pages/CongratulationHotel";
import Alert from "../pages/Alert";
import PlanScreen from "../pages/PlanScreen";
import ConfirmReservation from "../pages/ConfirmReservation";
import About from "../pages/About";
import Benefits from "../pages/Benefits";
import Docs from "../pages/Docs";
import VideoScreen from "../pages/VideoScreen";
import Escorts from "../pages/Escorts";
import DetailsEscort from "../pages/DetailsEscort";
import NewEscort from "../pages/NewEscort";
import Favorites from "../pages/Favorites";
import MyAccount from "../pages/MyAccount";
import MyPlan from "../pages/MyPlan";

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator screenOptions={screenOptions} initialRouteName={"Dashboard"}>
      <AuthStack.Screen name='Dashboard' component={Dashboard} />
      <AuthStack.Screen name='DetailsPackages' component={DetailsPackages} />
      <AuthStack.Screen name='DetailsHotels' component={DetailsHotels} />
      <AuthStack.Screen name='DetailsContractedPackages' component={DetailsContractedPackages} />
      <AuthStack.Screen name='PlanScreen' component={PlanScreen} />
      <AuthStack.Screen name='NewsTravelers' component={NewsTravelers} />
      <AuthStack.Screen name='CongratulationPackage' component={CongratulationPackage} />
      <AuthStack.Screen name='CheckoutPlan' component={CheckoutPlan} />
      <AuthStack.Screen name='HiringHotelDetails' component={HiringHotelDetails} />
      <AuthStack.Screen name='ConfirmReservation' component={ConfirmReservation} />
      <AuthStack.Screen name='Wallet' component={Wallet} />
      <AuthStack.Screen name='HiringPackageDetails' component={HiringPackageDetails} />
      <AuthStack.Screen name='MyReservations' component={MyReservations} />
      <AuthStack.Screen name='MyPlan' component={MyPlan} />
      <AuthStack.Screen name='PaymentHistory' component={PaymentHistory} />
      <AuthStack.Screen name='CongratulationPlan' component={CongratulationPlan} />
      <AuthStack.Screen name='CongratulationHotel' component={CongratulationHotel} />
      <AuthStack.Screen name='Scheduling' component={Scheduling} />
      <AuthStack.Screen name='HotelScheduling' component={HotelScheduling} />
      <AuthStack.Screen name='Contact' component={Contact} />
      <AuthStack.Screen name='Alert' component={Alert} />
      <AuthStack.Screen name='About' component={About} />
      <AuthStack.Screen name='Benefits' component={Benefits} />
      <AuthStack.Screen name='VideoScreen' component={VideoScreen} />
      <AuthStack.Screen name='Docs' component={Docs} />
      <AuthStack.Screen name='Escorts' component={Escorts} />
      <AuthStack.Screen name='NewEscort' component={NewEscort} />
      <AuthStack.Screen name='DetailsEscort' component={DetailsEscort} />
      <AuthStack.Screen name='Favorites' component={Favorites} />
      <AuthStack.Screen name='MyAccount' component={MyAccount} />
    </AuthStack.Navigator>
  );
};

const screenOptions = {
  headerShown: false,
};

export default AuthRoutes;
