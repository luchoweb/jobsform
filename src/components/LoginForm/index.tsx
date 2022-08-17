import { FormEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string,
  password: string
};

const LoginForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
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
          className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
          placeholder="Your email"
          {...register(
            "email", {
              required: 'Enter a valid email address',
              pattern: {
                value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/,
                message: "Enter a valid email address"
              }
            }
          )}
        />
        {errors.email && <p className="text-danger m-0">{errors.email.message}</p>}
      </div>

      <div className="form-outline mb-3">
        <label className="form-label" htmlFor="form3Example4">Password</label>
        <input
          type="password"
          id="password"
          className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`}
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
        {errors.password && <p className="text-danger m-0">{errors.password.message}</p>}
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="form-check mb-0">
          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
          <label className="form-check-label" htmlFor="form2Example3">
            Remember me
          </label>
        </div>
        <a href="#!" className="text-body">Forgot password?</a>
      </div>

      <div className="text-center text-lg-start mt-4 pt-2">
        <button type="submit" className="btn btn-primary btn-lg">Login</button>
        <p className="small fw-bold mt-4 pt-1 mb-0">Don't have an account? <a href="#!"
            className="link-danger">Register</a></p>
      </div>
    </form>
  )
}

export default LoginForm;