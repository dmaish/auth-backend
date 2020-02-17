/* eslint-disable no-unused-vars */
import firebaseObj from '../../firebase';

export default class UserController {
  static async createNewUser(req, res) {
    try {
      const { username, email, password } = req.body;
      await firebaseObj.database().ref(`/${username}`).set({
        username,
        email,
        password,
      });
    // eslint-disable-next-line no-empty
    } catch (error) {

    }
  }
}
