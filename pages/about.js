import { withStyles } from "@material-ui/core/styles";

import Layout from "../components/Layout";

const styles = theme => ({
  aboutContainer: {
    margin: 25,
    font: "16px/28px 'proxima-nova',sans-serif"
  },
  headerText: {
    color: theme.palette.primary.main
  }
});

const About = props => (
  <Layout>
    <div className={props.classes.aboutContainer}>
      <h1 className={props.classes.headerText}>Project Summary</h1>
      <section>
        <p>
          Oh man, this was fun! This project was the project that could never
          end. Throughout the process of creating it, I kept thinking of more
          and more stuff to add... but it has to end at some point. I'm coming
          out on the otherside with some pretty cool new tech experience and
          some lessons learned that I would love to share with you.
        </p>
      </section>
      <section>
        <h2 className={props.classes.headerText}>Libraries Used</h2>
        <ul>
          <li>
            <a href="https://nextjs.org/">Next.js</a>
          </li>
          <li>
            <a href="https://reactjs.org/">React</a>
          </li>
          <li>
            <a href="https://redux.js.org/">Redux</a>
          </li>
          <li>
            <a href="https://material-ui.com/">
              Material UI components, icons, and theming
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2 className={props.classes.headerText}>Lessons Learned</h2>
        <p>
          I picked some new libraries to try out here and this was my first time
          using codesandbox.io and both of those came with some challenges. I
          ran into daily server issues with codesandbox.io which were so bad
          that for hours at a time I could not work. It's undetermined whether
          the problem is on their part or my part and I opened up a ticket with
          them, but it eventually got resolved after setting the project down
          for a while and coming back to it. I made a backup plan just in case
          it got bad enough that I could not continue, but luckily it never came
          to that. As of this writing, it seems pretty stable but if I were
          going to do this again I would probably spent a little time to
          research the alternatives or host it myself.
        </p>
        <p>
          The new (to me) library that I chose was Next.js instead of going with
          a standard CreateReactApp boilerplate framework. I chose to try
          Next.js because I've read about its benefits, I wanted to get some
          experience with it and I talked about it in the interview with JP as
          something he was interested in. Next.js on its own was a small
          learning curve, but it turns out that trying to do any type of
          server-side rendering with an Express (or other javascript web app
          framework) on codesandbox.io is not supported yet. I had one small
          hiccup around server side rendering and Material UI. On first page
          load (server side rendering) the CSS would not load properly and it
          was due to the server not having access to the Material UI theme,
          after researching I found a workaround which involved overloading
          _app.js and _document.js to have access to Material UI. Once that was
          done, client or server side rendering had styles, hurray! My
          experience showed me that Next.js is robust, extensible, and has a low
          barrier to entry so I would not hesitate to use it again in the
          future.
        </p>
      </section>
      <section>
        <p>Thanks for checking it out!</p>
        <p>♪♫*•♪ ʕ•ᴥ•ʔ ♪♫*•♪</p>
      </section>
    </div>
  </Layout>
);

export default withStyles(styles)(About);
