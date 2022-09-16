import React from "react";

export default function SubInfo({ children, ...props }: any) {
    return (
        <div>
            <span {...props}>{children}</span>
        </div>
    );
}
