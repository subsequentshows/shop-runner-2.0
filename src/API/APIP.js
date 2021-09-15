const base_url ="https://localhost:44340";
export const APIProducts={
    products:{
        url:base_url+"/api/Products",
        param:{},
        method:"GET"
    },
    add_product:{
        url:base_url+"/api/Products",
        param:JSON.stringify({
            name:"",
            image:"",
            price:"",
            description:"",
            categoryId:"",
            brandId:"",
        }),
        method:"POST"
    },
    detail_product:{
        url:base_url+"/api/Products/",// +id
        params:{},
        method:"GET"
    },
    edit_product:{
        url:base_url+"/api/Products/",// +id
        params:JSON.stringify({
            id:0,
            name:"",
            image:"",
            price:"",
            description:"",
            categoryId:"",
            brandId:"",
        }),
        method:"PUT"
    },
    delete_product:{
        url:base_url+"/api/Products/",// +id
        params:{},
        method:"DELETE"
    }
}