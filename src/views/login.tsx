import { useState } from "react";
import ErrorAlert from "../components/ErrorAlert";

import "../styles/views/login.scss";
import LoginImage from "../assets/images/login-image.webp";

type Props = {
  typeForm: JSX.Element
}

const LoginView = ({ typeForm }: Props) => {
  const [errorMessage, setErrorMessage] = useState('El correo ya se encuentra registrado.');

  return (
    <main className="login pb-5 pb-lg-0">
      <section className="vh-100">
        { errorMessage && <ErrorAlert message={ errorMessage } /> }
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-11 col-md-5 col-lg-5 mb-4 mb-lg-0">
              <figure className="m-0">
                <img src={LoginImage} className="img-fluid" alt="Login" />
              </figure>
            </div>
            <div className="col-11 col-md-6 col-lg-5">
              { typeForm }
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoginView;
