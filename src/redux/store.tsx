import { configureStore } from '@reduxjs/toolkit'
import navReducer from '../redux/navSlice'
import contactReducer from '../redux/contactSlice'
// ...

const store = configureStore({
    reducer: {
        nav: navReducer,
        contact: contactReducer
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch