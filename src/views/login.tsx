import Layout from "./layout";

import "../styles/views/login.scss";
import LoginForm from "../components/LoginForm";

const LoginView = () => {
  return (
    <Layout className="pt-5 pb-5 pt-lg-0 pb-lg-0">
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-5 col-xl-5">
              <figure className="m-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Login" />
              </figure>
            </div>
            <div className="col-md-8 col-lg-5 col-xl-4 offset-xl-1">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default LoginView;
