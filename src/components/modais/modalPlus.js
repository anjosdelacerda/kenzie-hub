import { Glass, StyledModal, StyledModalTop } from "./style";
import { AlignInput } from "../../pages/cadastro/style";

import ButtonForm from "../buttons/buttons";
import { SetPadding } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";
import { toast } from "react-toastify";

function ModalPlus(props) {
  const formSchema = yup.object().shape({
    title: yup.string().required("campo está vazio"),
  });

  const token = JSON.parse(localStorage.getItem("@kenzieHub:home"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    // console.log(data);

    // console.log(token);

    axios
      .post(
        "https://kenziehub.herokuapp.com/users/techs",
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
        // console.log(response);
        // console.log(data);
        toast.success("Tecnologia adicionada com sucesso");
        closeModal();
      })
      .catch((err) => toast.error("o campos não podem estar vazios"));
  };

  function closeModal() {
    props.setOpen(false);
  }

  if (props.open === true) {
    return (
      <>
        <Glass>
          <StyledModal onSubmit={handleSubmit(onSubmitFunction)}>
            <StyledModalTop>
              <div>
                <h6>Cadastrar Tecnologia</h6>
              </div>
              <div>
                <button onClick={() => closeModal()}>X</button>
              </div>
            </StyledModalTop>
            <SetPadding>
              <AlignInput>
                <label>Nome</label>
                <input placeholder="Tecnologia" {...register("title")} />
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
              <ButtonForm rosaSchema type="submit">
                Cadastrar Tecnologia
              </ButtonForm>
            </SetPadding>
          </StyledModal>
        </Glass>
      </>
    );
  } else {
    return null;
  }
}

export default ModalPlus;
