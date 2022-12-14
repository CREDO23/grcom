import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import tw from "twrnc";

export default function ({ title, auxilliary, onPress }) {
  return (
    <TouchableOpacity
      style={tw`h-14 ${
        auxilliary ? " bg-transparent border border-yellow-500" : "bg-sky-900"
      } my-2  w-full flex items-center justify-center rounded-md`}
      onPress={() => onPress()}
    >
      <Text
        style={tw`${
          auxilliary ? " font-light" : " font-medium"
        }  text-yellow-500 text-lg`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
