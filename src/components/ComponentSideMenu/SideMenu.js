/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState, useEffect } from "react";
import logos from "../../assets/logos/logo.png";
import user from "../../assets/user.jpg";
import MenuItem from "./MenuItem";

export const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
  useEffect(() => {
    if (inactive) {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    }
  }, [inactive]);
  const MenuItems = [
    { name: "Dashboard", to: "/", iconClassName: "bi bi-speedometer2" },
    {
      name: "Contents",
      to: "/contents",
      iconClassName: "bi bi-speedometer2",
      subMenus: [{ name: "Games", to: "/games" }, { name: "App Store" }],
    },
    {
      name: "Shop By Department",
      to: "/shop_by_depart",
      iconClassName: "bi bi-vector-pen",
    },
  ];

  return (
    // eslint-disable-next-line no-template-curly-in-string
    <div className={`side-menu ${inactive ? "inactive" : " "} `}>
      <div className="top-section">
        <div className="logo">
          <img src={logos} alt="logo" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>
        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {MenuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus}
              iconClassName={menuItem.iconClassName}
              onClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="user">
          <img src={user} alt="user" />
        </div>
        <div className="user-infos">
          <h5>This is my e-commerce App</h5>
          <p>e-commerce@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
