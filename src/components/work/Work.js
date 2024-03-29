import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Work.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    fontFamily: "Comfortaa"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    // color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="work">
      <h1>Work History</h1>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Docketly</Typography>
          <Typography className={classes.heading}>
            Web Developer
          </Typography>
          <Typography className={classes.heading}>
            Mar 2021 to Present
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography> */}
          <ul>
            <h3>Duties</h3>
            <li>
              Collaborated with Agile Development team to build features, test code, and advise other departments.
            </li>
            <li>Customer facing role in explaining complex processes</li>
          </ul>
          {/* </Typography> */}
          <div className="work-description">
            <h3>Description</h3>
            Docketly is the leading appearance counsel provider. The custom-built software and in-house technical support give Dockelty unsurpassed agility in problem-solving and easy access to a variety of data. 
          </div>
        </AccordionDetails>
      </Accordion>
      
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Promenade</Typography>
          <Typography className={classes.heading}>
            Front-End Engineer
          </Typography>
          <Typography className={classes.heading}>
            Jan 2021 to Present
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography> */}
          <div className="collapse-content">
            <ul>
              <h3>Duties</h3>
              <li>
                Produced, maintained, and designed features as the only
                front-end developer on the team
              </li>
              <li>Building out the API to connect with the backend</li>
              <li>Designing and creating wireframes for new features</li>
              <li>Ideating features and presentation with development team</li>
            </ul>
            {/* </Typography> */}
            <div className="work-description">
              <h3>Description</h3>
              Using AI, we help military veterans build a digital roadmap
              towards civilian success and connect them to every available
              resource for their career, education, finances, and wellness,
              along with the plethora of veteran benefits they are entitled to,
              no matter where they are located. We help them find resources,
              community, and their purpose outside of military life
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            Turing School of Software & Design
          </Typography>
          <Typography className={classes.heading}>
            Software Engineer (student)
          </Typography>
          <Typography className={classes.heading}>
            March 2020 to Nov 2020
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography> */}
          <ul>
            <h3>Duties</h3>
            <li>
              Produced, maintained, and designed features as the only front-end
              developer on the team
            </li>
            <li>Building out the API to connect with the backend</li>
            <li>Designing and creating wireframes for new features</li>
            <li>Ideating features and presentation with development team</li>
          </ul>
          {/* </Typography> */}
          <div className="work-description">
            <h3>Description</h3>
            Turing is a 7 month program that certifies people in either
            Front-End or Back-End Development. The curriculum is split into 4
            modules beginning with JavaScript and continues into React
            Development. On average, students will spend 60-70 hours a week on
            projects that emulate a professional environment and are given the
            opportunity to work in paired, group, or solo projects.
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>InterNachi</Typography>
          <Typography className={classes.heading}>
            Administrative Assistant
          </Typography>
          <Typography className={classes.heading}>
            Jan 2019 to Oct 2019
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography> */}
          <ul>
            <h3>Duties</h3>
            <li>
              Collaborated with IT department about design and development of
              website and programs
            </li>
            <li>Customer facing role in explaining complex processes</li>
          </ul>
          {/* </Typography> */}
          <div className="work-description">
            <h3>Description</h3>
            The International Association of Certified Home Inspectors
            (InterNACHI) is the world’s largest organization of residential and
            commercial property inspectors who perform more than 10,000 property
            inspections every day.
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            China International Personnel Training Center
          </Typography>
          <Typography className={classes.heading}>ESL Teacher</Typography>
          <Typography className={classes.heading}>
            Oct 2014 to Jun 2018
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography> */}
          <ul>
            <h3>Duties</h3>
            <li>Workspace of teachers from 10 different countries</li>
            <li>
              Conveyed complex ideas and concepts to classes of over 60+
              students
            </li>
          </ul>
          {/* </Typography> */}
          <div className="work-description">
            <h3>Description</h3>
            For about four years I was an English teach in China teaching
            students of up to 60 students and between the ages of 3 to 65 years
            old.
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     flexBasis: "33.33%",
//     flexShrink: 0,
//   },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(15),
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function ControlledAccordions() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <div className={classes.root}>
//       <Accordion
//         expanded={expanded === "panel1"}
//         onChange={handleChange("panel1")}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1bh-content"
//           id="panel1bh-header"
//         >
//           <Typography className={classes.heading}>General settings</Typography>
//           <Typography className={classes.secondaryHeading}>
//             I am an accordion
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
//             Aliquam eget maximus est, id dignissim quam.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel2"}
//         onChange={handleChange("panel2")}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2bh-content"
//           id="panel2bh-header"
//         >
//           <Typography className={classes.heading}>Users</Typography>
//           <Typography className={classes.secondaryHeading}>
//             You are currently not an owner
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Donec placerat, lectus sed mattis semper, neque lectus feugiat
//             lectus, varius pulvinar diam eros in elit. Pellentesque convallis
//             laoreet laoreet.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel3"}
//         onChange={handleChange("panel3")}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3bh-content"
//           id="panel3bh-header"
//         >
//           <Typography className={classes.heading}>Advanced settings</Typography>
//           <Typography className={classes.secondaryHeading}>
//             Filtering has been entirely disabled for whole web server
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
//             sit amet egestas eros, vitae egestas augue. Duis vel est augue.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel4"}
//         onChange={handleChange("panel4")}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel4bh-content"
//           id="panel4bh-header"
//         >
//           <Typography className={classes.heading}>Personal data</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
//             sit amet egestas eros, vitae egestas augue. Duis vel est augue.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }
