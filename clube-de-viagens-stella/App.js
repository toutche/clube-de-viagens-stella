import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


/* Páginas para rotas */
import AboutScreen from './src/components/BackgroundPink/about';
import AccessScreen from './src/components/BackgroundPink/access';
import AddressNotFoundScreen from './src/components/BackgroundPink/addressNotFound';
import CompleteAddressScreen from './src/components/BackgroundPink/completeAddress';
import DreamTripScreen from './src/components/BackgroundWhite/dreamTrip';
import HomeScreen from './src/components/common/home';
import HomeLoggedScreen from './src/components/BackgroundPink/home-logged';
import HowItWorksScreen from './src/components/BackgroundWhite/howItWorks';
import InsertCodeScreen from './src/components/BackgroundPink/insertCode';
import LocalizationScreen from './src/components/BackgroundPink/localization';
import LoginScreen from './src/components/BackgroundPink/login';
import MemberPacksScreen from './src/components/BackgroundWhite/memberPacks';
import RegisterScreen from './src/components/BackgroundPink/register';
import RecoverPasswordScreen from './src/components/BackgroundPink/recoverPassword';
import TermsConditionsScreen from './src/components/BackgroundPink/termsConditions';


/*teste de rotas */
function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/*function Root() {
  return (
      <Stack.Navigator initialRouteName="Login">
        
      </Stack.Navigator>
  );
}*/

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="About" component={AboutScreen}/> 
        <Stack.Screen name="Access" component={AccessScreen}/>
        <Stack.Screen name="AddressNotFound" component={AddressNotFoundScreen}/>
        <Stack.Screen name="CompleteAddress" component={CompleteAddressScreen}/>
        <Stack.Screen name="DreamTrip" component={DreamTripScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeLogged" component={HomeLoggedScreen}/> 
        <Stack.Screen name="HowItWorks" component={HowItWorksScreen}/>
        <Stack.Screen name="InsertCode" component={InsertCodeScreen}/>
        <Stack.Screen name="Localization" component={LocalizationScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="MemberPacks" component={MemberPacksScreen}/>
        <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/> 
        <Stack.Screen name="TermsConditions" component={TermsConditionsScreen}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

