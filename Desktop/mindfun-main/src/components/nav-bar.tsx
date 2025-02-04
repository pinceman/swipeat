import { Button } from "./ui/button"
import { Link } from "react-router-dom"

export function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b border-border">
      <div className="flex items-center gap-4">
        <img
          src="/mindfun-logo.png"
          alt="Mind.fun Logo"
          width={150}
          height={60}
          className="object-contain"
        />
      </div>
      <div className="flex-1 mx-8 flex justify-center">
        <input
          type="search"
          placeholder="Search..."
          className="w-1/2 px-4 py-2 bg-transparent border rounded-lg border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>
      <div className="flex gap-4">
        <Link to="/profile">
          <Button variant="outline">Profile</Button>
        </Link>
        <Button variant="default" className="bg-emerald-500 hover:bg-emerald-600">
          Connect Wallet
        </Button>
      </div>
    </nav>
  )
}