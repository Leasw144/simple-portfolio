import './Traits.scss'
// import BrushIcon from "@material-ui/icons/Brush";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import TelegramIcon from "@material-ui/icons/Telegram";
import PagesIcon from "@material-ui/icons/Pages";
// import TraitCard from "../traitCard/TraitCard"


export default function Traits() {
  return (
    <section className="Traits">
      <div className="trait-card blue">
        <span>
          <TelegramIcon fontSize="large" className="char-icon" />
        </span>
        <h4>Imaginative/<br/>Inspirational</h4>
        <ul className="trait-list">
          <li>Intuitive</li>
          <li>Enjoys bringing new ideas to life</li>
          <li>Reflective on past and future scenarios</li>
          <li>Discerns underlying elements of order and disorder</li>
        </ul>
      </div>
      <div className="trait-card red">
        <span>
          <GroupWorkIcon fontSize="large" className="char-icon" />
        </span>
        <h4>The Microscope</h4>
        <ul className="trait-list">
          <li>Analytical</li>
          <li>Team Player</li>
          <li>Prefers teams to have shared goals</li>
          <li>Likes to think about future and past scenarios</li>
        </ul>
      </div>
      <div className="trait-card purple">
        <span>
          <PagesIcon fontSize="large" className="char-icon" />
        </span>
        <h4>Cool, Calm, & Collected</h4>
        <ul className="trait-list">
          <li>Reserved</li>
          <li>Percieved as Reliable and Peaceable</li>
          <li>Able to separate feelings from Logic</li>
          <li>So cool</li>
        </ul>
      </div>
      <div className="trait-card yellow">
        <span>
          <EmojiFoodBeverageIcon
            fontSize="large"
            color="white"
            className="char-icon"
          />
        </span>
        <h4>Lover of Moderation</h4>
        <ul className="trait-list">
          <li>Everything is about Balance</li>
          <li>Promotes relational Acceptance</li>
          <li>Ready to give others benefit of the doubt</li>
          <li>Long term planners</li>
        </ul>
      </div>
    </section>
  );
}