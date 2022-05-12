import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
      const [Person, setPerson] = useState({
          name: "mohammed", age: 20
      })

    return (
        <UserContext.Provider value={Person}>
            { children }
        </UserContext.Provider>
     )
}

export const useUserContext = () => useContext(UserContext);

