import logoAngular from "../assests/images/ico1.png";
import logoReact from "../assests/images/ico2.png";
import logoVue from "../assests/images/ico3.png";

export const SectionServices = () => {
  return (
    <section className="content services">
      <h2 class="title">Servicios</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        obcaecati dolores, vel iusto perspiciatis voluptates quasi quam mollitia
        reiciendis porro.
      </p>
      <ul className="list-services">
        <li>
          <figure>
            <img src={logoAngular} alt="" />
            <figcaption>Angular</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={logoReact} alt="" />
            <figcaption>React</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={logoVue} alt="" />
            <figcaption>Vuejs</figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
};
