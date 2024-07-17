import { createContext ,useContext} from "react";

const LayoutWrapper = createContext();

export const Layout = ({ children }) => {
  return <LayoutWrapper.Provider value=''>{children}</LayoutWrapper.Provider>;
};

export const useLayout = () =>{
    return useContext(LayoutWrapper)
}