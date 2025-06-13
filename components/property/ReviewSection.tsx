import { Review } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      {reviews.map((r, i) => (
        <div key={i} className="border-b pb-4 mb-4 flex items-start space-x-4">
          <img src={r.avatar} className="w-12 h-12 rounded-full" alt={r.name} />
          <div>
            <p className="font-bold">{r.name}</p>
            <p className="text-yellow-500">{r.rating} ★</p>
            <p>{r.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
