import React from "react";

export default function Line({ ...props }: any) {
    return (
        <div {...props} className="relative border-primary border-solid border">
            <span className="absolute w-2 h-2 border-primary border-solid border-[1px] rounded-full top-[-4px] left-[-8px]"></span>
            <span className="absolute w-2 h-2 bg-primary rounded-full top-[-4px] right-[-8px]"></span>
        </div>
    );
}
