import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import { FieldError, FieldErrors } from 'react-hook-form'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}

type TypeInputFieldField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputFieldField {}
