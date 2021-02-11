import React from 'react';

class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        console.log(this.props)
        return (  
            <div>
                <h2>{this.props.info.text} -- {this.props.info.priority}</h2> 
            </div>
        );
    }

}

export default Todo;