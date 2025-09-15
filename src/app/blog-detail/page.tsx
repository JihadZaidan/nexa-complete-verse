import DescribeDetail from "@/components/blog-detail/description";
import DetailUpper from "@/components/blog-detail/detailHead";
import OtherInsight from "@/components/blog-detail/otherInsight";

export default function BlogDetails() {
    return (
        <div className="w-full">
            <DetailUpper/>
            <DescribeDetail/>
            <OtherInsight/>
        </div>
    )
}