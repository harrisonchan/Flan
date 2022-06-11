import { Action } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ThunkAction } from 'redux-thunk'
import { AppDispatch } from './store'
import { RootState } from './rootReducer'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
