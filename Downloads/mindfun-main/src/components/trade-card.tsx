import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

interface TradeCardProps {
  yesPercentage: number
  noPercentage: number
  volume: string
  participants: number
  imageUrl?: string
}

export function TradeCard({ yesPercentage, noPercentage, volume, participants, imageUrl }: TradeCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-zinc-800">
            {imageUrl ? (
              <img src={imageUrl} alt="Trade topic" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-zinc-800" />
            )}
          </div>
          <CardTitle className="text-lg font-normal">Will ai surpasse human intelligence?</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-800">
              <span>YES</span>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-emerald-500"
                >
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
                <span>{yesPercentage}%</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-800">
              <span>NO</span>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-red-500"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
                <span>{noPercentage}%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-zinc-400">
          <div>Volume: {volume}</div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>{participants} participants</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Trade YES</Button>
          <Button variant="outline" className="w-full">
            Trade NO
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}