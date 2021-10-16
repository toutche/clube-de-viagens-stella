import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";


/* Páginas para rotas */
import AboutScreen from "./src/components/pages/about"; /**PG PRONTA, FALTA TRANSIÇÃO e interação com API ---- nÃO ENCONTREI NO FLUXO NOVO*/
import AccessScreen from "./src/components/pages/access/access"; /**PG PRONTA */
import AddressNotFoundScreen from "./src/components/BackgroundPink/addressNotFound";
import CompleteAddressScreen from "./src/components/BackgroundPink/completeAddress";
import AdvantagesScreen from "./src/components/pages/advantages";/**PG PRONTA, interação com API e verificar como funciona, acredito ser carrossel*/
import HomeScreen from "./src/components/common/home";
import HomeLoggedScreen from "./src/components/pages/homeLogged/home-logged";
import ClubScreen from "./src/components/pages/club"; /**PG PRONTA, interação com API e verificar como funciona, acredito ser carrossel*/
import InsertCodeScreen from "./src/components/pages/insertCode"; /**PG QUASE PRONTA, FALTA interação com API e conferir as regras dela pq coloque inputs separados mas não fez sentido*/
import LocalizationScreen from "./src/components/BackgroundPink/localization";
import LoginScreen from "./src/components/pages/login"; /**PG PRONTA, FALTA acesso face e google */
import PacksScreen from "./src/components/pages/packs"; /**PG PRONTA, interação com API e verificar como funciona, acredito ser carrossel*/
import PlanScreen from "./src/components/BackgroundPink/plan";
import RegisterScreen from "./src/components/pages/register/register"; /**PG PRONTA, FSLTS COLOCAR O ESPAÇO PARA ADD FOTO */
import RecoverPasswordScreen from "./src/components/pages/recoverPassword"; /**PG PRONTA, FALTA TRANSIÇÃO e interação com API*/
import TermsConditionsScreen from "./src/components/pages/termsConditions"; /**PG PRONTA, FALTA TRANSIÇÃO e interação com API */
import ProfileScreen from "./src/components/pages/profile";
import FinancialAreaScreen from "./src/components/pages/financialArea";
import PageFaceScreen from "./src/components/pages/pageFace"; /**PG PRONTA, FALTA TRANSIÇÃO e interação com API */

/*TODO: Estudar alteração das pgs dream, howitworks e memberpacks para slides*/

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


/* TODO: desenvolvi as próximas telas sem passar pelo 
fluxo de login para acelerar:
  - HomeLogged
  - Plan
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Access" component={AccessScreen} />
        <Stack.Screen name="AddressNotFound" component={AddressNotFoundScreen} />
        <Stack.Screen name="CompleteAddress" component={CompleteAddressScreen} />
        <Stack.Screen name="Advantages" component={AdvantagesScreen} />
        <Stack.Screen name="FinancialArea" component={FinancialAreaScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeLogged" component={HomeLoggedScreen} />
        <Stack.Screen name="Club" component={ClubScreen} />
        <Stack.Screen name="InsertCode" component={InsertCodeScreen} />
        <Stack.Screen name="Localization" component={LocalizationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Packs" component={PacksScreen} />
        <Stack.Screen name="PageFace" component={PageFaceScreen} />
        <Stack.Screen name="Plan" component={PlanScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

