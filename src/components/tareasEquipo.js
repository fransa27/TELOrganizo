import React , {Component}  from 'react';
import { View,Text, StyleSheet} from 'react-native';

class TareasEquipo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Tareas grupo </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    container:{
        backgroundColor: '#E8DAEF',
        
    }
})

export default TareasEquipo;