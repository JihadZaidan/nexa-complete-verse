import FourThemes from "@/components/content/four/header";
import Fourscription from "@/components/content/four/describe";
import OtherInsight from "@/components/blog-detail/otherInsight";

export default function FourDetails() {
    return (
        <div className="w-full">
            <FourThemes />
            <Fourscription />
            <OtherInsight />
        </div>
    )
}