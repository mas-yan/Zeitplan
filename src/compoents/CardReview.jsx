export default function CardReview(props) {
  const width = props.class
    ? props.class
    : "w-[300px] md:w-[469px] shadow-primary-500/20";
  const clsComnt = props.clsComnt ? props.clsComnt : "h-[150px] lg:h-[70px]";
  return (
    <div
      className={`bg-white relative shadow-xl h-fit p-[30px] rounded-md ${width}`}
    >
      <img
        src="star.png"
        style={{ width: "120px", height: "20px" }}
        alt="star"
      />
      <p
        className={`text-dark-500 items-center flex font-poppins text-sm leading-[26px] font-normal my-5 ${clsComnt}`}
      >
        {props.comment}
      </p>
      <div className="flex">
        <img
          src={props.image}
          className="rounded-full mr-5"
          style={{ width: "55px" }}
          alt="star"
        />
        <div>
          <p className="font-poppins text-base font-medium">{props.name}</p>
          <p className="font-poppins text-xs leading-[18px] font-medium text-dark-500 opacity-[60%]">
            {props.scholl}
          </p>
        </div>
      </div>
    </div>
  );
}
