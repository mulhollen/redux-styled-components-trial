let defaultState={
    color:"tan",
    house:"muggle"
}

const mainReducer = (state = defaultState, action) => {
    if(action.type === "CHANGE_COLOR") {
        console.log("color");
        return {
            ...state,
            color: action.color
        }
    } else if(action.type === "CHANGE_HOUSE") {
        console.log("harry potter");
        return {
            ...state,
            house: action.house
        }

    } else {
        console.log("else");
        return {
            ...state
        }
    }
}

export default mainReducer;