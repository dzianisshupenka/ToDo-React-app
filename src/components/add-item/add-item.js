import React, {Component} from "react";

import './add-item.css'

export default class AddItem extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
        localStorage.setItem('last-item', this.state.label)
    }
    render() {
        return <form className='add-item-form d-flex'
                        onSubmit={this.onSubmit}>
                    <input className='form-control'
                           type='text'
                           placeholder='What to do'
                            onChange={this.onLabelChange}
                            value={this.state.label}/>
                    <button className='btn btn-dark'>
                        Add
                    </button>
                </form>
    }
}
