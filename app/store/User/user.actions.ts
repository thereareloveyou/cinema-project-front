import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'api/api.hepleps'
import { toastr } from 'react-redux-toastr'

import { toastError } from '@/utils/toast-error'

import { AuthService } from './../../services/auth/auth.service'
import { IAuthResponse, IEmailPassword } from './user.interface'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			AuthService
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Competed successfully')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login', 'Competed successfully')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () =>
	AuthService.logout()
)

export const checkAuth = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/checkAuth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) == 'jwt expired') {
				toastError(
					'Logout',
					'Your authorization is finished, please sign in again'
				)
				thunkApi.dispatch(logout)
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)
