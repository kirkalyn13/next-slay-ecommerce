const NewsLetter = () => {
  return (
    <section className="newsletter py-5">
    <div className="container">
      <div
        className="d-flex align-items-center justify-content-center flex-column"
      >
        <div className="title text-center py-3">
          <h2 className="position-relative d-inline-block ms-4">
            Newsletter Subscription
          </h2>
          <div className="line my-4"></div>
        </div>

        <p className="text-center text-muted">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et porro
          iure totam vero aperiam.
        </p>

        <div className="input-group mb-3 mt-3 w-75">
          <input
            type="text"
            className="form-control search"
            placeholder="Enter Your Email ..."
          />
          <button className="btn-newsletter" type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NewsLetter