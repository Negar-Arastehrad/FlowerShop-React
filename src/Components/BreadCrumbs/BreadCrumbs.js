import React from "react";
import "./BreadCrumbsStyle.css";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  
  const pathnames = pathname.split("/").filter((p) => p); // ijade ye araye az path ha bedoone / va "". masalan ["flowers", "fanciful"]

  let BreadCrumbsPath = "";

  return (
    <div className="breadCrumbs">
      {pathnames.length > 0 && <Link to="/">Home</Link>}

      {pathnames.map((name, index) => {
        BreadCrumbsPath += `/${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <p key={BreadCrumbsPath}>/ {name}</p>
        ) : (
          <p key={BreadCrumbsPath}>
            / <Link to={BreadCrumbsPath}>{name}</Link>
          </p>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
