import React , {Component}  from 'react';
import { View,Text, StyleSheet} from 'react-native';

class TareasEquipo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Tareas equipo</Text>
                <Text>Tareas grupo </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    container:{
        backgroundColor: '#E8DAEF',
        
    },
    title:{
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default TareasEquipo;