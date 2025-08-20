import Error from '../assets/not-found.png'
import {Link} from 'react-router-dom';
import '../styles/NotFound.css'

function NotFound() {
  return (
    <div className="section-error">
      <img src={Error} alt="Error 404" />
      <h1>Ohh!</h1>
      <p>We can't seem to find page you are looking for</p>
      <Link to='/' className='btn-back-home'>Back Home</Link>
    </div>
  )
}

export default NotFound