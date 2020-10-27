export const state = () => ({
    users:[
        {
            name: "1",
            id: 1
        },
        {
            name: "2",
            id: 2
        }
    ]
})

export const getters = {
    getUsers: state => state.users
}