import React from "react";
import './resume.css';
import { ReactComponent as Pro } from '../../assets/images/sabita_silwal.svg'
class Resume extends React.Component{
    render(){
    return(
        <div className="container">
        <section>
          <div>
            <div><Pro className="avatar" /></div>
          </div>
          <div>
            <div className="my-name">Andre Madarang</div>
            <div className="my-title">Full Stack Web Developer</div>
            <div className="links">
              <div className="link-item">
                <a href="http://google.ca">andremadarang.com</a>
              </div>
              <div className="link-item">
                <a href="mailto:email@email.com">email@email.com</a>
              </div>
              <div className="link-item">
                <a href="tel:123-456-7890">123-456-7890</a>
              </div>
            </div> {/* end links */}
            <p>Netlify Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores explicabo nam similique quaerat, porro perferendis adipisci molestias eius dolore eaque, consequatur placeat voluptates consequuntur! Quis quia incidunt aut, repellat aspernatur placeat praesentium vel enim eaque, aperiam, in corrupti tenetur.</p>
          </div>
        </section>
        <section>
          <div className="section-title">Experience</div>
          <div>
            <div className="job">
              <div className="job-title-container">
                <div>
                  <div className="job-company">Facebook</div>
                  <div className="job-title">Back-End Web Developer</div>
                </div>
                <div>
                  Jan 2013 - Jan 2014
                </div>
              </div> {/* end job-title container */}
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime.</p>
            </div> {/* end job */}
            <div className="job">
              <div className="job-title-container">
                <div>
                  <div className="job-company">Facebook</div>
                  <div className="job-title">Back-End Web Developer</div>
                </div>
                <div>
                  Jan 2013 - Jan 2014
                </div>
              </div> {/* end job-title container */}
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime.</p>
            </div> {/* end job */}
            <div className="job">
              <div className="job-title-container">
                <div>
                  <div className="job-company">Facebook</div>
                  <div className="job-title">Back-End Web Developer</div>
                </div>
                <div>
                  Jan 2013 - Jan 2014
                </div>
              </div> {/* end job-title container */}
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate iure quasi inventore doloremque exercitationem maiores libero corrupti magnam praesentium voluptatem facere optio recusandae sit debitis tenetur beatae, voluptatibus itaque magni, est. Fugiat nostrum nemo fuga nulla modi doloremque maxime.</p>
            </div> {/* end job */}
          </div>
        </section>
        <section>
          <div className="section-title">Education</div>
          <div>
            <div className="job">
              <div className="job-title-container">
                <div>
                  <div className="job-company">University of School</div>
                  <div className="job-title">Bachelors of Science in Some Field</div>
                </div>
                <div>
                  Jan 2013 - Jan 2014
                </div>
              </div> {/* end job-title container */}
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium blanditiis architecto, ipsum excepturi ducimus asperiores, eius necessitatibus porro harum? Reiciendis, vel. Voluptates dolorum soluta minima iste iusto, quae aliquam magni, dolores labore, placeat reiciendis! Corrupti, in, ullam! Repudiandae, quibusdam aliquid!</p>
            </div> {/* end job */}
          </div>
        </section>
        <section>
          <div className="section-title">Skills</div>
          <div>
            <div className="skills-container">
              <ul>
                <li>Skill One</li>
                <li>Skill Two</li>
                <li>Skill Three</li>
                <li>Skill Four</li>
              </ul>
              <ul>
                <li>Skill One</li>
                <li>Skill Two</li>
                <li>Skill Three</li>
                <li>Skill Four</li>
              </ul>
              <ul>
                <li>Skill One</li>
                <li>Skill Two</li>
                <li>Skill Three</li>
                <li>Skill Four</li>
              </ul>
            </div> {/* end skills-container */}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, obcaecati aut quas et voluptatibus dolorem similique, voluptate, totam, corrupti placeat molestiae distinctio consectetur. Et dolorum, eos, expedita debitis sed explicabo.</p>
          </div>
        </section>
        <section>
          <div className="section-title">Interests</div>
          <div className="interests-container">
            <img src="img/guitar.svg" alt="icon" />
            <img src="img/piano.svg" alt="icon" />
            <img src="img/controller.svg" alt="icon" />
            <img src="img/headphones.svg" alt="icon" />
            <img src="img/monitor.svg" alt="icon" />
            <img src="img/camera.svg" alt="icon" />
            <img src="img/video.svg" alt="icon" />
            <img src="img/cutlery.svg" alt="icon" />
          </div>
        </section>
        <section>
          <div className="section-title">References</div>
          <div>
            <div className="job-company">Some Guy, CEO</div>
            <div className="job-title">Some Company Inc.</div>
            <div className="links">
              <div className="link-item">
                <svg className="icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" /></svg>
                <a href="http://google.ca">andremadarang.com</a>
              </div>
              <div className="link-item">
                <svg className="icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z" /></svg>
                <a href="mailto:email@email.com">email@email.com</a>
              </div>
              <div className="link-item">
                <svg className="icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z" /></svg>
                <a href="tel:123-456-7890">123-456-7890</a>
              </div>
            </div> {/* end links */}
            <p className="reference-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, quam. Earum suscipit aliquid eius nostrum iste reprehenderit nesciunt, ratione natus consectetur voluptatum magni, culpa in nihil veniam est quod dolorum sunt facere odio quibusdam corporis adipisci fugiat quasi, consequuntur. Debitis?</p>
            <div className="reference">More references available upon request.</div>
          </div>
        </section>
      </div>
    )
    }
}
export default Resume;