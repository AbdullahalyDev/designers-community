import { A, H1, H2 } from "./Typography";

export default function NotFound() {
  return (
    <section>
      <div
        className='container text-center'
        style={{
          position: "absolute",
          height: "190px",
          width: "520px",
          top: "calc(50% - 95px)",
          left: "calc(50% - 260px)",
        }}
      >
        <H2>404</H2>
        <H1 className='mb-3' style={{ fontSize: "76px", fontWeight: "900" }}>
          Not Found
        </H1>
        <A
          href='/'
          className='btn btn-primary rounded-3 px-3 py-2 me-2'
        >
          Back to Home
        </A>
      </div>
    </section>
  );
}
