import FiveThemes from "@/components/content/five/header";
import Fivescription from "@/components/content/five/describe";
import OtherInsight from "@/components/blog-detail/otherInsight";

export default function FiveDetails() {
    return (
        <div className="w-full">
            <FiveThemes />
            <Fivescription />
            <OtherInsight />
        </div>
    )
}