import { ImgLoader, LoaderContainer } from "./Loader.styled";
import LoaderImg from "../../img/HCA-contact-animated-icon.gif"

export default function Loader() {
    return (
        <LoaderContainer>
        <ImgLoader src={LoaderImg} alt="Loading....." />
      </LoaderContainer>
    )
}