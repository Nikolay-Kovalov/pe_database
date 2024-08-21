// import Title from "../../components/UI/Title/Title";
// import Form from "../../components/Form/Form";
import InfoWrapper from "../../components/InfoWrapper/InfoWrapper";
import Sidebar from "../../components/Sidebar/Sidebar";
import Filters from "../../components/Filters/Filters";
import PeList from "../../components/PeList/PeList";
import { Loader } from "./HomePage.styled";
import { useEffect } from "react";
import PE_API from "./../../services/PE_API";

const HomePage = ({
    updatePE_Data,
    setPE_Data,
    filter,
    updatePE_List,
    changeFilterValue,
    deletePE_Data,
    filteredPe,
    PE_Data
}) => {
   
    return (

        <section>
            {/* <Title >Щоб додати інформацію про підприємця, будь-ласка заповніть форму нижче</Title> */}
      {/* <Form updatePE_Data = {updatePE_Data}/> */}
      <InfoWrapper>
      {PE_Data?.length > 0 ? <PeList PE_Data={PE_Data} setPE_Data={setPE_Data} filter={filter} updatePE_List = {updatePE_List} deletePE_Data  = {deletePE_Data } data={filteredPe}/> 
      : <Loader>Завантаження...</Loader>
      }
      <Sidebar>
        <Filters changeFilterValue={changeFilterValue}/>
      </Sidebar>
      </InfoWrapper>
        </section>
    )
}

export default HomePage;