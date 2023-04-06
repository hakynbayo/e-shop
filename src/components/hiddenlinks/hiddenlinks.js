import React from 'react'
import {useSelector} from 'react-redux'
import { selectIsLoggedIn } from '../../redux/slice/authSlice'



export const ShowOnLogin = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if(isLoggedIn){
        return (
            <div>
                {children}
            </div>
        )
    }
    return null
}
export const ShowOnLogOut = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if(!isLoggedIn){
        return (
            <div>
                {children}
            </div>
        )
    }
    return null
}

