import '../styles/globals.css'
import App from 'next/app'
import {Provider} from 'react-redux'
import {init, RematchDispatch, RematchRootState} from '@rematch/core'
import {models, RootModel} from '../shared/model/models'

const store = init({
    models,
})

function MyApp({Component, pageProps}) {
    return <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
}

export default MyApp
export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>