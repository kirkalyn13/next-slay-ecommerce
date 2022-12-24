import { FaDollarSign, FaLeaf, FaGift } from 'react-icons/fa'

const Welcome = () => {
  return (
    <section className="welcome text-center pb-5">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 text-light m-auto py-5">
          <h2>Get the Latest at a Low Price!</h2>
          <div className="line-white my-4"></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, illum optio. Suscipit quam voluptates ullam dolorum ex deleniti beatae reprehenderit.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
            <div className="card py-3 rounded">
              <div className="card-body">
                <span><FaDollarSign className="welcome-icon"/></span>
                <h3 className="my-3">Budget Friendly</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card py-3">
              <div className="card-body">
                <span><FaLeaf className="welcome-icon"/></span>
                <h3 className="my-3">Eco Friendly</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card py-3">
              <div className="card-body">
                <span><FaGift className="welcome-icon"/></span>
                <h3 className="my-3">Quality Products</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
  )
}

export default Welcome