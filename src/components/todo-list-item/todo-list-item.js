import React from "react";
import './todo-list-item.css';

const ListItem = ({value, important = false}) => {

    const style = {
        color: important ? 'tomato' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }

    return (<span className='todo-list-item'>
                <span className='todo-list-item-label'
                            style={style}>
                    {value}
                </span>
                  <button type="button"
                          className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-flag" aria-hidden="true"/>
                  </button>

                  <button type="button"
                          className="btn btn-outline-dark btn-sm float-right">
                    <i className="fa fa-times" aria-hidden="true"/>
                  </button>
            </span>);
}

export default ListItem;