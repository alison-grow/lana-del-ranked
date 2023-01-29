import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-title">
                LANA DEL RANKED
            </div>
            <div className="links">
                <Link to="/Albums">
                    ALBUMS
                </Link>
            </div>
        </div>
    )
}