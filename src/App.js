import { useEffect } from 'react';
import {Provider,useDispatch} from "react-redux"
import { store } from './config/Store';
import Router from "./pages/Router"
import './App.css';


function App() {

  return (
    <Provider store={store}>
    <Router />
    </Provider>
  );
}

export default App;

