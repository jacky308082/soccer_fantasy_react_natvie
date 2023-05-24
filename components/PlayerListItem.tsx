import React from "react";
import {Image, Text, View, StyleSheet, Pressable} from "react-native";
import {Player} from "../types";
import {useRecoilState, useRecoilValue} from "recoil";
import {myPlayersState, myFormationState} from "../atoms/MyTeam";


interface Props {
    player: Player;
}

const PlayerListItem = ({ player }: Props) => {
    const [myPlayers, setMyPlayers] = useRecoilState(myPlayersState);
    const myFormation = useRecoilValue(myFormationState);

    const numberOfPlayersOnPos = myPlayers.filter((p) => p.position === player.position).length;

    const onPress = () => {
        setMyPlayers((curMyPlayers) => {

            // 刪除已選定的
            if (curMyPlayers.some((p) => p.id === player.id)) {
                return curMyPlayers.filter((p) => p.id !== player.id)
            }

            // check if it's possible to add player
            if (numberOfPlayersOnPos < myFormation[player.position]) {
                return [...curMyPlayers, player]
            }
            return curMyPlayers;
        })
    }

    const isSelected = myPlayers.find((p) => p.id === player.id);

    return (
        <Pressable onPress={onPress} style={[styles.container, {backgroundColor: isSelected ? '#d179db' : "white" }]}>
            <Image
                source={{uri: `https://media.api-sports.io/football/players/${player.id}.png`}}
                style={styles.image}/>

            <View style={{flexGrow: 1}}>
                <Text style={styles.name}>{player.name}</Text>
                <Text>{player.match}</Text>
            </View>

            <View style={[styles.colContainer, {alignItems: "flex-end"}]}>
                <Text style={styles.name}>${(player.price / 1_000_000).toFixed(1)}m</Text>
                <Text style={styles.points}>{player.position}</Text>
            </View>

            <Text style={styles.points}>{player.totalPoints}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    colContainer: {
        marginHorizontal: 15,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 10
    },
    name: {
        fontWeight: "bold",
    },
    points: {
        fontWeight: "bold",
        fontSize: 18
    }
})

export default PlayerListItem;