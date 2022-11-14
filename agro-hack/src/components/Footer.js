import React from "react";
import { FaAd, FaCalendar, FaCalendarAlt, FaCalendarDay, FaHome, FaList, FaNewspaper, FaPlus, FaPlusCircle, FaPlusSquare, FaUserCircle } from "react-icons/fa";
import "../Styles/footer.css";

function Footer() {
	return (
		<div className="footer">
            <div>
                <button className="footer-btn">
                    <FaHome />
                </button>
                <p className="footer-text">Asosiy</p>
            </div>
            <div>
                <button className="footer-btn">
                    <FaCalendarAlt />
                </button>
                <p className="footer-text">Maqolalar</p>
            </div>
            <div>
                <button className="footer-btn-green">
                    <FaPlusSquare />
                </button>
                <p className="footer-text-green">Sotish</p>
            </div>
            <div>
                <button className="footer-btn">
                    <FaNewspaper />
                </button>
                <p className="footer-text">Yangiliklar</p>
            </div>
            <div>
                <button className="footer-btn">
                    <FaUserCircle />
                </button>
                <p className="footer-text">Profil</p>
            </div>
        </div>
	);
}

export default Footer;