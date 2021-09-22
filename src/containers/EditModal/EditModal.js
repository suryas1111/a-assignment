import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import './EditModal.scss';
import { connect } from "react-redux";
import * as actions from '../../redux/actions/index';
import PropTypes from 'prop-types';

class EditModal extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            city:'',
            phone:'',
            website:'',
            companyName:'',
            id:''
        }
    }

    componentDidMount=()=>{
      let name=this.props.editInfo && this.props.editInfo.name;
      let email=this.props.editInfo && this.props.editInfo.email;
      let city=this.props.editInfo.address && this.props.editInfo.address.city;
      let phone=this.props.editInfo && this.props.editInfo.phone;
      let website=this.props.editInfo && this.props.editInfo.website;
      let companyName=this.props.editInfo.company && this.props.editInfo.company.name;
      let id=this.props.editInfo && this.props.editInfo.id;
      this.setState({name,email,city,phone,website,companyName,id});
    }

    updateName=(e)=>{    
        this.setState({name:e.target.value});
    }

    updateEmail=(e)=>{
        this.setState({email:e.target.value});
    }

    updateCity=(e)=>{
        this.setState({city:e.target.value});
    }

    updatePhone=(e)=>{
        this.setState({phone:e.target.value});
    }

    updateWebsite=(e)=>{
        this.setState({website:e.target.value});
    }

    updateCompany=(e)=>{
        this.setState({companyName:e.target.value});
    }

    summit=()=>{
        const newData = {
            name:this.state.name,
            email:this.state.email,
            city:this.state.city,
            phone:this.state.phone,
            website:this.state.website,
            companyName:this.state.companyName,
            id:this.state.id
        };
        this.props.saveNewData(newData);
        this.props.onHide();
    }

    handleSummit=(e)=>{
        e.preventDefault();
        this.summit();
    }

    render(){
        return (
            <Modal
              show={this.props.show}
              onHide={this.props.onHide}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Edit Contact Details
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
                  <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" value={this.state.name} onChange={(e)=>this.updateName(e)}  required/>                
                  </Form.Group>
      
                  <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" value={this.state.email}  onChange={(e)=>this.updateEmail(e)} required/>                
                  </Form.Group>
      
                  <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" value={this.state.city} onChange={(e)=>this.updateCity(e)} required/>                
                  </Form.Group>
      
                  <Form.Group>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" value={this.state.phone} onChange={(e)=>this.updatePhone(e)} required/>                
                  </Form.Group>
      
                  <Form.Group>
                      <Form.Label>Website</Form.Label>
                      <Form.Control type="text" value={this.state.website} onChange={(e)=>this.updateWebsite(e)} required/>                
                  </Form.Group>
      
                  <Form.Group>
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control type="text" value={this.state.companyName} onChange={(e)=>this.updateCompany(e)} required/>                
                  </Form.Group>            
                  
                  <Button variant="primary" type="submit" className='summitButton' onClick={(e)=>this.handleSummit(e)}>
                      Submit
                  </Button>            
                  <Button variant="secondary" onClick={this.props.onHide}>
                      Close
                  </Button>            
                  
              </Form>
              </Modal.Body>
            </Modal>
          );
    }
    
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        saveNewData:(newData)=>dispatch(actions.saveNewData(newData))     
    }
  }

  EditModal.propTypes={
    editInfo:PropTypes.object,
    saveNewData:PropTypes.func,
    onHide:PropTypes.func,
    show:PropTypes.bool
}

  export default connect(null,mapDispatchToProps)(EditModal);