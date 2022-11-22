import { NavigationContainer } from '@react-navigation/native'
import React, { PropsWithChildren } from 'react'


const RouterProvider = ({ children }: PropsWithChildren) => {
    return (
        <NavigationContainer
        >
            {children}
        </NavigationContainer>

    )
}

export default RouterProvider