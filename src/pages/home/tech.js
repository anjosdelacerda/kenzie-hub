import { TechStyled } from "./style";
import { TechListDetails } from "./style";

// import { useState } from "react";

import ButtonIcon from "../../components/buttons/iconButton";

import IconTech from "../../components/img/Vector.png";

// import ModalEdit from "../../components/modais/modalEdit";

function Tech(props) {
  // console.log(props.id + " nando observe ");
  return (
    <>
      <TechStyled key={props.id} id={props.id}>
        <div>{props.title}</div>
        <TechListDetails>
          {props.status}
          <ButtonIcon
            id={props.id}
            onClick={() => props.openModalTech(props.id, props.title)}
          >
            <img src={IconTech} alt="Edit" />
          </ButtonIcon>
        </TechListDetails>
      </TechStyled>
    </>
  );
}

export default Tech;
