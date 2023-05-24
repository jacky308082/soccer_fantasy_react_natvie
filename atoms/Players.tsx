import {atom, selector} from "recoil";
import {players} from "../assets/data/players";
import {resolve} from "expo-router/build/link/path";

const pos2pos = {
    'Attacker': 'FWD',
    'Midfielder': 'MID',
    'Defender': 'DEF',
    'Goalkeeper': 'GCK'
}

// atom不能async，selector可以

export const allPlayersState = selector({
    key: 'allPlayersState',
    get: async () => {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v2/players/team/33/2020-2021', {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "",
                    "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
                }
            }
        );

        const json = await response.json();

        return json.response.map(entry => ({
                        id: entry.player_id,
                        name: entry.player_name,
                        match: 'SDS v ZCC',
                        price: 11_300_300,
                        position: pos2pos[entry.statistics[0].games.position],
                        totalPoints: 29
                    }));
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => resolve(
        //         return response.response.map(entry => ({
        //             id: entry.player_id,
        //             name: entry.player_name,
        //             match: 'SDS v ZCC',
        //             price: 11_300_300,
        //             position: pos2pos[entry.statistics[0].games.position],
        //             totalPoints: 29
        //         }));
        //     ), 10_000);
        // })
    }
});

export const positionFilterState = atom({
    key: 'positionFilterState',
    default: [] as string[]
})

export const filteredPlayers = selector({
    key: 'filteredPlayers',
    get: ({get}) => {
        const players = get(allPlayersState);
        const filters = get(positionFilterState);
        return players.filter(player => filters.length === 0 || filters.includes(player.position));
    }
})

