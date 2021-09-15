const base_url ="https://localhost:44340";
export const API={
    brands:{
        url:base_url+"/api/Brands",
        param:{},
        method:"GET"
    },
    add_brand:{
        url:base_url+"/api/Brands",
        param:JSON.stringify({
            name:"",
            image:"",
            description:"",
            categoryId:""
        }),
        method:"POST"
    },
    detail_brand:{
        url:base_url+"/api/Brands/",// +id
        params:{},
        method:"GET"
    },
    edit_brand:{
        url:base_url+"/api/Brands/",// +id
        params:JSON.stringify({
            id:0,
            name:"",
            image:"",
            description:"",
            categoryId:""
        }),
        method:"PUT"
    },
    delete_brand:{
        url:base_url+"/api/Brands/",// +id
        params:{},
        method:"DELETE"
    }
}