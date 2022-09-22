import moment from "moment";
import React from "react";

const CustomerDetailsCard = ({
  title,
  products,
  money,
  amount,
  date,
  createdAt,
}) => {
  return (
    <div className="flex justify-between flex-wrap items-center py-10 px-5 bg-gray-300 border">
      <div>
        {title && (
          <p>
            {title}:
            <span className="font-bold text-gray-800 ml-3">{products}</span>
          </p>
        )}
        <p>
          {money}:<span className="font-bold text-gray-800 ml-3">{amount}</span>
        </p>
      </div>
      <div>
        {date && (
          <p>
            {date}:
            <span className="font-bold text-gray-800 ml-3">
              {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default CustomerDetailsCard;
