import React , {Component}  from 'react';
import { View,Text, StyleSheet} from 'react-native';

class TareasPersonales extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Tareas personales en checkbox</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({ 
    container:{
        backgroundColor: '#F5CBA7',
        
    }
})

export default TareasPersonales;