import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

export default function HeaderBlog() {
  return (
    <div>
      <div className="blog-holder">
        <article className="blog-article">
          <div className="blog-title text-center pb-5">
            <h1>The age old question of chicken first or the egg?</h1>
            <div className="blog-lists border-0">
              <ul className="blog-list-items">
                <li>
                  By: <span>Admin</span>
                </li>
                <li>
                  <time dateTime="2011-01-12">
                    | 11 <span>AUG</span>{" "}
                  </time>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-desc pt-5">
            <div className="blog-img">
              <div className="image-wrap">
                <figure className="">
                  <img src="/../img-blog.jpg" alt="images description" />
                </figure>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <div className="blockquote-block blockquote-block-v2 pt-3 pb-3">
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore...
                </p>
              </blockquote>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <div className="blog-share mt-5">
              <ul className="social-network with-text">
                <li>
                  <strong>Share :</strong>
                </li>
                <li>
                  <FacebookShareButton
                    url={"https://nextjs.org/"}
                    quote={"FaceBook"}
                    hashtag={"#hashtag"}
                    description={"aiueo"}
                    className="Demo__some-network__share-button"
                  >
                    <a href="#">
                      <span className="waituk-icon-facebook"></span>FaceBook
                    </a>
                  </FacebookShareButton>
                </li>
                <li>
                  <TwitterShareButton
                    url={"https://nextjs.org/"}
                    quote={"FaceBook"}
                    hashtag={"#hashtag"}
                    description={"aiueo"}
                    className="Demo__some-network__share-button"
                  >
                    <a href="#">
                      <span className="waituk-icon-twitter"></span>Twitter
                    </a>
                  </TwitterShareButton>
                </li>
                <li>
                  <LinkedinShareButton
                    url={"https://nextjs.org/"}
                    quote={"FaceBook"}
                    hashtag={"#hashtag"}
                    description={"aiueo"}
                    className="Demo__some-network__share-button"
                  >
                    <a href="#">
                      <span className="waituk-icon-google-plus"></span>Google
                    </a>
                  </LinkedinShareButton>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
