import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import Image from "../../components/Image";
import SubInfo from "../../components/SubInfo";
import Ticket from "../../components/Ticket";
import TimeSpace from "../../components/TimeSpace";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import SubHeader from "../../layout/SubHeader";

function List() {
    return (
        <div className="contents">
            <div className="bg-primary">
                <div className="max-w-7xl mx-auto  text-[#fff]">
                    <Header>
                        <Button className="bg-[#fff] text-primary text-center font-semibold rounded-xl px-4 py-2 z-20">
                            Booking now
                        </Button>
                    </Header>
                </div>
            </div>
            <div className="bg-[#fff]">
                <div className="max-w-7xl mx-auto">
                    <SubHeader>
                        <Button className="bg-[#F06336] px-5 py-2 text-[#fff] text-center font-semibold rounded-xl">
                            Change Flight
                            <FontAwesomeIcon className="pl-2" icon={faSearch} />
                        </Button>
                    </SubHeader>
                </div>
            </div>
            <div className="bg-[#F4F2F9] py-6">
                <div className="max-w-7xl mx-auto flex grid-cols-2 gap-2">
                    {/* Col-10 */}
                    <div className="w-10/12 grid-flow-row-dense grid-rows-2">
                        {/* Filter */}
                        <div className="grid-rows-2 flex justify-end items-center">
                            <p className="tracking-wider text-sm font-semibold opacity-60 uppercase">
                                Filter
                            </p>
                            <div className="flex items-center justify-around ml-4 h-[36px] w-[120px] rounded-xl bg-[#fff]">
                                <p className="font-semibold text-sm">Transit</p>
                                <FontAwesomeIcon
                                    className="text-primary"
                                    icon={faCaretDown}
                                />
                            </div>
                            <div className="flex items-center justify-around ml-2 h-[36px] w-[120px] rounded-xl bg-[#fff]">
                                <p className="font-semibold text-sm">Time</p>
                                <FontAwesomeIcon
                                    className="text-primary"
                                    icon={faCaretDown}
                                />
                            </div>
                            <div className="flex items-center justify-around ml-2 h-[36px] w-[120px] rounded-xl bg-[#fff]">
                                <p className="font-semibold text-sm">Airline</p>
                                <FontAwesomeIcon
                                    className="text-primary"
                                    icon={faCaretDown}
                                />
                            </div>
                            <div className="flex items-center justify-around ml-2 h-[36px] w-[120px] rounded-xl bg-[#fff]">
                                <p className="font-semibold text-sm">
                                    Low Price
                                </p>
                                <FontAwesomeIcon
                                    className="text-primary"
                                    icon={faCaretDown}
                                />
                            </div>
                        </div>
                        {/* Ticket */}
                        <div className="grid-rows-2">
                            <div className="bg-white rounded-xl my-2 p-4">
                                <Ticket />
                            </div>
                            <div className="bg-white rounded-xl my-2 p-4">
                                <Ticket />
                            </div>
                            <div className="bg-white rounded-xl my-2 p-4">
                                <Ticket />
                            </div>
                            <div className="bg-white rounded-xl my-2 p-4">
                                <Ticket />
                            </div>
                            <div className="bg-white rounded-xl my-2 p-4">
                                <Ticket />
                            </div>
                            <div className="bg-white rounded-xl my-2 p-4">
                                <Ticket />
                            </div>
                            <div className="bg-white rounded-xl my-2 p-4">
                                <Ticket />
                            </div>
                            <div className="bg-white rounded-xl my-2 p-4">
                                <Ticket />
                            </div>
                        </div>
                    </div>
                    {/* Col-2 */}
                    <div className="w-1/6 h-fit bg-white rounded-xl overflow-hidden">
                        {/* Total Information */}
                        <div>
                            {/* Section 1 */}
                            <div className="border-b border-solid border-[#ccc]">
                                <p className="py-3 px-2 uppercase font-bold">
                                    your flights
                                </p>
                            </div>
                            {/* Section 2 */}
                            <div className="mx-2 py-2 border-b border-solid border-[#ccc]">
                                <div className="flex items-center py-1">
                                    <div className="mr-2 bg-[#ccc] w-8 h-8 rounded-full flex items-center justify-center">
                                        <SubInfo className="font-semibold text-white">
                                            01
                                        </SubInfo>
                                    </div>
                                    <div>
                                        <SubInfo className="font-thin text-xs">
                                            Fri, 11 Feb, 2022
                                        </SubInfo>
                                        <SubInfo className="font-bold text-sm">
                                            Da Nang - Ho Chi Minh
                                        </SubInfo>
                                    </div>
                                </div>
                                <div className="flex items-center py-2">
                                    <div className="mr-2">
                                        <Image
                                            src="https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg"
                                            alt="img"
                                        />
                                    </div>
                                    <div>
                                        <SubInfo className="font-bold text-sm">
                                            Bamboo Airways
                                        </SubInfo>
                                        <SubInfo className="text-xs text-primary underline font-semibold">
                                            Details
                                        </SubInfo>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <TimeSpace />
                                </div>
                                <div className="py-2 text-center">
                                    <Button className="text-xs font-semibold text-primary bg-[#F4F2F9] w-full h-[38px] rounded-xl">
                                        Change departure flight
                                    </Button>
                                </div>
                            </div>
                            {/* Section 3 */}
                            <div className="py-3 px-2">
                                <div className="flex items-center">
                                    <div className="mr-2 bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                                        <SubInfo className="font-semibold text-white">
                                            02
                                        </SubInfo>
                                    </div>
                                    <div>
                                        <SubInfo className="font-thin text-xs">
                                            Sun, 13 Feb, 2022
                                        </SubInfo>
                                        <SubInfo className="font-bold text-sm">
                                            Da Nang - Ho Chi Minh
                                        </SubInfo>
                                    </div>
                                </div>
                            </div>
                            {/* Subtotal */}
                            <div className="p-4 bg-[#f3f3f3]">
                                <p className="font-semibold">Subtotal</p>
                                <p className="text-[#F06336] font-semibold">
                                    1,322,000 vnd
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F4F2F9]">
                <div className="max-w-7xl mx-auto pb-8">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default List;
