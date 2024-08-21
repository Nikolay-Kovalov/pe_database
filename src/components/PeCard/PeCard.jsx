import Button from "../UI/Button/Button";
import styles from './PeCard.module.css'
import PE_API from "../../services/PE_API";
import Modal from "../Modal/Modal";
import { Address, BtnsWrapper, Card, CardTitle, Email, HighlightedSpan, Phone, Registration, TaxCode } from "./PeCard.styled";
import React from "react";
import PeInfo from "../PeInfo/PeInfo";


class PeCard extends React.Component {
    constructor(){
        super();
        this.state = {
          PE: null,  
          isModalOpen: false,
      }
      }

    highlight = (text, filter) => {
      if(!filter){
        return text
      }

      const regExp = new RegExp(`(${filter})`, 'gi')
      

      return text.split(regExp).map((substring, idx) => {
        if(substring.toLowerCase() === filter.toLowerCase()){
          console.log(substring)
          console.log(filter)
          return (
          // <HighlightedSpan key={idx}>
          <span className={styles.highlight} key={idx}>
            {substring}
            </span>
          // </HighlightedSpan>
          
        )}
        return substring 
      })
    }
   
    openModal = () => {
        this.setState({isModalOpen: true})
      }
    
      closeModal = () => {
        this.setState({isModalOpen: false})
      }

      render(){
        const {name, surname, phone, email, taxcode, id, registration, post, region, locality, street, building, apartament,  deletePE_Data} = this.props;

        return (
            <>
            <Card id={id}>
                <div>
                <CardTitle>{this.highlight(surname, this.props.filter)} {name}</CardTitle>
                <TaxCode>РНОКПП: {taxcode}</TaxCode>
                <Registration>Дата реєстрації: {registration}</Registration>
                <Address>{`${post}, ${region}, ${locality}, ${street}, ${building}, ${apartament}`}</Address>
                <Phone>Телефон: {phone}</Phone>
                <Email>Пошта: {email}</Email>
                </div>
                <BtnsWrapper>
                    <Button type="button" onClick = {
              ()=>{
                     
                     
                     
                        this.openModal()
                    
                    }
                        } fs="17">Детальніше</Button>
                    <Button type="button" onClick = {
                        async ()=>{
                            try{
                           const data =  await PE_API.deletePE(id);
                           const parsedData = await data.json()
                           console.log(parsedData)
                           deletePE_Data (parsedData.data)
                            }
                            catch(error){
                                console.log(error.message)
                            }
                            } } fs="17">Видалити</Button>
                </BtnsWrapper>
            </Card>
                  {this.state.isModalOpen && <Modal closeModal={this.closeModal}>
                    <PeInfo updatePE_List ={this.props.updatePE_List } id={id}/>
                    </Modal>}
                  </>
        )
      }
    
}

export default PeCard;