import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {formatCurrency} from "react-native-format-currency";
import {urlFor} from "../sanity";
import {MinusCircleIcon, PlusCircleIcon} from "react-native-heroicons/solid";

function DishRow({ id, name, description, price, image }) {
    const [valueFormattedWithSymbol] = formatCurrency({ amount: price, code: "GBP" })
    const [isPressed, setIsPressed] = useState(false);

    return (
        <>
        <TouchableOpacity
            onPress={() => setIsPressed(!isPressed)}
            className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
            <View className="flex-row">
                <View className="flex-1 or-2">
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-400 mb-1">{description}</Text>
                    <Text className="text-gray-400">{valueFormattedWithSymbol}</Text>
                </View>
            <View>
                <Image
                    style={{
                        borderWidth: 1,
                        borderColor: "#F3F3F4",
                    }}
                    source={{uri: urlFor(image).url()}}
                    className="h-20 w-20 bg-gray-300 p-4"
                />
            </View>
            </View>
        </TouchableOpacity>

            {isPressed && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity>
                            <MinusCircleIcon
                                color="#00CCBB"
                                // color={items.length > 0 ? "#00CCBB" : "gray"}
                                size={40}
                            />
                        </TouchableOpacity>
                        <Text>0</Text>
                        <TouchableOpacity>
                            <PlusCircleIcon
                                color="#00CCBB"
                                // color={items.length > 0 ? "#00CCBB" : "gray"}
                                size={40}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    )
}

export default DishRow;
