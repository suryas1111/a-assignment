import React from "react";
import { Component } from "react";
import ContactCard from '../../components/ContactCard/Contactcard';
import { connect } from "react-redux";
import * as actions from '../../redux/actions/index';
import './ContactCardList.scss';
import EditModal from '../EditModal/EditModal';
import PropTypes from 'prop-types';
import Spinner from '../../components/Spinner/Spinner';

class ContactCardList extends Component {

  constructor(props) {
        super(props);
        this.state = {
          openModal:false,
        }
  }

  componentDidMount=()=>{
    this.props.getContacts();
  }

  openModal=(id)=>{
    this.props.fetchContactInfo(id);
    this.setState(prevState => ({
      openModal: !prevState.openModal
    }));
  }

  renderContacts=()=>{
    
    return this.props.contacts && this.props.contacts.map((ele)=>{
      let name=ele.name;
      let email=ele.email;
      let city=ele.address.city;
      let phone=ele.phone;
      let website=ele.website;
      let companyName=ele.company.name;
      let id=ele.id;
      let info=Object.assign({},{name:name},{email:email},{city:city},{phone:phone},{website:website},{companyName:companyName},{id:id});
      return <ContactCard key={ele.id} editContact={this.openModal} contactInfo={info}/>
    });
    
  }

  render() {
    return (
      <div>                
        <div className='contactCards'>
          {this.props.showloader && <Spinner/>}
          {this.renderContacts()}
        </div>
        {this.state.openModal && <EditModal show={this.state.openModal} onHide={this.openModal}
                   editInfo={this.props.contactInfo} 
                  />}       
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showloader:state.contacts.showloader,
    contacts: state.contacts.contactList,
    contactInfo:state.contacts.infobyid
  };
}

const mapDispatchToProps = dispatch => {
  return {
      getContacts: () => dispatch(actions.fetchData()),
      fetchContactInfo:(id)=>dispatch(actions.fetchContactInfo(id)),      
  }
}

ContactCardList.propTypes={
  getContacts:PropTypes.func,
  fetchContactInfo:PropTypes.func,
  contacts:PropTypes.array,
  contactInfo:PropTypes.object,
  showloader:PropTypes.bool
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactCardList);




