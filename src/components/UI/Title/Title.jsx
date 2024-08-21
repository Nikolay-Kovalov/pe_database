import { Heading } from "./Title.styled";

const Title = ({width, children}) => {
    return (
        <Heading width={width}>{children}</Heading>
    )
}

export default Title;