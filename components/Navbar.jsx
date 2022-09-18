import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


export default function Navbar() {
  return (
    <div className="d-flex flex-start justify-content-center gap-5 bg-dark bg-gradient text-warning fw-bold fs-3"
 
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/Experience">
        <a>Experience</a>
      </Link>
      <Link href="/Contact">
        <a>Contact</a>
      </Link>
      
      <Link href = "/lab-07">
        <a>Lab-07</a>
      </Link>
    </div>
  );
}
