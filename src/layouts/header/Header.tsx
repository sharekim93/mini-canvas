import React from "react";

const Header = () => {
  return (
    <header className="w-full h-16 text-sm bg-white">
      <div className="header-wrap flex justify-between content-center relative border border-solid border-b-slate-700">
        <div className="header-left flex content-center justify-normal m-2 min-w-0">
          <div className="home_btns flex justify-between align-middle pl-2.5">
            <div className="logo m-2">Logo</div>
            <div className="file w-auto m-2">File</div>
            <div className="settings w-auto m-2">Settings</div>
            <div className="resolution w-auto m-2">Resolution</div>
            <div className="undo w-auto m-2">Undo</div>
            <div className="redo w-auto m-2">Redo</div>
          </div>
        </div>
        <div className="header-right flex content-center justify-center">2</div>
      </div>
    </header>
  );
};

export default Header;
