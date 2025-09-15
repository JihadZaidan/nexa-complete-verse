import UpperAbout from "@/components/about/aboutHead";
import AboutExplor from "@/components/about/explorer";
import Teams from "@/components/about/teams";

export default function About() {
    return (
        <div className="w-full">
            <UpperAbout/>
            <AboutExplor/>
            <Teams/>
        </div>
    )
}