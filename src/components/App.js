import React from 'react';
import ReactDom from 'react-dom'
import Content from "./Content";
import Header from "./Header";
import RandomNumber from "./RandomNumber";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: Math.round(Math.random()*100)
        }
        this.updateValue = this.updateValue.bind(this);
    }
    updateValue(randomNumber) {
        this.setState({
            number: randomNumber
        }); 
    } 

    render(){
        return (
            <div>
                <Header title={ this.props.headerTitle } />
                <Content title={ this.props.contentTitle } body={ this.props.contentBody } />
                <RandomNumber number={ this.state.number } onUpdate={ this.updateValue } />
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: "I'm default headerTitle",
    contentTitle: "I'm default contentTitle",
    contentBody: "I'm default contentBody"
}

export default App;
