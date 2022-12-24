import React from 'react'

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
            <div className="d-flex align-items-start justify-content-start">
              <img
                src="images/top_rated_1.jpg"
                alt="top-rated-1"
                className="img-fluid rounded w-25 pe-3"
              />
              <div className="description">
                <p className="mb-0">Blue Shirt</p>
                <span>$20.00</span>
              </div>
            </div>
            <div className="d-flex align-items-start justify-content-start">
              <img
                src="images/top_rated_2.jpg"
                alt="top-rated-2"
                className="img-fluid rounded w-25 pe-3"
              />
              <div className="description">
                <p className="mb-0">Blue Shirt</p>
                <span>$20.00</span>
              </div>
            </div>
            <div className="d-flex align-items-start justify-content-start">
              <img
                src="images/top_rated_3.jpg"
                alt="top-rated-3"
                className="img-fluid rounded w-25 pe-3"
              />
              <div className="description">
                <p className="mb-0">Blue Shirt</p>
                <span>$20.00</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 g-3 row">
            <h3 className="fs-5">Best Selling</h3>
            <div className="d-flex align-items-start justify-content-start">
              <img
                src="images/best_selling_1.jpg"
                alt="best-selling-1"
                className="img-fluid rounded w-25 pe-3"
              />
              <div className="description">
                <p className="mb-0">Blue Shirt</p>
                <span>$20.00</span>
              </div>
            </div>
            <div className="d-flex align-items-start justify-content-start">
              <img
                src="images/best_selling_2.jpg"
                alt="best-selling-2"
                className="img-fluid rounded w-25 pe-3"
              />
              <div className="description">
                <p className="mb-0">Blue Shirt</p>
                <span>$20.00</span>
              </div>
            </div>
            <div className="d-flex align-items-start justify-content-start">
              <img
                src="images/best_selling_3.jpg"
                alt="best-selling-3"
                className="img-fluid rounded w-25 pe-3"
              />
              <div className="description">
                <p className="mb-0">Blue Shirt</p>
                <span>$20.00</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 g-3 row">
            <h3 className="fs-5">On Sale</h3>
            <div className="d-flex align-items-start justify-content-start">
              <img
                src="images/on_sale_1.jpg"
                alt="on-sale-1"
                className="img-fluid rounded w-25 pe-3"
              />
              <div className="description">
                <p className="mb-0">Blue Shirt</p>
                <span>$20.00</span>
              </div>
            </div>
            <div className="d-flex align-items-start justify-content-start">
              <img
                src="images/on_sale_2.jpg"
                alt="on-sale-2"
                className="img-fluid rounded w-25 pe-3"
              />
              <div className="description">
                <p className="mb-0">Blue Shirt</p>
                <span>$20.00</span>
              </div>
            </div>
            <div className="d-flex align-items-start justify-content-start">
              <img
                src="images/on_sale_3.jpg"
                alt="on-sale-3"
                className="img-fluid rounded w-25 pe-3"
              />
              <div className="description">
                <p className="mb-0">Blue Shirt</p>
                <span>$20.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Popular