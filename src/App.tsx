import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cat from "./components/classBased/CatList";
import ReducerExample from "./components/reducer/ReducerExample";

function App() {
  return (
    <TodosContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NewTodo />
                <Todos />
              </>
            }
          />
          <Route path="/rocket" element={<Cat />} />
          <Route path="/useReducer" element={<ReducerExample />} />
        </Routes>
      </BrowserRouter>
    </TodosContextProvider>
  );
}

export default App;
