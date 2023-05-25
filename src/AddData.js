import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function AddData() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [totalMarks, setTotalMarks] = useState("")
    const [mobile, setMobile] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { id, name, totalMarks, mobile }
        fetch("https://kinara-studentlist.onrender.com/student", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                alert("Succesfuly saved")
                navigate("/")
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="offsetlg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-title">
                                <h3 style={{ textAlign: "center" }}>Create User</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input type="text" value={id} disabled="disabled" onChange={e => setId(e.target.value)} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" />
                                        </div>
                                    </div>

                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Total Marks</label>
                                            <input type="text" value={totalMarks} onChange={e => setTotalMarks(e.target.value)} className="form-control" />
                                            {/* <input type="number" value={totalMarks} onChange={e => setTotalMarks(e.target.value)} className="form-control" /> */}
                                            {/* <textarea value={totalMarks} onChange={e => setTotalMarks(e.target.value)} className="form-control" placeholder="Leave a description here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>      */}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Mobile Number</label>
                                            <input type="text" value={mobile} onChange={e => setMobile(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-success">Save</button>
                                            <Link to="/list" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}


export default AddData;
