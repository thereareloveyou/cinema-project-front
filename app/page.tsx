'use client'

import { NextPage } from 'next'
import { toastr } from 'react-redux-toastr'

const HomePage: NextPage = () => {
	return <div><button onClick={()=> toastr.success('Auth', 'Succ')}>Button</button></div>
}

export default HomePage
