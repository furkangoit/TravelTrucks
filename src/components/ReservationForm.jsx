import { useState } from 'react';

export default function ReservationForm({ camperId, camperName }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.bookingDate) {
      alert('Please fill in all required fields');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', bookingDate: '', comment: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-[#101010] mb-2">Book your campervan now</h2>
      <p className="text-gray-600 text-sm mb-6">Stay connected! We are always ready to help you.</p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="text-green-700 font-semibold">✅ Booking submitted!</p>
          <p className="text-green-600 text-sm mt-1">We will contact you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1644E]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1644E]"
          />
          <input
            type="date"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1644E]"
          />
          <textarea
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1644E] resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#E1644E] text-white font-bold rounded-full hover:bg-[#c94a37]"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}