import { Button } from "./ui/button"

export function Hero() {
  return (
    <div className="text-center mb-16 space-y-6">
      <div className="flex justify-center">
        <Button variant="outline" className="rounded-full inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 mr-2 text-emerald-500"
          >
            <path d="M23 6l-9.5 9.5-5-5L1 18" />
            <path d="M17 6h6v6" />
          </svg>
          A new way to trade
        </Button>
      </div>
      <h1 className="text-5xl font-bold tracking-tight">
        Turn Your <span className="text-emerald-500">Convictions</span> Into Trades
      </h1>
      <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
        Welcome to the first market where your opinions are valuable assets. Trade what you believe in, without waiting
        for final resolutions.
      </p>
      <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-2 text-lg">
        Start Trading
      </Button>
    </div>
  )
}