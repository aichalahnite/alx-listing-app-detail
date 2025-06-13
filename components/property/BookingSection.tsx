import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const days = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return days > 0 ? days * price : 0;
  };

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white">
      <h3 className="text-xl font-semibold mb-4">${price}/night</h3>

      <label className="block">Check-in</label>
      <input type="date" className="border w-full p-2 mb-4" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />

      <label className="block">Check-out</label>
      <input type="date" className="border w-full p-2 mb-4" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />

      <p className="mt-2">Total payment: <strong>${calculateTotal()}</strong></p>

      <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-md">Reserve now</button>
    </div>
  );
};

export default BookingSection;
