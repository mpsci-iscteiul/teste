import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, TouchableOpacity, Button, TextInput } from 'react-native';

export default function SignUp() {
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.containerEmail}>

        <TextInput style={styles.containerInput}
        placeholder="Primeiro nome"
        autoCorrect={true}
        onChangeText={()=> {}}
        />

        <TextInput style={styles.containerInput}
        placeholder="Último nome"
        autoCorrect={true}
        onChangeText={()=> {}}
        />

        <TextInput style={styles.containerInput}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput style={styles.containerInput}
        placeholder="Confirmar email"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput style={styles.containerInput}
        placeholder="Password"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput style={styles.containerInput}
        placeholder="Confirmar password"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

    <TouchableOpacity>
      <Button 
      title="Criar conta" 
      onPress={() => console.log("tocou") } 
      color="#fff"
      />
      </TouchableOpacity>

    </View>
        </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
      backgroundColor: '#00cccc',
      alignItems:'center'
    },
    containerEmail: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
      },
      containerInput: {
        backgroundColor: '#00cccc',
        width: '90%',
        marginBottom: 15,
        color: '#fff',
        fontSize: 20,
        borderRadius:0,
        paddingBottom:10,
        paddingTop:25,
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        },
});