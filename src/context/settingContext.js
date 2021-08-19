import React,{useState} from 'react';
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
    return (
        <settingContext.Provider value={state}>
            {props.children}
        </settingContext.Provider>
    )
}

export default SettingContext
