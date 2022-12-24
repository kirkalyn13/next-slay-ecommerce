import Popular from "../Popular/Popular"
import Collection from "../Collection/Collection"
import About from "./About"
import Blogs from "./Blogs"
import Discount from "./Discount"
import Hero from "./Hero"
import NewsLetter from "./NewsLetter"
import Services from "./Services"
import Welcome from "./Welcome"


const Homepage = () => {
  return (
    <section>
        <Hero/>
        <Collection/>
        <Welcome/>
        <Discount/>
        <Blogs/>
        <About/>
        <Services/>
        <Popular/>
        <NewsLetter/>
    </section>
  )
}

export default Homepage