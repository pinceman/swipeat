import { createGlobalStyle } from 'styled-components'
import { NavBar } from "./components/nav-bar"
import { Hero } from "./components/hero"
import { TradeCard } from "./components/trade-card"
import './styles/global.css'

// Ajoutez la police M PLUS Code Latin via Google Fonts
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin:wght@100;200;300;400;500;600;700&display=swap');

  body {
    font-family: 'M PLUS Code Latin', sans-serif;
  }
`

function App() {
  const sampleImages = [
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
  ]

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <GlobalStyle />
      <NavBar />
      <main className="container mx-auto px-4 py-16">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleImages.map((imageUrl, i) => (
            <TradeCard
              key={i}
              yesPercentage={57.3}
              noPercentage={42.7}
              volume="45.6k"
              participants={892}
              imageUrl={imageUrl}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
