import { FC } from "react";

interface HeadingProps {
  title: string;
  description: string;
}

const Heading: FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Heading;
