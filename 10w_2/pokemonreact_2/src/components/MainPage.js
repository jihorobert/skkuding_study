import MainDetail from "./MainDetail";

function MainPage(props) {
  return (
    <div className="flex-container">
      {props.data.map(function (a, i) {
        return <MainDetail i={i} a={a}></MainDetail>;
      })}
    </div>
  );
}

export default MainPage;