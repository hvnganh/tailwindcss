import { useNavigate } from "react-router-dom";

function Header({ children }: any) {
    const navigate = useNavigate();
    const handleBackHome = () => {
        navigate("/");
    };
    return (
        <div className="h-[80px] flex justify-between items-center z-10">
            <div>
                <div onClick={handleBackHome}>
                    <p className="font-bold text-[22px] hover:cursor-pointer z-10">
                        Baycungban
                    </p>
                </div>
            </div>
            <div className="flex">
                <p className="font-semibold mx-5 z-20 cursor-pointer px-5 py-3 text-sm md:px-0">
                    Promotion
                </p>
                <p className="font-semibold mx-5 z-20 cursor-pointer px-5 py-3 text-sm md:px-0">
                    Flight Schedule
                </p>
                <p className="font-semibold mx-5 z-20 cursor-pointer px-5 py-3 text-sm md:px-0">
                    About us
                </p>
                <p className="font-semibold mx-5 z-20 cursor-pointer px-5 py-3 text-sm md:px-0">
                    Payment Guide
                </p>
            </div>
            <div className="z-10">{children}</div>
        </div>
    );
}

export default Header;
