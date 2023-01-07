import React, {useState} from "react";

function LonginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirm = e.target.confirm.value;
    if (name === "" || email === "" || password === "" || confirm === "") {
      setError("All fields are important");
      setSuccess("");
      return;
    }
    if (password !== confirm) {
      setError("password fields do not match");
      setSuccess("");
      return;
    }

    console.log(e);
    setName(name);
    setEmail(email);
    setPass(password);
    setConfirm(confirm);
    setError("");
    setSuccess("Successfully Signed Up");
    console.log(name, email, password, confirm);
  };

  return (
    <div className="child">
      <form onSubmit={handleSubmit}>
        <h1 style={{margin: "10px"}}>SignUp</h1>
        <div>
          <input type="text" id="name" placeholder="Name" />
        </div>
        <div>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <div>
          <input type="password" id="confirm" placeholder="Confirm" />
        </div>
        <p id="error" style={{color: "red", margin: "10px"}}>
          {error}
        </p>
        <p style={{color: "green", margin: "10px"}}>{success}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LonginForm;
