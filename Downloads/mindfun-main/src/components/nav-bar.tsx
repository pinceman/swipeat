import { Button } from "./ui/button"

export function NavBar() {
  return (
    <nav className="flex items-center justify-between p-2 bg-background border-b border-border">
      <div className="flex items-center gap-4">
        <img
          src="/mindfun-logo.png"
          alt="Mind.fun Logo"
          width={160}
          height={64}
          className="object-contain"
        />
      </div>
      <div className="flex-1 mx-4 flex justify-center">
        <input
          type="search"
          placeholder="Search..."
          className="w-1/2 px-3 py-1.5 bg-transparent border rounded-lg border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>
      <Button variant="default" className="bg-emerald-500 hover:bg-emerald-600">
        Connect Wallet
      </Button>
    </nav>
  )
}