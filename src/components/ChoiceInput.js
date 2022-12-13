import { useState } from "react";
import { View, Text , TouchableOpacity } from "react-native";
import tw from "twrnc";
;

export default function ({ label, choices }) {
  const [isFocused, setIsFocused] = useState(false);

  const [selected, setSelected] = useState(0);


  return (
    <View style={tw`mb-5 `}>
      <Text style={tw` my-1 text-base text-gray-400 font-bold`}>{label}</Text>
      <View
        style={tw`h-12 bg-slate-300 flex flex-row items-center border border-gray-200 ${
          isFocused ? "border-gray-500" : ""
        } rounded`}
      >
        {choices.map((item, index) => {
           
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSelected(index)}
              style={tw` h-full ${
                index == selected ? "bg-white" : ""
              }  flex items-center justify-center w-1/${choices.length}`}
            >
                {/* <>{item.icon}</> */}
              <Text style={tw` text-xs text-gray-400`}>{item.brand}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
