const {Schema, model} = require('mongoose');

const entrepreneurShema = new Schema({
name: {
    type: String,
    // required: [true, "Name is required"]
},
surname: {
    type: String,
    // required: [true, "Surname is required"]
},
phone: {
    type: String,
    // required: [true, "Phone is required"]
},
email: {
    type: String,
    // required: [true, "Email is required"]
},
gender: {
    type: String,
    // required: [true, "Gender is required"]
},
info: {
    type: String,
},
post: {
    type: String,
    // required: [true, "Post is required"]
},
region: {
    type: String,
    // required: [true, "Region is required"]
},
locality: {
    type: String,
    // required: [true, "Locality is required"]
},
street: {
    type: String,
    // required: [true, "Street is required"]
},
building: {
    type: String,
    // required: [true, "Building is required"]
},
apartament: {
    type: String,
},
postActive: {
    type: String,
    // required: [true, "PostActive is required"]
},
regionActive: {
    type: String,
    // required: [true, "RegionActive is required"]
},
localityActive: {
    type: String,
    // required: [true, "LocalityActive is required"]
},
streetActive: {
    type: String,
    // required: [true, "StreetActive is required"]
},
buildingActive: {
    type: String,
    // required: [true, "buildingActive is required"]
},
apartamentActive: {
    type: String,
},
registration: {
    type: String,
    // required: [true, "Registration is required"]
},
taxcode: {
    type: String,
    // required: [true, "TaxCode is required"]
},
system: {
    type: String,
    // required: [true, "System is required"]
},
rate: {
    type: String,
    // required: [true, "Rate is required"]
},
group: {
    type: String,
    // required: [true, "Group is required"]
},
licenses: {
    type: String,
    // required: [true, "Licenses is required"]
},
activities: {
    type: String,
    // required: [true, "Name is required"]
}
}, {versionKey: false, timestamps: true});

const Entrepreneur = model("entrepreneur", entrepreneurShema);

module.exports = {
    Entrepreneur
}