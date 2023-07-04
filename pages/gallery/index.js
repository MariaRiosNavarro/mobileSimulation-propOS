import { StyledAppHeading } from "../../components/Layout";
import { backSVG } from "../../components/assets/contactsSVG";
import PhotoList from "../../components/PhotoList";
export default function Gallery() {
  return (
    <>
      <StyledAppHeading heading={"Gallerie"} StyledSvg={backSVG} />
      <PhotoList></PhotoList>
    </>
  );
}
