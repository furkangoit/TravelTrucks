import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section 
        className="relative h-[600px] bg-cover bg-center flex items-center justify-start overflow-hidden"
        style={{
          backgroundImage: 'url(/images/Picture.png)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white text-left">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
            Campers of your dreams
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light">
            You can find everything you want in our catalog
          </p>
          
          <button
            onClick={() => navigate('/catalog')}
            className="bg-[#E1644E] text-white px-10 py-3 rounded-full font-bold text-lg hover:bg-[#c94a37] transition shadow-lg hover:shadow-xl"
          >
            View Now
          </button>
        </div>
      </section>
    </div>
  );
}