import Button from "../Button";

export default function CardPricing(props) {
  return (
    <>
      <div className="bg-white h-fit py-12 rounded-l-[10px] px-[50px] shadow-lg">
        <p className="text-primary-500 font-semibold font-ibm tracking-widest text-sm">
          {props.title}
        </p>
        <p className="text-dark-700 mt-5 font-patua text-2xl lg:text-4xl md:text-[38px] leading:[20px] md:leading-[52px]">
          {props.price}
        </p>
        <p className="font-sans mt-3 leading-[24px] text-[0.85rem] md:font-normal md:text-lg text-dark-500 text-opacity-60">
          {props.description}
        </p>
        <div className="mt-5 ">
          {props.feature.map((data, index) => {
            return (
              <div className="flex items-center mt-2.5" key={index}>
                <img src="checklis.png" alt="check" />
                <p className="ml-4 text-lg capitalize">{data.data}</p>
              </div>
            );
          })}
        </div>
        <Button
          className={
            "px-[20px] lg:px-[50px] py-[10px] lg:py-[15px] block text-center mt-10 rounded-md"
          }
        >
          Download
        </Button>
      </div>
    </>
  );
}
