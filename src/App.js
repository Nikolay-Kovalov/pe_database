import React, {  useState, lazy , useEffect} from 'react';
import './App.css';
import PE_API from './services/PE_API';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import { Navigate } from 'react-router-dom';


const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const FormPage = lazy(() => import('./pages/FormPage/FormPage'))

const  App = () => {

  const {authUser} = useAuthContext();

 const [PE_Data, setPE_Data] = useState([]);
 const [filter, setFilter] = useState("");
 const [fieldName, setFieldName] = useState("surname");
 const [sortedPE, setSortedPE] = useState("")

  const changeFilterValue = (value, fieldName) => {
    if(value === "А-Я" || value === "Я-А") {
      setSortedPE(value)
    } else {
      setSortedPE("")
    }
    setFilter(value)
    setFieldName(fieldName)
  }



  const updatePE_Data = (data) => {
    setPE_Data(prevState => [...prevState, data])
  }

  const updatePE_List = (data) => {
   setPE_Data(prevState => { 
    return [...prevState.map(item => {
    return item._id === data._id ? data : item
   })]})}

  const sortPE = (value) => {
    if(value === "А-Я") {
      return [...PE_Data]?.sort((a,b) => a.surname.localeCompare(b.surname))
    }
    if(value === "Я-А") {
      return [...PE_Data]?.sort((a,b) => b.surname.localeCompare(a.surname))
    }
    
   
  }

  const deletePE_Data = (PE) => {
    const newPE_Data = PE_Data.filter(item => {
      return item._id !== PE._id
    })
    setPE_Data(newPE_Data)
  }

  useEffect(()=>{
    const updatePE = async  () => {
      try{
        const data =  await PE_API.getPE();
        const parsedData = await data.json();
         setPE_Data(parsedData.data)
          }
          catch(error){
            console.log(error.message);
          }
    }
     updatePE()
  },[]) 
  // Решить вопрос с зацикливанием 


    const lowerSurname = filter.toLowerCase();
    const filteredPe = sortedPE ? sortPE(filter)
    : PE_Data?.filter(item => item[fieldName].toLowerCase().includes(lowerSurname))
    
    return (
      <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={authUser ? <HomePage 
          setPE_Data={setPE_Data}
          PE_Data={PE_Data}
          filter={filter}
          updatePE_List={updatePE_List}
          deletePE_Data ={deletePE_Data }
          filteredPe={filteredPe}
          changeFilterValue={changeFilterValue}
          /> : <Navigate to='/login'/>}/>
                  <Route path='/signup' element={authUser ? <Navigate to={"/"}/> : <SignUpPage/>}/>
                  <Route path='/login' element={authUser ? <Navigate to={"/"}/> : <LoginPage/>}/>
          <Route path='addform' element={authUser ? <FormPage  updatePE_Data = {updatePE_Data}/> : <Navigate to={"/login"}/>}/>
          {/* <Route path='clients' element={}/> */}
        </Route>

    </Routes>
    <Toaster/>
    </div>
  );

}

export default App;





// First variant

// class App extends React.Component{

//   constructor(){
//     super();
//     this.state = {
//       PE_Data: [],
//       filter: "",
//       fieldName: "surname",
//   }
//   }

//   changeFilterValue = (value, fieldName) => {
//     this.setState({filter: value})
//     this.setState({fieldName})
//   }

//   // filterPeBySurname = (surname) => {
//   //   const lowerSurname = surname.toLowerCase();
//   //   this.setState({filteredPe: this.PE_Data.filter(item => item.surname.toLowerCase().includes(lowerSurname))})
//   // }

//   updatePE_Data = (data) => {
//     this.setState(prevState => ({PE_Data: [...prevState.PE_Data, data]}))
//   }

//   updatePE_List = (data) => {
//     this.setState(prevState => ({PE_Data: [...prevState.PE_Data.map(item => {
//    return   item._id === data._id ? data : item})]}))
//   }

//   deletePE_Data = (PE) => {
//     const newPE_Data = this.state.PE_Data.filter(item => {
//       return item._id !== PE._id});
//     this.setState({PE_Data: newPE_Data})
//   }

//  async componentDidMount(){
//     try{
//   const data =  await PE_API.getPE();
//   const parsedData = await data.json();
//    this.setState({PE_Data: parsedData.data})
//     }
//     catch(error){
//       console.log(error.message);
//     }
//   }

//   async componentDidUpdate(prevProps, prevState){
//     if(prevState.PE_Data !== this.state.PE_Data){
//       try{
//   const data =  await PE_API.getPE();
//   const parsedData = await data.json();
//    this.setState({PE_Data: parsedData.data})
//     }
//     catch(error){
//       console.log(error.message);
//     }
//     }
    
//   }

//   render(){

//     const lowerSurname = this.state.filter.toLowerCase();
//     const filteredPe = this.state.PE_Data?.filter(item => item[this.state.fieldName].toLowerCase().includes(lowerSurname))
//     return (
//       <Routes>
//         <Route path='/' element={<Layout/>}>
//           <Route index element={<LoginPage/>}/>
//           <Route path='registration' element={<SignUpPage/>}/>
//           <Route path='addform' element={<FormPage  updatePE_Data = {this.updatePE_Data}/>}/>
//           <Route path='clients' element={<HomePage 
//           // updatePE_Data = {this.updatePE_Data}
//           PE_Data={this.state.PE_Data}
//           filter={this.state.filter}
//           updatePE_List={this.updatePE_List}
//           deletePE_Data ={this.deletePE_Data }
//           filteredPe={filteredPe}
//           changeFilterValue={this.changeFilterValue}
//           />}/>
//         </Route>
//     {/* <div className="App">
//       <Title >Щоб додати інформацію про підприємця, будь-ласка заповніть форму нижче</Title>
//       <Form updatePE_Data = {this.updatePE_Data}/>
//       <InfoWrapper>
//       {this.state.PE_Data?.length > 0 && <PeList filter={this.state.filter} updatePE_List = {this.updatePE_List} deletePE_Data  = {this.deletePE_Data } data={filteredPe}/>}
//       <Sidebar>
//         <Filters changeFilterValue={this.changeFilterValue}/>
//       </Sidebar>
//       </InfoWrapper>
//     </div> */}
//     </Routes>
//   );
//   }
// }
