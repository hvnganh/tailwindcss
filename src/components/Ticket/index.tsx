import { faBriefcase, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../Button";
import Image from "../Image";
import Line from "../Line";
import SubInfo from "../SubInfo";
import TimeSpace from "../TimeSpace";

function Ticket() {
    const [flightDetail, setFlightDetail] = useState(false);
    const [fareInfo, setFareInfo] = useState(false);

    const handleFlightDetail = () => {
        setFlightDetail(flightDetail === false ? true : false);
        setFareInfo(false);
    };

    const handleFareInfo = () => {
        setFareInfo(fareInfo === false ? true : false);
        setFlightDetail(false);
    };
    return (
        <div>
            {/* Information */}
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="border border-solid border-[#ccc] rounded-md">
                            <Image
                                src="https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg"
                                alt="img"
                            />
                        </div>
                        <SubInfo className="ml-2 font-bold">
                            Bamboo Airways
                        </SubInfo>
                    </div>
                    <div className="w-[200px]">
                        <TimeSpace />
                    </div>
                    <div>
                        <div className="flex items-center">
                            <FontAwesomeIcon
                                className="mr-3 text-primary"
                                icon={faBriefcase}
                            />
                            <p className="">
                                Baggage{" "}
                                <span className="text-primary font-bold">
                                    20kg
                                </span>{" "}
                            </p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon
                                className="mr-3 text-primary"
                                icon={faUtensils}
                            />
                            <p className="">
                                In-flight{" "}
                                <span className="text-primary font-bold">
                                    Meal
                                </span>{" "}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-[#ccc] font-semibold line-through">
                                1,326,000 vnd
                            </p>
                        </div>
                        <div>
                            <p className="text-orange font-bold">
                                1,322,000 vnd
                            </p>
                        </div>
                    </div>
                    <div>
                        <Button className="w-[82px] h-[33px] bg-orange text-white rounded-xl font-semibold hover:opacity-90">
                            Choose
                        </Button>
                    </div>
                </div>
            </div>
            {/* Button Open/Close */}
            <div className="pt-8 flex items-center">
                <Button
                    onClick={handleFlightDetail}
                    className="uppercase text-[#ccc] font-semibold mr-6 hover:border-b-primary hover:border-solid hover:border-b hover:text-primary transition-all"
                >
                    Flight detail
                </Button>
                <Button
                    onClick={handleFareInfo}
                    className="uppercase text-[#ccc] font-semibold hover:border-b-primary hover:border-solid hover:border-b hover:text-primary transition-all"
                >
                    fare info
                </Button>
                {(flightDetail || fareInfo) && (
                    <div className="border border-solid border-[#ccc] flex-1 h-[0px] ml-[30px]"></div>
                )}
            </div>
            {/* Collapse Open/Close */}
            <div>
                {flightDetail && (
                    <div className="flex pt-5 h-full">
                        {/* Section 1 */}
                        <div className="h-full w-1/2 mr-4 flex-col items-center justify-between">
                            <div className="flex ">
                                <div className="mr-20">
                                    <p className="font-bold">21:40</p>
                                    <p className="text-sm">11 Feb</p>
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold">Da nang (DAD)</p>
                                    <p className="text-sm">Da Nang Airport</p>
                                </div>
                            </div>
                            <div className="w-[100%] py-4">
                                <p className="text-sm">1h 30m</p>
                                <div className="rotate-90 w-[30%]">
                                    <Line />
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <div className="mr-20">
                                    <p className="font-bold">21:40</p>
                                    <p className="text-sm">11 Feb</p>
                                </div>
                                <div>
                                    <p className="font-bold">
                                        Ho Chi Minh City (SGN)
                                    </p>
                                    <p className="text-sm">Tansonnhat Intl</p>
                                </div>
                            </div>
                        </div>
                        {/* Section 2 */}
                        <div className="w-1/2">
                            <div className="flex items-center">
                                <div className="mr-2 border border-solid border-[#ccc] rounded-md overflow-hidden">
                                    <Image
                                        src="https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg"
                                        alt="img"
                                    />
                                </div>
                                <div>
                                    <SubInfo className="font-bold">
                                        Bamboo Airways
                                    </SubInfo>
                                    <div className="flex items-center relative">
                                        <SubInfo className="text-xs mr-2">
                                            QH-183
                                        </SubInfo>
                                        <div className="absolute font-bold flex items-center justify-center top-[-3px] left-[44px]">
                                            .
                                        </div>
                                        <SubInfo className="text-xs">
                                            Economy
                                        </SubInfo>
                                    </div>
                                </div>
                            </div>
                            <div className="flex bg-[#F4F2F9] rounded-xl p-3 mt-2">
                                <div className="w-1/2 font-bold">
                                    <p>
                                        Baggage{" "}
                                        <span className="text-primary">
                                            20kg
                                        </span>
                                    </p>
                                    <p>
                                        In-flight{" "}
                                        <span className="text-primary">
                                            Meal
                                        </span>
                                    </p>
                                    <p>
                                        In-flight{" "}
                                        <span className="text-primary">
                                            Entertainment
                                        </span>
                                    </p>
                                </div>
                                <div className="w-1/2 font-bold">
                                    <p>
                                        Aircraft{" "}
                                        <span className="text-primary">
                                            Airbus A321
                                        </span>
                                    </p>
                                    <p>
                                        Seat layout{" "}
                                        <span className="text-primary">
                                            3-3
                                        </span>
                                    </p>
                                    <p>
                                        Seat pitch{" "}
                                        <span className="text-primary">
                                            29 inches (standard)
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {fareInfo && (
                    <div className="flex pt-5 h-full">
                        {/* Section 1 */}
                        <div className="w-1/2 flex flex-col justify-between">
                            <p className="font-bold text-lg uppercase">
                                Conditions
                            </p>
                            <div className="flex items-center py-3">
                                <div className="border border-solid border-[#ccc] rounded-md">
                                    <Image
                                        src="https://pbs.twimg.com/profile_images/981789250109632512/MV_jHh4c_400x400.jpg"
                                        alt="img"
                                    />
                                </div>
                                <SubInfo className="ml-2 font-bold">
                                    Bamboo Airways
                                </SubInfo>
                            </div>
                            <div className="pb-4">
                                <div className="flex items-center">
                                    <div className="font-semibold">Da Nang</div>
                                    <div className="w-1/4 mx-4">
                                        <Line />
                                    </div>
                                    <div className="font-semibold">
                                        Ho Chi Minh City
                                    </div>
                                </div>
                                <div className="text-primary text-sm font-thin">
                                    Economy
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold">
                                    Non - Refundable
                                </p>
                            </div>
                        </div>
                        {/* Section 2 */}
                        <div className="w-[40%]">
                            <p className="font-bold text-lg uppercase">
                                price details
                            </p>
                            <div className="py-3 flex border-b border-solid border-[#ccc]">
                                <div className="w-[65%]">
                                    <p className="py-1">
                                        Adult Basic Fare (x1)
                                    </p>
                                    <p className="py-1">Tax</p>
                                    <p className="py-1">Regular Total Price</p>
                                    <p className="py-1 text-orange">Save</p>
                                </div>
                                <div className="w-[35%]">
                                    <p className="py-1 font-bold">
                                        1,326,000 vnd
                                    </p>
                                    <p className="py-1">included</p>
                                    <p className="py-1">1,326,000 vnd</p>
                                    <p className="py-1">-4,000 vnd</p>
                                </div>
                            </div>
                            <div className="py-1 flex">
                                <p className="w-[65%]">You pay</p>
                                <p className="text-orange font-bold">
                                    1,322,000 vnd
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Ticket;
