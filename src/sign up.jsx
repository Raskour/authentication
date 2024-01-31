import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:3002";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleSignUp(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    //

    const newSignUp = {
      username: email,
      password: password,
    };

    try {
      const res = await fetch(BASE_URL + "/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "applicatiion/json",
        },
        body: JSON.stringify(newSignUp),
      });

      if (res.ok === 200) {
        alert("Sign Up Successful");
      } else {
        throw new Error("Error occured while signing up");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSignUp} method="POST">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="username"
            value={email}
            required
            minLength={6}
            onChange={handleEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            minLength={6}
            onChange={handlePassword}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button>Sign Up</button>
        </div>
        <div>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/sign-in">Sign In</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
