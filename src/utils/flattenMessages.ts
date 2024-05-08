interface NestedMessage {
	[key: string]: string | NestedMessage
}

const flattenMessages = (
	nestedMessages: NestedMessage,
	prefix = ''
): Record<string, string> => {
	const flattened: Record<string, string> = {}
	Object.keys(nestedMessages).forEach(key => {
		const message = nestedMessages[key]
		const prefixedKey = prefix ? `${prefix}.${key}` : key
		if (typeof message === 'string') {
			flattened[prefixedKey] = message
		} else {
			Object.assign(flattened, flattenMessages(message, prefixedKey))
		}
	})
	return flattened
}

export default flattenMessages
