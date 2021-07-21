import React, { PureComponent } from 'react';

class Input extends PureComponent {

    inputRef = React.createRef()

    onSubmit = e => {
        e.preventDefault()
        console.log(this.inputRef.current.value)
        
        const name = this.inputRef.current.value
        name && this.props.onAdd(name)
    }
    
    render() {
        console.log('input');
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Habit" ref={this.inputRef}/>
                <button type="submit">추가</button>
            </form>
        )
    }
}

export default Input;