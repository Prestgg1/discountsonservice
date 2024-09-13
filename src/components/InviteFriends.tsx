
import { PiCopy } from "react-icons/pi";
const InviteFriends = () => {
  return (
    <div className="bg-blue-800 text-white p-6 rounded-2xl shadow-lg mt-8 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center w-full">
      <div>
        <h3 className="text-lg font-semibold mb-2">Invite friends</h3>
        <p className="text-md">
          Starting today up to 50% for NETFLIX, YOUTUBE, SPOTIFY subscriptions with a secure payment from PAYPAL
        </p>
      </div>
      <a
        href="#"
        className="bg-white text-blue-800 flex flex-col text-center p-6 rounded-2xl hover:bg-gray-100 transition duration-300"
      >
        <span className="text-black">Click on the link</span>
        <span className="flex items-center justify-center">
          <span className="ml-2 flex font-bold items-center justify-center border-b-2 border-blue-800 text-nowrap ">DISCOUNTS ON SERVICES</span>
          <PiCopy className="ml-2 text-black text-2xl" />
        </span>
      </a>
    </div>
  );
};

export default InviteFriends;
