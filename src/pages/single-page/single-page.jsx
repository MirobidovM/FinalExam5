import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Single from '../../assets/img/single.svg';
import Clock from '../../assets/img/clock.svg';
import Search from '../../assets/img/search.svg';

function SinglePage() {
  const { postId } = useParams();

  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      console.log(res);

      if (res.ok) {
        return setPost(await res.json());
      }

      console.log({ status: res.status, message: res.statusText });
    })();
  }, [postId]);

  return (
    <div>
      <form className="d-flex search-form justify-content-end">
        <input type={'search'} placeholder={'Search'} className="search-inp" />

        <li title="Search" className="search-icon" type="search">
          <img src={Search} alt="search-icon" width={16} height={16} />
        </li>
      </form>

      <div className="body">
        <li className="list-unstyled">
          <p className="comment-subtitle">User interface</p>
          <h2 className="title-comment mb-3" key={post.id}>
            {post.title}
          </h2>
          <div className="mb-4">
            <span className="me-auto span-date">September 24.2020</span>
            <span className="reading-time">3 minutes read</span>
          </div>
          <img
            loading="lazy"
            className="mb-4"
            src={Single}
            alt="random img"
            width={550}
            height={836}
          />
          <p className="comment" key={post.id}>
            {post.body}
          </p>

          <div>
            <h3 className="mb-4">More like this</h3>
            <div className="post-title-wrapper border-bottom mb-5">
              <div className="d-flex spans">
                <span className="me-auto span-date">September 24.2020</span>
                <span className="span-subtitle">Design theory</span>
              </div>
              <li className="list-unstyled mb-3" key={post.id}>
                <Link className="title" to={`/`}>
                  {post.title}
                </Link>
              </li>

              <div className="d-flex align-items-center mb-3">
                <img src={Clock} alt="clock" width={17.5} height={17.5} />
                <span className="reading-time">3 minutes read</span>
              </div>
            </div>
          </div>

          <div>
            <div className="post-title-wrapper border-bottom mb-5">
              <div className="d-flex spans">
                <span className="me-auto span-date">September 24.2020</span>
                <span className="span-subtitle">Design theory</span>
              </div>
              <li className="list-unstyled mb-3">
                <Link className="title" to={`/`} key={post.id}>
                  {post.title}
                </Link>
              </li>

              <div className="d-flex align-items-center mb-3">
                <img src={Clock} alt="clock" width={17.5} height={17.5} />
                <span className="reading-time">3 minutes read</span>
              </div>
            </div>
          </div>
          <div>
            <div className="post-title-wrapper border-bottom mb-5">
              <div className="d-flex spans">
                <span className="me-auto span-date">September 24.2020</span>
                <span className="span-subtitle">Design theory</span>
              </div>
              <li className="list-unstyled mb-3">
                <Link className="title" to="/" key={post.id}>
                  {post.title}
                </Link>
              </li>

              <div className="d-flex align-items-center mb-3">
                <img src={Clock} alt="clock" width={17.5} height={17.5} />
                <span className="reading-time">3 minutes read</span>
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
}

export default SinglePage;
