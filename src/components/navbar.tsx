import pokemon from "../assets/pokemon.png";

export function Navbar() {
  return (
    <>
      <nav>
        <img className="w-1/3 mx-auto" src={pokemon} alt="pokemon logo" />
      </nav>
    </>
  );
}
