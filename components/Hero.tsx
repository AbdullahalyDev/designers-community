import { A, H1, Span } from "./Typography";

export default function Hero() {
  return (
    <header>
      <div
        className='container text-center'
        style={{
          marginTop: "16rem",
          marginBottom: "16rem",
        }}
      >
        <H1 style={{ fontSize: "76px", fontWeight: "900" }}>
          Go to next <Span className='text-primary'>Level</Span> with Us
        </H1>
        <A
          href='https://discord.gg/designers-community'
          className='btn btn-primary rounded-pill px-3 py-2 me-2'
        >
          Join Discord
        </A>
      </div>
    </header>
  );
}
