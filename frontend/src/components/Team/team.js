import { Text, SafeAreaView, FlatList,StyleSheet } from "react-native";
import React , {useState, useEffect}  from 'react';
import axios from 'axios';
const Team = () =>{
    //ver el equipo

    /* const [miembros, setMiembro] = useState([])

    const loadTeamMembers = async ()=>{
        const data = await fetch(`http://localhost:4000/usuario`)
        setMiembro(data)
        console.log(data)
    } */
    const [loaded, setDataLoaded]=useState(false)
    const [miembros, setUsersData]=useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            if(!loaded){
                const result = await axios.get('http://localhost:4000/usuario')
                if(result.data){
                    setDataLoaded(true)
                    setUsersData(result.data)
                    //console.log(result.data)
                }
            }
        }
        fetchData()

    })

    /* useEffect(() => {
        loadTeamMembers()
    }, []) */

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={miembros? miembros : []} 
                renderItem={
                    ({item})=>{ 
                        return(
                            <Text>{item.nombre}</Text>
                        )
                    }
                }
            />
        </SafeAreaView>
    )
    //hacer boton para añadir mienbro al equipo
}

const styles = StyleSheet.create({ 
    container:{
        backgroundColor: '#AF7AC5',
        /* flex: 1,
        alignItems: "center",
        justifyContent: "center", */
    }
})
export default Team