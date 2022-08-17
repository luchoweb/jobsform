import Layout from "./layout";

import "../styles/views/login.scss";
import LoginForm from "../components/LoginForm";

import LoginImage from "../assets/images/login-image.webp";

const LoginView = () => {
  return (
    <Layout className="pt-5 pb-5 pt-lg-0 pb-lg-0">
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-11 col-md-5 col-lg-5 mb-4 mb-lg-0">
              <figure className="m-0">
                <img src={LoginImage} className="img-fluid" alt="Login" />
              </figure>
            </div>
            <div className="col-11 col-md-6 col-lg-5">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default LoginView;
