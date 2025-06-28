// redux/store.ts
import { configureStore } from '@reduxjs/toolkit'
import dashSearchReducer from '../features/search/DashSearchSlice'

export const store = configureStore({
  reducer: {
    dashSearch: dashSearchReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
