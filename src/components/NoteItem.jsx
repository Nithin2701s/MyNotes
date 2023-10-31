import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import { Modal, Button } from 'react-bootstrap';

const NoteItem = (props) => {
    const { note } = props
    const { deleteNote, editNote } = useContext(noteContext)
    const [modalShow, setModalShow] = useState(false);
    const updateNote = (Note) => {
        editNote(Note._id, Note.title, Note.description, Note.tag)
    }
    return (
        <>
            {/* Modal */}
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                note={note}
                updateNote={updateNote}
            />
             {/* Note Card */}
            <div className='col-md-4 my-2'>
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <h5 className="card-title">{note.title}</h5>
                            <i className="fa-sharp fa-solid fa-pen-to-square mx-2 " onClick={() => setModalShow(true)} ></i>
                            <i className="fa-sharp fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id) }} ></i>
                        </div>
                        <p className="card-text">{note.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function MyVerticallyCenteredModal(props) {
    const { note, updateNote, onHide, show } = props
    const [Note, setNote] = useState(note)
    const onchange = (e) => {
        setNote({ ...Note, [e.target.name]: e.target.value })
    }
    return (
        <Modal
            onHide={onHide}
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit note
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ fontFamily: 'revert' }}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="etitle" className="form-label">Title</label>
                        <input type="text" className="form-control" id="etitle" value={Note.title} name='title' minLength={5} required aria-describedby="emailHelp" onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id='description' name='description' minLength={5} required value={Note.description} onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' value={Note.tag} onChange={onchange} />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger' className='danger' onClick={onHide} >Close</Button>
                <Button disabled={Note.title.length<5 || Note.description.length<5} onClick={() => { updateNote(Note); onHide() }} >Update Note</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default NoteItem