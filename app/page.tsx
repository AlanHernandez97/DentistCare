import Head from "@/src/components/Organisms/head/Head";
import OurServices from "@/src/components/Organisms/ourServices/OurServices";
import Steps from "@/src/components/Organisms/steps/Steps";


export default function Home() {
  return (
    <div>
      <main className="w-auto sm:w-auto">
        <Head />
        <OurServices />
        <Steps />
      </main>
    </div>
  );
}
