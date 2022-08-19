type Props = {
  message: string
}

const ErrorAlert = ( { message }: Props ) => {
  return (
    <div className="alert alert-danger text-center">
      <p className="m-0">
        <i className="fas fa-warning"></i>
        <span className="ms-2">{ message }</span>
      </p>
    </div>
  )
}

export default ErrorAlert;
