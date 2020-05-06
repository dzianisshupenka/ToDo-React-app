import React from "react";
import './app-header.css';

const AppHeader = ({todo, end}) => {
    return <div className='app-header d-flex'>
              <h1>My ToDo list</h1>
              <h2>{todo} to do, {end} finished</h2>
           </div>
}

export default AppHeader;