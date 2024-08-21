const PE_API = {
    addPE:  (data) => {
        return    fetch('http://localhost:7999/api/entrepreneurse',{
            method: "POST",
            body: JSON.stringify({...data}),
            headers: { 'Content-Type': 'application/json'},
            
          })
        },

        editPE: (id, body) => {
            return    fetch(`http://localhost:7999/api/entrepreneurse/${id}`,{
                method: "PUT",
                body: JSON.stringify({...body}),
                headers: { 'Content-Type': 'application/json'},
                
              })
        },

    getPE:  () => {
                  return fetch('http://localhost:7999/api/entrepreneurse');
                  },

    deletePE: (id) => {
        return fetch(`http://localhost:7999/api/entrepreneurse/${id}`, {
            method: "DELETE"
        })
    },

    getPEById:  (id) => {
        return fetch(`http://localhost:7999/api/entrepreneurse/${id}`)
    }
      }


export default PE_API;