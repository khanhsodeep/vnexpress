import React, { useState } from "react";
const SubNavbar = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <div
        className="justify-between items-center border-b dark:border-gray-400"
        onClick={item.subNav && showSubnav}
      >
        <div className="flex items-center justify-between">
          <div>{item.title}</div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </div>
        
      </div>
      <div className="items-center">
          {subnav &&
            item.subNav.map((item, index) => {
              return (
                <div
                  className="ml-4 border-b dark:border-gray-400"
                  to={item.path}
                  key={index}
                >
                  {item.icon}
                  <div>{item.title}</div>
                </div>
              );
            })}
        </div>
    </>
  );
};
export default SubNavbar;
