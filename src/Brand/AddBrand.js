import React from "react";
import axios from "axios";
import {API} from "../API/APIB";
import {APIC} from "../API/APIC";
import {Link, Redirect} from "react-router-dom";
import Categories from "../Models/Categories";
export default class AddBrand extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            brand:{
                name:"",
                image:"",
                description:"",
                categoryId:""
            },
            categories:[],
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
    }

    handleChange(e){
        const key = e.target.name;
        const v = e.target.value;
        let brand = this.state.brand;
        brand[key] = v;
        this.setState({
            brand: brand
        })
    }
    submit(event){
        var token='';
        const brand = this.state.brand;
        const json = JSON.stringify(brand);//chuyển object sang json để up lên api
        axios.post(API.add_brand.url,json,{
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
        const brand= this.state.brand;
        const category = this.state.categories;
        let e;

        return (
            <div>
                {redirect ? <Redirect to="/brands"/> : null}
                <h1>Add Brand</h1>

                <div className="row">

                    <sectionc className="col-6 text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>Name</label>
                                <input name="name" onChange={this.handleChange} value={brand.name}
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Image</label>
                                <input name="image" type="file" onChange={this.handleChange} value={brand.image}
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea name="description" id="file-path" onChange={this.handleChange}
                                          value={brand.description} className="form-control"></textarea>
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
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </sectionc>
                </div>
            </div>
        )
    }
}