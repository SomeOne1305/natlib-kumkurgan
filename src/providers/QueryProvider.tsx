import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { queryClient } from '../constants/query'

export default function QueryProvider(props: React.PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>
			{props.children}
		</QueryClientProvider>
	)
}
