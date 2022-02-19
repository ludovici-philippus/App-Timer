import {Text, View, Picker} from 'react-native';

function Escolhas(props){
	let untilSixty = [];

	for(let i=0; i<60; i++){
		untilSixty.push(i);
	}
	return(	
		<View style={{flexDirection: 'row'}}>
			<Text style={{color: 'white', paddingTop: 16}}>Min:</Text>
			<Picker
				selectedValue={props.minutos}
				style={{height: 50, width: 100, color: 'white'}}
				onValueChange={(itemValue) => props.setMinutos(itemValue)}
			>
				{
					untilSixty.map((val) => {
						return(<Picker.Item label={val.toString()} value={val.toString()}/>);
					})
				}	
			</Picker>
			<Text style={{color: 'white', paddingTop: 16}}>Seg:</Text>
			<Picker
				selectedValue={props.segundos}
				style={{height: 50, width: 100, color: 'white'}}
				onValueChange={(itemValue) => props.setSegundos(itemValue)}
			>
				{
					untilSixty.map((val) => {
						return(<Picker.Item label={val.toString()} value={val.toString()}/>)
					})
				}	
			</Picker>
		</View>
	);
}

export default Escolhas;
