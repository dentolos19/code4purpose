import ProfileCard from "@/components/profile-card";

const members = [
  {
    name: "Jasper Tay",
    role: "Co-Founder",
    imageSrc: "/assets/members/jasper.jpg",
  },
  {
    name: "Isaac Tan?",
    role: "Co-Founder",
    imageSrc:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
  },
  {
    name: "Ivan Dochev",
    role: "The Yapper",
    imageSrc: "/assets/members/ivan.jpg",
  },
  {
    name: "Dennise",
    role: "Web Bro",
    imageSrc: "/assets/members/dennise.jpg",
  },
];

export default function Page() {
  return (
    <main>
      <section className={"h-full grid place-items-center"}>
        <div className={"text-center"}>
          <h1 className={"mb-4 text-4xl font-bold"}>About Us</h1>
          <p className={"max-w-3xl"}>
            Our mission is to empower students in programming and IT skills to
            create applications and solutions that can make a positive impact on
            the world.
          </p>
        </div>
      </section>
      <section className={"h-full grid place-items-center max-lg:gap-12"}>
        <div className={"text-center"}>
          <h1 className={"mb-4 text-4xl font-bold"}>
            Meet the founding members!
          </h1>
        </div>
        <div className={"mx-auto max-w-[70%] grid lg:grid-cols-4 gap-8"}>
          {members.map((member) => (
            <ProfileCard
              key={member.name}
              name={member.name}
              role={member.role}
              description={""}
              src={member.imageSrc}
              href={"#"}
            />
          ))}
        </div>
      </section>
    </main>
  );
}