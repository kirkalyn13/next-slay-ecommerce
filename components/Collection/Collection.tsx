import { useState, useEffect } from 'react'
import ItemCard from '../Common/ItemCard'

const collection = [
  {id: 1, name: "Ruffles Shirt", price: "69.99", src: "/collection/c_formal_gray_shirt.png", isSale: true, isFave: false, rating: 5, tag: "best"},
  {id: 2, name: "Denim Slim Pants", price: "69.99", src: "/collection/c_pant_girl.png", isSale: true, isFave: false, rating: 3, tag: "new"},
  {id: 3, name: "Nude Polo Shirt", price: "69.99", src: "/collection/c_polo-shirt.png", isSale: true, isFave: false, rating: 4, tag: "new"},
  {id: 4, name: "Baby Blue Shirt", price: "69.99", src: "/collection/c_shirt-girl.png", isSale: true, isFave: false, rating: 5, tag: "best"},
  {id: 5, name: "Dark Jacket", price: "69.99", src: "/collection/c_t-shirt_men.png", isSale: true, isFave: false, rating: 4, tag: "feat"},
  {id: 6, name: "Tunic Shirt", price: "69.99", src: "/collection/c_tunic-shirt_girl.png", isSale: true, isFave: false, rating: 4, tag: "feat"},
  {id: 7, name: "Blue Ruffles", price: "69.99", src: "/collection/c_undershirt.png", isSale: true, isFave: false, rating: 3, tag: "feat"},
  {id: 8, name: "Western Shirt", price: "69.99", src: "/collection/c_western-shirt.png", isSale: true, isFave: false, rating: 5, tag: "best"}
]
const specials = [
  {id: 1, name: "Nude Set", price: "69.99", src: "/specials/special_product_1.jpg", isSale: false, isFave: true, rating: 4, tag: "special"},
  {id: 2, name: "Maroon Dress", price: "69.99", src: "/specials/special_product_2.jpg", isSale: false, isFave: true, rating: 5, tag: "special"},
  {id: 3, name: "Denim Set", price: "69.99", src: "/specials/special_product_3.jpg", isSale: false, isFave: true, rating: 5, tag: "special"},
  {id: 4, name: "Stripe Dress", price: "69.99", src: "/specials/special_product_4.jpg", isSale: false, isFave: true, rating: 4, tag: "special"},
]

const Collection = () => {
  const [active, setActive] = useState("all")
  const [collections, setCollections] = useState(collection)

  // Set active file on click
  const changeActive = (toActive: string) => {
    setActive(toActive)
  }

  // Filter collections based on active filter button
  useEffect(()=>{
    switch(active) {
      case "all":
        setCollections(collection)
        break;
      case "best":
        setCollections(collection.filter(item => item.tag === "best"))
        break;
      case "feat":
        setCollections(collection.filter(item => item.tag === "feat"))
        break;
      case "new":
        setCollections(collection.filter(item => item.tag === "new"))
        break;
      default: 
        setCollections(collection)
    }
  },[active])

  return (
    <section id="collection" className="collection text-bg-light">
    <div className="container text-center py-5">
      <div className="row">
        <div className="col-lg-6 m-auto py-5">
          <h2>New Collection</h2>
          <div className="line my-4"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, illum optio. Suscipit quam voluptates ullam dolorum ex deleniti beatae reprehenderit.</p>
        </div>
      </div>
      <div
            className="row d-flex flex-wrap my-2 justify-content-center filter-button-group"
          >
            <button className={active === "all" ? "btn-filter-active col-lg-2 col-10 m-2" : "btn-filter col-lg-2 col-10 m-2"}
            onClick={() => changeActive("all")}>
              All
            </button>
            <button className={active === "best" ? "btn-filter-active col-lg-2 col-10 m-2" : "btn-filter col-lg-2 col-10 m-2"} 
            onClick={() => changeActive("best")}>
              Best Sellers
            </button>
            <button className={active === "feat" ? "btn-filter-active col-lg-2 col-10 m-2" : "btn-filter col-lg-2 col-10 m-2"}
            onClick={() => changeActive("feat")}>
              Featured
            </button>
            <button className={active === "new" ? "btn-filter-active col-lg-2 col-10 m-2" : "btn-filter col-lg-2 col-10 m-2"}
            onClick={() => changeActive("new")}>
              New Arrival
            </button>
        </div>
      <div className="row">
        {collections.map((item:any) => <ItemCard 
        key={item.id} name={item.name} price={item.price} src={item.src} isSale={item.isSale} isFave={item.isFave} rating={item.rating}/>)}
      </div>
      <div className="row">
        <div className="col-lg-6 m-auto py-5">
          <h2>Special Selection</h2>
          <div className="line my-4"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, illum optio. Suscipit quam voluptates ullam dolorum ex deleniti beatae reprehenderit.</p>
        </div>
      </div>
      <div className="row">
        {specials.map((item:any) => <ItemCard 
        key={item.id} name={item.name} price={item.price} src={item.src} isSale={item.isSale} isFave={item.isFave} rating={item.rating}/>)}
      </div>
      </div>
    </section>
  )
}

export default Collection