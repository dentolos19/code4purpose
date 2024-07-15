import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className={"navbar bg-base-300"}>
      <div className={"navbar-start"}>
        <Link className={"btn btn-ghost text-xl"} href={"/"}>
          Code4Purpose
        </Link>
      </div>
      <div className={"navbar-end"}>
        <ul className={"menu menu-horizontal px-1"}>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}