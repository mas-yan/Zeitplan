import Navbar from "./compoents/navbar/Navbar"
import 'react-stacked-carousel/dist/index.css';
import Hero from "./compoents/hero/Hero";
function App() {

  return (
    <div className="bg-gradient-to-t pt-14 pb-20 from-cream-500 to-cream-50">
      <div className="container mx-auto">
        <Navbar/>
        
        <Hero/>
      </div>
    </div>
  )
}

export default App
