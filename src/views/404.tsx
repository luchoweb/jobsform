import { Link } from "react-router-dom";
import Image from "../assets/images/404.webp";

const NotFoundView = () => {
  return (
    <main className="not-found pb-5">
      <section className="container text-center">
        <figure className="m-0 mb-5">
          <img src={ Image } alt="error" height={300} />
        </figure>
        <h1 className="display-6 mb-3">Not Found</h1>
        <p className="m-0 mb-4">The page you want to view doesn't exist or has been removed.</p>
        <Link to="/" className="btn btn-primary">
          <i className="fas fa-arrow-left"></i>
          <span className="ms-2">Back home</span>
        </Link>
      </section>
    </main>
  )
}

export default NotFoundView;