import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../pages/Dashboard";
import DetailsPackages from "../pages/DetailsPackages";
import DetailsContractedPackages from "../pages/DetailsContractedPackages";
import Wallet from "../pages/Wallet";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import FinishHidePlan from "../pages/FinishHidePlan";
import PaymentHistory from "../pages/PaymentHistory";
import Scheduling from "../pages/Scheduling";
import ContractedPackages from "../pages/ContractedPackages";
import HiringPackageDetails from "../pages/HiringPackageDetails";
import NewTraveler from "../pages/NewTraveler";
import Congratulation from "../pages/Congratulation";
import Alert from "../pages/Alert";

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator screenOptions={screenOptions} initialRouteName={"Dashboard"}>
      <AuthStack.Screen name='Dashboard' component={Dashboard} />
      <AuthStack.Screen name='DetailsPackages' component={DetailsPackages} />
      <AuthStack.Screen name='NewTraveler' component={NewTraveler} />
      <AuthStack.Screen name='Congratulation' component={Congratulation} />
      <AuthStack.Screen name='Checkout' component={Checkout} />
      <AuthStack.Screen name='Wallet' component={Wallet} />
      <AuthStack.Screen name='HiringPackageDetails' component={HiringPackageDetails} />
      <AuthStack.Screen name='ContractedPackages' component={ContractedPackages} />
      <AuthStack.Screen name='DetailsContractedPackages' component={DetailsContractedPackages} />
      <AuthStack.Screen name='PaymentHistory' component={PaymentHistory} />
      <AuthStack.Screen name='FinishHidePlan' component={FinishHidePlan} />
      <AuthStack.Screen name='Scheduling' component={Scheduling} />
      <AuthStack.Screen name='Contact' component={Contact} />
      <AuthStack.Screen name='Alert' component={Alert} />
    </AuthStack.Navigator>
  );
};

const screenOptions = {
  headerShown: false,
};

export default AuthRoutes;
