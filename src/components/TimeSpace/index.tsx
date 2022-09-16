import React from "react";
import Line from "../Line";

export default function TimeSpace({ ...props }: any) {
    return (
        <div {...props} className="flex justify-between">
            {/* From */}
            <div className="text-center">
                <p className="font-bold text-sm">21:40</p>
                <p className="font-semibold text-[10px] p-1 rounded-xl bg-primary text-white">
                    DAD
                </p>
            </div>
            {/* Calculate */}
            <div className="text-center flex-1 mx-4">
                <p className="font-semibold text-sm">1h 30m</p>
                <Line className="rotate-180" />
                <p className="font-semibold text-sm">Direct</p>
            </div>
            {/* To */}
            <div className="text-center">
                <p className="font-bold text-sm">21:40</p>
                <p className="font-semibold text-[10px] p-1 rounded-xl bg-primary text-white">
                    DAD
                </p>
            </div>
        </div>
    );
}
