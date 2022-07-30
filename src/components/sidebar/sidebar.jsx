import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.svg';
import Facebook from '../../assets/img/side-facebook.svg';
import Github from '../../assets/img/side-github.svg';
import Twitter from '../../assets/img/side-twitter.svg';
import Linkedin from '../../assets/img/side-linkedin.svg';
import Clap from '../../assets/img/clap.svg';
import Share from '../../assets/img/share.svg';

import './sidebar.css';

export const Side = () => {
  return (
    <>
      <div className="aside">
        <Link to="/all">
          <img
            src={Logo}
            alt="site-logo"
            className="aside-logo site-logo"
            width={209}
            height={58}
          />
        </Link>

        <div className="">
          <div className="aside-main">
            <h6 className="aside-title">What I do!</h6>
            <p className="aside-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              aliquet, orci in bibendum luctus, turpis ante pretium velit, eu
              rutrum augue erat ac eros. Cras ultricies mattis convallis.
            </p>
            <p className="header-subtext">EXPLORE ME</p>
            <ul className="side-icons d-flex">
              <li>
                <Link to="/not">
                  <img
                    src={Facebook}
                    alt="side-icon"
                    className="aside-icon"
                    width={10}
                    height={18}
                  />
                </Link>
              </li>
              <li>
                <Link to="/not">
                  <img
                    src={Github}
                    alt="side-icon"
                    className="aside-icon"
                    width={20}
                    height={19}
                  />
                </Link>
              </li>
              <li>
                <Link to="/not">
                  <img
                    src={Twitter}
                    alt="side-icon"
                    className="aside-icon"
                    width={20}
                    height={17}
                  />
                </Link>
              </li>
              <li>
                <Link to="/not">
                  <img
                    src={Linkedin}
                    alt="side-icon"
                    className="aside-icon"
                    width={17}
                    height={17}
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="aside-comment d-flex align-items-center justify-content-start mt-5">
            <div className="d-flex flex-column align-items-center mb-5 me-5">
              <button className="btn d-flex flex-column align-items-center">
                <img
                  className="mb-2"
                  src={Clap}
                  alt="clap-icon"
                  width={18}
                  height={19}
                />
                <span>125</span>
              </button>
            </div>
            <div className="d-flex flex-column align-items-center mb-5 mt-2">
              <img
                className="mb-1"
                src={Share}
                alt="share-icon"
                width={18}
                height={19}
              />
              <span>70</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
