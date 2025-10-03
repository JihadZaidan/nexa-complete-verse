import SevenThemes from "@/components/content/seven/header";
import SevenDescription from "@/components/content/seven/describe";
import OtherInsight from "@/components/blog-detail/otherInsight";

export default function SevenDetails() {
    return (
        <div className="w-full">
            <SevenThemes />
            <SevenDescription />
            <OtherInsight />
        </div>
    )
}