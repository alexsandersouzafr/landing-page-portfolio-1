import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-navy px-2 text-white">
      <div className="m-auto flex w-full max-w-[1170px] flex-col gap-4">
        <div className="flex w-full grid-cols-3 flex-col gap-16 border-b border-white py-16 md:grid">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl">LOGO</h2>
            <p className="font-thin">
              Ex eu consequat nostrud quis Lorem ea ut amet reprehenderit anim
              laboris dolor dolor. Excepteur cupidatat ea tempor occaecat.
              Occaecat quis sint anim proident voluptate ut. Excepteur laborum
              deserunt anim velit eu Lorem aliqua labore elit.
            </p>
            <div className="flex items-center gap-8">
              <Facebook />
              <Twitter />
              <Instagram />
              <Youtube />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl">QUICK LINKS</h2>
            <ul className="flex flex-col gap-2">
              <li>About</li>
              <li>Screenshots</li>
              <li>Features</li>
              <li>Download</li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl">NEWSLETTER</h2>
            <button className="rounded-md bg-royal px-8 py-4 text-white">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="pb-2 text-right">Developed by AS WEB DEV.</div>
      </div>
    </footer>
  );
}
