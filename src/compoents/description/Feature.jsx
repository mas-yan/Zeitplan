export default function Feature(props) {
    return(
        <>
            <div className="text-center sm:text-left">
                <div className="mb-3">
                    <div className="flex justify-center md:justify-start">
                        <img src={props.icon} alt="icon" />
                    </div>
                    <p className="font-patua leading-5 mt-2.5 text-lg">
                        {props.title}
                    </p>
                </div>
                <p className="text-dark-500 text-opacity-60">{props.description}</p>
            </div>
        </>
    )
}