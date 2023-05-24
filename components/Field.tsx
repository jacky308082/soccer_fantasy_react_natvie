import React from "react";
import {View, Text, ImageBackground, StyleSheet, SafeAreaView} from "react-native";
import FieldPlayer from "./FieldPlayer";
import {FontAwesome5} from "@expo/vector-icons";
import {useRecoilValue} from "recoil";
import {myPlayersByPosition} from "../atoms/MyTeam";

// const players: { [key: string]: null[] } = {
//     FWD: [null, null, null],
//     MID: [null, null, null],
//     DEF: [null, null, null, null],
//     GKC: [null]
// }

const Field = () => {

    const players = useRecoilValue(myPlayersByPosition);

    return (
        <ImageBackground
            source={require('../assets/images/field.jpg')}
            resizeMode="contain"
            style={{
                width: '100%',
                aspectRatio: 2 / 3,
                justifyContent: 'space-around',
                alignItems: 'center'
            }}
        >
            {Object.keys(players).map((position) => (
                <View
                    key={position}
                    style={{
                    flexDirection: "row",
                    justifyContent: 'space-around',
                    width: '100%',
                }}>
                    {players[position].map((player) => (
                        <FieldPlayer player={player} position={position}/>
                    ))}</View>
            ))}
        </ImageBackground>
    )
}

export default Field;