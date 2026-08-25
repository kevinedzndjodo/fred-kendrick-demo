import { InstagramIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-16 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl text-[#f5f0eb] tracking-[0.1em] uppercase mb-4">
              Fred Kendrick
            </h3>
            <p className="text-[#a0998f] text-sm leading-relaxed max-w-xs">
              Makeup Artist &middot; Beauty Expert &middot; Educator
              <br />
              Yaoundé, Cameroon
            </p>
          </div>

          <div>
            <h4 className="text-[#f5f0eb] text-xs tracking-[0.2em] uppercase mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {["Work", "About", "Services", "Academy", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-[#a0998f] text-sm hover:text-[#f5f0eb] transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-[#f5f0eb] text-xs tracking-[0.2em] uppercase mb-4">
              Connect
            </h4>
            <a
              href="https://www.instagram.com/fred_kendrick_237/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#a0998f] text-sm hover:text-[#c9a96e] transition-colors group"
            >
              <InstagramIcon size={18} className="group-hover:scale-110 transition-transform" />
              @fred_kendrick_237
            </a>
            <a
              href="mailto:[email@fredkendrick.com]"
              className="text-[#a0998f] text-sm hover:text-[#f5f0eb] transition-colors mt-2 block"
            >
              [email placeholder]
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#666] text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Fred Kendrick. All rights reserved.
          </p>
          <p className="text-[#444] text-xs tracking-wider">
            Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
