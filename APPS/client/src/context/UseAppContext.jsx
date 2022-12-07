import { createContext} from "react"; // getting neccessary methods for creating app contect


const AppContext = createContext(); // creating context

export function UseAppContextProvider() {
    return <div>reference</div>;
  }

export function useAppContext() 