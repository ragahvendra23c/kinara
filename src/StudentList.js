import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";


function StudentList() {
    const [data, setData] = useState(null)
    const [value, setValue] = useState("")
    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        fetch("https://kinara-studentlist.onrender.com/student")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setData(resp)
            })
    }

    //serach functionality
    const SearchData = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        return await axios.get(`https://kinara-studentlist.onrender.com/student?q=${value}`)
            .then((res) => {
                setData(res.data)
                setValue("")
            })
            .catch((err) => {
                console.log(err)
            })
    }
   
      

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="container">
            {data ? (
                <div className="card">
                    <div className="card-title">
                        <nav className="navbar navbar-expand-lg navbar bg-dark">
                            <div class="container-fluid">
                                <a className="navbar-brand text-white">Student List</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="col-sm-8">
                                    <input type="text" value={value} placeholder="Filter Records..." onChange={SearchData} className="form-control" />
                                </div>
                                <div className="col-sm-2">
                                    <button onClick={handleSubmit} className="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="card-body">
                        <Link to="/add_newdata" className="btn btn-success">
                        Add New(+)</Link>
                        <table className="table table-bordred">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Total Marks</th>
                                    <th>Mobile No</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((item, data) => (
                                        <tr key={data}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.totalmarks}</td>
                                            <td>{item.mobile}</td>
                                            
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 20]}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                     
                        />
                    </div>
                </div>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    )
}

export default StudentList;
