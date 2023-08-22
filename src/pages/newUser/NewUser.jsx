import "./newuser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle"> New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="sid"></input>
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Sid Malhotra"></input>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="sid@gmail.com"></input>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password"></input>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 234 456"></input>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Mumbai, India"></input>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male"></input>
            <label for="Male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
            ></input>
            <label for="Female">Female</label>
            <input type="radio" name="gender" id="other" value="other"></input>
            <label for="Other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
