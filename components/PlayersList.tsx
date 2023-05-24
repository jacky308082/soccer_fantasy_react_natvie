import React from "react";
import PlayerListItem from "./PlayerListItem";
import {BottomSheetFlatList} from "@gorhom/bottom-sheet";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {allPlayersState, filteredPlayers} from "../atoms/Players";

const PlayersList = () => {
    // 可以各自拆分
    // const [players, setPlayers] = useRecoilState(allPlayersState);
    // const players = useRecoilValue(allPlayersState);
    // const setPlayers = useSetRecoilState(allPlayersState);
    const players = useRecoilValue(filteredPlayers);

    return (
        <BottomSheetFlatList
            data={players}
            renderItem={({ item }) => <PlayerListItem player={item} />} />
    )
}

export default PlayersList;