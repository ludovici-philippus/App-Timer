import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Picker, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';


export default function Contador(props) {
	var done = false;

	useEffect(() => {
		if(done == false){
			const timer = setInterval(() => {
				props.setSegundos(props.segundos - 1);

				if(props.minutos <= 0 && props.segundos == 0){
					done = true;
					playSound();
					alert("Chegou ao fim!");
					resetar();
				}
				else if(props.segundos <= 0){
					props.setSegundos(59);
					props.setMinutos(props.minutos - 1);
				}	
			}, 1000);
			return () => clearInterval(timer);
		}
	})

	function resetar(){
		props.setEstado("selecionar");
	}
	
	function formatarNumero(number){
		var finalNumber = "";
		if(number < 10){
			finalNumber = "0"+number;
		}else
			finalNumber = number;
		return finalNumber;
	}

	async function playSound(){
		const soundObject = new Audio.Sound();
		try{
			var file;
			props.alarmes.map((alarme) => {
				if(alarme.selecionado){
					file = alarme.file;
					console.log(alarme);
				}
			});
			console.log(file);

			await soundObject.loadAsync(file);
			await soundObject.playAsync();
		}catch(error){
			console.log(error);
		}
	}

	return (
    	<View style={styles.container}>
			<StatusBar style="auto" />
			<LinearGradient
				colors={['rgba(0, 0, 0, 0.8)', 'transparent']}
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: 0,
					height: '100%'
				}}
			/>
			<View style={{flexDirection: 'row'}}>
				<Text style={styles.textContador}>{formatarNumero(props.minutos)} : </Text>
				<Text style={styles.textContador}>{formatarNumero(props.segundos)}</Text>
			</View>
			<TouchableOpacity onPress={() => resetar()} style={styles.btnIniciar}><Text style={{color: 'white', fontSize: 20}}>Resetar</Text></TouchableOpacity>
    	</View>
		);
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
    	backgroundColor: 'rgb(80, 50, 168)',
	    alignItems: 'center',
    	justifyContent: 'center',
	},
	textContador: {
		color: 'white',
		fontSize: 40
	},
	btnIniciar: {
		backgroundColor: "rgb(116, 67, 191)",
		
		marginTop: 30,
		paddingHorizontal: 20,
		paddingVertical: 43,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: "rgba(255, 255, 255, 0.5)"
	}

});
