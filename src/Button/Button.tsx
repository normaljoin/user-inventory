import './Button.scss';

const Button = ({ button }: any) => {
  return (
    <button className={`btn ${button.color}`} onClick={button.onClick}>
      {button.label}
    </button>
  );
};

export default Button;
