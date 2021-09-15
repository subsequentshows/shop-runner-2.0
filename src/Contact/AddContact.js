import React from "react";
import axios from "axios";
import {APIContact} from "../API/APIContact";
import {Redirect} from 'react-router-dom';
export default class AddContact extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            contact:{
                content:"",
                address:"",
                telephone:"",
            },
            redirect:false

        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    handleChange(e){
        const key = e.target.name;// lay dc name cua input
        const v = e.target.value;// lay dc value cua input ->gia tri vua dien
        let contact = this.state.contact;
        contact[key] = v;// gan gia tri cua property nhu dang array

        this.setState({
            contact: contact
        })
    }
    submit(event){
        var token ='';//lay tu dau do
        const contact = this.state.contact;
        const json = JSON.stringify(contact);
        axios.post(APIContact.add_contact.url,json,{
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':"*",
                'Authorization': 'Bearer'+token
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
        const contact = this.state.contact;
        return (
            <div>
                {redirect?<Redirect to="/contacts"/>:null}
                <h1>Add Contact</h1>
                <div className="row">
                    <section className="col-6 text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>Content</label>
                                <input name="content" onChange={this.handleChange} value={contact.content} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input name="address" onChange={this.handleChange} value={contact.address} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Telephone</label>
                                <input name="telephone"  id="file-path" onChange={this.handleChange} value={contact.telephone} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        );
    }
}