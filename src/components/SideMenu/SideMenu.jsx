import React, { useState } from "react";
import classess from "./SideMenu.module.css";
import icon_scree from "../../assets/Icon_fullscreenMenu.svg";
import AtomDivder from "../AtomDivder/AtomDivder";
import { FaHome } from "react-icons/fa";
import { FaBuysellads } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoIosHelpCircle } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
const SideMenu = () => {
  const adDropItems = ["Media uplods", "Ad-create", "schedule", "campaogns"];
  const [close, setClose] = useState(false);
  return (
    <div style={{ display: "flex"}}>
      <div className={!close ? classess.cardSideMenu : classess.closeMenu}>
        {!close ? (
          <div>
            <div className={classess.headingContainer}>
              <img
                src={icon_scree}
                alt="iconhome"
                className={classess.iconHome}
              />
              <div className={classess.textMenu}>Fullscreen</div>
            </div>
            <AtomDivder />
            <div className={classess.menuItemsContainer}>
              <div className={classess.menuItems}>
                <FaHome size={20}  />
                <div className={classess.textMenuItem}>Home</div>
              </div>
              <div className={classess.menuItems}>
                <FaBuysellads size={20}  />
                <div className={classess.textMenuItem}>Ad-Drop</div>
              </div>
              <div className={classess.adDropItems}>
                <AtomDivder isHorizontal={true} />
                {adDropItems.map((items, index) => (
                  <div key={index} className={classess.paddingCls}>
                    {items}
                  </div>
                ))}
              </div>
              <div className={classess.menuItems}>
                <IoMdAnalytics size={20}  />
                <div className={classess.textMenuItem}>Analytics</div>
              </div>
              <div className={classess.menuItems}>
                <GiTakeMyMoney size={30} />
                <div className={classess.textMenuItem}>
                  Billing & subscription
                </div>
              </div>
              <div className={classess.menuItems}>
                <IoMdSettings size={20}  />
                <div className={classess.textMenuItem}>Setting</div>
              </div>
              <div className={classess.menuItems}>
                <MdAccountCircle size={20}  />
                <div className={classess.textMenuItem}>Account</div>
              </div>
            </div>
            <div className={classess.subContainer}>
              <div className={classess.menuItems}>
                <IoIosHelpCircle size={20}  />
                <div className={classess.textMenuItem}>Help center</div>
                <MdOutlineLogout
                  size={30}
                  
                  className={{ paddingTop: 25, position: "absolute" }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              alignSelf: "center",
              color:"white"
            }}
          >
            <MdOutlineMenu
              size={30}
              
              onClick={() => setClose(false)}
              style={{ cursor: "pointer",paddingBottom:"30px" }}
            />
            <FaHome size={30}  style={{ cursor: "pointer" }} />
            <FaBuysellads
              size={30}
              
              className={classess.smallMenue}
            />
            <IoMdAnalytics
              size={30}
              
              className={classess.smallMenue}
            />
            <GiTakeMyMoney
              size={30}
              
              className={classess.smallMenue}
            />
            <IoMdSettings
              size={30}
              
              className={classess.smallMenue}
            />
            <MdAccountCircle
              size={30}
              
              className={classess.smallMenue}
            />
            <IoIosHelpCircle
              size={30}
              
              className={classess.smallMenue}
            />
          </div>
        )}
      </div>
      {!close && (
        <MdMenuOpen
          size={30}
          color="#06367a"
          onClick={() => setClose(true)}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
};

export default SideMenu;
