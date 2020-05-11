export const initialState = [
    {
        id: randomId(),
        item: "Learn reducers",
        completed: false
    },
    {
        id: randomId(),
        item: "???",
        completed: false
    },
    {
        id: randomId(),
        item: "Become a billionaire",
        completed: false
    }
]

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...state, 
                {
                    id: randomId(),
                    item: action.payload.item,
                    completed: false
                }
            ]

        case "TOGGLE_TODO":
            return state.map(item => item.id === action.payload.id ? {...item, completed: !item.completed} : item)

        default:
            return state
    }
}

function randomId () {
    return Math.floor(Math.random() * 1000000000000)
}