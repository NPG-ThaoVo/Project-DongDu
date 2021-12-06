import React from "react";
import { useForm } from "react-hook-form";

export default function FooterBlog() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="contact-container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action="#"
        className="comment-form waituk_contact-form"
      >
        <fieldset>
          <div className="contact-title">
            <h6>LEAVE YOUR COMMENT</h6>
          </div>
          <div className="row">
            <div className="col-sm-6 form-group">
              <input
                {...watch("exampleRequired", { required: true })}
                placeholder="Full Name"
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-sm-6 form-group">
              <input
                {...watch("exampleRequired", { required: true })}
                placeholder="Email Address"
                type="email"
                className="form-control"
              />
            </div>
            <div className="col-sm-12 form-group">
              <input
                {...watch("exampleRequired", { required: true })}
                placeholder="Website"
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-sm-12 form-group">
              <textarea
                {...register("exampleRequired", {
                  maxLength: 1000,
                })}
                type="text"
                placeholder="Your Comment"
                className="form-control"
              ></textarea>
              {errors.exampleRequired && <p>Text max 1000 characters</p>}
            </div>
            <div className="col-sm-12 btn-holder">
              <button type="submit" className="btn btn-black btn-full">
                POST COMMENT
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
