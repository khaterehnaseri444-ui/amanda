import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Input from "../../atom/customInput/Input";
type ValueInputPropsType = {
    valueInput: string
    setValueInput: React.Dispatch<React.SetStateAction<string>>;
}
function SearchBar({ valueInput, setValueInput }: ValueInputPropsType) {
    return (
        <div className="w-300 h-20">
            <div className="w-full h-15 rounded-2xl border border-[#FBD5DD] p-5 flex items-center gap-3">
                <HiMiniMagnifyingGlass />
                <Input
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                    className="w-200 h-full outline-none"
                    placeholder="Search..." />
            </div>
        </div>
    );
}

export default SearchBar;