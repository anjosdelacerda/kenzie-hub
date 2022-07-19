import ButtonBack from "../../components/buttons/miniButton";
import ImagemLogo from "../../components/img/Logo.png";
import { NavBar } from "./style";

function Menu(props) {
  return (
    <NavBar>
      <div>
        <div>
          <img src={ImagemLogo} alt="KenzieHub" />
        </div>
      </div>
      <div>
        <ButtonBack onClick={() => props.goBack()}>Sair</ButtonBack>
      </div>
    </NavBar>
  );
}

export default Menu;
