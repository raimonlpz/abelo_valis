import React, { useRef, forwardRef } from "react";
import Battery from "./Battery";

const TopBarItem = forwardRef((props, ref) => {
  const hide = props.hideOnMobile ? "hidden sm:inline-flex" : "inline-flex";
  const bg = props.forceHover
    ? "bg-gray-100/30 dark:bg-gray-400/40"
    : "hover:(bg-gray-100/30 dark:bg-gray-400/40)";

  return (
    <div
      ref={ref}
      className={`hstack space-x-1 h-6 px-1 cursor-default rounded ${hide} ${bg} ${
        props.className || ""
      }`}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
    >
      {props.children}
    </div>
  );
});

const CCMIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 29 29"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M7.5,13h14a5.5,5.5,0,0,0,0-11H7.5a5.5,5.5,0,0,0,0,11Zm0-9h14a3.5,3.5,0,0,1,0,7H7.5a3.5,3.5,0,0,1,0-7Zm0,6A2.5,2.5,0,1,0,5,7.5,2.5,2.5,0,0,0,7.5,10Zm14,6H7.5a5.5,5.5,0,0,0,0,11h14a5.5,5.5,0,0,0,0-11Zm1.43439,8a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,22.93439,24Z" />
    </svg>
  );
};

const TopBar = (props) => {
  const controlCenterBtnRef = useRef(null);
  const wifiBtnRef = useRef(null);
  const spotlightBtnRef = useRef(null);

  return (
    <div
      className={`w-full h-6 px-2 fixed top-0 hstack justify-between ${
        props.hide ? "z-0" : "z-20"
      } text-sm text-white bg-gray-700/10 backdrop-blur-2xl shadow transition`}
    >
     <div className="hstack flex-row justify-end space-x-2">
        <TopBarItem hideOnMobile={true} onClick={props.toggleSpotlight} className="cursor-pointer" >
            <Battery />
          </TopBarItem>
        <TopBarItem
          hideOnMobile={true}
          onClick={props.toggleSpotlight}
          ref={wifiBtnRef}
          className="cursor-pointer"
        >
            <span className="i-material-symbols:wifi text-lg" />
        </TopBarItem>
        <TopBarItem ref={spotlightBtnRef} onClick={props.toggleSpotlight} className="cursor-pointer">
          <span className="i-bx:search text-[17px]" />
        </TopBarItem>
        <TopBarItem
        className="cursor-pointer"
          onClick={props.toggleSpotlight}
          ref={controlCenterBtnRef}
        >
          <CCMIcon size={16} />
        </TopBarItem>

        <TopBarItem onClick={props.toggleSpotlight} className="cursor-pointer">
          <span className="font-bold" id="clock">{props.time}</span>
        </TopBarItem>
      </div>
    </div>
  );
};

export default TopBar;
