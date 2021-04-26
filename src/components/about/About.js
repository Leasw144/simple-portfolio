import './About.scss'
// import Traits from "../traits/Traits.js";

export default function About() {
  return (
    <div className="about" id="About">
      <div className="about-blurb">
        <h2 className="about-title">About Me</h2>
        <p className="blurb-left">
          <b>My name is Wattana</b>, or, <b>Sean</b> for short.
          <br />I am a user-focused <b>front-end developer</b> looking to make
          meaningful change via the products and people I work with. My core
          experiences are with <b>React</b> applications but I also have some
          experience with <b>Vue.js</b> and <b>Angular.</b>
          <br />
        </p>
      </div>
      <div className="about-sect-split">
        <div className="a">
          <h2 className="about-title">Key Traits</h2>
          <ul>
            <li>
              Communication and Customer service (ranked #17 of over 1000 in
              customer satisfaction report at Customer Service Rep position
            </li>
            <li>Experience mentoring as an English Teacher</li>
            <li>Focuses on team dynamics and delegation</li>
            <li>Adaptable to changing needs</li>
            <li>Quick learner</li>
            <li>Very funny, 10/10 - ign</li>
          </ul>
        </div>
        <div className="photo1"></div>
        <div className="photo2"></div>
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
      </div>
    </div>
  );
}