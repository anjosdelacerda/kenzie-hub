import { IconContent } from "./style";
function ButtonIcon({ children, ...rest }) {
  return (
    <>
      <IconContent type="button" {...rest}>
        {children}
      </IconContent>
    </>
  );
}

export default ButtonIcon;
