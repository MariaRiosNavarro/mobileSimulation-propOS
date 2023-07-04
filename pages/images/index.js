import AppsHeader from "../../components/AppsHeader";
import { cameraSmallSVG } from "../../components/assets/homeSVG";

import PhotoList from "../../components/PhotoList";
export default function Gallery() {
  return (
    <>
      <AppsHeader heading={"Gallerie"} StyledSvg={cameraSmallSVG} />
      <PhotoList></PhotoList>
    </>
  );
}
