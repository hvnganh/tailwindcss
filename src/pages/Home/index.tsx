import {
    faCaretDown,
    faCalendarDays,
    faLongArrowLeft,
    faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import Button from "../../components/Button";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

function Home() {
    const navigate = useNavigate();
    const handleToList = () => {
        navigate("/list");
    };
    return (
        <div className="grid">
            {/* HEADER & CONTAINER */}
            <div>
                <div className="overflow-hidden h-[100vh] sm:h-[0px] xl:h-[100vh] 2xl:h-[75vh]">
                    <div className="wrapper contents">
                        {/* Header */}
                        <div className="z-1 relative">
                            <div className="max-w-7xl mx-auto ">
                                <Header className="z-10">
                                    <Button className="bg-primary text-[#fff] text-center font-semibold rounded-xl px-4 py-2 z-20">
                                        Booking now
                                    </Button>
                                </Header>
                            </div>
                            {/* Background */}
                            <div
                                style={{
                                    backgroundImage:
                                        "url(https://images.unsplash.com/photo-1584477867678-f68669eaa63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80)",
                                }}
                                className="absolute w-full h-[2016px] top-[-506px] bg-cover z-[-10] overflow-hidden"
                            ></div>
                        </div>
                        {/* Content */}
                        {/* Title */}
                        <div className="max-w-7xl mx-auto z-10 py-[180px]">
                            <h1 className="z-10 font-thin text-7xl">Hello!</h1>
                            <h1 className="z-10 font-thin text-7xl">
                                Where are
                            </h1>
                            <h1 className="z-10 font-thin text-7xl">
                                you{" "}
                                <span className="text-primary font-semibold">
                                    flying
                                </span>{" "}
                                to ...
                            </h1>
                        </div>
                        {/* Booking Calendar */}
                    </div>
                </div>
                <div className="max-w-7xl mx-auto relative">
                    <div className="absolute top-[-155px] z-50 w-full">
                        <div className=" h-[220px] shadow-lg w-full z-50 max-w-7xl mx-auto bg-[#fff] rounded-xl p-6 relative">
                            <div className="flex w-full mb-5">
                                <div className="flex mr-10">
                                    <label className="radio__wrapper-1 mr-5 flex items-center font-bold">
                                        <input
                                            name="select"
                                            type="radio"
                                            className="mr-3 hidden"
                                        />
                                        <span className="radio__custom-1"></span>
                                        One way / Round-trip
                                    </label>
                                    <label className="radio__wrapper-2 flex items-center font-bold">
                                        <input
                                            name="select"
                                            type="radio"
                                            className="mr-3 hidden"
                                        />
                                        <span className="radio__custom-2"></span>
                                        Multi-city{" "}
                                    </label>
                                </div>
                                <div className="flex">
                                    <div className="flex items-center font-bold mr-10">
                                        <p className="mr-2 ">
                                            <span className="text-primary">
                                                02
                                            </span>{" "}
                                            Adult,{" "}
                                            <span className="text-primary">
                                                01
                                            </span>{" "}
                                            children
                                        </p>
                                        <FontAwesomeIcon
                                            className="text-primary"
                                            icon={faCaretDown}
                                        />
                                    </div>
                                    <div className="flex items-center font-bold">
                                        <p className="mr-2">Business Class</p>
                                        <FontAwesomeIcon
                                            className="text-primary"
                                            icon={faCaretDown}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="flex justify-between flex-1 mr-3 relative ">
                                    <div className="mr-3 w-1/2">
                                        <div className="border-solid border border-[#ccc] rounded-xl px-4 py-3 hover:border-primary hover:border-solid hover:border">
                                            <p className="font-semibold opacity-40 uppercase text-sm">
                                                From
                                            </p>
                                            <p className="text-primary font-bold text-[22px]">
                                                Da Nang
                                            </p>
                                            <p className="font-bold">
                                                Quang Nam, Viet Nam
                                            </p>
                                        </div>
                                    </div>
                                    <div className="top-[22%] left-[46%] absolute w-[50px] h-[50px] rounded-full bg-white border border-solid border-[#ccc]">
                                        <FontAwesomeIcon
                                            className="absolute top-[40%] left-[44%]"
                                            icon={faLongArrowRight}
                                        />
                                        <FontAwesomeIcon
                                            className="absolute top-[30%] left-[24%]"
                                            icon={faLongArrowLeft}
                                        />
                                    </div>
                                    <div className=" w-1/2">
                                        <div className="pl-8 border-solid border border-[#ccc] rounded-xl px-4 py-3 hover:border-primary hover:border-solid hover:border">
                                            <p className="font-semibold opacity-40 uppercase text-sm">
                                                To
                                            </p>
                                            <p className="text-primary font-bold text-[22px]">
                                                Ho Chi Minh
                                            </p>
                                            <p className="font-bold">
                                                Viet Nam
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-1 border-solid border border-[#ccc] rounded-xl px-4 py-3">
                                    <div className="w-1/2">
                                        <div>
                                            <p className="font-semibold opacity-40 uppercase text-sm">
                                                Departure
                                            </p>
                                            <div className="flex items-center">
                                                <p className="text-primary font-bold text-[22px] mr-2">
                                                    Fri, 22 Mar, 2022
                                                </p>
                                                <FontAwesomeIcon
                                                    className="text-primary"
                                                    icon={faCalendarDays}
                                                />
                                            </div>
                                            <div className="font-semibold flex items-center">
                                                <p className="transition-all cursor-pointer mr-4 text-[#ccc] hover:border-b hover:border-solid hover:text-[#000]">
                                                    Prev
                                                </p>
                                                <p className="transition-all cursor-pointer mr-4 text-[#ccc] hover:border-b hover:border-solid hover:text-[#000]">
                                                    Next
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div>
                                            <p className="font-semibold opacity-40 uppercase text-sm">
                                                return
                                            </p>
                                            <div className="flex items-center">
                                                <p className="text-primary font-bold text-[22px] mr-2">
                                                    Fri, 22 Mar, 2022
                                                </p>
                                                <FontAwesomeIcon
                                                    className="text-primary"
                                                    icon={faCalendarDays}
                                                />
                                            </div>
                                            <div className="font-semibold flex items-center">
                                                <p className="transition-all cursor-pointer mr-4 text-[#ccc] hover:border-b hover:border-solid hover:text-[#000]">
                                                    Prev
                                                </p>
                                                <p className="transition-all cursor-pointer mr-4 text-[#ccc] hover:border-b hover:border-solid hover:text-[#000]">
                                                    Next
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button
                                onClick={handleToList}
                                className="absolute bottom-[-30px] right-[30px] z-30 w-[245px] h-[60px] bg-primary rounded-2xl font-bold text-[#fff] flex items-center justify-around"
                            >
                                Search Flights{" "}
                                <FontAwesomeIcon icon={faLongArrowRight} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className=" z-10 bg-white h-[20vh] relative">
                <div className="absolute bottom-5 left-0 right-0 w-[100%] max-w-7xl mx-auto">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Home;
