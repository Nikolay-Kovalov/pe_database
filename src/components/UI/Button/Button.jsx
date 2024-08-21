import { Btn } from "./Button.styled";


const Button = ({children,fs, onClick, type}) => {
    return (
        <Btn type={type} onClick={onClick} fs={fs}>{children}</Btn>
    )
}

export default Button;