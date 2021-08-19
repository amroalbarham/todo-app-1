import React,{useState,useEffect} from 'react';
export const settingContext = React.createContext();

function SettingContext(props) {
    const [itemPerPage, setItemPerPage] = useState(3);
    const [showCompleted, setShowCompleted] = useState(true);
    const state = {
        itemPerPage,
        showCompleted,
        setItemPerPage,
        setShowCompleted,
    }
    useEffect(() => {
        
        const localSettings = JSON.parse(localStorage.getItem('settings'));
        if(localSettings){
            setItemPerPage(Number(localSettings.itemPerPage));
            setShowCompleted(showCompleted);
        }
        // console.log('component did mount context: ',localSettings.itemPerPage);
    }, [])
    useEffect(()=>{
        // console.log(itemPerPage);
    },[itemPerPage])
    return (
        <settingContext.Provider value={state}>
            {props.children}
        </settingContext.Provider>
    )
}

export default SettingContext
