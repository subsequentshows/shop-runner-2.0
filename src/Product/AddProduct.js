import React from "react";
import axios from "axios";
import {API} from "../API/APIB";
import {APIC} from "../API/APIC";
import {APIProducts} from "../API/APIP";
import {Link, Redirect} from "react-router-dom";
export default class AddProduct extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            product:{
                name:"",
                image:"",
                description:"",
                categoryId:"",
                brandId:""
            },
            categories:[],
            brands:[],
            redirect:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    componentDidMount() {
        axios.get(APIC.categories.url).then(rs=>{
            this.setState({
                categories:rs.data
            })
        })
        axios.get(API.brands.url).then(rs=>{
            this.setState({
                brands:rs.data
            })
        })
    }

    handleChange(e){
        const key = e.target.name;
        const v = e.target.value;
        let product = this.state.product;
        product[key] = v;
        this.setState({
            product:product
        })
    }
    submit(event){
        var token='';
        const product = this.state.product;
        const json = JSON.stringify(product);//chuyển object sang json để up lên api
        axios.post(APIProducts.add_product.url,json,{
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':"*",
                'Authorization':'Bearer'+token
            }
        }).then(rs=>{
            this.setState({
                redirect:true
            })
        })

        event.preventDefault();
    }
    render() {
        const redirect = this.state.redirect;
        const brand= this.state.brands;
        const category = this.state.categories;
        const product = this.state.product;
        let e;
        let v;

        return (
            <div>
                {redirect ? <Redirect to="/products"/> : null}
                <h1>Add Brand</h1>

                <div className="row">

                    <sectionc className="col-6 text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>Name</label>
                                <input name="name" onChange={this.handleChange} value={product.name}
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Image</label>
                                <input name="image" type="file" onChange={this.handleChange} value={product.image}
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input name="price" onChange={this.handleChange} value={product.price}
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea name="description" id="file-path" onChange={this.handleChange}
                                          value={product.description} className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Category ID</label>
                                <select  name="categoryId" onChange={this.handleChange} className="form-control" >
                                    <option></option>
                                    {
                                        category.map((e,k)=>{
                                            return <option key={k} value={e.id} >
                                                {e.id} {e.name}
                                            </option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Brand ID</label>
                                <select  name="brandId" onChange={this.handleChange} className="form-control" >
                                    <option></option>
                                    {
                                        brand.map((v,k)=>{
                                            return <option key={k} value={v.id} >
                                                {v.id} {v.name}
                                            </option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </sectionc>
                </div>
            </div>
        )
    }
}