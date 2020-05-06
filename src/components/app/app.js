import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import ToDoList from "../todo-list";
import React, {Component} from "react";
import './app.css'
import AddItem from "../add-item";



export default class App extends Component {
    state = {
        toDoData: [
            {id: 1, value:'Drink tea', important: false},
            {id: 2, value:'Learn React', important: true},
            {id: 3, value:'Build awesome React Apps', important: true}
        ]
    }

    deleteItem = (id) => {
        this.setState((state) => {
            const indx = state.toDoData.findIndex((el) => el.id === id);
            const newArr = [
                ...state.toDoData.slice(0, indx),
                ...state.toDoData.slice(indx +1)
            ];
            return {
                toDoData: newArr
            }
        })
    }

    addItem = (text) => {
        let newItem = {
            id: this.state.toDoData.length + 1,
            value: text,
            important: false
        }
        this.setState((state) => {
            let newData = [...this.state.toDoData, newItem]
            return {
                toDoData: newData
            }
        })

    }

    render() {
        return (<div className='todo-app'>
                <AppHeader todo={3} end={2}/>
                <div className='top-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <ToDoList todos={this.state.toDoData}
                          onDeleted={this.deleteItem}/>
                          <AddItem addItem={this.addItem}/>
            </div>
        )
    }
}