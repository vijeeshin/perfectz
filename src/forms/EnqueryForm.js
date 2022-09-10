import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import {
  LoadCanvasTemplate,
  loadCaptcha,
  validateCaptcha,
} from "./ReactCaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EnqueryForm = (props) => {
  useEffect(() => {
    loadCaptcha(6);
  }, []);
  let schema = yup.object().shape({
    firstName: yup
      .string()
      .required("First Name is required")
      .min(3, "First Name is too short"),
    lastName: yup
      .string()
      .required("Last Name is required")
      .min(3, "Last Name is too short"),
    gender: yup
      .string()
      .oneOf(["Male", "Female"])
      .required("Gender field is required"),
    dob: yup.string(),
    higherQualification: yup.string(),
    ypa: yup.number().max(4).min(4),
    experience: yup.string().oneOf(["Yes", "No"]).required(),
    companyName: yup.string(),
    course: yup.string().required(),
    email: yup.string().email().required("Email is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is invalid"
      ),
    fulladdress: yup.string(),
    remarks: yup.string(),
    captcha: yup.string().required("Captcha is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      higherQualification: "",
      ypa: "",
      experience: "",
      companyName: "",
      companyName: "",
      course: "",
      email: "",
      phone: "",
      fulladdress: "",
      remarks: "",
      captcha: "",
    },
  });
  const onSubmit = (data) => {
    if (validateCaptcha(data.captcha) == true) {
      emailjs
        .send(
          "service_v4ls8np",
          "template_wdcsx3k",
          {
            from_name: data.fullname,
            email: data.email,
            phone: data.phone,
            message: data.message,
          },
          "UMXQFQwixnYKhCd0f"
        )
        .then(
          (result) => {
            toast("Form got submitted successfully");
            reset();
            loadCaptcha(6);
          },
          (error) => {
            toast("Something went wrong");
            reset();
            loadCaptcha(6);
          }
        );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row justify-content-between">
          <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6  mb-3">
            <input
              type="text"
              className={
                errors.firstName ? "form-control error" : "form-control"
              }
              placeholder="Full Name"
              {...register("firstName")}
            />
            {errors.firstName ? (
              <div>
                <p className="error">{errors.firstName?.message}</p>
              </div>
            ) : null}
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6  mb-3">
            <input
              type="text"
              className={
                errors.lastName ? "form-control error" : "form-control"
              }
              placeholder="Last Name"
              {...register("lastName")}
            />
            {errors.lastName ? (
              <div>
                <p className="error">{errors.lastName?.message}</p>
              </div>
            ) : null}
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6  mb-3">
            <select
              {...register("gender")}
              className={errors.gender ? "form-control error" : "form-control"}
            >
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
            </select>
            {errors.gender ? (
              <div>
                <p className="error">{errors.gender?.message}</p>
              </div>
            ) : null}
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6  mb-3">
            <input
              type="text"
              className={errors.dob ? "form-control error" : "form-control"}
              placeholder="Date of Birth"
              {...register("dob")}
            />
            {errors.dob ? (
              <div>
                <p className="error">{errors.dob?.message}</p>
              </div>
            ) : null}
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6  mb-3">
            <input
              type="text"
              className={
                errors.higherQualification
                  ? "form-control error"
                  : "form-control"
              }
              placeholder="Highest Qualification"
              {...register("higherQualification")}
            />
            {errors.higherQualification ? (
              <div>
                <p className="error">{errors.higherQualification?.message}</p>
              </div>
            ) : null}
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6  mb-3">
            <input
              type={"number"}
              className={errors.ypa ? "form-control error" : "form-control"}
              placeholder="Year of Passout"
              {...register("ypa")}
            />
            {errors.ypa ? (
              <div>
                <p className="error">{errors.ypa?.message}</p>
              </div>
            ) : null}
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6  mb-3">
            Previous Work Experience:{" "}
            <input type={"radio"} value={"Yes"} {...register("experience")} />
            <input type={"radio"} value={"No"} {...register("experience")} />
            {errors.experience ? (
              <div>
                <p className="error">{errors.experience?.message}</p>
              </div>
            ) : null}
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6  mb-3">
            <input
              type="text"
              className={
                errors.companyName ? "form-control error" : "form-control"
              }
              placeholder="If any, Company Name"
              {...register("companyName")}
            />
            {errors.companyName ? (
              <div>
                <p className="error">{errors.companyName?.message}</p>
              </div>
            ) : null}
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12  mb-3">
            <select
              {...register("course")}
              className={errors.course ? "form-control error" : "form-control"}
              placeholder="Course"
            >
              <option />
            </select>
            {errors.course ? (
              <div>
                <p className="error">{errors.course?.message}</p>
              </div>
            ) : null}
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6  mb-3">
            <input
              {...register("email")}
              className={errors.email ? "form-control error" : "form-control"}
              placeholder="Email"
            />
            {errors.email ? (
              <div>
                <p className="error">{errors.email?.message}</p>
              </div>
            ) : null}
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6  mb-3">
            <input
              {...register("phone")}
              type="number"
              className={errors.phone ? "form-control error" : "form-control"}
              placeholder="Phone Number"
            />
            {errors.phone ? (
              <div>
                <p className="error">{errors.phone?.message}</p>
              </div>
            ) : null}
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12  mb-3">
            <input
              {...register("fulladdress")}
              type="number"
              className={
                errors.fulladdress ? "form-control error" : "form-control"
              }
              placeholder="Full Address"
            />
            {errors.fulladdress ? (
              <div>
                <p className="error">{errors.fulladdress?.message}</p>
              </div>
            ) : null}
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12  mb-3">
            <textarea
              className={errors.remarks ? "form-control error" : "form-control"}
              rows="4"
              placeholder="Remarks"
              {...register("remarks")}
            ></textarea>
            {errors.remarks ? (
              <div>
                <p className="error">{errors.remarks?.message}</p>
              </div>
            ) : null}
          </div>

          <div className="mb-3">
            <div className="row">
              <div className="col-md-3 col-sm-12 col-xs-12">
                <LoadCanvasTemplate reloadText={"↻"} reloadColor={"#000"} />
              </div>
              <div className="col-9 col-sm-12 col-xs-12">
                <input
                  style={{ width: "200px" }}
                  {...register("captcha")}
                  className={
                    errors.captcha ? "form-control error" : "form-control"
                  }
                  placeholder="Captcha"
                />
                {errors.captcha ? (
                  <div>
                    <p className="error">{errors.captcha?.message}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <input
              href="#"
              className="btn btn-primary"
              type="submit"
              value={"SEND ENQUIRY"}
            />
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

EnqueryForm.propTypes = {};

export default EnqueryForm;
