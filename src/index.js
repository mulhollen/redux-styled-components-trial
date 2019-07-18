import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import BoxCon from './container/box-container';
import './index.css';
import styled from 'styled-components';

const PageContainer = styled.div`
    display: flex;
    background-color: plum;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

let store = createStore(reducers, applyMiddleware(thunk))

class App extends React.Component{
    render(){
        return(
            <PageContainer>
                <BoxCon />
            </PageContainer>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

