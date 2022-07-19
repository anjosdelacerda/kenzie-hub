import { MiniContent } from "./style";

function ButtonBack({ children, ...rest }) {
  return (
    <>
      <MiniContent type="button" {...rest}>
        {children}
      </MiniContent>
    </>
  );
}

export default ButtonBack;
