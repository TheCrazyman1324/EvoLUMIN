import { bluewhite, amrita } from "../assets";

const Notification2 = ({ className, title, text }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center justify-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={amrita}
        width={130}
        height={130}
        alt="image"
        className="rounded"
      />
  
      <div className="flex-1 text-center">
        <h7 className="mb-0 font-semibold text-base">{title}</h7><br />
        <h7 className="mb-1 font-semibold text-base">{text}</h7>
      </div>
    </div>
  );
  
};

export default Notification2;
