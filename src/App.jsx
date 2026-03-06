import gsap from 'gsap'
import {ScrollTrigger, SplitText } from 'gsap/all'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <main>
           <NavBar />
           <Hero />
           <div className='h-dvh bg-black'>
            
           </div>
        </main>
    )
}

export default App