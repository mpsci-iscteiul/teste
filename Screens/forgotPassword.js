import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, TouchableOpacity, Button, TextInput } from 'react-native';

export default function SignUp({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.containerEmail}>

        <TextInput style={styles.containerInput}
        placeholder="Introduza o seu email"
        autoCorrect={true}
        onChangeText={()=> {}}
        />

    <TouchableOpacity>
      <Button 
      title="Enviar password" 
      onPress={() => alert("Consulte o seu email") } 
      color="#fff"
      />
      </TouchableOpacity>

    <TouchableOpacity>
      <Button 
      title="Voltar ao Login" 
      onPress={() => navigation.navigate("Login") } 
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