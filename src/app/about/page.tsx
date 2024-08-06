import ProfileCard from "@/components/profile-card";
import members from "@/data/members.json";

export default function Page() {
  return (
    <main>
      <section className={"h-full grid place-items-center"}>
        <div className={"text-center"}>
          <h1 className={"mb-4 text-4xl font-bold"}>Our Mission</h1>
          <p className={"max-w-3xl"}>
            Educate students in programming and IT skills to create applications and solutions that can make a positive
            impact on the world.
          </p>
        </div>
      </section>
      <section className={"h-full grid place-items-center"}>
        <div className={"text-center"}>
          <h1 className={"mb-4 text-4xl font-bold"}>Our Vision</h1>
          <p className={"max-w-3xl"}>
            Empower the next generation to harness the power of technology, fostering innovation and creativity to
            develop solutions that make a positive on the world.
          </p>
        </div>
      </section>
      <section className={"h-full grid place-items-center max-lg:gap-12"}>
        <div className={"text-center"}>
          <h1 className={"mb-4 text-4xl font-bold"}>Founding Members</h1>
          <p className={"max-w-3xl"}>Meet the dedicated students who started Code4Purpose.</p>
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