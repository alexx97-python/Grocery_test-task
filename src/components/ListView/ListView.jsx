import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './ListView.module.css'

const ListView = (props) => {



    function renderItems (){
        if(props.entries){
            if (props.searchStatus === 'all') {
                return props.entries.map( (item, index) => {
                    return (
                    <>
                        <li key={index} className={classes.item}>
                            {/* <NavLink to={'/item/' + item.priority}> */}
                            <p>{item.title}</p>
                            {/* </NavLink> */}
                            <div>
                                <button id={index} disabled={item.status === 'Have' ? true : false} onClick={props.completeItem} className={classes.completeBtn}>
                                    <i id={index} className="fas fa-check"></i>
                                </button>
                                <button id={index} onClick={props.deleteItem} className={classes.trashBtn}>
                                    <i id={index} className="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </li>
                    </>
                    )
                })
            } else if (props.searchStatus === 'have'){
                return props.entries.map( (item, index) => {
                    if (item.status === 'Have'){
                        return (
                            <>
                                <li key={index} className={classes.item}>
                                    {/* <NavLink to={'/item/' + item.priority}> */}
                                    <p>{item.title}</p>
                                    {/* </NavLink> */}
                                    <div>
                                        <button id={index} onClick={props.completeItem} className={classes.completeBtn}>
                                            <i id={index} className="fas fa-check"></i>
                                        </button>
                                        <button id={index} onClick={props.deleteItem} className={classes.trashBtn}>
                                            <i id={index} className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                            </>
                            )
                    }
                    return null;
                })
            } else {
                return props.entries.map( (item, index) => {
                    if (item.status === 'RanOut'){
                        return (
                            <>
                                <li key={index} className={classes.item}>
                                    {/* <NavLink to={'/item/' + item.priority}> */}
                                        <p>{item.title}</p>
                                    {/* </NavLink> */}
                                    <div>
                                        <button id={index} onClick={props.completeItem} className={classes.completeBtn}>
                                            <i id={index} className="fas fa-check"></i>
                                        </button>
                                        <button id={index} onClick={props.deleteItem} className={classes.trashBtn}>
                                            <i id={index} className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                            </>
                            )
                    }
                    return null;
                })
            }
            
    }
        return null
    }
    
    if (props.loading){
            return null
    }

    return (
        <ul className={classes.container}>
            <p>List of items: </p>
            {renderItems()}
        </ul>
    )
}

export default ListView;