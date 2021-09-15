const base_url ="https://localhost:44340";
export const APIContact = {
    contacts:{
        url:base_url+"/api/Contacts",
        params:{},
        method:"GET"
    },
    add_contact:{
        url:base_url+"/api/Contacts",
        params:JSON.stringify({
            content:"",
            address:"",
            telephone:"",
            status:"",
        }),
        method:"POST"
    },
    detail_contact:{
        url:base_url+"/api/Contacts/",// +id
        params:{},
        method:"GET"
    },
    edit_contact:{
        url:base_url+"/api/Contacts/",// +id
        params:JSON.stringify({
            contactId:0,
            name:"",
            image:"",
            description:"",
            status:""
        }),
        method:"PUT"
    },
    delete_contact:{
        url:base_url+"/api/Contacts/",// +id
        params:{},
        method:"DELETE"
    }
}