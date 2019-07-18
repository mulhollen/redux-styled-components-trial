import axios from "axios";

export function loadColor(){
    return(dispatch)=>{
        return axios.get('http://www.colr.org/json/scheme/random').then((response)=>{
            console.log("color data");
            dispatch(changeColor("#" + response.data.schemes[0].colors[0]))
        })
    }
}

export function changeColor(color) {
    return{
        type:"CHANGE_COLOR",
        color:color
    }
}

export function loadHPHouse(){
    return(dispatch)=>{
        return axios.get('https://www.potterapi.com/v1/sortingHat').then((response)=>{
            console.log("hp api?", response.data);
            dispatch(changeHouse(response.data))
        })
    }
}

export function changeHouse(house) {
    return{
        type:"CHANGE_HOUSE",
        house:house
    }
}