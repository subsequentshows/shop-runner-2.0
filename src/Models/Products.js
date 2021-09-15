import React from 'react'; //require thư viện react
import {APIProducts} from "../API/APIP";
import axios from "axios";
import {Link} from "react-router-dom";
export default class Products extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            products:[],
        }
        this.refresh = this.refresh.bind(this)
    }
    componentDidMount() {
        axios.get(APIProducts.products.url).then(rs=>{ //sau đó dặt state bằng data
            this.setState({
                products:rs.data,
            })
        })
    }
    async deleteBrand(id){
        const rs = await axios.delete(APIProducts.delete_product.url+id);
        if(rs.status ===204){
            this.refresh();
        }else{
            alert("ERRORS!");
        }
    }
    refresh(){
        axios.get(APIProducts.products.url)
            .then(rs=>{
                this.setState({
                    products:rs.data,
                })
            })

    }

    render() {
        const products = this.state.products;
        return (
            <div>
                <h1>Products</h1>
                <div className="row">
                    <section className="col-12 text-right">
                        <Link to="/add-product" className="btn btn-primary">Add Product</Link>
                    </section>
                    <section className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>CategoryID</th>
                                <th>BrandID</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                products.map((e,k)=>{
                                    return <tr key={k}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td><img src={"dist/img/"+e.image.split('\\fakepath\\')[1]} width={50} height={50}/></td>
                                        <td>{e.price}</td>
                                        <td>{e.description}</td>
                                        <td>{e.categoryId}</td>
                                        <td>{e.brandId}</td>
                                        <td>
                                            <Link className="btn btn-outline-primary" to={"/edit-product/"+e.id}>Edit</Link>&nbsp;
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
