import React, { PropsWithChildren } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
type Props = {}

const queryClient = new QueryClient();


const ApiProvider = ({ children }: PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default ApiProvider