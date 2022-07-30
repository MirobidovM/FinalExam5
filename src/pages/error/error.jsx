import { Header } from '../../components/header';
import error from '../../assets/img/error.png';
import './error.css';
import { useNavigate } from 'react-router-dom';

export const Error = () => {
  let navigate = useNavigate();
  const handleBack = () => navigate('/');
  return (
    <>
      <Header />
      <div className="container d-flex  error_container">
        <img className="d-block mx-auto" src={error} alt="error page" />
        <div className="wrapper_err">
          <h3 className="error__title">Page not found - 404</h3>
          <p className="text-center error__text">
            This page not found (deleted or never exists).Try a phrase in search
            box or back to home and start again.
          </p>
          <button onClick={handleBack} className="error__back">
            <p>TAKE ME HOME!</p>
          </button>
        </div>
      </div>
    </>
  );
};
