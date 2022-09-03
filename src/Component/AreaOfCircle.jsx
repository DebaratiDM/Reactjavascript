import { areaOfCircle } from "../Utility/general";
const AreaOfCircle = () => {
  const radius = 5;
  const Pie = Math.PI;
  const areaCircle = areaOfCircle(Pie, radius);

  return (
    <div>
      AreaOfCircle for radius <b>{radius}</b> is : <b>{areaCircle}</b>
    </div>
  );
};

export default AreaOfCircle;
