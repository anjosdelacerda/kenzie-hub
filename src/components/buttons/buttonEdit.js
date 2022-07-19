import { ContentForEdit } from "./style";

function ButtonEdit({ children, rosaSchema = false, ...rest }) {
  return (
    <>
      <ContentForEdit type="button" {...rest}>
        {children}
      </ContentForEdit>
    </>
  );
}

export default ButtonEdit;
