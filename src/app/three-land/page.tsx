import Featurest from "@/components/ver-third/landingpage/FeatureLand";
import Resprime from "@/components/ver-third/landingpage/HeadPrimary";
import Story from "@/components/ver-third/landingpage/LatestStory";
import WorkerFiles from "@/components/ver-third/landingpage/Worker";

export default function Home() {
  return (
    <div className="w-full">
      <Resprime/>
      <Featurest/>
      <WorkerFiles/>
      <Story/>
    </div>
  );
}