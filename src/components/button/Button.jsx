import style from "./button.module.css";

const Button = ({ children, ...props }) => {
  return (
    <button className={style.custom} {...props}>
      {children}
    </button>
  );
};

export default Button;
