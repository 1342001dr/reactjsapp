import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import './styles.css';

function ShowSummary() {

    
    const { id } = useParams();
    const [summary, setSummary] = useState('');
    const [shows, setShows] = useState([]);  
    const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  
    useEffect(() => {
      fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(response => response.json())
        .then(data => {
            setSummary(data.summary);
            setShows(data);
        })
        .catch(error => console.log(error));
    }, [id]);
  
    return (
      <>
        <Button variant="primary" >
          <Link to={`/`}> Back</Link>
        </Button>
        <h1>Show Summary</h1>
        <p>{summary}</p>  
        <Button variant="primary" onClick={handleClick}>
          Book Ticket
        </Button>               
        
        <Modal show={showModal} className="modal-container" onHide={handleClose} size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered>
       
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>  ID </Form.Label>
              <Form.Control  value={shows.id} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>  Movie Name </Form.Label>
              <Form.Control type="text" value={shows.name} placeholder="Enter Movie name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>  Status </Form.Label>
              <Form.Control type="text"  value={shows.status} placeholder="Enter Movie Type" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>  Language  </Form.Label>
              <Form.Control type="text"  value={shows.language} placeholder="Enter Movie Language" />
            </Form.Group>
            <Button variant="primary" onClick={handleClose}>
             Submit
            </Button>
           
          </Form>
        </Modal.Body>        
      </Modal>
       
        
        </>
     
    );
  }
  
  export default ShowSummary;
