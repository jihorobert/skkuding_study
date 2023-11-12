import MainDetail from "./MainDetail";

function MainPage(props) {
  return (
    <div className="pb-[100px] pl-[250px] pr-[250px] flex justify-center flex-wrap">
    {/* // <div className="flex-container"> */}
      {props.data.map(function (a, i) {
        return <MainDetail i={i} a={a}></MainDetail>;
      })}
    </div>
  );
}

export default MainPage;