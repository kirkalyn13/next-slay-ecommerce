import { FaTruck, FaCheckCircle, FaWallet, FaPeopleArrows } from 'react-icons/fa'

const Services = () => {
  return (
    <section id="services" className="services text-center pb-5">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 m-auto py-5">
          <h2>Our Services</h2>
          <div className="line my-4"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, illum optio. Suscipit quam voluptates ullam dolorum ex deleniti beatae reprehenderit.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
            <div className="card py-3 rounded">
              <div className="card-body">
                <span><FaTruck className="services-icon"/></span>
                <h3 className="my-3">Fast Shipping</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illo.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card py-3">
              <div className="card-body">
                <span><FaCheckCircle className="services-icon"/></span>
                <h3 className="my-3">Quality Control</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illo.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card py-3">
              <div className="card-body">
                <span><FaWallet className="services-icon"/></span>
                <h3 className="my-3">Secure Payment</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illo..</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card py-3">
              <div className="card-body">
                <span><FaPeopleArrows className="services-icon"/></span>
                <h3 className="my-3">Friendly Support</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illo.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
  )
}

export default Services