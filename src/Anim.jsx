import { TypeAnimation } from "react-type-animation";
const Anim = () => {
  return (
    <TypeAnimation
      sequence={[
        "I am a developer",
        2000,
        "I am a designer",
        2000,
        "I am a founder",
        2000,
        "I am an innovator",
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Anim;
