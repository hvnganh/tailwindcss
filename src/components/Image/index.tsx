function Image({ src, alt, ...props }: any) {
    return (
        <img
            {...props}
            className="w-[30px] h-[30px] rounded-md select-none"
            src={src}
            alt={alt}
        />
    );
}

export default Image;
