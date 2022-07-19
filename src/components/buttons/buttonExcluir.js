import { ContentForExcluir } from "./style";

function ButtonExcluir({ children, rosaSchema = false, ...rest }) {
  return (
    <>
      <ContentForExcluir type="button" {...rest}>
        {children}
      </ContentForExcluir>
    </>
  );
}

export default ButtonExcluir;
