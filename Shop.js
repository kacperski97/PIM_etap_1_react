import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, Text, View, ToastAndroid } from 'react-native';

export class Shop extends React.Component{
	b1 = () => {
		if(this.props.route.params.upgrade1){
			ToastAndroid.show("Already bought", ToastAndroid.SHORT);
		}else if(this.props.route.params.score < 25 + (this.props.route.params.upgrade2 | 0) * 100 + (this.props.route.params.upgrade3 | 0) * 1000 + (this.props.route.params.upgrade4 | 0) * 5000){
			ToastAndroid.show("Not enough points", ToastAndroid.SHORT);
		}else{
			this.props.navigation.navigate('Clicker', { score: this.props.route.params.score, 
														upgrade1: true, 
														upgrade2: this.props.route.params.upgrade2, 
														upgrade3: this.props.route.params.upgrade3, 
														upgrade4: this.props.route.params.upgrade4})
		}
	}
	
	b2 = () => {
		if(this.props.route.params.upgrade2){
			ToastAndroid.show("Already bought", ToastAndroid.SHORT);
		}else if(this.props.route.params.score < 100 + (this.props.route.params.upgrade1 | 0) * 25 + (this.props.route.params.upgrade3 | 0) * 1000 + (this.props.route.params.upgrade4 | 0) * 5000){
			ToastAndroid.show("Not enough points", ToastAndroid.SHORT);
		}else{
			this.props.navigation.navigate('Clicker', { score: this.props.route.params.score, 
														upgrade1: this.props.route.params.upgrade1, 
														upgrade2: true, 
														upgrade3: this.props.route.params.upgrade3, 
														upgrade4: this.props.route.params.upgrade4})
		}
	}
	
	b3 = () => {
		if(this.props.route.params.upgrade3){
			ToastAndroid.show("Already bought", ToastAndroid.SHORT);
		}else if(this.props.route.params.score < 1000 + (this.props.route.params.upgrade1 | 0) * 25 + (this.props.route.params.upgrade2 | 0) * 100 + (this.props.route.params.upgrade4 | 0) * 5000){
			ToastAndroid.show("Not enough points", ToastAndroid.SHORT);
		}else{
			this.props.navigation.navigate('Clicker', { score: this.props.route.params.score, 
														upgrade1: this.props.route.params.upgrade1, 
														upgrade2: this.props.route.params.upgrade2, 
														upgrade3: true, 
														upgrade4: this.props.route.params.upgrade4})
		}
	}
	
	b4 = () => {
		if(this.props.route.params.upgrade4){
			ToastAndroid.show("Already bought", ToastAndroid.SHORT);
		}else if(this.props.route.params.score < 5000 + (this.props.route.params.upgrade1 | 0) * 25 + (this.props.route.params.upgrade2 | 0) * 100 + (this.props.route.params.upgrade3 | 0) * 1000){
			ToastAndroid.show("Not enough points", ToastAndroid.SHORT);
		}else{
			this.props.navigation.navigate('Clicker', { score: this.props.route.params.score, 
														upgrade1: this.props.route.params.upgrade1, 
														upgrade2: this.props.route.params.upgrade2, 
														upgrade3: this.props.route.params.upgrade3, 
														upgrade4: true})
		}
	}
	
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.score}>Points: { this.props.route.params.score - (this.props.route.params.upgrade1 | 0) * 25 - (this.props.route.params.upgrade2 | 0) * 100 - (this.props.route.params.upgrade3 | 0) * 1000 - (this.props.route.params.upgrade4 | 0) * 5000} </Text>
				<TouchableOpacity style={styles.button(this.props.route.params.upgrade1)} onPress={this.b1}>
					<Text>Buy Better Button for 25 points</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button(this.props.route.params.upgrade2)} onPress={this.b2}>
					<Text>Buy Super Button for 100 points</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button(this.props.route.params.upgrade3)} onPress={this.b3}>
					<Text>Buy Mega Button for 1000 points</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button(this.props.route.params.upgrade4)} onPress={this.b4}>
					<Text>Buy Giga Button for 5000 points</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
    score: {
	  marginTop: 100
  },
  button: (upgrade) => {
	const bgColor = upgrade ? '#DDDDDD' : '#64C8FF';
	
	return {
		alignItems: 'center',
		backgroundColor: bgColor,
		padding: 10,
		marginTop: 10,
		marginBottom: 10
	}
  }
})
