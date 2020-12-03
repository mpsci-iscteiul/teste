import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, TouchableOpacity, Button, TextInput } from 'react-native';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
     
     <View style={styles.containerLogo}>
     <TouchableHighlight onPress={() => console.log("tocou") }>
        <Image 
        style={{ width: 300, height: 300,resizeMode: 'center'}}
        source={require('./easySafeExchangeLogopng.png') }
        />
     </TouchableHighlight>
     </View>

      <View style={styles.containerEmail}>

        <TextInput style={styles.containerInput}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput style={styles.containerInput}
        placeholder="Password"
        autoCorrect={false}
        onChangeText={()=> {}}
        />
      
    <TouchableOpacity>
      <Button 
      title="Login" 
      onPress={() => navigation.navigate("Menu") } 
      color="#fff"
      />
      </TouchableOpacity>



      <TouchableOpacity>
      <Button 
      title="Esqueceu-se da password?" 
      onPress={() => navigation.navigate("forgotPassword") } 
      color="#fff"
      />
      </TouchableOpacity>

      <TouchableOpacity>
      <Button 
      title="Criar conta" 
      onPress={() => navigation.navigate("SignUp") } 
      color="#fff"
      />
      </TouchableOpacity>
      </View>

    </SafeAreaView>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00cccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLogo: {
    justifyContent: 'center',
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
    borderBottomColor:'#fff',
    borderBottomWidth:1
    },
});