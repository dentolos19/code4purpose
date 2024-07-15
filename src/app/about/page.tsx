import ProfileCard from "@/components/profile-card";

const members = [
  {
    name: "Jasper Tay",
    role: "Founder",
    description: "",
    imageSrc: "/assets/members/jasper.jpg",
    profileUrl: "https://linkedin.com/in/jt112233",
  },
  {
    name: "Isaac",
    role: "Curriculum",
    description: "",
    imageSrc: "/assets/members/isaac.jpg",
    profileUrl: "#",
  },
  {
    name: "Ivan Dochev",
    role: "Public Relations",
    description: "",
    imageSrc: "/assets/members/ivan.jpg",
    profileUrl: "https://linkedin.com/in/ivan-dochev-961957319",
  },
  {
    name: "Dennise Catolos",
    role: "Web Developer",
    description: "",
    imageSrc: "/assets/members/dennise.jpg",
    profileUrl: "https://linkedin.com/in/dentolos19",
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
              description={member.description}
              src={member.imageSrc}
              href={member.profileUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
}