import { taskReducer } from '@/entities/task/store/slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const redusers = combineReducers({
   task: taskReducer
})

export const store = configureStore({
  reducer: redusers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch