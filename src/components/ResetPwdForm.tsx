import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string
};

const ResetPwdForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4 className="fw-normal m-0">Reset password</h4>
      <p className="mt-0 mb-4">We'll send you an email with a link to reset your password.</p>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="email">Registered email</label>
        <input
          type="text"
          id="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          placeholder="Your registered email"
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

      <div className="text-center text-md-start mt-4">
        <button type="submit" className="btn btn-primary">Reset</button>
        <p className="small fw-bold mt-4 pt-2 mb-0">Don't have an account? <Link to="/register" className="link-danger">Register</Link></p>
      </div>

      <div className="text-center text-md-start">
        <p className="small fw-bold mt-1 pt-1 mb-0">Have an account? <Link to="/" className="link-danger">Log in</Link></p>
      </div>
    </form>
  )
}

export default ResetPwdForm;