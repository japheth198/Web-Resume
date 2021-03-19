const mongoose = require('mongoose');
const db = mongoose.model('data');
const ObjectId = require('mongodb').ObjectID;

exports.getAdminPage = (req, res)=> {
    db.find((error, dataList) => {
        if(!error){
            res.render('admin.ejs', {dataItems: dataList});
        } else {
            console.log('Failed to retrieve data.');
        }
    });
};

exports.updateData = (req, res) => {
    db.collection.updateOne({ _id: ObjectId("603ccd244c389d5e30c38477")}, 
    { $set: {_id: ObjectId("603ccd244c389d5e30c38477"),
    'name': `${req.body.newName}`,
    'dateofbirth': `${req.body.newDofb}`,
    'residence': `${req.body.newResidence}`,
    'education': `${req.body.newEducation}`,
    'technicalskills': `${req.body.newTechskills}`,
    'softskills': `${req.body.newSoftskills}`}},
    { upsert: true });
    res.redirect('/');
}

