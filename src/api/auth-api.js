import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FirebasrApp } from "../service.js/firebase-service";

export class AuthAPI {
  static async signin(email, password) {
    const response = await signInWithEmailAndPassword(
      FirebasrApp.auth,
      email,
      password
    );
    return response.user.toJSON();
  }
  static async signup(email, password) {
    const response = await createUserWithEmailAndPassword(
      FirebasrApp.auth,
      email,
      password
    );
    return response.user.toJSON();
  }
  static async signout(email, password) {
    signOut(FirebasrApp.auth);
  }
}
