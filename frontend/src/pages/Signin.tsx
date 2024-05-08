import { Auth } from "../components/Auth";

const Signin = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <Auth type="signin" />
    </div>
  );
};

export default Signin;
