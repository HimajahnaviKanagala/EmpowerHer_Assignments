import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import Todos from "../pages/Todos"
import ProtectedRoute from "../utils/ProtectedRoute"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/todos"
        element={
          <ProtectedRoute>
            <Todos />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
