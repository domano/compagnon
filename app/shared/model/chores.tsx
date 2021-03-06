import {createModel} from "@rematch/core";
import {RootModel} from "./models";

export const demoChore: Chore = {
    key: 1,
    title: 'Klo',
    countdown: 'Noch 3 Tage',
    interval: 'Jede Woche',
}

export type Chore = {
    key: number
    title: string
    countdown: string
    interval: string
}

type ChoresState = {
    chores: Chore[]
    showChoreCreator: boolean
}


export const chores = {
    state: {
        chores: [demoChore],
        showChoreCreator: false,
    } as ChoresState,
    reducers: {
        addChore (state: ChoresState, c: Chore) {
            return {
                ...state,
                chores: [...state.chores, c]
            }
        },
        toggleCreator(state: ChoresState) {
            return {
                ...state,
                showChoreCreator: !state.showChoreCreator
            }
        }
    },
    effects: (dispatch) => ({
        // Example:
        // const { players } = dispatch
        // return {
        //     async getPlayers(): Promise<any> {
        //         let response = await fetch('https://www.balldontlie.io/api/v1/players')
        //         let { data }: { data: PlayerModel[] } = await response.json()
        //         players.SET_PLAYERS(data)
        //     },
        // }
    }),
}