import { CounterReducer } from '@/entities/counter'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const redusers = combineReducers({
   counter: CounterReducer
})

export const store = configureStore({
  reducer: redusers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch