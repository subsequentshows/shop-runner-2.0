import React from "react";
import {Redirect,withRouter} from "react-router-dom";
import axios from "axios";
import {APIC} from "../API/APIC";
class EditCategory extends React.Component{
    constructor(props) {
        super(props);
        this.state = { //tạo state
            category: {
                id:0,
                name: "",
                image: "",
                description: ""
            },
            redirect:false //redirect nếu true chuyền về trang category
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    componentDidMount() {
        const id = this.props.match.params.id; //lấy id trên url
        axios.get(APIC.detail_category.url+id).then(rs=>{
            this.setState({
                    category: rs.data
                }
            );
        })
    }

    handleChange(e){
        const key = e.target.name;// lay dc name cua input
        const v = e.target.value;// lay dc value cua input ->gia tri vua dien
        let category = this.state.category;
        category[key] = v;// gan gia tri cua property nhu dang array
        this.setState({
            category: category
        })
    }
    submit(event){
        const category = this.state.category;
        const json = JSON.stringify(category);
        axios.put(APIC.edit_category.url+category.id,json,{
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
        const category = this.state.category;
        return (
            <div>
                {redirect?<Redirect to="/categories"/>:null}
                <h1>Edit: {category.name}</h1>
                <div className="row">
                    <section className="col-6 text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>Name</label>
                                <input name="name" onChange={this.handleChange} value={category.name} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Image</label>
                                <input name="image"  onChange={this.handleChange} type="file"  className="form-control"/>


                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea name="description" onChange={this.handleChange} value={category.description} className="form-control"></textarea>
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
export default withRouter(EditCategory); //phải có cái này