import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import Box from '../component/box';
import Hp from '../component/hp';
import styled from 'styled-components';


const PageHolder = styled.div`
    display: flex;
    width: 30%;
    height: 30vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

class BoxCon extends React.Component {
    render(){

        return(
            <PageHolder>
                <Box handleClick={this.props.loadColor} color={this.props.color} />
                <Hp handleHPClick={this.props.loadHPHouse} house={this.props.house}></Hp>
            </PageHolder>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect (mapStateToProps, actionCreators)(BoxCon);