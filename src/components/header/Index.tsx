import { Link } from "react-router-dom";
import '/home/cliente/Documentos/controle-empresas/front/src/css/Index.css';

type HeaderProps = {
  showHeader: () => void;
}

function Header({ showHeader }: HeaderProps) {
  return (
    <header>
      <Link onClick={showHeader} to="/">Card</Link>
    </header>
  )
}

export default Header;
