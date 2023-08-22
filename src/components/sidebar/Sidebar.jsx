import "./sidebar.css";
import { MdLineStyle, MdOutlineFeedback } from "react-icons/md";
import { MdTimeline } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { FaRegUser, FaDollarSign } from "react-icons/fa";
import {
  AiOutlineShop,
  AiOutlineMail,
  AiOutlineMessage,
  AiFillExclamationCircle,
} from "react-icons/ai";
import { TbReport } from "react-icons/tb";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <MdLineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <MdTimeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <FcSalesPerformance className="sidebarIcon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem active">
                <FaRegUser className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <AiOutlineShop className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <FaDollarSign className="sidebarIcon" />
                Transactions
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <TbReport className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <Link to="/mail" className="link">
              <li className="sidebarListItem active">
                <AiOutlineMail className="sidebarIcon" />
                Mail
              </li>
            </Link>
            <Link to="/feedback" className="link">
              <li className="sidebarListItem">
                <MdOutlineFeedback className="sidebarIcon" />
                Feedback
              </li>
            </Link>
            <Link to="/messages" className="link">
              <li className="sidebarListItem">
                <AiOutlineMessage className="sidebarIcon" />
                Messages
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <Link to="/manage" className="link">
              <li className="sidebarListItem active">
                <BsBag className="sidebarIcon" />
                Manage
              </li>
            </Link>
            <Link to="/analytics" className="link">
              <li className="sidebarListItem">
                <MdTimeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/reports" className="link">
              <li className="sidebarListItem">
                <AiFillExclamationCircle className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
