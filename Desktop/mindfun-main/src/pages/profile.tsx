import { ChevronUp, ChevronDown, Trophy, Activity, Wallet } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"
import { NavBar } from "../components/nav-bar"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#121212]">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Profile Section */}
        <div className="bg-[#1E1E1E] rounded-xl p-8 mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar and Info */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="w-24 h-24 bg-[#2A2A2A] rounded-full border-4 border-emerald-500" />
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white">Trader.eth</h2>
                <p className="text-gray-400 text-sm">Joined December 2024</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-grow">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-500">67%</p>
                <p className="text-gray-400 text-sm mt-1">Win Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">324</p>
                <p className="text-gray-400 text-sm mt-1">Trades</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">$45k</p>
                <p className="text-gray-400 text-sm mt-1">Volume</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Trophy className="text-emerald-500" size={20} />
                  <p className="text-3xl font-bold text-white">#86</p>
                </div>
                <p className="text-gray-400 text-sm mt-1">Ranking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Trades */}
        <div className="mt-16">
          <Card className="bg-[#1E1E1E] border-0">
            <CardContent className="p-12">
              <div className="pl-4 mb-12"> {/* Conteneur pour le titre avec plus d'espace */}
                <h1 className="text-2xl font-bold text-white">Recent Trades</h1>
              </div>
              <div className="space-y-6">
                {[
                  {
                    question: "Will AI surpass human intelligence?",
                    profit: "+$1,234",
                    percentage: "57.3%",
                    isUp: true,
                  },
                  {
                    question: "Will Bitcoin reach $100k by 2026?",
                    profit: "-$567",
                    percentage: "42.7%",
                    isUp: false,
                  },
                  {
                    question: "Will SpaceX land on Mars by 2030?",
                    profit: "+$890",
                    percentage: "63.1%",
                    isUp: true,
                  },
                ].map((trade, index) => (
                  <div
                    key={index}
                    className="bg-[#2A2A2A] rounded-lg p-4 hover:bg-[#333] transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          trade.isUp ? "bg-emerald-500/20" : "bg-red-500/20"
                        }`}
                      >
                        {trade.isUp ? (
                          <ChevronUp className="text-emerald-500" size={24} />
                        ) : (
                          <ChevronDown className="text-red-500" size={24} />
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-white">{trade.question}</h4>
                          <p
                            className={`font-bold ${
                              trade.isUp ? "text-emerald-500" : "text-red-500"
                            }`}
                          >
                            {trade.profit}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-gray-400 text-sm">2 hours ago</p>
                          <p className="text-gray-400 text-sm">
                            {trade.isUp ? "YES" : "NO"} @ {trade.percentage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 