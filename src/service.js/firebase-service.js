import { firebaseConfig } from "../firebase-config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export class FirebasrApp {
  static firebaseapp = undefined;
  static auth = undefined;
  static init() {
    this.firebaseapp = initializeApp(firebaseConfig);
    this.auth = getAuth();
  }
}
