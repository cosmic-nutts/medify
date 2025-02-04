import { createContext, useState } from "react";

export const AdminContext = createContext();  // Named export

const AdminContextProvider = (props) => {
    const [aToken, setAToken] = useState('');
    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const value = {
        aToken,
        setAToken,
        backendURL,
    };

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;  // Default export for AdminContextProvider
