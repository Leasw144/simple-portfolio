import './About.scss'
import Traits from "../traits/Traits.js";

export default function About() {
  return (
    <div className="about" id="About">
      <div className="about-sect-split">
        <div className="a" >
          <h2 className="about-title">About Me</h2>
          <p className="blurb-left">
            Hello! My name is Wattana, or, Sean for short. I am a user-focused
            front-end developer looking to make meaningful change via the products
            and people I work with. My core experiences are with React
            Applications but I also have some experience with Vue.js and Angular.
            <br />
          </p>
        </div>
        <div className="photo1">
        
        </div>
        <div className="photo2">

        </div>
        <div className="blurb-right">
          <h2>My Background</h2>
          <p className="blurb">
            I've had nearly 15 years of customer service ranging from the
            restaurant to your typical office setting. Anticipating people and
            context clues is what I do best. In 2014 I moved (yes, moved) to
            China to teach English for 4 years. I made lesson plans, taught
            students of up 60 students, and tutored and mentored quite a few
            students. It also made me perceptive to the needs of the class and
            tweaking things as so. This was all done without prior training mind
            you.
          </p>
        </div>
        <h3>My Personality According to a Computer</h3>
        <br />
      </div>
      <Traits />
    </div>
  );
}