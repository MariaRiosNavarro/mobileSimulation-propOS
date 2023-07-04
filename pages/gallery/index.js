import ApppHeader from "../../components/AppsHeader";
import { cameraSmallSVG } from "../../components/assets/homeSVG";

import PhotoList from "../../components/PhotoList";
export default function Gallery() {
  return (
    <>
      <ApppHeader heading={"Gallerie"} StyledSvg={cameraSmallSVG} />
      <PhotoList></PhotoList>
    </>
  );
}
