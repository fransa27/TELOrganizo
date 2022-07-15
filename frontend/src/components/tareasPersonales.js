import React , {useState}  from 'react';
import { View,Text, StyleSheet} from 'react-native';
import CheckBox  from '@react-native-community/checkbox';
const TareasPersonales= () => {
    const [isSelect, setSelect] = useState(false);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Tareas asignada</Text>
            <View style={styles.checkboxContainer}>
                <CheckBox 
                    disabled={false}
                    value={isSelect}
                    onValueChange={(newValue) => setSelect(newValue)}
                    style={styles.checkbox}
                    
                />
                <Text style={styles.texto}>Tareas personales en checkbox</Text>
            </View>
            
        </View>
    )
    
}
const styles = StyleSheet.create({ 
    container:{
        backgroundColor: '#F5CBA7',
        /* flex: 1,
        alignItems: "center",
        justifyContent: "center", */
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        backgroundColor: '#F6DDCC'
    },
    checkbox: {
        alignSelf: "center",
    },
    title:{
        fontSize: 35,
        fontWeight: "bold"
    },
    texto:{
        fontSize: 20,
    }
})

export default TareasPersonales;