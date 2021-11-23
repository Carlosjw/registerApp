import PropTypes from "prop-types";

function Item({ marca, anolancamento }) {
  return (
    <>
      <li>
        {marca} - {anolancamento}
      </li>
    </>
  );
}

// validando a nível de programação (ideal para deixar para outros programadores)
Item.prototypes = {
  marca: PropTypes.string.isRequired,
  anolancamento: PropTypes.number,
};

// caso não seja fornecido nada, será preenchido pelo defaultprops
Item.defaultProps = {
  marca: "Faltou a marca",
  anolancamento: 0,
};
export default Item;
