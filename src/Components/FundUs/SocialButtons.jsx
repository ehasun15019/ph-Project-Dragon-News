import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialButtons = () => {
  const buttons = [
    { icon: <FaFacebookF className="text-blue-600" />, name: "Facebook" },
    { icon: <FaTwitter className="text-sky-500" />, name: "Twitter" },
    { icon: <FaInstagram className="text-pink-500" />, name: "Instagram" },
  ];

  return (
    <div className="w-full max-w-xs border rounded-md overflow-hidden divide-y">
      {buttons.map((btn, index) => (
        <div
          key={index}
          className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 transition"
        >
          <div className="bg-gray-100 p-2 rounded-full">
            {btn.icon}
          </div>
          <span className="text-gray-700 font-medium">{btn.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SocialButtons;
