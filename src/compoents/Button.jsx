export default function Button({children, className, textCol}) {
    const addClassName = className ? `${className}` : '';
    const addTextCol = textCol ?`${textCol}` : 'text-white';
    return (
        <>
            <a href="#" className={`bg-primary-500 rounded-md font-sans border border-primary-500 text-lg font-semibold ${addClassName} ${addTextCol}`}>{children}</a>
        </>
    )
}