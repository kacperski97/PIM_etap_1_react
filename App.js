import React, {Component} from 'react';
import { Alert, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

class App extends Component{
	state = {
		count: 0
	}
	
	b1 = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	
	b2 = () => {
		this.setState({
			count: this.state.count + 2
		})
	}
	
	b3 = () => {
		this.setState({
			count: this.state.count + 3
		})
	}
	
	b4 = () => {
		this.setState({
			count: this.state.count + 4
		})
	}
	
	b5 = () => {
		this.setState({
			count: this.state.count + 5
		})
	}
	
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.score}> { this.state.count } </Text>
				<TouchableOpacity style={styles.button} onPress={this.b1}>
					<Text>Button 1</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={this.b2}>
					<Text>Button 2</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={this.b3}>
					<Text>Button 3</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={this.b4}>
					<Text>Button 4</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={this.b5}>
					<Text>Button 5</Text>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
	marginTop: 10,
    marginBottom: 10
  },
  score: {
	  marginTop: 100
  }
})

export default App;
