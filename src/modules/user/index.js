/* eslint-disable no-unused-vars */
import firebaseObj from '../../firebase';

export default class UserController {
  static async createNewUser(req, res) {
    try {
      const { username, email, password } = req.body;
      return await firebaseObj.database().ref(`/${username}`).set({
        username,
        email,
        password,
      })
        .then(() => {
          firebaseObj.database().ref(`/${username}`).once('value').then((snap) => res.status(201).json(snap.val()));
        });
    // eslint-disable-next-line no-empty
    } catch (error) {
      return null;
    }
  }
}
