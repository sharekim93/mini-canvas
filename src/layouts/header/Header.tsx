import React from "react";

const Header = () => {
  return (
    <header className="w-full h-16 text-sm bg-white">
      <div className="header_wrap flex justify-between content-center relative border border-solid border-b-slate-700">
        <div className="header_left flex content-center justify-normal m-2 min-w-0">
          <div className="home_btns flex justify-between align-middle pl-2.5">
            <div className="logo m-2">Logo</div>
            <div className="file w-auto m-2">File</div>
            <div className="settings w-auto m-2">Settings</div>
            <div className="resolution w-auto m-2">Resolution</div>
            <div className="undo w-auto m-2">Undo</div>
            <div className="redo w-auto m-2">Redo</div>
          </div>
        </div>
        <div className="header_right flex content-center justify-normal m-2 min-w-0">
          <div className="login_wrapper flex justify-between align-middle pr-2.5 hidden">
            <div className="sign-in w-auto m-2">Sign-in</div>
            <div className="sign-up w-auto m-2">Sign-up</div>
          </div>
          <div className="download m-2">Download</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
