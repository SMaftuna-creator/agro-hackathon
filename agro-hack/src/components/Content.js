import React from "react";
import "../Styles/content.css";
import source from './source.png';

function Content() {
	
	return (
        <div className="contents">
            <div className="components">
                <div className="img">
                    <img src={source}></img>
                </div>
                <p className="components-name">Maqolalar</p>
            </div>
            <div className="components">
                <div className="img"><img src={source}></img></div>
                <p className="components-name">Statistika</p>
            </div>
            <div className="components">
                <div className="img"><img src={source}></img></div>
                <p className="components-name">Sotuv</p>
            </div>
        </div>
		
	);
}

export default Content;