import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string,
  password: string,
  confirmPasswd: string
};

const RegisterForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
      <div className="d-flex flex-row align-items-center justify-content-center justify-content-md-start">
        <p className="lead fw-normal mb-0 me-3">Sign up with</p>
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

      <div className="form-outline mb-3">
        <label className="form-label" htmlFor="password">Confirm password</label>
        <input
          type="password"
          id="confirm-password"
          className={`form-control ${errors.confirmPasswd ? 'is-invalid' : ''}`}
          placeholder="Confirm password"
          {...register(
            "confirmPasswd", {
              validate: (value) => value === watch('password') || `The password doesn't match`
            }
          )}
        />
        {errors.confirmPasswd && <p className="text-danger m-0"><small>{errors.confirmPasswd.message}</small></p>}
      </div>

      <div className="text-center text-md-start mt-4 pt-2">
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-user-plus"></i>
          <span className="ms-2">Register</span>
        </button>
        <p className="small fw-bold mt-4 pt-1 mb-0">Do you have an account? <Link to="/" className="link-danger">Sign in</Link></p>
      </div>
    </form>
  )
}

export default RegisterForm;
