import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleAuthAction = async () => {
    if (user) {
      await logout()
      navigate("/login")
    } else {
      navigate("/login")
    }
  }

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <h1 className="text-xl font-semibold text-gray-800">
        Todo Application
      </h1>

      <button
        onClick={handleAuthAction}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        {user ? "Sign Out" : "Sign In"}
      </button>
    </nav>
  )
}
