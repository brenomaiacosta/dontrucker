import React, { createContext, useState, useContext, useEffect } from 'react';

import * as saleApi from '../service/sales.api';
import { usersText } from '../data/index';
import { userData } from '../data/index';

const SalesContext = createContext({});

const SalesProvider = ({ children }) => {
    const [userSelect, setUserSelect] = useState({});
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);

    async function loadUsers() {
        // const user = {
        //     latitude : "1",
        //     longitude : "12"
        // }

        // const response = await saleApi.loadUsers(user);

        // if (response.status == '200') {
        //     setUsers(response.data);
        // }
        // else {
        //     // alert('Deu erro');
        // }
        
        setUsers(usersText);
        setUser(userData);

        return;
    }
    
    return (
        <SalesContext.Provider
            value={{
                userSelect, setUserSelect, users, loadUsers, setUsers, user, setUser,
                users, setUsers, userSelect, setUserSelect
            }}
        >
            {children}
        </SalesContext.Provider>
    )
}

function useSales() {
    const context = useContext(SalesContext);

    if (!context) {
       throw new Error('useSales must be used within an SalesProvider.');
    }

    return context;
}

export { SalesProvider, useSales };