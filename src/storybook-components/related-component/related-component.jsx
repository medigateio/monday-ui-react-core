import { BEMClass } from "../../helpers/bem-helper";
import "./related-component.scss";

const BASE_CSS_CLASS = "monday-storybook-related-component";
const bemHelper = BEMClass(BASE_CSS_CLASS);

export const RelatedComponent = ({ component, title, description }) => {
  return (
    <section className={BASE_CSS_CLASS}>
      <figure className={bemHelper({ element: "component" })}>{component}</figure>
      <header className={bemHelper({ element: "title" })}>{title}</header>
      <section className={bemHelper({ element: "description" })}>{description}</section>
    </section>
  );
};