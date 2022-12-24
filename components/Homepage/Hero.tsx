import Link from 'next/link'

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero vh-100 carousel slide pt-4 text-light"
      data-bs-ride="carousel"
    >
      <div className="container carousel-inner h-100 d-flex align-items-center">
        <div className="carousel-item text-center active">
          <h2 className="">Best Collection</h2>
          <h1 className=" py-2 fw-bold">NEW ARRIVALS</h1>
          <button className="btn-accent">
            <Link href="/login" className="text-decoration-none fw-bold text-light" type="button">SHOP NOW</Link>
          </button>
        </div>
        <div className="carousel-item text-center">
          <h2 className="">Best Price & Offer</h2>
          <h1 className=" py-2 fw-bold">NEW SEASON</h1>
          <button className="btn-accent">
            <Link href="/login" className="text-decoration-none fw-bold text-light" type="button">BUY NOW</Link>
          </button>
        </div>
        <div className="carousel-item text-center">
          <h2 className="">Best Time To Buy</h2>
          <h1 className=" py-2 fw-bold">SUMMER SALE</h1>
          <button className="btn-accent">
            <Link href="/login" className="text-decoration-none fw-bold text-light" type="button">GET IT NOW</Link>
          </button>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-slide="prev"
          data-bs-target="#hero"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-slide="next"
          data-bs-target="#hero"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  )
}

export default Hero