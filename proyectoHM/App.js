import { StatusBar } from 'expo-status-bar'; //barra superior de hora y bateria, se utiliza con estilo automatico (black/white)
import React from 'react'; //por default hay que tenerlo
import { StyleSheet, Text, View, TextInput } from 'react-native'; //nos permite crear la función y guardarla en la variable styles

//div = view

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido</Text>
      <Text style={styles.subtitulo}>Ingresa tu correo</Text>
      <TextInput 
        placeholder='usuario@gmail.com'
        style={styles.texto_inputs}
      />
      <TextInput 
        placeholder='contraseña'
        style={styles.texto_inputs}
        secureTextEntry={true}
      />
      <Text style={styles.olvidaste_contraseña}>Olvidaste tu contraseña</Text>
      <Text style={styles.olvidaste_contraseña}>¿No tienes una cuenta?</Text>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 55,
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'System' 
  },
  subtitulo: {
    fontSize: 20,
    color: 'gray',
    fontFamily: 'System'
  },
  texto_inputs: {
    //borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    paddingStart: 20,
    width: '70%',
    marginTop: 20,
    textAlign: 'center',
    borderRadius: 30,
    height: 50,
    backgroundColor: '#fff',
  },
  olvidaste_contraseña: {
    fontSize: 14,
    fontFamily: 'System',
    color: 'gray',
    marginTop: 20,
  }



});
