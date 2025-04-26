import React, { useState, useEffect } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import Student from "./Student";

const StudentList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [students, setStudents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newStudent, SetNewStudent] = useState({
        name: '',

    })
    // const [isEditStudent, setIsEditStudent] = useState(false);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const res = await fetch("https://dummyjson.com/users");
                const data = await res.json();

                const studentData = data.users.map((user) => ({
                    id: user.id,
                    name: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    age: user.age,
                }));
                setStudents(studentData);
            } catch (err) {
                console.error("Error fetching student data:", err);
            }
        };
        fetchStudents();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleDelete = (id) => {
        const filteredStudents = students.filter((student) => student.id !== id);
        setStudents(filteredStudents);
        alert(`Student with ID ${id} deleted.`);
    };

    const handleModal = () => {

    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">All Students</h2>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <button onClick={handleModal} className="btn btn-success">Add New Subject</button>
                <button onClick={handleModal} className="btn btn-success">Add New Student</button>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Student Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students
                            .filter((student) =>
                                student.name.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.age}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-primary me-2"
                                            title="View/Edit"
                                        >
                                            <FaEye />
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            title="Delete"
                                            onClick={() => handleDelete(student.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            {
                (showModal) &&
                <Student
                    showModal={showModal}
                    setShowModal={setShowModal}
                    headingText={`${!!isAddStudent ? "Add New Student" : "Edit Student"}`}
                />

            }
            <div className="d-flex justify-content-between align-items-center mt-3">
                <span>Show <b>10</b> entries</span>
                <div>
                    <button className="btn btn-sm btn-outline-secondary me-1">First</button>
                    <button className="btn btn-sm btn-outline-secondary me-1">Previous</button>
                    <button className="btn btn-sm btn-outline-secondary me-1 active">1</button>
                    <button className="btn btn-sm btn-outline-secondary">Next</button>
                    <button className="btn btn-sm btn-outline-secondary">Last</button>
                </div>
            </div>
        </div>
    );
};

export default StudentList;
