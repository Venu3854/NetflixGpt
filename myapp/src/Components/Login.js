import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignUp, SetIsSignUp] = useState(false);
  const [errorMessage, SetErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignUp = () => {
    SetIsSignUp(!isSignUp);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    SetErrorMessage(message);
    if (message) return;
    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/fife/AGXqzDk4T4hLW1_QVPQw09Gtvz6SI4eWEx_Qs-Pz1Vr8Fr33APqDDTLMr54AmBrPj0NZDF9-7YbZXd66RQt-FMCRJDb3JBG2ch9zMOqIacUy_Y248HXdc7pilKGcU7_usBwK8Ix_KWXPg1ut0HKs2OsGq44ndhoTJOrUQsgQFef0wXTnTxnt3duUOxJ6cKgaAfpxZbbN3BZJmBaeeC5HFaTptuuLRV2dPDGrxJP7Gk8w-kDksE1qPAqrYfUMkkWdG0YGvs9VtT8tMIoNmtrL--j9WP-n1bC5PkgmfVRMfcyTGa0OGKimRS6gfKOe9e3vl0Ty2r9Wifj7DxD-T3-AiJGjTKBrbdS0Ha0VN6M2ghxMsgObLI692n7BCmu0QpLOaaIH4pQB6tUS5LkZW4lDMzx_rtxeq_uS7eeKlO61njz1gBdDMDnnZSHFJ61RL9jZ7PKQTiexkJNYhTpxzdqGyD4uo2qUXwBskmURwHv0yI5eXcFBbm-vJ07PGBBOkGJH4YiJ-uzJbiXotpTJ6xH3b-JCbFERUBMDJ_7IhpRHEkBzUZl0dEwK4zTrPK4MX0cHwpeTwQ22N1XXAp44besD46RKurdUHyZ4eI2Mkl07J2PXymFmPKSmqV7DNQ_WrKsPQROXHkjpsn1RnCLYHfUHxxs0JrzRuTkZDwH1kIL5cL_W7A9pSu3fZ9f2N3TgR0KHFh0zn021LijmrmsDGMPpqHzsrulhS7b6MxYExa-tDaItBCW8WrB2uTydCgrQGEodTaw4KkfA_RLtMcN4dZ7RYZobZ5kQukFiHOL56kbs8LNR2FQG3064RjxJvTgEodieoXPOsyVScc29fxN9Mrzm0Zouy7uvmDhhpBtm5yHJVCUqRQmhGQIcGZx5PL0nG07m988KZlXEHnT_sl5VJ1d6bgWArKu3k5losWm4Kpu0e_iL0k1qOeK68Guk4LsPJuBNJT6XNtC909ZEH0oUacVFT5AtlclH1t0W92FecNqM28pi55ZTS4qtWwV00u9xndFtS7P5uRxZjF-mDqCxBmaxtIKgy1uViBDULx7kuwOFj74KlyMPc6V1Ahgsc4pu_Kuk5KppsvBhguobhW3Nvb3f_ynwD1FwyoE27fDMWrTH9Fb-LVfPxdc9m4a_OzNrL_TNf_x8Xfg36AhpZFHV_Pk395156Wz6hxWn886pf4a9GmirTEA5DRIp-D6JszJZsw7w82NKSLjEgH38eZb_6sjcB8TDsjvYyijxIi6SH91SoJRkZcqd-6WGHQbeerJQs3--GUByu3lQmvzEnU5Ri5ZvfWR0jae5V3AeAfqGd0-C3UNuZF_svxVN1_l-FJNaDcEy-mhm5YII76UBQMYvuc4zG06aZ_z5tJ1ZPIJlioodtAW3Lxgty_6k=s64-c",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              SetErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute ">
        <img
          className="w-screen h-screen"
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black p-9 w-3/12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-md"
      >
        <h1 className="font-bold text-2xl py-3">
          {isSignUp ? "Sign Up Now" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <button
          className="p-2 my-2 w-full bg-red-600 font-bold rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-red-500 ">{errorMessage}</p>
        <p className="py-4 cursor-pointer" onClick={toggleSignUp}>
          {isSignUp
            ? "Already Registered ? Sign In Now"
            : "New to Netflix ? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
