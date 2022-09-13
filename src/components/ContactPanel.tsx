import React from 'react';
import { updateEmail, updateMessage, updateName } from '../redux/contactSlice';
import {useAppSelector, useAppDispatch} from '../redux/hook';
import RoundedButton from './utilities/RoundedButton';
import axios from 'axios'
import SectionTitle from './utilities/SectionTitle';

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

type propType = {
  id:string
}

function sendEmail(nameIn:string, messageIn:string, emailIn:string) {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/ajax/67965782906905b41c2b0355d44d8983', {
    name: nameIn ,
    email: emailIn,
    message: messageIn }) 
    .then(response => {alert("Message Sent. Thank you."); console.log(response)})
    .catch(error => {alert(error);console.log(error)});
}



//MAIN
function ContactPanel(props:propType) {

    const nameContent = useAppSelector(state => state.contact.name)
    const emailContent = useAppSelector(state => state.contact.email)
    const messageContent = useAppSelector(state => state.contact.message)
    const dispatch = useAppDispatch()

    //check states and send email
    function checkSendEmail() {
        if (nameContent.length === 0 || emailContent.length === 0 || messageContent.length === 0) {
            alert("Please fill in all fields.")
            return;
        } 
        else if (!emailContent.toLowerCase().match(EMAIL_REGEX)) {
            alert("Please fill in a valid email.")
            return;
        } else {
            sendEmail(nameContent,messageContent,emailContent)
        }
            
    }

  return (
    <div id={props.id} className=' bg-slate-500 my-20 pb-10 w-full bg-transparent flex flex-col items-center mb-5'>
        <div className=' flex-col w-[80%] max-w-5xl'>

            <SectionTitle text='Contact Me'/>

            <div className=' mt-3 flex-row lg:flex-col lg:justify-between'>
                <input type='text' id='nameField' placeholder='Name' onChange={(content)=>dispatch(updateName(content.target.value))}
                className=' bg-transparent rounded-lg my-2 p-2 outline outline-ui-pastel-blue w-full lg:w-[30%] text-ui-pastel-blue text-2xl' />
                <input type='text' id='emailField' placeholder='Email' onChange={(content)=>dispatch(updateEmail(content.target.value))}
                className=' bg-transparent rounded-lg my-2 lg:ml-4 p-2 outline outline-ui-pastel-blue w-full lg:w-[calc(70%-1rem)] text-ui-pastel-blue text-2xl' />
            </div>

            <textarea id='messageField' placeholder='Message' onChange={(content)=>dispatch(updateMessage(content.target.value))} 
            className=' bg-transparent rounded-lg my-4 p-2 text-2xl w-full h-60
            outline outline-ui-pastel-blue text-ui-pastel-blue'/>

            <RoundedButton id='submitButton' text='Submit' handleClick={()=>checkSendEmail()}/>
            
        </div>
    </div>
  );
}

export default ContactPanel;