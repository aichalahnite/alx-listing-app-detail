import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const getTotalNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
    return diff > 0 ? diff : 0;
  };

  const total = price * getTotalNights();

  return (
    <div className="bg-white border rounded-lg p-4 shadow">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label>Check-in</label>
        <input
          type="date"
          className="border w-full p-2 rounded mt-1"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input
          type="date"
          className="border w-full p-2 rounded mt-1"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <p>Total: <strong>${total}</strong></p>
      </div>
      <button className="bg-green-600 w-full mt-4 text-white py-2 rounded hover:bg-green-700">Reserve Now</button>
    </div>
  );
};

export default BookingSection;
