import React, { FunctionComponent, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Hello.css'


const Hello = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
 setValidated(true);
    }

   
  };
  return<>
  <div>
<Container>
  <Row>
    <Col></Col>
    <Col xs={12}>
    <h3>
    Create New Request
    </h3>
    <Card>
      <Card.Header>Group Information</Card.Header>
      <Card.Body>
        <p>In this section,Select the group for which you are requesting a translation . Depending on your selection, choose the appropriate subgroup</p><br></br>
     
          <Form noValidate validated={validated} onSubmit={handleSubmit}>          
            
               <Form.Row>
               <Form.Group as={Col} xs="5" controlId="exampleForm.SelectCustomSizeSm">
                
                 <Form.Label required>UHG Division/Request Group</Form.Label>
                  <Form.Control as="select"  size="sm" required >
                  <option  value="">Select One</option>
                    <option  value="Select One">Select One</option>
                    <option  value="Select Two">Select Two</option>
                    <option  value="Select Three">Select Three</option>
                    <option  value="Select Four">Select Four</option>
                    <option  value="Select Five">Select Five</option>
                  </Form.Control>                
                
                <Form.Control.Feedback type="invalid">
              Please select 
            </Form.Control.Feedback>
                </Form.Group>
                </Form.Row> 
                <Form.Row>
               <Form.Group as={Col} xs="5" controlId="exampleForm.SelectCustomSizeSm">
                
                 <Form.Label>Business/Segment</Form.Label>
                  <Form.Control as="select"  size="sm" required >
                  <option  value="">Select One</option>
                    <option  value="Select One">Select One</option>
                    <option  value="Select Two">Select Two</option>
                    <option  value="Select Three">Select Three</option>
                    <option  value="Select Four">Select Four</option>
                    <option  value="Select Five">Select Five</option>
                  </Form.Control>                
                
                <Form.Control.Feedback type="invalid">
              Please select 
            </Form.Control.Feedback>
                </Form.Group>
                </Form.Row> 
                <Form.Row>
               <Form.Group as={Col} xs="5" controlId="exampleForm.SelectCustomSizeSm">
                
                 <Form.Label>Product or Platform/Area</Form.Label>
                  <Form.Control as="select"  size="sm" required >
                  <option  value="">Select One</option>
                    <option  value="Select One">Select One</option>
                    <option  value="Select Two">Select Two</option>
                    <option  value="Select Three">Select Three</option>
                    <option  value="Select Four">Select Four</option>
                    <option  value="Select Five">Select Five</option>
                  </Form.Control>                
                
                <Form.Control.Feedback type="invalid">
              Please select 
            </Form.Control.Feedback>
                </Form.Group>
                </Form.Row> 
                <Form.Row>
               <Form.Group as={Col} xs="5" controlId="exampleForm.SelectCustomSizeSm">
                
                 <Form.Label>Health Plan</Form.Label>
                  <Form.Control as="select"  size="sm" required >
                  <option  value="">Select One</option>
                    <option  value="Select One">Select One</option>
                    <option  value="Select Two">Select Two</option>
                    <option  value="Select Three">Select Three</option>
                    <option  value="Select Four">Select Four</option>
                    <option  value="Select Five">Select Five</option>
                  </Form.Control>                
                
                <Form.Control.Feedback type="invalid">
              Please select 
            </Form.Control.Feedback>
                </Form.Group>
                </Form.Row> 
                <Form.Row>
               <Form.Group as={Col} xs="5" controlId="exampleForm.SelectCustomSizeSm">
                
                 <Form.Label>Other Health Plan</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Small text" required/>            
                
                <Form.Control.Feedback type="invalid">
              Please select 
            </Form.Control.Feedback>
                </Form.Group>
                </Form.Row> 
              
              <Button variant="primary" size="sm" type="submit">
                Continue
              </Button>
          </Form>

      </Card.Body>
    </Card>
    </Col>
    <Col></Col>
  </Row>
</Container>

</div>
  </>
}

export default Hello;