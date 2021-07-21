import React, { Component } from 'react';

class Header extends Component {

    render() {

        let num = 0
        this.props.habits.forEach(n => num += n.count)
        
        return (
            <h1>Counter <span>{num}</span></h1>
        )
    }
}

export default Header;