import { Models } from '@rematch/core'
import { chores } from './chores'

export interface RootModel extends Models<RootModel> {
    choresState: typeof chores
}

export const models: RootModel = { choresState: chores }