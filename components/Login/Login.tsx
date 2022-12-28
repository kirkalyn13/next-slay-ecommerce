import Link from "next/link"
import Image from "next/image"

const Login = () => {
  return (
    <section>
      <div className="page-content d-flex align-items-center">
      <div className="container d-flex justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
          <div className="auth-card">
            <div className="p-3 mt-3 d-flex justify-content-center">
              <Image src="/logo.png" alt="Site Icon" height={100} width={100}/>
              <span id="brand-name" className="login-title fw-bold fs-1 pt-3 mx-2">Slay.Ph</span>
            </div>
            <div className="row">
              <button className="btn-accent mt-5 mb-3 w-100">
                <i className="bi bi-facebook me-2"></i>
                Login with Facebook
              </button>
            </div>
            <div className="row">
              <button className="btn-accent mb-3 w-100">
                <i className="bi bi-google me-2"></i>
                Login with Google
              </button>
            </div>
            <hr />

            <form>
              <div className="mb-2 mt-5">
                <input
                  type="email"
                  className="form-control auth-input"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control auth-input"
                  placeholder="Password"
                />
              </div>
              <button
                className="btn-accent mt-2 mb-4 w-100"
                type="submit"
              >
                Login
              </button>
            </form>

            <p className="text-center mb-1">
              <Link href="index.html" className="text-muted">Forgot Password?</Link>
            </p>
            <p className="text-center mb-4">
              Don`t have an account?
              <Link href="signup.html" className="text-muted">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Login