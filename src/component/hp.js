import React from 'react';
import styled from 'styled-components';

const HarryPotter = styled.div`
    width: 100%;
    height: 50%;
    background-color: ${props => props.inputColor || "palevioletred"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        color: purple;
        border: none;
        font-size: 30px;
        outline: none;
        font-weight: bold;
    }

    button:hover {
        color: orange;
    }

    button:active {
        color: hotpink;
    }
`

let harryPotterColor;


class HP extends React.Component {

    render(){

        return(
            <HarryPotter style={
                
                this.props.house === "Slytherin"
                ?
                {backgroundColor:"green"}
                : this.props.house === "Hufflepuff"
                ?
                {backgroundColor:"yellow"}
                : this.props.house === "Gryffindor"
                ?
                {backgroundColor:"red"}
                : this.props.house === "Ravenclaw"
                ?
                {backgroundColor:"blue"}
                :
                {backgroundColor:"white"}
            }>
                <button onClick={()=>{this.props.handleHPClick()}}>SORTING HAT</button>
                {
                    this.props.house
                    ?
                    <p>you a {this.props.house}</p>
                    :
                    <p>you a muggle, gurl</p>
                }
            </HarryPotter>
        )
    }
}

export default HP;