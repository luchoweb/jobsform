type Props = {
  color?: string,
  icon?: string,
  message: string
}

const Alert = ( { color = 'primary', icon, message }: Props ) => {
  return (
    <div className={`alert alert-${color} text-center`}>
      <p className="m-0">
        { icon && <i className={`fa fa-${icon}`}></i> }
        <span className="ms-2">{ message }</span>
      </p>
    </div>
  )
}

export default Alert;
