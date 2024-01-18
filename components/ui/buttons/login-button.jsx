"use client";

// import Button from "./button";
import DynamicButton from "./dynamic-button";

const LoginButton = () => {
  const handleClick = () => {
    console.log("Login");
  };

  return (
    // <DynamicButton className="font-semibold" size="small" onClick={() => {}} />
    <DynamicButton buttonText="Login" onClickHandler={handleClick} />
  );
};

export default LoginButton;

// "use client";

// import Button from "./button";

// const LoginButton = () => {
//   return (
//     <Button className="font-semibold" size="small" onClick={() => {}}>
//       Login
//     </Button>
//   );
// };

// export default LoginButton;
