import { Welcome } from "./style";

function Header() {
  const usuario = JSON.parse(localStorage.getItem("@kenzieHub:user"));

  return (
    <Welcome>
      <div>
        <h2>Olá, {usuario.name}</h2>
      </div>
      <div>
        <span>{usuario.course_module}</span>
      </div>
    </Welcome>
  );
}

export default Header;
