import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, Text, View, ToastAndroid } from 'react-native';

export class Clicker extends React.Component{
	b1 = () => {
		this.props.navigation.setParams({
			score: this.props.route.params.score + 1
		})
	}
	
	b2 = () => {
		if(this.props.route.params.upgrade1){
			this.props.navigation.setParams({
				score: this.props.route.params.score + 5
			})
		}else{
			ToastAndroid.show("To use this button buy it in store first!", ToastAndroid.SHORT);
		}
	}
	
	b3 = () => {
		if(this.props.route.params.upgrade2){
			this.props.navigation.setParams({
				score: this.props.route.params.score + 10
			})
		}else{
			ToastAndroid.show("To use this button buy it in store first!", ToastAndroid.SHORT);
		}
	}
	
	b4 = () => {
		if(this.props.route.params.upgrade3){
			this.props.navigation.setParams({
				score: this.props.route.params.score + 50
			})
		}else{
			ToastAndroid.show("To use this button buy it in store first!", ToastAndroid.SHORT);
		}
	}
	
	b5 = () => {
		if(this.props.route.params.upgrade4){
			this.props.navigation.setParams({
				score: this.props.route.params.score + 100
			})
		}else{
			ToastAndroid.show("To use this button buy it in store first!", ToastAndroid.SHORT);
		}
	}
	
	toShop = () => {
		this.props.navigation.navigate('Shop', { score: this.props.route.params.score, 
												 upgrade1: this.props.route.params.upgrade1, 
												 upgrade2: this.props.route.params.upgrade2, 
												 upgrade3: this.props.route.params.upgrade3, 
												 upgrade4: this.props.route.params.upgrade4})
	}
	
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.score}>Points: { this.props.route.params.score - (this.props.route.params.upgrade1 | 0) * 25 - (this.props.route.params.upgrade2 | 0) * 100 - (this.props.route.params.upgrade3 | 0) * 1000 - (this.props.route.params.upgrade4 | 0) * 5000} </Text>
				<TouchableOpacity style={styles.button(true)} onPress={this.b1}>
					<Text>Button</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button(this.props.route.params.upgrade1)} onPress={this.b2}>
					<Text>Better Button</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button(this.props.route.params.upgrade2)} onPress={this.b3}>
					<Text>Super Button</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button(this.props.route.params.upgrade3)} onPress={this.b4}>
					<Text>Mega Button</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button(this.props.route.params.upgrade4)} onPress={this.b5}>
					<Text>Giga Button</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button(true)} onPress={this.toShop}>
					<Text>Shop</Text>
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
	const bgColor = upgrade ? '#64C8FF' : '#DDDDDD';
	
	return {
		alignItems: 'center',
		backgroundColor: bgColor,
		padding: 10,
		marginTop: 10,
		marginBottom: 10
	}
  }
})