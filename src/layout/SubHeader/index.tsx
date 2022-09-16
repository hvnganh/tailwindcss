import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SubHeader({ children }: any) {
    return (
        <div className="h-[80px] flex justify-between items-center z-10">
            {/* Section 1 */}
            <div className="flex justify-between  w-[500px]">
                <div className="w-1/2">
                    <p className="text-primary font-bold leading-5">
                        Da Nang (DAD)
                    </p>
                    <p className="text-sm font-medium opacity-50">
                        Fri, 22 Mar, 2022
                    </p>
                </div>
                <div className="w-1/3 flex items-center">
                    <div className="relative">
                        <FontAwesomeIcon
                            className="text-[#ccc] absolute top-[-10px]"
                            icon={faLeftLong}
                        />
                    </div>
                    <div className="relative">
                        <FontAwesomeIcon
                            className="text-[#ccc] absolute left-[20px]"
                            icon={faRightLong}
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <p className="text-primary font-bold leading-5">
                        Ho Chi Minh (SGN)
                    </p>
                    <p className="text-sm font-medium opacity-50">
                        Fri, 22 Mar, 2022
                    </p>
                </div>
            </div>
            {/* Section 2 */}
            <div className="flex">
                <p className="font-bold text-sm mr-4">Round-trip</p>
                <p className="font-bold text-sm px-4 border-x border-solid border-[#ccc]">
                    <span className="text-primary">02</span> Adult,{" "}
                    <span className="text-primary">01</span> children
                </p>
                <p className="font-bold text-sm ml-4">Business Class</p>
            </div>
            {/* Section 3 */}
            <div className="z-10">{children}</div>
        </div>
    );
}
