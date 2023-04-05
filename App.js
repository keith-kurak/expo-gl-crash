import React, { Suspense, useState } from "react";
import {
  View,
  LogBox,
  Button,
  SafeAreaView,
} from "react-native";
import GLScene from "./GLScene";

// Repro steps
// 1. Load using using Expo app on iOS or Android
// 2. Press toggle a few times and it should crash

// THE KEY HERE IS THE # OF GLViews being rendered.
// In testing even 2 can cause a crash, but the more you have at a time the more likely the crash is to occur
const arr = Array(100).fill(0);

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${randomColor}`;
};

const DishBox = () => {
  return (
    <View style={{ width: 54, height: 54, backgroundColor: generateColor(), borderColor: generateColor(), borderWidth: 2 }}>
      <GLScene />
    </View>
  );
};

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <SafeAreaView>
      {show ? (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {arr.map((val,index) => (
            <DishBox key={index.toString()}/>
          ))}
        </View>
      ) : null}
      <View
        style={{
          position: "absolute",
          marginTop: 100,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <Button title="TOGGLE" onPress={() => setShow(!show)} />
      </View>
    </SafeAreaView>
  );
}
