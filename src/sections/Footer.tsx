import Link from "next/link";
import { FaLinkedin, FaFacebook, FaMapLocationDot } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#2F2F2F,#5A5A5A_100%)] py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between text-white">
        
        {/* Left Section - Quick Links */}
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <nav className="mb-6 flex flex-col space-y-2">
            <Link href="/about" className="text-sm text-white/60 hover:text-white">
              About Us
            </Link>
            <Link href="/features" className="text-sm text-white/60 hover:text-white">
              Features
            </Link>
            <Link href="/help" className="text-sm text-white/60 hover:text-white">
              Help
            </Link>
            <Link href="/privacy_policy" className="text-sm text-white/60 hover:text-white">
              Privacy Policy
            </Link>
          </nav>
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Corrosion Rate Predictor. All Rights Reserved.
          </p>
        </div>

        {/* Right Section - Company Contacts & Social Links */}
        <div className="md:w-1/2 flex flex-col md:items-end space-y-4">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="text-sm text-white/60">Email: contact@corrosionpredictor.com</p>
          <p className="text-sm text-white/60">Phone: +91-1234567890</p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-2">
            <Link href="#" target="_blank">
              <FaLinkedin className="h-6 w-6 text-white/60 hover:text-white transition" />
            </Link>
            <Link href="#" target="_blank">
              <FaFacebook className="h-6 w-6 text-white/60 hover:text-white transition" />
            </Link>
            <Link href="#" target="_blank">
              <FaMapLocationDot className="h-6 w-6 text-white/60 hover:text-white transition" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
