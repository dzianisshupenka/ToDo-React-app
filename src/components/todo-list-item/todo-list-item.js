import React, { Component } from "react";
import './todo-list-item.css';

export default class ListItem extends Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            }
        })
    }

    onMarkImportant = () => {
        this.setState((state) => {
            return {
                important: ! state.important
            }
        })
    }

    render () {
        const { value, onDeleted } = this.props;
        const { done, important } = this.state;
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (<span className={classNames}>
                <span className='todo-list-item-label'
                      onClick={ this.onLabelClick }>
                      {value}
                </span>
                  <button type="button"
                          onClick={this.onMarkImportant}
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
}