import Form from "../../components/Form/Form";
import Title from "../../components/UI/Title/Title";
import Notification from "../../components/Notification/Notification";
import { useState } from "react";

const FormPage = ({updatePE_Data}) => {
    const [notification, setNotification] = useState(false);
    const showNotification = () => {
        setNotification(true)
        setTimeout(() => {setNotification(false)}, 2000)
    }
    return (
        <section>
            <Title >Щоб додати інформацію про підприємця, будь-ласка заповніть форму нижче</Title>
            <Form showNotification={showNotification} updatePE_Data={updatePE_Data}/>
            {notification && <Notification text="Успішно додано"/>}
        </section>
    )
}

export default FormPage;