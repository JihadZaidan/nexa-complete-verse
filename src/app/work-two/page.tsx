import HeaderWork from "@/components/ver-second/works/headscript";
import Lork from "@/components/ver-second/works/lowerwork";
import CenterWorks from "@/components/ver-second/works/workercenter";

export default function WorksLand() {
    return (
        <div className="w-full">
            <HeaderWork/>
            <CenterWorks/>
            <Lork/>
        </div>
    )
}