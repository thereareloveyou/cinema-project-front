'use client'

import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

import Button from '../ui/form-elements/Button'

import AuthFields from './AuthFields'
import { IAuthInput } from './auth.interface'
import styles from './auth.module.scss'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()
	const { login, register } = useActions()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type == 'login') login(data)
		else if (type == 'register') register(data)

		reset()
	}

	return (
		<div>
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>
					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</div>
	)
}

export default Auth
