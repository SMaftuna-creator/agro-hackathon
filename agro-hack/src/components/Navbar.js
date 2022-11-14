import { useRef } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<nav ref={navRef}>
				<a href="/#">Maqolalar</a>
				<a href="/#">Statistika</a>
				<a href="/#">Sotuv</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>			
            <button className="nav-btn-user">
				<FaUserCircle />
			</button>
		</header>
	);
}

export default Navbar;