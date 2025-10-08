import Ninescription from "@/components/content/nine/describe";
import NineThemes from "@/components/content/nine/header";
import OtherInsight from "@/components/blog-detail/otherInsight";

export default function NineDetails() {
    return (
        <div className="w-full">
            <NineThemes />
            <Ninescription />
            <OtherInsight />
        </div>
    )
}