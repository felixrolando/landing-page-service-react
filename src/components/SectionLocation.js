import mapa from "../assests/images/dummy-mapa.jpg";

export const SectionLocation = () => {
  return (
    <section className="content localization">
      <h2 className="title">Localización</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quas
        molestias quibusdam cum corrupti deserunt, explicabo ipsam id, itaque
        iste!
      </p>
      <figure className="map">
        <img src={mapa} alt="" />
      </figure>
    </section>
  );
};
