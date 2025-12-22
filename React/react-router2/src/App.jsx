import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import TodoDetails from "./pages/TodoDetails";
import ProtectedRouter from "./components/ProtectedRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/todos"
          element={
            <ProtectedRouter>
              <Todos />
            </ProtectedRouter>
          }
        ></Route>
        <Route
          path="/todos/:todoId"
          element={
            <ProtectedRouter>
              <TodoDetails />
            </ProtectedRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
