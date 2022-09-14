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
import {Config} from '../config/Config';
const EnqueryForm = (props) => {
  useEffect(() => {
    loadCaptcha(6);
  }, []);
  let schema = yup.object().shape({
    fromName: yup
      .string()
      .required("Name is required")
      .min(3, "Name is too short"),
    course: yup.string().required(),
    email: yup.string().email().required("Email is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is invalid"
      ),
    remarks: yup.string().required("Remark is required"),
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
      fromName: "",
      course: "",
      email: "",
      phone: "",
      remarks: "",
      captcha: "",
    },
  });
  const onSubmit = (data) => {
    if (validateCaptcha(data.captcha) == true) {
      emailjs
        .send(
          "service_v4ls8np",
          "template_7rgd4h2",
          {
            from_name: data.fullname,
            email: data.email,
            phone: data.phone,
            message: data.remarks,
            course: data.course
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
          <div className=" col-xs-12  mb-3">
            <input
              type="text"
              className={
                errors.fromName ? "form-control error" : "form-control"
              }
              placeholder="Full Name"
              {...register("fromName")}
            />
            {errors.fromName ? (
              <div>
                <p className="error">{errors.fromName?.message}</p>
              </div>
            ) : null}
          </div>
       
         
          
          
         
         
        
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12  mb-3">
            <select
            placeholder={"Select Course"}
              {...register("course")}
              className={errors.course ? "form-control error" : "form-control"}
              placeholder="Course"
            >
               {Config?.data?.coursesPage?.technologies?.map((stack, index) => (
                <option key={index} value={stack.title}>{stack.title}</option>
               ))}
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
