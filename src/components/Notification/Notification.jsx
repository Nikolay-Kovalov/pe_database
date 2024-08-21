import { Text, Wrapper } from "./Notification.styled";

const Notification = ({text}) => {
    return (
        <Wrapper>
            <Text>{text}</Text>
        </Wrapper>
    )
}

export default Notification;