import React from 'react';
import { updateEmail, updateMessage, updateName, updateLoading, clearFields} from '../redux/contactSlice';
import {useAppSelector, useAppDispatch} from '../redux/hook';
import RoundedButton from './utilities/RoundedButton';
import axios from 'axios'
import SectionTitle from './utilities/SectionTitle';


const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

type propType = {
  id:string
}


//MAIN
function ContactPanel(props:propType) {

    const nameContent = useAppSelector(state => state.contact.name)
    const emailContent = useAppSelector(state => state.contact.email)
    const messageContent = useAppSelector(state => state.contact.message)
    const isLoading = useAppSelector(state => state.contact.isLoading)
    const dispatch = useAppDispatch()

    //CHECK INPUT BEFORE SENDING
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

    //SEND EMAIL
    function sendEmail(nameIn:string, messageIn:string, emailIn:string) {
        dispatch(updateLoading(true))
        setFieldsDisable(true)
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/86af36544cae2615bec00456aabe687b', {
        name: nameIn ,
        email: emailIn,
        message: messageIn }) 
        .then(response => {alert("Message Sent. Thank you."); 
            dispatch(updateLoading(false)); 
            setFieldsDisable(false);
            dispatch(clearFields())})
        .catch(error => {alert("Something went wrong. Try again.");
            console.log(error); dispatch(updateLoading(false)); 
            setFieldsDisable(false) });
    }

    function setFieldsDisable(disable:boolean) {
        if (disable) {
            document.getElementById("messageField")?.setAttribute('disabled','')
            document.getElementById("nameField")?.setAttribute('disabled','')
            document.getElementById("emailField")?.setAttribute('disabled','')
        } else {
            document.getElementById("messageField")?.removeAttribute('disabled')
            document.getElementById("nameField")?.removeAttribute('disabled')
            document.getElementById("emailField")?.removeAttribute('disabled')
        }
    }

   

  return (
    <div id={props.id} className=' my-20 pb-10 w-full flex flex-col items-center mb-5'>
        <div className=' flex-col w-[80%] max-w-5xl'>

            <SectionTitle text='Contact Me'/>

            <div className=' mt-3 flex-row lg:flex-col lg:justify-between'>
                <input type='text' data-testid='name' id='nameField' value={nameContent} placeholder='Name' onChange={(content)=>dispatch(updateName(content.target.value))}
                className=' bg-transparent rounded-lg my-2 p-2 outline active:outline-2 outline-ui-pastel-blue w-full lg:w-[30%] text-ui-pastel-blue text-2xl' />
                <input type='text' data-testid='email' id='emailField' value={emailContent} placeholder='Email' onChange={(content)=>dispatch(updateEmail(content.target.value))}
                className=' bg-transparent rounded-lg my-2 lg:ml-4 p-2 outline outline-ui-pastel-blue w-full lg:w-[calc(70%-1rem)] text-ui-pastel-blue text-2xl' />
            </div>

            <textarea id='messageField' data-testid='message' value={messageContent} placeholder='Message' onChange={(content)=>dispatch(updateMessage(content.target.value))} 
            className=' bg-transparent rounded-lg my-4 p-2 text-2xl w-full h-60
            outline outline-ui-pastel-blue text-ui-pastel-blue'/>

            <RoundedButton id='submitButton' text='Submit' handleClick={()=>checkSendEmail()} loading={isLoading}/>
            
        </div>
    </div>
  );
}

export default ContactPanel;