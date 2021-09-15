import React from 'react'; //nhập thư viên react
import {APIContact} from "../API/APIContact";
import axios from "axios";
import {Link} from "react-router-dom";
import {APIC} from "../API/APIC";
export default class Contacts extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            contacts:[],
        }
        this.refresh = this.refresh.bind(this);
    }
    componentDidMount() {
        axios.get(APIContact.contacts.url).then(rs=>{
            this.setState({
                contacts:rs.data
            })
        })
    }
    async deleteContact(id){
        const rs = await axios.delete(APIContact.delete_contact.url+id);
        if(rs.status ===204){
            this.refresh();
        }else {
            alert("Errors!");
        }
    }

    refresh(){ //hàm để refresh lại dữ liệu hiện lên
        axios.get(APIContact.contacts.url)
            .then(rs=>{
                this.setState({
                    contacts:rs.data, //lấy data
                })
            })
    }
    render() {
        const contacts = this.state.contacts;
        return(
            <div>
                <h1>Contacts</h1>
                <div className="row">
                    <section className="col-12 text-right">
                        <Link to="/add-contact" className="btn btn-primary">Add Contact</Link>
                    </section>
                    <section className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Content</th>
                                <th>Address</th>
                                <th>Telephone</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                contacts.map((e,k)=>{

                                    return <tr key={k}>

                                        <td>{e.contactId}</td>
                                        <td>{e.content}</td>
                                        <td>{e.address}</td>
                                        <td>{e.telephone}</td>
                                        <td>
                                            <Link className="btn btn-outline-primary" to={"/edit-contact/"+e.contactId}>Edit</Link>&nbsp;
                                            <button type="button" onClick={this.deleteContact.bind(this,e.contactId)} className="btn btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        )

    }
}