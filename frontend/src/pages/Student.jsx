import { useState, useEffect } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";

const Student = ({headingText, setShowModal, formData})=>{
    return <>
         <div>
         <Modal>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {headingText}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveStudent}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
         </div>
    </>
}

export default Student;