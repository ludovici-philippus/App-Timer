import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Picker, TouchableOpacity, LogBox } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import Escolhas from './components/Escolhas';
import BtnSons from './components/BtnSons';
import BtnIniciar from './components/BtnIniciar';

import Contador from "./Contador";

export default function App() {
	LogBox.ignoreAllLogs(true);

	const [estado, setEstado] = useState("selecionar");
	const [segundos, setSegundos] = useState(0);
	const [minutos, setMinutos] = useState(0);

	const [alarmeSound, setAlarmeSound] = useState([
		{
			id: 1,
			selecionado: true,
			som: 'alame 1',
			file: require('./assets/alarme1.mp3')
		},
		{
			id: 2,
			selecionado: false,
			som: 'alarme 2',
			file: require('./assets/alarme2.mp3')
		},
		{
			id: 3,
			selecionado: false,
			som: 'alarme 3',
			file: require('./assets/alarme3.mp3')
		}
	]);

	function setAlarme(id){
		let alarmesTemp = alarmeSound.map((val) => {
			val.selecionado = false;
			if(id == val.id)
				val.selecionado = true;
			return val;
		})
		setAlarmeSound(alarmesTemp);
	}

	if(estado == "selecionar"){
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
				<Text style={{color: 'white', fontSize: 30}}>Selecione o seu tempo:</Text>
				<Escolhas setMinutos={setMinutos} setSegundos={setSegundos} segundos={segundos} minutos={minutos}/>
				<BtnSons setAlarme={setAlarme} alarmes={alarmeSound}/>
				<BtnIniciar setEstado={setEstado}/>
    		</View>
		);
	}else if(estado == "iniciar"){
		return(
			<Contador alarmes={alarmeSound} setSegundos={setSegundos} setMinutos={setMinutos} setEstado={setEstado} minutos={minutos} segundos={segundos}/>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(80, 50, 168)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
