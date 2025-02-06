import electrician from '../../assets/electrician.jpg'

export default function PhotoGallery() {
  return (
    <section className="photo-gallery bg-gray-300 py-20 text-center">
      <h2 className="text-3xl font-semibold">Our Work</h2>
      <div className="gallery mt-12 flex justify-center space-x-8">
        <img
          src={electrician}
          alt="Service 1"
          className="w-72 h-auto rounded-lg shadow-lg"
        />
        <img
          src={electrician}
          alt="Service 2"
          className="w-72 h-auto rounded-lg shadow-lg"
        />
        <img
          src={electrician}
          alt="Service 3"
          className="w-72 h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
