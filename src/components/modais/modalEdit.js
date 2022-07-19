import { Glass, StyledModal, StyledModalTop } from "./style";
import { AlignInput } from "../../pages/cadastro/style";

// import ButtonForm from "../buttons/buttons";

import ButtonEdit from "../buttons/buttonEdit";
import ButtonExcluir from "../buttons/buttonExcluir";

import { DivButtons } from "./style";

import { SetPadding } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";
import { toast } from "react-toastify";

function ModalEdit(props) {
  const formSchema = yup.object().shape({
    status: yup.string().required("erro"),
  });

  const token = JSON.parse(localStorage.getItem("@kenzieHub:home"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onExcludeFunction() {
    console.log(token);

    axios
      .delete(
        `https://kenziehub.herokuapp.com/users/techs/${props.momentId}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        // console.log(token)
      )
      .then((response) => {
        console.log(response);
        toast.success("tecnolgia excluída com sucesso");
        props.closeModalTech();
      })
      .catch((err) => console.log(err));
  }

  const onSubmitFunction = (data) => {
    // console.log(data);

    // console.log(token);

    // console.log(props.momentId + " nando está aqui");

    axios
      .put(
        `https://kenziehub.herokuapp.com/users/techs/${props.momentId}`,
        data,
        // console.log({ ...data }),
        // console.log(JSON.stringify({ ...data })),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        // console.log(token)
      )
      .then((response) => {
        // console.log(props.momentId);
        // console.log(response);
        // console.log(data);
        toast.success("Tecnologia atualizada com sucesso");

        props.closeModalTech();
      })
      .catch((err) => toast.error("o campo de nome deve estar vazio"));
  };

  if (props.openTech === true) {
    return (
      <>
        <Glass>
          <StyledModal
            key={props.id}
            id={props.id}
            onSubmit={handleSubmit(onSubmitFunction)}
          >
            <StyledModalTop>
              <div>
                <h6>Tecnologia detalhes</h6>
              </div>
              <div>
                <button onClick={() => props.closeModalTech()}>X</button>
              </div>
            </StyledModalTop>
            <SetPadding>
              <AlignInput>
                <label>Nome</label>
                <input placeholder={props.title} value={props.title}></input>
                <span> {errors.title && errors.title.message} </span>
              </AlignInput>
              <AlignInput>
                <label>Selecionar status</label>
                <select {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </AlignInput>
              <DivButtons>
                <ButtonEdit id={props.id} type="submit">
                  Salvar Alterações
                </ButtonEdit>
                <ButtonExcluir onClick={() => onExcludeFunction()}>
                  Excluir
                </ButtonExcluir>
              </DivButtons>
            </SetPadding>
          </StyledModal>
        </Glass>
      </>
    );
  } else {
    return null;
  }
}

export default ModalEdit;
