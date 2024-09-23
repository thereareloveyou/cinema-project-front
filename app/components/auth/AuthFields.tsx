import React, { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import { validEmail } from '@/shared/Types/regex'

import Field from '../ui/form-elements/Field'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
				placeholder="E-mail"
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols',
								},
							}
						: {}
				)}
				placeholder="Password"
				type="password"
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields
