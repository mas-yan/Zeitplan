import Navbar from "./compoents/navbar/Navbar"
import 'react-stacked-carousel/dist/index.css';
import Hero from "./compoents/hero/Hero";
import { useEffect, useRef, useState } from "react";
function App() {
  const ref = useRef()
  const [stickyClass, setStickyClass] = useState('');
  const [addH, setAddH] = useState('mt-12 md:mt-20');

useEffect(() => {
  window.addEventListener('scroll', stickNavbar);
  return () => window.removeEventListener('scroll', stickNavbar);
}, []);

const stickNavbar = () => {
  if (window !== undefined) {
    let windowHeight = window.scrollY;
    let sticky = ref.current.offsetTop
    // window height changed for the demo
    if (windowHeight > sticky) {
      setStickyClass('-left-0.5 md:left-auto fixed')
      setAddH('mt-28 md:mt-40 lg:mt-44')
    }else{
      setAddH('mt-10 lg:mt-20')
      setStickyClass('')
    }
  }
};
  return (
    <>
        <div className="bg-gradient-to-t pt-8 md:pt-12 pb-20 from-cream-500 to-cream-50">
          <div className="container mx-auto px-4 md:px-0 ">
            <Navbar myRef={ref} stickyClass={stickyClass} />
            <Hero addH={addH}/>
          </div>
      </div>
    </>
  )
}

export default App
