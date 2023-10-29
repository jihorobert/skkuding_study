function DetailPage(props) {
  return (
    <div className="detail-wrap" id="detailWrap">
      <div className="asdf">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
          alt={props.data[props.id - 1].name}
          className="image-item"
        />
        <h1 style={{ color: "white" }}>{props.data[props.id - 1].name}</h1>
        <div className="table-box">
          <table className="table-style">
            {Object.entries(props.data[props.id - 1]).map(
              ([key, value], index) => (
                <tr key={index}>
                  <th>{key}</th>
                  <td>{value}</td>
                </tr>
              )
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
