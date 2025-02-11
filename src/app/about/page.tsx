import Image from "next/image";
import corrosion from "../../assets/corroison.jpeg";
import corrosion2 from "../../assets/corrosion2.jpeg";
import newImage1 from "../../assets/banner2.png";
import newImage2 from "../../assets/bg3.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E6F4F1]">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-5xl font-mono tracking-tighter text-center mb-6 text-black mt-6">
          About Us
        </h1>

        {/* First Section with Image and Text */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 relative">
            <Image
              src={corrosion}
              alt="Corrosion Example"
              className="rounded-lg shadow-lg"
              width={600}
              height={350}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg leading-7 mb-6 text-[#333]">
              Corrosion is a natural process where metal assets deteriorate due to chemical reactions with the environment. As your company scales, appliances and instruments may underperform due to structural failures caused by rust and internal corrosion. These unseen damages can result in high financial and operational costs.
            </p>
            <p className="text-lg leading-7 mb-6 text-[#333]">
              By leveraging advanced electrochemical techniques, weight loss methods, and artificial intelligence, our solution accurately calculates the corrosion rate, enabling proactive maintenance. Our guides and tools are straightforward, designed by professionals with years of hands-on experience.
            </p>
          </div>
        </div>

        {/* Second Section with Reverse Layout and Image */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-12">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 relative">
            <Image
              src={corrosion2}
              alt="Corrosion Prevention"
              className="rounded-lg shadow-lg"
              width={600}
              height={350}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="md:w-1/2 md:pr-8">
            <p className="text-lg leading-7 mb-6 text-[#333]">
              Our innovative approach not only detects corrosion early but also provides detailed insights into the corrosion behavior specific to your industry. We tailor our solutions to suit various environments, ensuring precision in analysis.
            </p>
            <p className="text-lg leading-7 mb-6 text-[#333]">
              In addition to our monitoring solutions, we offer comprehensive training and support, enabling your team to manage corrosion effectively. Our expertise spans several sectors, allowing us to implement best practices that maximize asset longevity and minimize downtime.
            </p>
          </div>
        </div>

        {/* New Section with Additional Images and Text */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 relative">
            <Image
              src={newImage1}
              alt="General Intelligence Technology"
              className="rounded-lg shadow-lg"
              width={600}
              height={350}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl tracking-tighter mb-4 text-black mt-6">
              A General Intelligence Technology for Critical Assets
            </h2>
            <p className="text-lg leading-7 mb-6 text-[#333]">
              Build, Ship, Serve & Evolve! Using Adaptive Computation, we integrate Computational Chemistry, Fluid Dynamics, Condition-Based Monitoring, and Computer Graphics to deliver unparalleled service. Our efforts are reflected in every solution we provide.
            </p>
            <p className="text-lg leading-7 mb-6 text-[#333]">
              We help you deploy these solutions efficiently, ensuring internal corrosion visibility every week, fast assessment algorithms, and knowledge transfer across connected assets. Achieve sub-10-second forecasting in high-speed processes for petrochemical assets, marine assets, aircraft, and metal manufacturing equipment.
            </p>
          </div>
        </div>

        {/* Final Statement */}
        <div className="text-center">
          <p className="text-lg leading-7 mb-6 text-[#333]">
            Opportunities reflect our endeavors. Write to us and help us Build, Ship, Serve & Evolve Faster! We are on a mission to provide the best corrosion solutions for a range of industries.
          </p>
        </div>
      </div>
    </div>
  );
}
