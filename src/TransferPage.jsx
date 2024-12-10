import { NavLink } from "react-router";

const TransferPage = () => {
  return (
    <div>
      <h3>Ini adalah Halaman Transfer Page</h3>
      <button className="flex space-x-8 text-gray-600">
        <NavLink to="/" end>
          Balek o Blok
        </NavLink>
      </button>
    </div>
  );
};
export default TransferPage;
