import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string,
  password: string
};

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
      <div className="d-flex flex-row align-items-center justify-content-center justify-content-md-start">
        <p className="lead fw-normal mb-0 me-3">Sign in with</p>
        <button type="button" className="btn btn-primary btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>
      </div>

      <div className="divider d-flex align-items-center my-4">
        <p className="text-center fw-bold mx-3 mb-0">Or</p>
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="email">Email address</label>
        <input
          type="text"
          id="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          placeholder="Your email"
          {...register(
            "email", {
              required: 'Enter a valid email address',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/,
                message: "Enter a valid email address"
              }
            }
          )}
        />
        {errors.email && <p className="text-danger m-0"><small>{errors.email.message}</small></p>}
      </div>

      <div className="form-outline mb-3">
        <label className="form-label" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          placeholder="Your password"
          {...register(
            "password", {
              required: 'Enter a valid password',
              minLength: {
                value: 8,
                message: 'Min 8 characters'
              },
              maxLength: {
                value: 12,
                message: 'Max 12 characters'
              }
            }
          )}
        />
        {errors.password && <p className="text-danger m-0"><small>{errors.password.message}</small></p>}
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="form-check mb-0">
          <input className="form-check-input me-2" type="checkbox" id="remember" />
          <label className="form-check-label" htmlFor="remember">
            Remember me
          </label>
        </div>
        <Link to="/reset-passwd" className="text-body">Forgot password?</Link>
      </div>

      <div className="text-center text-md-start mt-4 pt-2">
        <button type="submit" className="btn btn-primary">
          <span className="me-2">Sign in</span>
          <i className="fas fa-sign-in"></i>
        </button>
        <p className="small fw-bold mt-4 pt-1 mb-0">Don't have an account? <Link to="/register" className="link-danger">Register</Link></p>
      </div>
    </form>
  )
}

export default LoginForm;
