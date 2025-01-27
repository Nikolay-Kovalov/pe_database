const sgMail = require('@sendgrid/mail');
require ('dotenv').config();

const {SG_API_KEY} = process.env;

sgMail.setApiKey(SG_API_KEY);

const sendEmail = async (data) => {
    const email = {...data, from: "letrados@i.ua"}
    try{
        await sgMail.send(email);
        return true
    }
    catch(error){
        throw error
    }
}

module.exports = sendEmail;

