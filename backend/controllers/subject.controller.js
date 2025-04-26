const Subject = require("./../db/models/subject");



const getAllSubjects = async(req, res)=>{
    try{
        const allSubjects = await Subject.findAll(
            {
                where:{}
            }
        )
        res.status(201).json({
            allSubjects
        })
    }catch(err){
        console.error('error in fetching subjects:', err);
        res.status(500).json({ message: 'error in fetching subjects' });
    }
}

const addNewSubject = async(req, res)=>{
    try{
        let {subject_name} = req.body;

        const newSubject = await Subject.create({
            subject_name
        })

        res.status(201).json(newSubject)
    }catch(err){
        console.error('error adding Subject:', err);
        res.status(500).json({ message: 'errin adding subject' });
    }
}

module.exports = {
    getAllSubjects,
    addNewSubject
}