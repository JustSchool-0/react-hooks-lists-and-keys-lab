import React from "react";

function NavBar() {
    const links = ["home", "about", "projects"];

    let i = 0;
    const linkElements = links.map((link) => {
        return <a href={`#${link}`} key={i++}>{link}</a>;
    });

    return <nav>{linkElements}</nav>;
}

export default NavBar;