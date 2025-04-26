const Sequelize = require("sequelize");
const Student = require("./../db/models/student");
const Mark = require("./../db/models/mark");


const AddNewStudent = async (req, res) => {
    try {
        let { studentName, studentEmail, marksheet } = req.body;
        const newStudent = await Student.create({ name: studentName, email: studentEmail });
        marksheet = marksheet.map((el) => {
            return {
                ...el,
                student_id: newStudent.id
            }
        })
        console.log(marksheet, "marksheet_print");
        const newMarks = await Mark.bulkCreate(marksheet)
        res.status(201).json({
            id: newStudent.id,
            name: newStudent.name,
            email: newStudent.email

        });
    } catch (err) {
        console.error('error adding student:', err);
        res.status(500).json({ message: 'erro in adding student' });
    }
}

const getAllStudents = async (req, res) => {
    try {
        let studentList = await Student.findAll({
            where: {
                is_deleted: false
            }
        })

        res.status(200).json(studentList)
    } catch (err) {
        console.error('Error fetching categories:', err);
        res.status(500).json({ message: 'Error fetching categories' });
    }
}


const updateStudent = async (req, res) => {
    try {
        let { id, studetentName, markSheet} = req.body;
        categoryType = !!categoryType.income ? 'income' : 'expense'
        const [updated] = await Category.update(
            { category_name: categoryName, category_type: categoryType },
            { where: { id } }
        );

        if (updated) {
            const updatedCategory = await Category.findOne({ where: { id } });
            res.status(200).json({
                id: updatedCategory.id,
                name: updatedCategory.category_name,
                type: updatedCategory.category_type
            });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (err) {
        console.error('error updating student:', err);
        res.status(500).json({ message: 'error updating student' });
    }
}

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.body;

        const deleted = await Student.update(
            { is_deleted: true},
            { where: { id } })
        if (!!deleted) {
            res.status(200).json({ message: 'Student deleted successfully' });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (err) {
        console.error('err deleting category:', err);
        res.status(500).json({ message: 'error deleting category' });
    }
}

module.exports = {
    AddNewStudent,
    getAllStudents,
    deleteStudent,
    updateStudent
}