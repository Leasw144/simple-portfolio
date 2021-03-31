import './About.scss'
import Traits from "../traits/Traits.js";

export default function About() {
  return (
    <div className="about" id="About">
      <h2 className="about-title">About Me</h2>
      <p className="blurb">
        Hello, I am a former ESL teacher who lived abroad and has now
        transitioned into Front-End Engineering. I really enjoy collaboration
        and creation. I do standup comedy as a hobby and am just great overall.
        To see some projects and work I've done, check below!
      </p>
      <Traits />
    </div>
  );
}