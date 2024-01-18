const DynamicButton = ({ buttonText, onClickHandler }) => {
  return <button onClick={onClickHandler}>{buttonText}</button>;
};

export default DynamicButton;
