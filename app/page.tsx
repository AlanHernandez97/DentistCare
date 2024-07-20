import Head from "@/src/components/Organisms/head/Head";
import OurServices from "@/src/components/Organisms/ourServices/OurServices";

export default function Home() {
  return (
    <div>

      <main className="w-full max-h-screen">
        <Head />
        <OurServices />
      </main>
    </div>
  );
}
