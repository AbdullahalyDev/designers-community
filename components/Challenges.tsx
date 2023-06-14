export default function Challenge() {
  return (
    <section>
      <div className='container my-5 rounded-4 text-center'>
        <div
          className='bg-primary rounded-4 px-3'
          style={{
            paddingTop: "7rem",
            paddingBottom: "7rem",
          }}
        >
          <h1 className='text-white' style={{ fontWeight: "900" }}>
            Join Best Challenges
          </h1>
          <p className='mb-4 text-white-50'>
            Get valuable prizes by designing your participation in the most
            powerful challenges for designers
          </p>
          <a href='#' className='btn btn-light rounded-2 px-3 py-2'>
            Join Discord
          </a>
        </div>
      </div>
    </section>
  );
}
