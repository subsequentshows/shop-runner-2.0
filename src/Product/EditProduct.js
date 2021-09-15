import React from "react";
import {Redirect,withRouter} from "react-router-dom";
import axios from "axios";
import {API} from "../API/APIB";
import {APIProducts} from "../API/APIP";
import {APIC} from "../API/APIC";
class EditProduct extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            product:{
                id:0,
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
        this.handChange =this.handChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(APIProducts.detail_product.url+id).then(rs=>{
            this.setState({
                product:rs.data
            })
        })
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
    handChange(e){
        const key = e.target.name;
        const v = e.target.value;
        let product = this.state.product;
        product[key] = v;
        this.setState({
            product:product
        })
    }
    submit(event){
        const product = this.state.product;
        const json = JSON.stringify(product);
        axios.put(APIProducts.edit_product.url+product.id,json,{
            headers:{
                'Content-Type':'application/json'
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
                <h1>Edit: {product.name}</h1>

                <div className="row">

                    <sectionc className="col-6 text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>Name</label>
                                <input name="name" onChange={this.handChange} value={product.name}
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Image</label>
                                <input name="image" type="file" onChange={this.handChange}
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input name="price" onChange={this.handChange} value={product.price}
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea name="description"  onChange={this.handChange}
                                          value={product.description} className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Category ID</label>
                                <select  name="categoryId" onChange={this.handChange} className="form-control">
                                    <option></option>
                                    {
                                        category.map((e,k)=>{
                                            return <option key={k} value={e.id}>
                                                {e.id} {e.name}
                                            </option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Brand ID</label>
                                <select  name="brandId" onChange={this.handChange} className="form-control" >
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
export default withRouter(EditProduct);