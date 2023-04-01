import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [err, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const avatar = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(await res);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, avatar);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile((await res).user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Converse</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="avatar" />
          <label htmlFor="avatar">
            <BiImageAdd style={{ height: "30px", width: "30px" }} />
            <span>Add an avatar</span>
          </label>
          <button type="submit">Sign up</button>
          {err && <span>Some error occured</span>}
        </form>
        <p>
          Already have An account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
