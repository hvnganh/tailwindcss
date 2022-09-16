function Button({ children, ...props }: any) {
    return (
        <button className="select-none" {...props}>
            {children}
        </button>
    );
}

export default Button;
