type Props = {};
import Image from "next/image";

function Hero({}: Props) {
  return (
    <div className="w-full max-w-7xl">
      <h1 className="text-7xl font-semibold md:text-5xl text-black">
        List App
      </h1>
      <p className="text-gray-800 font-medium leading-7 max-w-xl mt-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
        voluptatem quisquam praesentium assumenda reprehenderit, non fuga
        dolorem delectus architecto sit blanditiis porro tempora laborum
        eligendi, provident suscipit! Nihil, et iusto?
      </p>
      <Image src="/" fill alt="alt" />
    </div>
  );
}

export default Hero;
