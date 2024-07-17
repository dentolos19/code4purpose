import Link from "next/link";

export default function Page() {
  return (
    <main className={"grid place-items-center"}>
      <div className={"text-center"}>
        <img
          className={"mx-auto size-[200px]"}
          src={"/assets/logo.png"}
          alt={"Logo"}
        />
        <h1 className={"mb-2 text-2xl font-bold"}>Code4Purpose</h1>
        <p className={"mb-4"}>
          We are a non-profit organization founded by a group of dedicated
          students from Nanyang Polytechnic.
        </p>
        <div className={"space-x-2"}>
          <Link
            className={"btn btn-sm btn-info"}
            href={"https://linkedin.com/company/code4purpose"}
          >
            <i className={"fa-brands fa-linkedin"} />
            Connect with Us!
          </Link>
          <Link className={"btn btn-sm btn-info"} href={"/about"}>
            <i className={"fa-solid fa-info"} />
            Learn about us!
          </Link>
        </div>
      </div>
    </main>
  );
}