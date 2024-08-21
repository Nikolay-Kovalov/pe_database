import PeCard from "../PeCard/PeCard"
import { List, ListWrapper, InfoText } from "./PeList.styled";


const PeList = ({data, deletePE_Data, updatePE_List, filter, setPE_Data, PE_Data}) => {



    return (
        <ListWrapper>
        {Boolean(data?.length) ? 
            <List>
            {Boolean(data.length) && data.map(item => {
                return  <PeCard
                 key={item._id}
                 id={item._id}
                 name={item.name} 
                 surname={item.surname}
                 phone={item.phone}
                 email={item.email}
                 taxcode={item.taxcode}
                 registration={item.registration}
                 post={item.post}
                 region={item.region}
                 locality={item.locality} 
                 street={item.street} 
                 building={item.building}
                 apartament={item.apartament}
                 deletePE_Data  = {deletePE_Data  }
                 updatePE_List = {updatePE_List }
                 filter = {filter}
                />
                
            })}
        </List>
        :
        <InfoText>Інформація відсутня</InfoText>
        }
        </ListWrapper>
    )
}

export default PeList;