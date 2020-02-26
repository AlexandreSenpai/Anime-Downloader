import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

//styles
import '../styles/nav.css';

export default function Nav(props) {
  return (
    <nav>
        <div className="logo">
            <img src="#" alt="" /> 
        </div>
        <form onSubmit={props.handle_submit}>
            <input type='text' id="term" />
            <button><SearchIcon fontSize='large'/></button>
        </form>
    </nav>
  );
}
