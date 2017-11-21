import React from "react";
import PropTypes from "prop-types";

class RandomNumber extends React.Component {
    updateNumber() {
        let number = Math.round(Math.random()*100);
        this.props.onUpdate(number);
    }
    constructor(props) {
        super(props);
        this.updateNumber = this.updateNumber.bind(this);
    }
    render() {
        return(
            <div>
                <h1>Number is : { this.props.number }</h1>
                <button onClick={ this.updateNumber }>Randomize</button>
            </div>
        );
    }
}

RandomNumber.propTypes = {
    number: React.PropTypes.number.isRequired
}

export default RandomNumber;