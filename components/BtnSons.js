import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

function BtnSons(props){
	return(
		<View style={{flexDirection: 'row'}}>
			{ props.alarmes.map((value) => {
				if(value.selecionado){
				return(
					<TouchableOpacity onPress={() => props.setAlarme(value.id)} style={styles.btnEscolherSelecionado}>
						<Text style={{color: 'white'}}>{value.som}</Text>
					</TouchableOpacity>
				)}else{				
				return(
					<TouchableOpacity onPress={() => props.setAlarme(value.id)} style={styles.btnEscolher}>
						<Text style={{color: 'white'}}>{value.som}</Text>
					</TouchableOpacity>
				)
				}
			})
			
			}
		</View>
	);
}

const styles = StyleSheet.create({
	btnEscolher:{
		padding: 8,
		marginRight: 10,
		backgroundColor: "rgb(116, 67, 191)"
	},
	btnEscolherSelecionado:{
		padding: 8,
		marginRight: 10,
		backgroundColor: "rgba(116, 67, 191, 0.6)",
		borderColor: "rgba(255, 255, 255, 0.5)",
		borderWidth: 1
	}
	

});

export default BtnSons;
