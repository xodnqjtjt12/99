import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "100px",
                backgroundColor: "gray",
                display: "flex",
                justifyContent: "space-around", 
                alignItems: "center", 
            }}
        >
            <Link to="/">홈</Link>
            <Link to="/search">돋보기</Link>
            <Link to="/write">게시글 작성</Link>
            <Link to="/profile">프로필</Link>
        </nav>
    );
}

export default Navbar;
