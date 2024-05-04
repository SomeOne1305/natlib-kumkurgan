import { ReactNode, useEffect, useRef } from 'react'

import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

interface FancyboxProps {
	children: ReactNode
	delegate?: string
	options?: any // Assuming Options is the type for fancybox options
}

function Fancybox(props: FancyboxProps) {
	const containerRef = useRef(null)

	useEffect(() => {
		const container = containerRef.current

		const delegate = props.delegate || '[data-fancybox]'
		const options = props.options || {}

		NativeFancybox.bind(container, delegate, options)

		return () => {
			NativeFancybox.unbind(container)
			NativeFancybox.close()
		}
	})

	return <div ref={containerRef}>{props.children}</div>
}

export default Fancybox
