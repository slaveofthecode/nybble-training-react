import { ReactNode } from "react";
import ToggleTheme from "../components/toggleTheme";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const currentFullYear = new Date().getFullYear();

  return (
    <div>
      <header>
        <ToggleTheme />
        <h1>Nybble</h1>
        <h2>Training React</h2>
      </header>
      <hr />
      {children}
      <hr />
      <footer>
        <p>© {currentFullYear} Nybble</p>
      </footer>
    </div>
  );
};

export default MainLayout;
