import React, { FC } from 'react'
import Menu from './Menu'
import { firstMenu, userMenu } from './Menu.data'



const MenuContainer:FC = () => {
  return <div>
    <Menu menu={firstMenu}></Menu>
    <Menu menu={userMenu}></Menu>
    
  </div>
}

export default MenuContainer