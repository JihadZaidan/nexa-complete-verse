import Marketing from "@/components/ver-second/landing-page/features";
import IntroCover from "@/components/ver-second/landing-page/introductions";
import StoryWork from "@/components/ver-second/landing-page/stories";
import WorkerSheet from "@/components/ver-second/landing-page/worksheet";

export default function LandingPage() {
  return (
    <div className="w-full">
      <IntroCover/>
      <Marketing/>
      <WorkerSheet/>
      <StoryWork/>
    </div>
  )
}