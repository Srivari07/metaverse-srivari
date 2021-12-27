import Image from "next/image";
import { useMoralis } from "react-moralis";
import LogoImage from "../asserts/logo.png";
import BgImage from "../asserts/background.jpg";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-white">
      <h1>This is Login page</h1>
      <div className="flex flex-col absolute z-10 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full"
          src={LogoImage}
          height={200}
          width={200}
        />
        <button
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
          onClick={authenticate}
        >
          Login
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src={BgImage} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
