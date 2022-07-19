import { Content } from "./style";

function ButtonForm({ children, rosaSchema = false, ...rest }) {
  return (
    <>
      <Content rosaSchema={rosaSchema} type="button" {...rest}>
        {children}
      </Content>
    </>
  );
}

export default ButtonForm;
