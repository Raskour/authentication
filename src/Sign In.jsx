import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const BASE_URL = "http://localhost:3002";
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleSignIn() {
    try {
      const res = await fetch(BASE_URL + "/signIn");
      if (res.json === 200) {
        alert("Sign In Successful");
      }
    } catch (error) {
      console.log("Error occured while signing in", error);
    }
  }

  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          id="username"
          name="username"
          value={email}
          onChange={handleEmail}
        />
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onchange={handlePassword}
          />
        </div>
        <div>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      </form>
    </div>
  );
}
