import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }       
    render() {
        
        var list = this.props.items;
        return (  
          <div>
              {
                  list.map((e,i) => 
                    <Todo key={i} info={e}/>)
              }
          </div>
        );
    }

}
export default TodoList;