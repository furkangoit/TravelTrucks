export default function ReviewSection({ camper }) {
  const mockReviews = [
    {
      id: 1,
      author: 'Alice',
      rating: 4,
      text: 'Great campervan! Very comfortable and well-maintained. Would definitely recommend!'
    },
    {
      id: 2,
      author: 'Bob',
      rating: 3,
      text: 'Good experience overall. Some minor issues with the kitchen equipment.'
    },
    {
      id: 3,
      author: 'Charlie',
      rating: 5,
      text: 'Absolutely amazing! The best camping experience I have ever had.'
    }
  ];

  const avgRating = (mockReviews.reduce((sum, review) => sum + review.rating, 0) / mockReviews.length).toFixed(1);

  return (
    <div>
      <div className="mb-8 pb-8 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="text-5xl font-bold text-[#101010]">{avgRating}</div>
          <div>
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">
                  {i < Math.round(avgRating) ? '⭐' : '☆'}
                </span>
              ))}
            </div>
            <p className="text-gray-600">{mockReviews.length} Reviews</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {mockReviews.map(review => (
          <div key={review.id} className="pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E1644E] to-[#c94a37] flex items-center justify-center text-white font-bold text-lg">
                {review.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-[#101010]">{review.author}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">
                      {i < review.rating ? '⭐' : '☆'}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}