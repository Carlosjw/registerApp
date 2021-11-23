import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" anolancamento={1985} />
        <Item marca="Bugatti" anolancamento={1964} />
        <Item marca="Lamborghinni" anolancamento={2001} />
        <Item marca="Chevrolet" anolancamento={1984} />
        <Item />
      </ul>
    </>
  );
}

export default List;
