import { configureStore } from '@reduxjs/toolkit'
import navReducer from '../redux/navSlice'
// ...

const store = configureStore({
    reducer: {
        nav: navReducer,
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch