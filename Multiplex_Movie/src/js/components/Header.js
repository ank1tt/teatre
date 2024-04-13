const Header = (props) => {
  return (
    <header className="text-center py-10 ">
      <h1
        className="text-white fw-bold drop-shadow-sm-black"
        style={{ fontSize: "4rem" }}
      >
        {/* NONTON GRATIS <br /> GAK PAKE KARCIS */}
      </h1>

      <button className="btn btn-secondary mt-3">Multiplex Movie</button>
    </header>
  );
};

export default Header;
