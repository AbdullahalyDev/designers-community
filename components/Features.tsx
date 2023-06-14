export default function Features() {
  return (
    <section>
      <div className='container my-5 rounded-4 m-auto text-left'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <i className='fa-solid fa-cube text-white bg-primary rounded-3 fs-4 p-3 mb-4'></i>
            <h4 style={{ fontWeight: "900" }}>Packages</h4>
            <p style={{ fontWeight: "500" }}>
              We have the strongest and best ready-to-use packages from
              professional designers
            </p>
          </div>
          <div className='col-12 col-md-4'>
            <i className='fa-solid fa-calendar text-white bg-primary rounded-3 fs-4 p-3 mb-4'></i>
            <h4 style={{ fontWeight: "900" }}>Events</h4>
            <p style={{ fontWeight: "500" }}>
              We also have competitive effectiveness among professional
              designers
            </p>
          </div>
          <div className='col-12 col-md-4'>
            <i className='fa-solid fa-building-columns text-white bg-primary rounded-3 fs-4 p-3 mb-4'></i>
            <h4 style={{ fontWeight: "900" }}>Courses</h4>
            <p style={{ fontWeight: "500" }}>
              We have the best teachers and experts who will guide you to the
              right path in the world of design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
