import Image from "next/image";
import { MouseEvent } from "react";

export default function Navbar() {
  function light(element: MouseEvent<HTMLElement>) {
    const body = document.body;
    body.setAttribute("data-bs-theme", "light");

    const darkButton = document.getElementById(
      "darkButton"
    ) as HTMLButtonElement;
    darkButton.style.display = "inline";

    element.currentTarget.style.display = "none";
  }
  function dark(element: MouseEvent<HTMLElement>) {
    const body = document.body;
    body.setAttribute("data-bs-theme", "dark");

    const lightButton = document.getElementById(
      "lightButton"
    ) as HTMLButtonElement;
    lightButton.style.display = "inline";

    element.currentTarget.style.display = "none";
  }
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <Image
            alt='Designers Community Logo'
            src='/svg/logo.svg'
            height={35}
            width={35}
          />
        </a>
        <div className='d-flex'>
          <div className='ms-auto'>
            <button
              id='darkButton'
              onClick={dark}
              style={{
                width: "38px",
                height: "38px",
              }}
              className='btn btn-outline-primary rounded-pill text-center px-0'
            >
              <i className='fa-solid fa-moon'></i>
            </button>
            <button
              id='lightButton'
              onClick={light}
              style={{
                display: "none",
                width: "38px",
                height: "38px",
              }}
              className='btn btn-outline-primary rounded-pill text-center px-0'
            >
              <i className='fa-solid fa-sun'></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
