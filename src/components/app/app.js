import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import ToDoList from "../todo-list";
import React, {Component} from "react";
import './app.css'
import AddItem from "../add-item";



export default class App extends Component {
    keyId = 100;
    state = {
        toDoData: [
            this.createToDoItem('Drink tea'),
            this.createToDoItem('Learn React!'),
            this.createToDoItem('Build awesome React Apps')
        ],
        term: ''
    }

    createToDoItem (value) {
        return {
            id: this.keyId++,
            value,
            important: false,
            done: false
        }
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
        let newItem = this.createToDoItem(text);
        this.setState((state) => {
            let newData = [...this.state.toDoData, newItem]
            return {
                toDoData: newData
            }
        })
    }

    toggleProperty (arr, id, propName) {
        const indx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[indx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0, indx),
            newItem,
            ...arr.slice(indx +1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({toDoData}) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({toDoData}) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, 'done')
            }
        })
    }

    search (items, term) {
        if(term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.value.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    onSearchChange = (term) => {
        this.setState({term})
    }

    render() {
        const {toDoData, term} = this.state;
        const doneItems = toDoData.filter((e) => e.done).length;
        const toDoItems = toDoData.length - doneItems;
        const visibleItems = this.search(toDoData, term);
        return (<div className='todo-app'>
                <AppHeader todo={toDoItems} end={doneItems}/>
                <div className='top-panel d-flex'>
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter />
                </div>
                <ToDoList todos={visibleItems}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}/>
                          <AddItem addItem={this.addItem}/>
            </div>
        )
    }
}