import React from "react";
import { Input, InputWrapper, Label, MainForm, SubmitButton, TextArea, FormBlocksWrapper, FormInnerWrapper, LocationWrapper, Select, LocationWrapperTitle, TaxRateWrapper, ErrorInputText, RadioWrapper, TextAreaWrapper,RateInputWrapper} from "./Form.styled";
import PE_API from "../../services/PE_API";
class Form extends React.Component{ 
    static defaultState = {
        name: "",
        surname: "",
        phone: "",
        email: "",
        gender: "Чоловік",
        info: "",
        post: "",
        region: "",
        locality: "",
        street: "",
        building: "",
        apartament: "",
        postActive: "",
        regionActive: "",
        localityActive: "",
        streetActive: "",
        buildingActive: "",
        apartamentActive: "",
        registration: "",
        taxcode:"",
        system:"Загальна",
        rate: "",
        group: "",
        licenses:"",
        activities:"",
    }
    constructor(){
        super()
        this.state = {
            ...Form.defaultState,
         formErrors: {...Form.defaultState}
        };
    }

    // regExp = {
    //     name: new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$') 
    // }

    // validateInput = (evt, validationShema) => {
    //     const value = evt.currentTarget.value
    //   if(!validationShema.test(value)){
    //     console.log("false")
    //   }
    // }

    onInputChange = evt => {
        const name = evt.currentTarget.name;
        this.setState({[evt.currentTarget.name]: evt.currentTarget.value})
        this.setState(prevState => ({formErrors: {...prevState.formErrors, [name] : false}}))
  
      }

    onFormSubmit =  async (evt) => {

        evt.preventDefault();
       await this.setState({formErrors: {...Form.defaultState}})

        const formFieldValues = Object.entries(this.state);

        formFieldValues.forEach(item => {
            if(item[1] === ""){

                const errorName = item[0]
        this.setState(prevState => ({formErrors: {...prevState.formErrors, [errorName]: true}}))
            }
        })
        if(Object.values(this.state).some(item => item === "")){
            return
        }
        try{
        const addedPE = await  PE_API.addPE(this.state);
        const parsedPE = await addedPE.json()
        this.props.updatePE_Data(parsedPE.data)
        this.props.showNotification()
        }
        catch(error){
            console.log(error.message);
        }
        this.setState(Form.defaultState)
    }  
    render(){
        return (
            <MainForm onSubmit={this.onFormSubmit}>
                <FormInnerWrapper>
                <FormBlocksWrapper>
                <InputWrapper>
                    <Label htmlFor="name">Ім'я</Label>
                    <Input
                    //  onBlur={(evt) => {this.validateInput(evt, this.regExp.name )}}
                      onChange={this.onInputChange} value={this.state.name} id="name" name="name" type="text" placeholder="Микола"/>
                    {this.state.formErrors.name && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="surname">Прізвище</Label>
                    <Input onChange={this.onInputChange} value={this.state.surname} id="surname" name="surname" type="text" placeholder="Ковальов"/>
                    {this.state.formErrors.surname && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input onChange={this.onInputChange} value={this.state.phone} id="phone" name="phone" type="text" placeholder="+380956471367"/>
                    {this.state.formErrors.phone && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="email">Пошта</Label>
                    <Input onChange={this.onInputChange} value={this.state.email} id="email" name="email" type="text" placeholder="letrados@i.ua"/>
                    {this.state.formErrors.email && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <RadioWrapper>
                    <input onChange={this.onInputChange} type="radio"  name="gender" id="mail" checked = {this.state.gender === "Чоловік"} value={"Чоловік"}/>
                    <Label htmlFor="mail">Чоловік</Label>
                </RadioWrapper>
                <RadioWrapper>
                    <input onChange={this.onInputChange} type="radio" name="gender" id="femail" checked = {this.state.gender === "Жінка"}   value={"Жінка"}/>
                    <Label htmlFor="femail">Жінка</Label>
                </RadioWrapper>
                <TextAreaWrapper>
                    <Label htmlFor="additional">Персональна інформація</Label>
                    <TextArea height="116" onChange={this.onInputChange} value={this.state.info} name="info" id="additional" type="text" />
                    {this.state.formErrors.info && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </TextAreaWrapper>
                </FormBlocksWrapper>

                <FormBlocksWrapper>
                <LocationWrapper>
                    <LocationWrapperTitle width="160">Місце реєстрації</LocationWrapperTitle>
                    <InputWrapper>
                    <Label htmlFor="post">Поштовий індекс</Label>
                    <Input onChange={this.onInputChange} value={this.state.post} id="post" name="post" type="text" placeholder="07322"/>
                    {this.state.formErrors.post && <ErrorInputText>ЦОбов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="region">Регіон</Label>
                    <Input onChange={this.onInputChange} value={this.state.region} id="region" name="region" type="text" placeholder="Київська обл"/>
                    {this.state.formErrors.region && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="locality">Населений пункт</Label>
                    <Input onChange={this.onInputChange} value={this.state.locality} id="locality" name="locality" type="text" placeholder="місто Вишгород"/>
                    {this.state.formErrors.locality && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="street">Вулиця</Label>
                    <Input onChange={this.onInputChange} value={this.state.street} id="street" name="street" type="text" placeholder="Петра Калнишевського"/>
                    {this.state.formErrors.street && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="Будинок">Будинок</Label>
                    <Input onChange={this.onInputChange} value={this.state.building} id="building" name="building" type="text" placeholder="52"/>
                    {this.state.formErrors.building && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="apartament">Квартира</Label>
                    <Input onChange={this.onInputChange} value={this.state.apartament} id="apartament" name="apartament" type="text" placeholder="1"/>
                    {this.state.formErrors.postActive && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                </LocationWrapper>
                </FormBlocksWrapper>

                <FormBlocksWrapper>
                <LocationWrapper>
                    <LocationWrapperTitle width="260">Місце здійснення діяльності</LocationWrapperTitle>
                    <InputWrapper>
                    <Label htmlFor="postActive">Поштовий індекс</Label>
                    <Input onChange={this.onInputChange} value={this.state.postActive} id="postActive" name="postActive" type="text" placeholder="07322"/>
                    {this.state.formErrors.postActive && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="regionActive">Регіон</Label>
                    <Input onChange={this.onInputChange} value={this.state.regionActive} id="regionActive" name="regionActive" type="text" placeholder="Київська обл"/>
                    {this.state.formErrors.regionActive && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="localityActive">Населений пункт</Label>
                    <Input onChange={this.onInputChange} value={this.state.localityActive} id="localityActive" name="localityActive" type="text" placeholder="Вишгород"/>
                    {this.state.formErrors.localityActive && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="streetActive">Вулиця</Label>
                    <Input onChange={this.onInputChange} value={this.state.streetActive} id="streetActive" name="streetActive" type="text" placeholder="Петра Калнишевського"/>
                    {this.state.formErrors.streetActive && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="buildingActive">Будинок</Label>
                    <Input onChange={this.onInputChange} value={this.state.buildingActive} id="buildingActive" name="buildingActive" type="text" placeholder="52"/>
                    {this.state.formErrors.buildingActive && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="apartamentActive">Назва закладу/Квартира</Label>
                    <Input onChange={this.onInputChange} value={this.state.apartamentActive} id="apartamentActive" name="apartamentActive" type="text" placeholder="1"/>
                    {this.state.formErrors.apartamentActive && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                </LocationWrapper>
                </FormBlocksWrapper>

                <FormBlocksWrapper>
                <InputWrapper>
                    <Label htmlFor="registration">Дата реєстрації</Label>
                    <Input onChange={this.onInputChange} value={this.state.registration} id="registration" name="registration" type="text" placeholder="12.07.2019"/>
                    {this.state.formErrors.registration && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="taxcode">РНКПО</Label>
                    <Input onChange={this.onInputChange} value={this.state.taxcode} id="taxcode" name="taxcode" type="text" placeholder="3028818219"/>
                    {this.state.formErrors.taxcode && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="system">Система оподаткування</Label>
                    <Select onChange={this.onInputChange} name="system" id="system">
                        <option value="Загальна">Загальна</option>
                        <option value="Єдиний податок">Єдиний податок</option>
                    </Select>
                </InputWrapper>
                <TaxRateWrapper>
                <RateInputWrapper>
                    <Label htmlFor="rate">Ставка податку</Label>
                    <Input width="120" onChange={this.onInputChange} value={this.state.rate} id="rate" name="rate" type="text" placeholder="20%"/>
                    {this.state.formErrors.rate && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </RateInputWrapper>
                <RateInputWrapper>
                    <Label htmlFor="group">Група</Label>
                    <Input width="120" onChange={this.onInputChange} value={this.state.group} id="group" name="group" type="text" placeholder="2"/>
                    {this.state.formErrors.group && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </RateInputWrapper>
                </TaxRateWrapper>
                <InputWrapper>
                    <Label htmlFor="licenses">Ліцензії</Label>
                    <Input  onChange={this.onInputChange} value={this.state.licenses} id="licenses" name="licenses" type="text" placeholder="Відсутня"/>
                    {this.state.formErrors.licenses && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="activities">Види діяльності</Label>
                    <TextArea height="100" onChange={this.onInputChange} value={this.state.activities} id="activities" name="activities" type="text" placeholder="62.01 Діяльність у сфері права"/>
                    {this.state.formErrors.activities && <ErrorInputText>Обов'язкове поле</ErrorInputText>}
                </InputWrapper>
                </FormBlocksWrapper>
                </FormInnerWrapper>
                <SubmitButton type="submit">Додати</SubmitButton>
            </MainForm>
        )
    }
}

export default Form;