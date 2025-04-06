import Student from '../models/Student';


class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Thais',
      surname: 'Pistoni',
      email: 'Pistona@gmail.com',
      age: 400,
      weight: 250,
      height: 9.99,
    });
    res.json(newStudent);
  }
}
export default new HomeController();
