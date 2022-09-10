import React, { useState } from "react";
import PropTypes from "prop-types";
import { HeaderLayout } from "../layouts/header";
import FooterLayout from "../layouts/footer/FooterLayout";
import { Config } from "../config/Config";
import EnquerySection from "../sections/enquery-sections/EnquerySection";
/**
 * Course Page
 */
const CoursesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <HeaderLayout />
      <div className="hero header-size-pad">
        <div className="container">
          <div className="slider slider-1">
            <div className="slider-content">
              <div className="slider-slide">
                <div className="slider-slide-content">
                  <div className="row">
                    <div className="col col-12 col-sm-7">
                      <div>
                        <div className="text-3"></div>
                        <div className="text-1">
                          {Config?.data?.coursesPage?.title}
                        </div>
                      </div>
                    </div>
                    <div className="col col-12 col-sm-5">
                      <div className="image-2">
                        <img
                          src={`${window.location.origin}/assets/images/courses.png`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="courses">
        <div className="container">
          <div className="text-1">Our Courses</div>
          <div className="tabs">
            <ul>
              {Config?.data?.coursesPage?.stacks?.map((stack, index) => (
                <li key={`stack-${stack.key}`}>
                  <a
                    onClick={(e) => setCurrentIndex(index)}
                    href="#"
                    className={index == currentIndex ? "active" : ""}
                  >
                    {stack.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {Config.data.coursesPage.technologies
            .filter((c) => c.key.includes(currentIndex))
            .map((course, index) => {
              return (
                <div className="course" key={`course-tech-${index}`}>
                  <div className="row">
                    <div className="col-4">
                      <div className="course-image">
                        <img
                          src={`${window.location.origin}/assets/images/courses/${course.image}.png`}
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="course-title">{course.title}</div>
                      <div className="course-desc">
                        <p>{course.desc}</p>
                      </div>
                      <div className="course-info">
                        <div className="info-item">
                          <img
                            src={`${window.location.origin}/assets/images/duration.png`}
                          />
                          <span>Duration:{course.duration}</span>
                        </div>
                        <div className="info-item">
                          <img
                            src={`${window.location.origin}/assets/images/level.png`}
                          />
                          <span>Level: {course.level}</span>
                        </div>
                        <div className="info-item">
                          <img
                            src={`${window.location.origin}/assets/images/remote.png`}
                          />
                          <span>Location: {course.location}</span>
                        </div>
                      </div>
                      <div className="course-techs">
                        {course.software.map((soft, sindex) => {
                          return (
                            <div
                              className="techs-item"
                              key={`techs-item${sindex}`}
                            >
                              <img
                                src={`${window.location.origin}/assets/images/techs/${soft}.png`}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div className="course-features">
                        {course.keywords.map((keyword, kindex) => (
                          <div className="feature" key={`feature-${kindex}`}>
                            {keyword}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <EnquerySection />
      <FooterLayout name={Config.name} url={Config.url} />
    </>
  );
};

export { CoursesPage };
