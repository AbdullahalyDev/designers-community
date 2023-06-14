import { A } from "./Typography";

export default function Invite() {
  return (
    <section>
      <div className='container my-5 rounded-4'>
        <div
          style={{
            paddingTop: "7rem",
            paddingBottom: "7rem",
          }}
        >
          <h1 style={{ fontWeight: "900" }}>Why you wating?</h1>
          <p className='mb-4'>join now to perfect and profisional designing community</p>
          <A
            href='https://discord.gg/designers-community'
            className='btn btn-primary rounded-2 px-3 py-2'
          >
            Join Discord
          </A>
        </div>
      </div>
    </section>
  );
}
