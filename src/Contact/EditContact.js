import React from "react";
import {Redirect,withRouter} from "react-router-dom";
import axios from "axios";
import {APIContact} from "../API/APIContact";

class EditContact extends React.Component{
    constructor(props) {
        super(props);
        this.state = { //tạo state
            contact: {
                contactId:0,
                content:"",
                address:"",
                telephone:"",
            },
            redirect:false //redirect nếu true chuyền về trang category
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    componentDidMount() {
        const id = this.props.match.params.id; //lấy id trên url
        axios.get(APIContact.detail_contact.url+id).then(rs=>{
            this.setState({
                    contact:rs.data
                }
            );
        })
    }

    handleChange(e){
        const key = e.target.name;// lay dc name cua input
        const v = e.target.value;// lay dc value cua input ->gia tri vua dien
        let contact = this.state.contact;
        contact[key] = v;// gan gia tri cua property nhu dang array
        this.setState({
            contact:contact
        })
    }
    submit(event){
        const contact = this.state.contact;
        const json = JSON.stringify(contact);
        axios.put(APIContact.edit_contact.url+contact.contactId,json,{
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(rs=>{
            this.setState({
                redirect:true
            })
        })
        event.preventDefault(); //ngăn sự kiện submit tĩnh post lên
    }
    render() {
        const redirect = this.state.redirect;
        const contact = this.state.contact;
        return (
            <div>
                {redirect?<Redirect to="/contacts"/>:null}
                <h1>Edit: {contact.content}</h1>
                <div className="row">
                    <section className="col-6 text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>Content</label>
                                <input name="content" onChange={this.handleChange} value={contact.content} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input name="address"  onChange={this.handleChange} value={contact.address}  className="form-control"/>


                            </div>
                            <div className="form-group">
                                <label>Telephone</label>
                                <textarea name="telephone" onChange={this.handleChange} value={contact.telephone} className="form-control"></textarea>
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
export default withRouter(EditContact); //phải có cái này