import React from "react";
import AppRoutes from '@/routes/index'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "@/reducers/index";

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));


function App() {
  return (
    <Provider store={store}>
     <AppRoutes />
   </Provider>
  );
}

export default App;