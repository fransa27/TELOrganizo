import React , {useState}  from 'react';
import { View,Text, StyleSheet} from 'react-native';
import CheckBox  from '@react-native-community/checkbox';
const TareasPersonales= () => {
    const [isSelect, setSelect] = useState(false);
    return(
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.title}>Tareas Asignadas</Text>
                <View style={styles.checkboxContainer}>
                    <CheckBox 
                        disabled={false}
                        value={isSelect}
                        onValueChange={(newValue) => setSelect(newValue)}
                        style={styles.checkbox}
                    />
                    <Text>Tareas personales en checkbox</Text>
                </View>
            </View>
        </View>
        
    )
    {/* <View style={styles.container}>
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
            
        </View> */}
    
}
const styles = StyleSheet.create({ 
    container:{
        /* backgroundColor: '#F5CBA7', */
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
        fontSize: 20,
        fontWeight: "bold"
    },
    texto:{
        fontSize: 20,
    },
    box1: {
        marginHorizontal: 10,
        marginTop: 10,
        padding: 30,
        backgroundColor: '#D5F2E5',
        fontSize: 24,
        borderRadius: 10,
    },
})

export default TareasPersonales;