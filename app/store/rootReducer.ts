import { reducer as toastrReducer } from 'react-redux-toastr'

import { reducer as userReducer } from './User/user.slice'

export const reducers = {
	toastr: toastrReducer,
	user: userReducer,
}
