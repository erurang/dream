import React, { memo } from 'react';

const Input = memo((props) => {

    const inputRef = React.createRef()

    const onSubmit = e => {
        e.preventDefault()
        console.log(inputRef.current.value)
        
        const name = inputRef.current.value
        name && props.onAdd(name)
    }

    console.log('input');
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Habit" ref={inputRef}/>
            <button type="submit">추가</button>
        </form>
    )
};)

export default Input;


// import React, { PureComponent } from 'react';

// class Input extends PureComponent {

//     inputRef = React.createRef()

//     onSubmit = e => {
//         e.preventDefault()
//         console.log(this.inputRef.current.value)
        
//         const name = this.inputRef.current.value
//         name && this.props.onAdd(name)
//     }
    
//     render() {
//         console.log('input');
//         return (
//             <form onSubmit={this.onSubmit}>
//                 <input type="text" placeholder="Habit" ref={this.inputRef}/>
//                 <button type="submit">추가</button>
//             </form>
//         )
//     }
// }

// export default Input;