import React from 'react'
import PopularItem from './PopularItem'

const topRated = [
  {id: 1, name: "Blue Shirt", price: "20.00", src: "/images/top_rated_1.jpg"},
  {id: 2, name: "Blue Watch", price: "20.00", src: "/images/top_rated_2.jpg"},
  {id: 3, name: "Red Jacket", price: "20.00", src: "/images/top_rated_3.jpg"},
]

const bestSelling = [
  {id: 4, name: "Coat", price: "17.00", src: "/images/best_selling_1.jpg"},
  {id: 5, name: "Black Sleeves", price: "17.00", src: "/images/best_selling_2.jpg"},
  {id: 6, name: "Grey Shirt", price: "17.00", src: "/images/best_selling_3.jpg"},
]

const onSale = [
  {id: 7, name: "Blue Bag", price: "10.00", src: "/images/on_sale_1.jpg"},
  {id: 8, name: "Black Jacket", price: "10.00", src: "/images/on_sale_2.jpg"},
  {id: 9, name: "Bluack Shoes", price: "10.00", src: "/images/on_sale_3.jpg"},
]

const Popular = () => {
  return (
    <section id="popular" className="py-5">
      <div className="container">
        <div className="col-lg-6 m-auto py-5 text-center">
          <h2>Popular This Year</h2>
          <div className="line my-4"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, illum optio. Suscipit quam voluptates ullam dolorum ex deleniti beatae reprehenderit.</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 g-3 row">
            <h3 className="fs-5">Top Rated</h3>
            {topRated.map(item => <PopularItem key={item.id} name={item.name} price={item.price} src={item.src}/>)}
          </div>
          <div className="col-md-6 col-lg-4 g-3 row">
            <h3 className="fs-5">Best Selling</h3>
            {bestSelling.map(item => <PopularItem key={item.id} name={item.name} price={item.price} src={item.src}/>)}
          </div>
          <div className="col-md-6 col-lg-4 g-3 row">
            <h3 className="fs-5">On Sale</h3>
            {onSale.map(item => <PopularItem key={item.id} name={item.name} price={item.price} src={item.src}/>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Popular