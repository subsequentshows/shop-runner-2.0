import React from 'react'; //nhập thư viên react
import {APIC} from "../API/APIC";//nhập api
import axios from "axios";//nhập axios get api
import {Link} from "react-router-dom"; //nhập link để làm route
export default class Categories extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            categories:[], //mảng categories
        }
        this.refresh = this.refresh.bind(this);//nạp vào để dùng hàm refresh trảnh tình trạng mất context
    }
    componentDidMount() { //sau khi component render sẽ chạy đến hàm này
        // sẽ thực thi sau khi render lần đầu tiên
        // const id = this.props.match.params.id;
        axios.get(APIC.categories.url) //lấy api.categories.url theo axios
            .then(rs=>{ //sau đó dặt state bằng data
                this.setState({
                    categories:rs.data,
                })
            })
    }
    async deleteCategory(id){ //function del category theo id
        const rs = await axios.delete(APIC.delete_category.url+id); //tạo biến rs = hàm chờ xóa theo id của axios
        if(rs.status === 204){ //204 No Content: Server đã xử lý thành công request nhưng không trả về bất cứ content nào.
            this.refresh(); //hàm hàm refresh
        }else{
            alert("Errors!"); //hiện thông báo errors
        }
    }
    refresh(){ //hàm để refresh lại dữ liệu hiện lên
        axios.get(APIC.categories.url)
            .then(rs=>{
                this.setState({
                    categories:rs.data, //lấy data
                })
            })
    }
    render() {
        const categories = this.state.categories;
        return(
            <div>
                <h1>Categories</h1>
                <div className="row">
                    <section className="col-12 text-right">
                        <Link to="/add-category" className="btn btn-primary">Add Category</Link>
                    </section>
                    <section className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                categories.map((e,k)=>{

                                    return <tr key={k}>

                                        <td>{e.id}</td>
                                        <td>{e.name}</td>

                                        <td><img src={"/dist/img/"+e.image.split('\\fakepath\\')[1]}  width={50} height={50}/></td>
                                        <td>{e.description}</td>
                                        <td>
                                            <Link className="btn btn-outline-primary" to={"/edit-category/"+e.id}>Edit</Link>&nbsp;
                                            <button type="button" onClick={this.deleteCategory.bind(this,e.id)} className="btn btn-outline-danger">Delete</button>
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