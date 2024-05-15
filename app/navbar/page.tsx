import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "5rem", zIndex: "999" }}>
      <div>
        <h1 className="text-6xl" style={{ textShadow: "0 12px 5px rgba(0,0,0,0.2)", color: "#4F3400", fontFamily: "fantasy", height: "20rem", marginLeft: "20px",marginTop:"0.5rem"}}>SwiftSite</h1>
       <Link href="/public">
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
