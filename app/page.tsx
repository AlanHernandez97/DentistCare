import Head from "@/src/components/Organisms/head/Head";
import OurServices from "@/src/components/Organisms/ourServices/OurServices";
import TalentTeam from "@/src/components/Organisms/team/TalentTeam";

export default function Home() {
  return (
    <div>
      <main className="w-auto sm:w-auto">
        <Head />
        <OurServices />
        <TalentTeam />
      </main>
    </div>
  );
}
