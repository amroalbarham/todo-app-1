import React from 'react'
import useForm from '../../hooks/form.js';
import { Button } from "@blueprintjs/core";

function Form(props) {   
    const { handleChange, handleSubmit } = useForm(props.addItem);
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <h2>Add To Do Item</h2>

                <label>
                    <span>To Do Item</span>
                    <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
                </label>

                <label>
                    <span>Assigned To</span>
                    <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
                </label>

                <label>
                    <span>Difficulty</span>
                    <input onChange={handleChange} defaultValue={3} type="range"  min={1} max={5} name="difficulty" />
                </label>

                <label>
                    <Button type="submit">Add Item</Button>
                </label>
            </form>
        </div>
    )
}

export default Form
