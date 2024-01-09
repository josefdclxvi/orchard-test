import type { ReactElement } from "react";

const Description = (): ReactElement => {
  return (
    <div className="_right">
      <article>
        <header>
          <h1>answers your body's needs</h1>
        </header>
        <hr />
        <p>
          <span>
            the way ingredients are sourced affects the way we nourish our
            bodies.
          </span>{" "}
          <span>
            author Mark Schatzer believes our body naturally develops an
            appetite for the foods and nutrients it needs to be healthy, but
            that artificial flavourings are getting in the way.
          </span>{" "}
          <span>
            this can be reversed by focusing on high-quality ingredients and
            being mindful as your appetite guides you to consume according to
            your body's need.
          </span>
        </p>
        <br />
        <br />
        <p className="note">
          <strong className="_error">be mindful</strong>
          <br />
          <span>
            sourcing local or organic food is a good way to start being more
            mindful about what you're cooking and eating.
          </span>
        </p>
      </article>
    </div>
  );
};

export default Description;
