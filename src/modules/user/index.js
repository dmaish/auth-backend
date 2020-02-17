import bcrypt from 'bcrypt';

import firebaseObj from '../../firebase';


export default class UserController {
  static async createNewUser(req, res) {
    try {
      const saltRounds = 10;
      const { username, email, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, saltRounds).then((hash) => hash);
      const encodedUserEmail = encodeURIComponent(email).replace(/\./g, '%2E');

      return await firebaseObj.database().ref(`/${encodedUserEmail}`).set({
        username,
        encodedUserEmail,
        hashedPassword,
      })
        .then(() => {
          firebaseObj.database().ref(`/${encodedUserEmail}`).once('value').then((snap) => res.status(201).json(snap.val()));
        });
    // eslint-disable-next-line no-empty
    } catch (error) {
    // ******* add custom error handler *********
      return null;
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const encodedUserEmail = encodeURIComponent(email).replace(/\./g, '%2E');
      const user = await firebaseObj.database().ref(`/${encodedUserEmail}`).once('value').then((snap) => snap.val());

      if (user) {
        const passCorrectBool = bcrypt.compareSync(password, user.hashedPassword);
        // eslint-disable-next-line no-unused-expressions
        passCorrectBool
          ? res.status(200).json({
            message: 'successfully logged in',
          })
          : res.status(403).json({
            message: 'password not correct',
          });
      } else {
        return res.status(404).json({
          message: 'email doesnt exist',
        });
      }
    } catch (error) {
      return null;
    }
    return null;
  }
}
