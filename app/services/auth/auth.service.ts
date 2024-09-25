import { getContentType } from 'api/api.hepleps'
import { axiosClassic } from 'api/interseptors'
import Cookies from 'js-cookie'

import { getAuthUrl } from '@/config/api.config'

import { IAuthResponse } from '@/store/User/user.interface'

import { removeTokenStorage, saveToStorage } from './auth.hepler'

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/register'),
			{ email, password }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},

	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/login'),
			{ email, password }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},

	logout() {
		removeTokenStorage()
		localStorage.removeItem('user')
	},

	async getTokens() {
		const refreshToken = Cookies.get('refreshToken')

		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},
}
