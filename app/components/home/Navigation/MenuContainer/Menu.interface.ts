import { TypeMaterialIconName } from "@/shared/Types/icons.types"

export interface IMenuItem {
	icon: TypeMaterialIconName
	title: string
	link: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
