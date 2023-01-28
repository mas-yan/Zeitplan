export default function Button({children, className, textCol}) {
    const addClassName = className ? `${className}` : '';
    const addTextCol = textCol ?`${textCol}` : 'text-white';
    return (
        <>
            <a href="#" className={`bg-primary-500 font-sans border border-primary-500 text-lg font-semibold ${addClassName}`}>
                <span className={`${addTextCol}`}>
                    {children}
                </span>
            </a>
        </>
    )
}