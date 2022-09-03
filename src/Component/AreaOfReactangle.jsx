import { areaOfReactangle } from "../Utility/general";
function AreaOfReactangle() {
  const length = 3;
  const width = 8;
  const currentArea = areaOfReactangle(length, width);
  return (
    <div className="App">
      Area of reactangle length:<b>{length}</b> and width: <b>{width}</b> so
      area = <b>{currentArea}</b>
    </div>
  );
}

export default AreaOfReactangle;
