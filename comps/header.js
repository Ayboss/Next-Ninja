import React from 'react'
import Link from 'next/link';
import Image from "next/image";
function header() {
    return (
        <nav>
      <div className="logo">
        <Image src="/naruto.jpg" alt="logo" width={70} height={40} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas/"><a>Ninja Listing</a></Link>
    </nav>
    )
}

export default header
