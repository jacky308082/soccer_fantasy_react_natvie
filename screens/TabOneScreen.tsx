import React, {Suspense, useRef} from "react";
import {StyleSheet, SafeAreaView, Pressable, Text, View} from "react-native";
import Field from "../components/Field";
import TeamStats from "../components/TeamStats"
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet' // flatlist is optional
import PlayerListItem from "../components/PlayerListItem";
import Filters from "../components/Filters";
import PlayersList from "../components/PlayersList";

const TabOneScreen = () => {
    const playersBottomSheet = useRef<BottomSheet>(null);
    const filterBottomSheet = useRef<BottomSheet>(null);
    const viewPlayers = () => {
        playersBottomSheet.current?.expand()
    };

    const snapPoints = ['50%', '90%']

    return (
        <SafeAreaView style={styles.container}>
            <TeamStats/>

            <Field/>

            <Pressable style={styles.buttonContainer} onPress={viewPlayers} >
                <Text>View players</Text>
            </Pressable>

            <BottomSheet
                enablePanDownToClose={true}
                ref={playersBottomSheet}
                index={1}
                snapPoints={snapPoints}
            >
                <Pressable style={[styles.buttonContainer, { marginTop: 10 }]} onPress={() => filterBottomSheet.current?.expand()} >
                    <Text>Filters</Text>
                </Pressable>
                <Suspense fallback={<Text>Loading...</Text>}>
                </Suspense>
                <PlayersList />
                {/*<PlayerListItem player={players[0]}/>*/}
            </BottomSheet>

            <BottomSheet ref={filterBottomSheet} index={0} snapPoints={snapPoints} enablePanDownToClose={true}>
                <Filters />
            </BottomSheet>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#72CC5E"
    },
    buttonContainer: {
        backgroundColor: 'orange',
        width: '90%',
        margin: 20,
        padding: 10,
        alignItems: "center",
        borderRadius: 50,
        marginTop: 'auto'
    },
    contentContainer: {}
})

export default TabOneScreen;