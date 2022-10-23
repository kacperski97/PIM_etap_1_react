import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Clicker } from './Clicker'
import { Shop } from './Shop'

const Stack = createNativeStackNavigator();

class App extends Component{
	render() {
		return(
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Clicker" component={Clicker} initialParams={{ score: 0, upgrade1: false, upgrade2: false, upgrade3: false, upgrade4: false}}/>
					<Stack.Screen name="Shop" component={Shop} initialParams={{ score: 0, upgrade1: false, upgrade2: false, upgrade3: false, upgrade4: false}}/>
				</Stack.Navigator>
			</NavigationContainer>
		)
	}
}

export default App;
