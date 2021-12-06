import React from "react";

export default function BodyBlog() {
  return (
    <div className="content-block pt-5 pb-5">
      <div className="comment-block">
        <div className="contact-title mb-3">
          <h6>3 Comments</h6>
        </div>
        <div className="comment-slot">
          <div className="thumb circular-img">
            <a href="#">
              <img src="/../people-01.jpg" alt="images description" />
            </a>
          </div>
          <div className="comment-desc">
            <h5>
              <a href="#">Cleona Torez - Spain</a>
            </h5>
            <p>
              This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida
              nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
              bibendum auctor.
            </p>
            <div className="meta">
              Commented on
              <time dateTime="2016-07-19"> 14/1/2016</time> -{" "}
              <a href="#">Reply</a>
            </div>
          </div>
        </div>
        <div className="comment-slot">
          <div className="thumb circular-img">
            <a href="#">
              <img src="/../people-02.jpg" alt="images description" />
            </a>
          </div>
          <div className="comment-desc">
            <h5>
              <a href="#">Steve Jurgen - Norway</a>
            </h5>
            <p>
              This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida
              nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
              bibendum auctor.
            </p>
            <div className="meta">
              Commented on
              <time dateTime="2016-07-19"> 14/1/2016</time> -{" "}
              <a href="#">Reply</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
