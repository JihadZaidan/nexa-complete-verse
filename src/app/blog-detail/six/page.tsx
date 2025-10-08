import SixThemes from "@/components/content/six/header";
import SixDescription from "@/components/content/six/describe";
import OtherInsight from "@/components/blog-detail/otherInsight";

export default function SixDetails() {
    return (
        <div className="w-full">
            <SixThemes />
            <SixDescription />
            <OtherInsight />
        </div>
    )
}