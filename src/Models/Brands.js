import React from 'react'; //require thư viện react
import {API} from "../API/APIB";
import axios from "axios";
import {Link} from "react-router-dom";
export default class Brands extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            brands:[],
        }
        this.refresh = this.refresh.bind(this)
    }
    componentDidMount() {
        axios.get(API.brands.url).then(rs=>{ //sau đó dặt state bằng data
            this.setState({
                brands:rs.data,
            })
        })
    }
    async deleteBrand(id){
        const rs = await axios.delete(API.delete_brand.url+id);
        if(rs.status ===204){
            this.refresh();
        }else{
            alert("ERRORS!");
        }
    }
    refresh(){
        axios.get(API.brands.url)
            .then(rs=>{
                this.setState({
                    brands:rs.data,
                })
            })

    }

    render() {
        const brands = this.state.brands;
        return (
            <div>
                <h1>Brands</h1>
                <div className="row">
                    <section className="col-12 text-right">
                        <Link to="/add-brand" className="btn btn-primary">Add Brand</Link>
                    </section>
                    <section className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>CategoryID</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                brands.map((e,k)=>{
                                    return <tr key={k}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td><img src={"dist/img/"+e.image.split('\\fakepath\\')[1]} width={50} height={50}/></td>
                                        <td>{e.description}</td>
                                        <td>{e.categoryId}</td>
                                        <td>
                                            <Link className="btn btn-outline-primary" to={"/edit-brand/"+e.id}>Edit</Link>&nbsp;
                                            <button type="button" onClick={this.deleteBrand.bind(this,e.id)} className="btn btn-outline-danger">Delete</button>
                                        </td>
                                    </tr>

                                })
                            }
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        );
    }
}
