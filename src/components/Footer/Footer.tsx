import { FC } from "react";
import "./Footer.scss";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Rennek</p>
    </footer>
  );
};

export default Footer;
