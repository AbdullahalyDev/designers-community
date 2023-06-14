import Image from "next/image";
import { A, Span } from "./Typography";

export default function Footer() {
  return (
    <footer>
      <div className='container py-3 rounded-4 m-auto text-left'>
        <div className='d-flex'>
          <Span>
            Made with <i className='fa-solid fa-heart fa-beat px-1 text-danger'></i> by
            <A
              className='me-2 ms-1'
              style={{ textDecoration: "none" }}
              href='https://discord.gg/s4SWA7nrbV'
            >
              Byte Studio
            </A>
          </Span>
          <Span className='ms-auto'>
            <A
              className='me-2'
              style={{ textDecoration: "none" }}
              href='https://discord.gg/designers-community'
            >
              Designers Community
            </A>
            <Image
              alt='Designers Community Logo'
              src='/svg/logo.svg'
              height={35}
              width={35}
            />
          </Span>
        </div>
      </div>
    </footer>
  );
}
