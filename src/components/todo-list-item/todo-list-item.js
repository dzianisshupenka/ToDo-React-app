import React from "react";
import './todo-list-item.css';

const ListItem = ({ value, onDeleted, onToggleDone, onToggleImportant, done, important }) => {

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (<span className={classNames}>
                <span className='todo-list-item-label'
                      onClick={ onToggleDone }>
                      {value}
                </span>
                  <button type="button"
                          onClick={onToggleImportant}
                          className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-flag" aria-hidden="true"/>
                  </button>

                  <button type="button"
                          className="btn btn-outline-dark btn-sm float-right"
                          onClick={onDeleted}>
                    <i className="fa fa-times" aria-hidden="true"/>
                  </button>
            </span>);
    }

    export default ListItem;
