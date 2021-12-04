import "../styles/styles.css";
import {
  Header,
  NavBar,
  SectionWho,
  SectionServices,
  SectionTarifas,
  SectionLocation,
} from "../components/index";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <SectionWho />
      <SectionServices />
      <SectionTarifas />
      <SectionLocation />
    </>
  );
}

export default App;
