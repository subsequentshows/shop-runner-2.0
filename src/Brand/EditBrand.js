import React from "react";
import {Redirect,withRouter} from "react-router-dom";
import axios from "axios";
import {API} from "../API/APIB";
import {APIC} from "../API/APIC";
class EditBrand extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            brand:{
                id:0,
                name:"",
                image:"",
                description:"",
                categoryId:""
            },
            categories:[],

            redirect:false
        }
        this.handChange =this.handChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(API.detail_brand.url+id).then(rs=>{
            this.setState({
                brand:rs.data
            })
        })
        axios.get(APIC.categories.url).then(rs=>{
            this.setState({
                categories:rs.data
            })
        })
    }
    handChange(e){
        const key = e.target.name;
        const v = e.target.value;
        let brand = this.state.brand;
        brand[key] = v;
        this.setState({
            brand:brand
        })
    }
    submit(event){
        const brand = this.state.brand;
        const json = JSON.stringify(brand);
        axios.put(API.edit_brand.url+brand.id,json,{
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
        const brand= this.state.brand;
        const category = this.state.categories;
        let e;

        return (
            <div>
                {redirect ? <Redirect to="/brands"/> : null}
                <h1>Edit: {brand.name}</h1>

                <div className="row">

                    <sectionc className="col-6 text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>Name</label>
                                <input name="name" onChange={this.handChange} value={brand.name}
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Image</label>
                                <input name="image" type="file" onChange={this.handChange}
                                       className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea name="description" id="file-path" onChange={this.handChange}
                                          value={brand.description} className="form-control"></textarea>
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
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </sectionc>
                </div>
            </div>
        )
    }
}
export default withRouter(EditBrand);