import React from 'react';
import classes from './FormView.module.css'

const FormView = (props) => {

        return (
        <form onSubmit={props.setItem} className={classes.FormView}>
            <div>
                <label htmlFor="grocery-input"> Item title </label>
                <input type="text" id="grocery-input" />
            </div>
            <div>
                <label htmlFor="grocery-input"> Item priority </label>
                <select type="text" id="grocery-priority"> 
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                </select>
            </div>
            <div className={classes.options}>
                <button type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                    <select name="grocery-status" onChange={props.onStatusChange}>
                        <option value="all">All</option>
                        <option value="have">Have</option>
                        <option value="ran-out">Ran Out</option>
                    </select>
            </div>
        </form>
        )
    }

export default FormView;