import React from "react";
import {View, Text} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";

interface FieldPlayerProps {
    player: null;
    position: string;
}

const FieldPlayer = (props: FieldPlayerProps) => {

    const {position, player} = props;

    return (
        <View style={{alignItems: 'center'}}>
            <FontAwesome5 name="tshirt" size={24} color={player ? '#d178db' : '#5c5c5cbb'}/>
            <Text style={{
                backgroundColor: "#333333bb",
                color: "white",
                fontWeight: "bold",
                fontSize: 12,
                padding: 2,
                paddingHorizontal: 7,
            }}>{player ? player.name : position}</Text>
        </View>
    );
};

export default FieldPlayer;