import React from "react";
import PE_API from "../../services/PE_API";
import { BtnsCtrlWrapper, FieldInfo, FieldInfoArea, FieldInfoInput, FieldInfoText, FieldInfoTitle, InfoTitle, InfoWrapper, Loader, LoadingWrapper, MainInfoForm, MainInfoWrapper, TextareaInput, TitleInputsWrapper, Wrapper, FieldInfoTextArea } from "./PeInfo.styled";
import Button from "../UI/Button/Button";





class PeInfo extends React.Component{
    constructor(){
        super()
        this.state = {
            PE: {},
            isEditable: false,
            isLoading: false
        }
    }
   async componentDidMount(){
    try{
        this.setState({isLoading: true})
        const PE = await PE_API.getPEById(this.props.id);  
        if(!PE.ok){
          throw new Error('Smth went wrong')
        }
      
        const parsedPE = await PE.json();
       this.setState({PE: parsedPE.data})
     
       
       
        
      }
      catch(error){
          console.log(error.message)
      }
      finally{
         this.setState({isLoading: false})
       
      }
    }

    editPE = () => {
        this.setState({isEditable: true})
    }

     saveEditedPE = async (evt, id, body) => {
        evt.preventDefault();
        try{
         const data = await PE_API.editPE(id, body);
         if(!data.ok){
            throw new Error('Smth went wrong')
         }
         const parsedData = await data.json();
         this.props.updatePE_List(parsedData.data)
        this.setState({PE: parsedData.data})
        
        }
        catch(error){
            console.log(error.message)
        }
        this.setState({isEditable: false})
    }

    handleEditPEChange = (evt) => {
        this.setState({PE: {[evt.target.name]: evt.target.value}})
    }

 render(){
    const {name ,
        surname,
        phone,
        email,
        gender,
        info,
        post,
        region,
        locality,
        street,
        building,
        apartament,
        postActive,
        regionActive,
        localityActive,
        streetActive,
        buildingActive,
        apartamentActive,
        registration,
        taxcode,
        system,
        rate,
        group,
        licenses,
        activities} = this.state.PE
     return (
<>
{this.state.isLoading && <LoadingWrapper><Loader>Завантаження...</Loader></LoadingWrapper>}
{this.state.PE && this.state.isEditable === false && this.state.isLoading === false &&
    <MainInfoWrapper>
          {/* <InfoTitle>{name} {surname}</InfoTitle> */}
        <InfoWrapper>
        <Wrapper>
        <InfoTitle>{surname} {name}</InfoTitle>
    <FieldInfo ><FieldInfoTitle>Телефон: </FieldInfoTitle><FieldInfoText>{phone}</FieldInfoText></FieldInfo>
    <FieldInfo><FieldInfoTitle>Пошта: </FieldInfoTitle><FieldInfoText>{email}</FieldInfoText></FieldInfo>
    <FieldInfo><FieldInfoTitle>Стать: </FieldInfoTitle>{gender}</FieldInfo>
    <FieldInfoArea><FieldInfoTitle>Додаткова інформація: </FieldInfoTitle>{info}</FieldInfoArea>
    </Wrapper> 
    <Wrapper>
    <h2>Адреса реєстрації:</h2>
    <FieldInfo><FieldInfoTitle>Поштовий індекс: </FieldInfoTitle>{post}</FieldInfo>
    <FieldInfo><FieldInfoTitle>Регіон: </FieldInfoTitle>{region}</FieldInfo>
    <FieldInfo><FieldInfoTitle>Населений пункт: </FieldInfoTitle>{locality}</FieldInfo>
    <FieldInfo><FieldInfoTitle>Вулиця: </FieldInfoTitle>{street}</FieldInfo> 
    <FieldInfo><FieldInfoTitle>Будинок: </FieldInfoTitle>{building}</FieldInfo>
    <FieldInfo><FieldInfoTitle>Квартра: </FieldInfoTitle>{apartament}</FieldInfo>
    </Wrapper>
    <Wrapper>
    <h2>Місце провадження діяльності:</h2>
    <FieldInfo><FieldInfoTitle>Поштовий індекс: </FieldInfoTitle>{postActive}</FieldInfo>
    <FieldInfo><FieldInfoTitle>Регіон: </FieldInfoTitle>{regionActive}</FieldInfo>
    <FieldInfo><FieldInfoTitle>Населений пункт: </FieldInfoTitle>{localityActive}</FieldInfo>
    <FieldInfo><FieldInfoTitle>Вулиця: </FieldInfoTitle>{streetActive}</FieldInfo> 
    <FieldInfo><FieldInfoTitle>Будинок: </FieldInfoTitle>{buildingActive}</FieldInfo>
    <FieldInfo><FieldInfoTitle>Квартра: </FieldInfoTitle>{apartamentActive}</FieldInfo>
    </Wrapper>
    <Wrapper>
    <FieldInfo><FieldInfoTitle>Дата реєстрації: </FieldInfoTitle>{registration}</FieldInfo>
    <FieldInfo><FieldInfoTitle>РНОКПП: </FieldInfoTitle>{taxcode}</FieldInfo>
    <FieldInfo><FieldInfoTitle>Система оподаткування: </FieldInfoTitle>{system}</FieldInfo>
    <FieldInfo><FieldInfoTitle>Ставка податку: </FieldInfoTitle>{rate}</FieldInfo> 
    <FieldInfo><FieldInfoTitle>Група: </FieldInfoTitle>{group}</FieldInfo>
    <FieldInfo><FieldInfoTitle>Ліцензії: </FieldInfoTitle>{licenses}</FieldInfo>
    <FieldInfo><FieldInfoTitle>Види діяльності: </FieldInfoTitle>{activities}</FieldInfo>
    </Wrapper>
    </InfoWrapper>
    <BtnsCtrlWrapper>
          <Button type="button" onClick={this.editPE} fs={20}>Редагувати</Button>
          <Button type="button" fs={20}>Видалити</Button>
          </BtnsCtrlWrapper>
</MainInfoWrapper>
}
{this.state.PE && this.state.isEditable === true &&
    <div>
        <MainInfoForm onSubmit={(evt)=>{this.saveEditedPE(evt,this.props.id, this.state.PE)}}>
            <TitleInputsWrapper>
            {/* <FieldInfo><FieldInfoTitle>Прізвище: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="surname" value={surname}/></FieldInfo>
        <FieldInfo ><FieldInfoTitle>Ім'я: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="name" value={name}/></FieldInfo> */}
        </TitleInputsWrapper>
        <InfoWrapper>
        <Wrapper>
        <FieldInfo><FieldInfoTitle>Прізвище: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="surname" value={surname}/></FieldInfo>
        <FieldInfo ><FieldInfoTitle>Ім'я: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="name" value={name}/></FieldInfo>
    <FieldInfo ><FieldInfoTitle>Телефон: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="phone" value={phone}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>Пошта: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="email" value={email}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>Стать: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="gender" value={gender}/></FieldInfo>
    <FieldInfoTextArea><FieldInfoTitle>Додаткова інформація: </FieldInfoTitle><TextareaInput onChange={this.handleEditPEChange} name="info" value={info}/></FieldInfoTextArea>
    </Wrapper> 
    <Wrapper>
    <h2>Адреса реєстрації:</h2>
    <FieldInfo><FieldInfoTitle>Поштовий індекс: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="post" value={post}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>Регіон: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="region" value={region}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>Населений пункт: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="locality" value={locality}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>Вулиця: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="street" value={street}/></FieldInfo> 
    <FieldInfo><FieldInfoTitle>Будинок: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="building" value={building}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>Квартра: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="apartament" value={apartament}/></FieldInfo>
    </Wrapper>
    <Wrapper>
    <h2>Місце провадження діяльності:</h2>
    <FieldInfo><FieldInfoTitle>Поштовий індекс: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="postActive" value={postActive}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>Регіон: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="regionActive" value={regionActive}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>Населений пункт: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="localityActive" value={localityActive}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>Вулиця: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="streetActive" value={streetActive}/></FieldInfo> 
    <FieldInfo><FieldInfoTitle>Будинок: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="buildingActive" value={buildingActive}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>Квартра: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="apartamentActive" value={apartamentActive}/></FieldInfo>
    </Wrapper>
    <Wrapper>
    <FieldInfo><FieldInfoTitle>Дата реєстрації: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="registration" value={registration}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>РНОКПП: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="taxcode" value={taxcode}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>Система оподаткування: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="system" value={system}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>Ставка податку: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="rate" value={rate}/></FieldInfo> 
    <FieldInfo><FieldInfoTitle>Група: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="group" value={group}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>Ліцензії: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="licenses" value={licenses}/></FieldInfo>
    <FieldInfo><FieldInfoTitle>Види діяльності: </FieldInfoTitle><FieldInfoInput onChange={this.handleEditPEChange} name="activities" value={activities}/></FieldInfo>
    </Wrapper>
    </InfoWrapper>
    <BtnsCtrlWrapper>
          <Button type="submit" fs={20}>Зберегти</Button>
          </BtnsCtrlWrapper>
</MainInfoForm>
    </div>
}
</>

   
    )
}
}

export default PeInfo;