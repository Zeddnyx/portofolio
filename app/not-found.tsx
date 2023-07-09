import React from "react";
import Link from "next/link";

export default function notFound() {
  return (
    <section className="mx-auto mt-36">
      <h2>Opps, Page Not Found</h2>
      <button className='btn'>
        <Link href="/">Back to home</Link>
      </button>
    </section>
  );
}
