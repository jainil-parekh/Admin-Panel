import "./user.css";
import { MdOutlinePermIdentity, MdPublish } from "react-icons/md";
import { AiOutlineCalendar, AiOutlineMail } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kiara-advani-1043272-1655467015.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Kiara Advani</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <MdOutlinePermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Kiaraadvani100</span>
            </div>
            <div className="userShowInfo">
              <AiOutlineCalendar className="userShowIcon" />
              <span className="userShowInfoTitle">16.09.20022</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <FaMobileAlt className="userShowIcon" />
              <span className="userShowInfoTitle">+234 44 4647</span>
            </div>
            <div className="userShowInfo">
              <AiOutlineMail className="userShowIcon" />
              <span className="userShowInfoTitle">Kiaraadvani1@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <BiCurrentLocation className="userShowIcon" />
              <span className="userShowInfoTitle">Mumbai, India</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Kiaraadvani100"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Kiara Advani"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Kiaraadvani1@gmail.com"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+234 44 4647"
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Mumbai, India"
                  className="userUpdateInput"
                ></input>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://gumlet.assettype.com/pratidintime%2F2023-03%2Fcdc321cd-ab5a-4999-a9c1-77e8abf01d65%2FCopy_of_Pratidin_Template__14_.jpg?auto=format%2Ccompress&fit=max&w=400&dpr=2.6"
                  alt=""
                ></img>
                <label htmlFor="file">
                  <MdPublish className="userUpdateIcon" />
                </label>
                <input type="file" id="" style={{ display: "none" }}></input>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
