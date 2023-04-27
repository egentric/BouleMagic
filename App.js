import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [index, setIndex] = useState(null);

  const tableau = [
    "Je sais pas!",
    "A t'on avis!",
    "Bah réfléchi un peu ça changera!",
    "Pfff n'importe quoi!",
    "Mais tu délire là!",
    "Mais tu me prends pour Nostradamus ou quoi!",
    "Allez arrête ses jeux stupides et va bosser!",
    "Super...",
    "Et allez... encore une question de merde!",
  ];

  const generateRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * tableau.length);
    setIndex(randomIndex);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Poser votre question</Text>
      <Text style={styles.text}>Et cliquez sur la boule magique</Text>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={generateRandomIndex}
      >
        <Image style={styles.boule8} source={require("./assets/boule8.png")} />
      </TouchableOpacity>
      {index !== null && <Text style={styles.text}>{tableau[index]}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  boule8: {
    width: 150,
    height: 150,
  },
});
