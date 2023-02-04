export default function CardDescription(props) {
    return(
        <>
            <div className="bg-cream-300 rounded-md p-10 w-80">
                <div className="flex items-center mb-4">
                    <img src={props.icon} alt="icon" className="mr-4" />
                    <p className="font-sans font-semibold text-lg">
                        {props.title}
                    </p>
                </div>
                <p>{props.description}</p>
            </div>
        </>
    )
}