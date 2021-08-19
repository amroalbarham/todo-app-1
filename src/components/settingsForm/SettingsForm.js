import React,{useContext,useEffect,useState} from 'react';
import {settingContext} from '../../context/settingContext';

function SettingsForm() {
    const settings = useContext(settingContext)
    const [show,setShow] = useState(true);
    // console.log("🚀 ~ file: SettingsForm.js ~ line 7 ~ SettingsForm ~ show", show)
    const [numOfitems,setNumOfitems] = useState(1);
    // console.log("🚀 ~ file: SettingsForm.js ~ line 9 ~ SettingsForm ~ numOfitems", numOfitems)

    function handleItemNumber(e){
        setNumOfitems(Number(e.target.value));
    }
    function handleView(e){
        if(e.target.checked){
            setShow(e.target.checked);
        }else{
            setShow(e.target.checked);
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        settings.setItemPerPage(Number(numOfitems));
        settings.setShowCompleted(show);
    }

    useEffect(()=>{
        let payload ={
        itemPerPage:settings.itemPerPage,
        showCompleted:settings.showCompleted,
        }
        if(settings.itemPerPage){
            localStorage.setItem('settings',JSON.stringify(payload));
        }
    },[settings])
    return (
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <label>number of items per page</label>
                <input name='items' type='number' placeholder={1} value={numOfitems} min={1} onChange={handleItemNumber}></input>
                <label>view completed items</label>
                <input name='view' type='checkbox' onChange={handleView}></input>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default SettingsForm
