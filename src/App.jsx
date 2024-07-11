import Background from "./components/background/Background"
import Hero from "./components/hero/Hero"
import Navbar from "./components/Navbar"
import Twitter from "./components/twitters/Twitter"

function App() {

  return (
    <>
      <Navbar />
      <Hero title={` CRYPTO ITACHI CALLS`} />
      <div className="twit">
        <Twitter />
      </div>
      <Background />
    </>
  )
}

export default App;