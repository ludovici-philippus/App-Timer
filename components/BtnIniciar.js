import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

function BtnIniciar(props){
	return(
		<TouchableOpacity onPress={() => props.setEstado("iniciar")} style={styles.btnIniciar}><Text style={{color: 'white', fontSize: 20}}>Iniciar</Text></TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	btnIniciar: {
		backgroundColor: "rgb(116, 67, 191)",
		
		marginTop: 30,
		paddingHorizontal: 30,
		paddingVertical: 43,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: "rgba(255, 255, 255, 0.5)"
	}
});

export default BtnIniciar;
