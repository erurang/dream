import React, { Component } from 'react';

class Input extends Component {

    inputRef = React.createRef()

    onSubmit = e => {
        e.preventDefault()
        console.log(this.inputRef.current.value)
        
        const name = this.inputRef.current.value
        name && this.props.onAdd(name)
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Habit" ref={this.inputRef}/>
                <button type="submit">추가</button>
            </form>
        )
    }
}

export default Input;