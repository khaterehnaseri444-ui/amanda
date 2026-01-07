import Lipstick from "../../molecules/lipstick/Lipstick";
import Mascara from "../../molecules/mascara/Mascara";

function Posters() {
    return (
        <div className="w-300 h-100 flex justify-between mb-20">
            <Lipstick />
            <Mascara />
        </div>
    );
}

export default Posters;