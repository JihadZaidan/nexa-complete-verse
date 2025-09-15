import Featurise from "@/components/secpertise/centertise";
import ExpertiseFAQ from "@/components/secpertise/featuresFAQ";
import Uppertise from "@/components/secpertise/uppertise";

export default function Expertise() {
    return (
        <div className="w-full">
            <Uppertise/>
            <Featurise/>
            <ExpertiseFAQ/>
        </div>
    )
}