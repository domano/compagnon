import { Models } from '@rematch/core'
import { chores } from './chores'

export interface RootModel extends Models<RootModel> {
    chores: typeof chores
}

export const models: RootModel = { chores }