import { useNavigate } from "react-router-dom";

function MainDetail(props) {
  let navigate = useNavigate();
  return (
    <div
      className="flex-item"
      onClick={() => {
        navigate(`/detail&id=${props.i + 1}`);
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          props.i + 1
        }.png`}
        alt={props.a.name}
        className="main-image"
      />
      <div>
        <div className="information">
          <h2>{props.a.name}</h2>
          <p>Height: {props.a.height} dm</p>
          <p>Weight: {props.a.weight} hg</p>
          <p>Types: {props.a.types}</p>
        </div>
      </div>
    </div>
  );
}

export default MainDetail;
