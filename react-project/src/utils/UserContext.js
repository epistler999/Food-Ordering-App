import { createContext } from "react";

const UserContext = createContext({
    userName : "default name"
});

export default UserContext;