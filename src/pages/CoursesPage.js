import React from "react";
import PropTypes from "prop-types";
import { HeaderLayout } from "../layouts/header";
import FooterLayout from "../layouts/footer/FooterLayout";
import { Config } from "../config/Config";

const CoursesPage = () => {
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
                          SUPERCHARGE YOUR CAREER WITH OUR TECHNOLOGY TRAINING
                          PROGRAM
                        </div>
                      </div>
                    </div>
                    <div className="col col-12 col-sm-5">
                      <div className="image-2">
                        <img src="assets/images/courses.png" />
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
              <li>
                <a href="#" className="active">
                  All Courses
                </a>
              </li>
              <li>
                <a href="#">Front End</a>
              </li>
              <li>
                <a href="#">Back End</a>
              </li>
              <li>
                <a href="#">Artificial Intelligence</a>
              </li>
              <li>
                <a href="#">UX/UI</a>
              </li>
            </ul>
          </div>

          <div className="course">
            <div className="row">
              <div className="col-4">
                <div className="course-image">
                  <img src="assets/images/courses/mobiledev.png" />
                </div>
              </div>
              <div className="col-8">
                <div className="course-title">
                  Mobile Application Development
                </div>
                <div className="course-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Blandit aliquet risus mi elit pretium sit ut pharetra,
                    commodo. Volutpat dignissim vel cursus aliquet a. Urna,
                    imperdiet est quam elit urna enim. Sit enim, adipiscing a
                    quisque. Magna pellentesque sem aliquet donec ipsum viverra
                    amet posuere.
                  </p>
                </div>
                <div className="course-info">
                  <div className="info-item">
                    <img src="assets/images/duration.png" />
                    <span>Duration: 2 Months</span>
                  </div>
                  <div className="info-item">
                    <img src="assets/images/level.png" />
                    <span>Level: Beginner</span>
                  </div>
                  <div className="info-item">
                    <img src="assets/images/remote.png" />
                    <span>Location: Remote</span>
                  </div>
                </div>
                <div className="course-techs">
                  <div className="techs-item">
                    <img src="assets/images/techs/android.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/ios.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/androidstudio.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/xcode.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/github.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/figma.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/jiira.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/confluence.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/react.png" />
                  </div>
                </div>
                <div className="course-features">
                  <div className="feature">Experienced Trainers</div>
                  <div className="feature">Premium Study Materials</div>
                  <div className="feature">Project Based Training</div>
                  <div className="feature">Agile Process Training</div>
                  <div className="feature">Personal Development Program</div>
                </div>
              </div>
            </div>
          </div>

          <div className="course">
            <div className="row">
              <div className="col-4">
                <div className="course-image">
                  <img src="assets/images/courses/webdev.png" />
                </div>
              </div>
              <div className="col-8">
                <div className="course-title">Web Application Development</div>
                <div className="course-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Blandit aliquet risus mi elit pretium sit ut pharetra,
                    commodo. Volutpat dignissim vel cursus aliquet a. Urna,
                    imperdiet est quam elit urna enim. Sit enim, adipiscing a
                    quisque. Magna pellentesque sem aliquet donec ipsum viverra
                    amet posuere.
                  </p>
                </div>
                <div className="course-info">
                  <div className="info-item">
                    <img src="assets/images/duration.png" />
                    <span>Duration: 2 Months</span>
                  </div>
                  <div className="info-item">
                    <img src="assets/images/level.png" />
                    <span>Level: Beginner</span>
                  </div>
                  <div className="info-item">
                    <img src="assets/images/remote.png" />
                    <span>Location: Remote</span>
                  </div>
                </div>
                <div className="course-techs">
                  <div className="techs-item">
                    <img src="assets/images/techs/android.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/ios.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/androidstudio.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/xcode.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/github.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/figma.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/jiira.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/confluence.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/react.png" />
                  </div>
                </div>
                <div className="course-features">
                  <div className="feature">Experienced Trainers</div>
                  <div className="feature">Premium Study Materials</div>
                  <div className="feature">Project Based Training</div>
                  <div className="feature">Agile Process Training</div>
                  <div className="feature">Personal Development Program</div>
                </div>
              </div>
            </div>
          </div>

          <div className="course">
            <div className="row">
              <div className="col-4">
                <div className="course-image">
                  <img src="assets/images/courses/godev.png" />
                </div>
              </div>
              <div className="col-8">
                <div className="course-title">Go Lang Programming -Backend</div>
                <div className="course-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Blandit aliquet risus mi elit pretium sit ut pharetra,
                    commodo. Volutpat dignissim vel cursus aliquet a. Urna,
                    imperdiet est quam elit urna enim. Sit enim, adipiscing a
                    quisque. Magna pellentesque sem aliquet donec ipsum viverra
                    amet posuere.
                  </p>
                </div>
                <div className="course-info">
                  <div className="info-item">
                    <img src="assets/images/duration.png" />
                    <span>Duration: 2 Months</span>
                  </div>
                  <div className="info-item">
                    <img src="assets/images/level.png" />
                    <span>Level: Beginner</span>
                  </div>
                  <div className="info-item">
                    <img src="assets/images/remote.png" />
                    <span>Location: Remote</span>
                  </div>
                </div>
                <div className="course-techs">
                  <div className="techs-item">
                    <img src="assets/images/techs/android.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/ios.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/androidstudio.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/xcode.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/github.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/figma.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/jiira.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/confluence.png" />
                  </div>
                  <div className="techs-item">
                    <img src="assets/images/techs/react.png" />
                  </div>
                </div>
                <div className="course-features">
                  <div className="feature">Experienced Trainers</div>
                  <div className="feature">Premium Study Materials</div>
                  <div className="feature">Project Based Training</div>
                  <div className="feature">Agile Process Training</div>
                  <div className="feature">Personal Development Program</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLayout name={Config.name} url={Config.url} />
    </>
  );
};

export { CoursesPage };
