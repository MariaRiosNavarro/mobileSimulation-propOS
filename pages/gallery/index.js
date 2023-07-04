import ApppHeader from "../../components/AppsHeader";
import { cameraSVG } from "../../components/assets/homeSVG";

import PhotoList from "../../components/PhotoList";
export default function Gallery() {
  return (
    <>
      <ApppHeader heading={"Gallerie"} StyledSvg={cameraSVG} />
      <PhotoList></PhotoList>
    </>
  );
}
