export const state = () => ({
    counter: 0,
    authenticated: false,
    details: {
        id: null,
        username: null,
    }
})

export const mutations = {
    increment(state) {
        state.counter++
    }
}