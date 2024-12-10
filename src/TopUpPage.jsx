import { NavLink } from "react-router";

const TopUpPage = () => {
  return (
    <div>
      <h3>Ini adalah Halaman Top Up Page</h3>
      <button className="flex space-x-8 text-gray-600">
        <NavLink to="/" end>
          Balek o Blok
        </NavLink>
      </button>
    </div>
  );
};
export default TopUpPage;
