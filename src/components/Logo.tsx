import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link to="/dashboard" className="flex items-center gap-2 ">
        <img src="/img/logoImg.png" alt="Agripact Logo" className="h-12" />
        <span className="text-green-200 text-2xl font-bold">Agripact</span>
      </Link>
    </>
  );
}

export default Logo;
