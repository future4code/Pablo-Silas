export const goToHome = (history) => {
    history.push('/')
}

export const goToFeed = (history) => {
    history.push('/feed')
}

export const goToPost = (history, id) => {
    history.push(`/post/${id}`)
}