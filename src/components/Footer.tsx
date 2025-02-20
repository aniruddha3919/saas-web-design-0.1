import InstaIcon from "../assets/icons/insta.svg";
import TwitterIcon from "../assets/icons/x-social.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            © 2025 Aniruddha Pal, All rights reserved.
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <TwitterIcon />
            </li>
            <li>
              <InstaIcon />
            </li>
            <li>
              <LinkedinIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
