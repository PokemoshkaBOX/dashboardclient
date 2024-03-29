import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from "./User";
export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{
      user: new User(),
  }}>
    <App />
  </Context.Provider>
);
