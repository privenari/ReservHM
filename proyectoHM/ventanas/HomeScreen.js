import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text
        style = {{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%"
        }}>
      Home
      </Text>
      <TouchableOpacity
        style = {{
          backgroundColor: "blue",
          padding: 10,
          marginTop: "20%",
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('Stack')}  // Corregido para navegar al Stack
      >
      <Text
        style = {{
          fontSize: 15,
          textAlign: "center",
          color: "white",
        }}
      > Go to Stack Screen
      </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style = {{
        backgroundColor: "green",
        padding: 10,
        marginTop: 20,
        width: "50%",
        alignSelf: "center",
        borderRadius: 10,
      }}
      onPress={() => navigation.navigate('Citas_medicas_agendadas')}>
        <Text
          style = {{
            fontSize: 15,
            textAlign: "center",
            color: "white",
          }}
        >Ver citas medicas agendadas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {{
          backgroundColor: "red",
          padding: 10,
          marginTop: 20,
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('Reprogramacion')}  // Navega a "Reprogramación"
      >
        <Text
          style = {{
            fontSize: 15,
            textAlign: "center",
            color: "white",
          }}
        > Reprogramar Citas
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;