import { useNavigate } from "react-router-dom";

// * 질문사항 : types

function MainDetail(props) {
  let navigate = useNavigate();
  return (
    <div
      // className="flex-item"
      className="flex justify-start items-center h-[110px] w-1/3 border border-yellow-300 rounded-[10px] m-[20px]"
      onClick={() => {
        navigate(`/detail&id=${props.i + 1}`);
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          props.i + 1
        }.png`}
        alt={props.a.name}
        className="w-3/20 m-[10px] h-3/5 items-center"
      />
      <div>
        <div>
          <h2 className="my-[2px] text-white">{props.a.name}</h2>
          <p className="my-[2px] font-thin text-gray-300">
            Height: {props.a.height} dm
          </p>
          <p className="my-[2px] font-thin text-gray-300">
            Weight: {props.a.weight} hg
          </p>
          <p className="my-[2px] font-thin text-gray-300">
            Types: {props.a.types.map((type) => type.type.name)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainDetail;
