import ClickyMap from "@/Components/ClickyMap/clickymap";
import PointCounter from "@/Components/PointCounter/pointcounter";
import MainImage from "@/Components/MainImage/MainImage";

export default function Game() {
    return (
      <div>
        <MainImage/>
        <ClickyMap/>
        <PointCounter/>
      </div>
    );
  }
  