export const cutHash = (hash) => {
    const start = hash.slice(0,8)
    const end = hash.slice(hash.length-8,hash.length)
    return `${start}...${end}`
}