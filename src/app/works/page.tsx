import HeaderWork from "@/components/works/upperSection";
import Lork from "@/components/works/lowerworks";
import CenterWorks from "@/components/works/centerwork";

export default function WorksLand() {
    return (
        <div className="w-full mt-32">
            <HeaderWork/>
            <CenterWorks/>
            <Lork/>
        </div>
    )

}
