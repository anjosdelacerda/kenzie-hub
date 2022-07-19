import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { CadastroStyle, AlignInput } from "./style";

import { useHistory } from "react-router-dom";

// import { Container } from "../../styles/container";
import { ContainerMaior } from "../../styles/container";
import { MiniBox } from "./style";

import ButtonForm from "../../components/buttons/buttons";
import ButtonBack from "../../components/buttons/miniButton";

import ImagemLogo from "../../components/img/Logo.png";

import axios from "axios";
import { toast } from "react-toastify";

// import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";

function Cadastro(props) {
  const history = useHistory();

  function goBack() {
    console.log("startando function");
    localStorage.clear();

    history.push("/");
  }

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("nome obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "necessário nome e sobrenome"
      ),
    email: yup.string().required("email obrigatório").email("email inválido"),
    password: yup
      .string()
      .required("senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/,
        "a senha precisa de letras maiúsculas e minúsculas, números e um simbolo"
      ),
    confirmedPassword: yup
      .string()
      .required("confirmação obrigatória")
      .oneOf([yup.ref("password")], "senha desigual!"),

    bio: yup.string().required("precisa de uma descrição inicial"),
    contact: yup
      .string()
      .required("precisamos de um número de telefone ou rede social"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // const history = useHistory();
  // console.log(history);

  // const { id } = useParams();

  // console.log(id);

  const onSubmitFunction = (data) => {
    console.log(data);

    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        console.log(response);
        console.log(data);

        // window.localStorage.setItem("token", response.data.token);
        toast.success("usuário cadastrado com sucesso");
        history.push("/");
      })
      .catch((err) =>
        toast.error(
          "Erro ao cadastrar conta, verifique os campos e tente novamente."
        )
      );
  };

  // if (props.logged === true) {
  //   history.push("/home");
  // }

  return (
    <>
      <ContainerMaior>
        <MiniBox>
          <div>
            <img src={ImagemLogo} alt="KenzieHub" />
          </div>
          <div>
            <ButtonBack onClick={() => goBack()}>Voltar</ButtonBack>
          </div>
        </MiniBox>
        <CadastroStyle onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Cadastre-se</h2>
          <AlignInput>
            <label>Nome</label>
            <input placeholder="Nome" {...register("name")} />
            <span> {errors.name && errors.name.message} </span>
          </AlignInput>
          <AlignInput>
            <label>E-mail</label>
            <input placeholder="E-mail" {...register("email")} />
            <span> {errors.email && errors.email.message} </span>
          </AlignInput>
          <AlignInput>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <span> {errors.password && errors.password.message} </span>
          </AlignInput>
          <AlignInput>
            <label>Confirme a senha</label>
            <input
              type="password"
              placeholder="Confirmar senha"
              {...register("confirmedPassword")}
            />
            <span>
              {" "}
              {errors.confirmedPassword && errors.confirmedPassword.message}
            </span>
          </AlignInput>

          <AlignInput>
            <label>Bio</label>
            <input placeholder="Bio" {...register("bio")} />
            <span> {errors.bio && errors.bio.message} </span>
          </AlignInput>
          <AlignInput>
            <label>Contato</label>
            <input
              placeholder="Telefone ou rede social"
              {...register("contact")}
            />
            <span> {errors.contact && errors.contact.message} </span>
          </AlignInput>
          <AlignInput>
            <label>Modulo</label>
            <select {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao frontend)">
                Modulo 1
              </option>
              <option value="Segundo módulo (Frontend avançado)">
                Módulo 2
              </option>
              <option value="Terceiro módulo (Introdução ao react)">
                Módulo 3
              </option>
            </select>
          </AlignInput>
          <ButtonForm rosaSchema type="submit">
            Registre-se
          </ButtonForm>
        </CadastroStyle>
      </ContainerMaior>
    </>
  );
}

export default Cadastro;
