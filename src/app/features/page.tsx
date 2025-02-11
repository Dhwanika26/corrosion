export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E6F4F1]">
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-5xl font-mono tracking-tighter text-center mb-6 text-black">
          Features
        </h1>
        <p className="mt-4 text-lg text-black text-center">
          Discover the key features of our Corrosion Rate & Instrument Life Predictor.
        </p>

        {/* Feature 1 */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-black to-[#7C313D]">
            Artificial Intelligence for Storage Tanks
          </h2>
          <p className="mt-4 text-lg text-black">
            At the base of our technology lies an AI-driven system that ensures the long-term reliability 
            and service life of storage tanks. Our solution is designed to maximize the lifespan of your 
            storage assets, stretching their utility well beyond a decade. While understanding the challenges 
            of accessibility during operations, our technology allows for remote monitoring and management, 
            offering continuous oversight of your tank&apos;s condition. With a limited number of critical 
            tanks serving vast industrial demands, this AI solution is vital for maintaining peak performance.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-black to-[#7C313D]">
            Software as a Service: Customized for Your Assets
          </h2>
          <p className="mt-4 text-lg text-black">
            Our Software as a Service (SaaS) offering provides a customized digital replica of each 
            storage tank to deliver precise, real-time insights. This includes optimized storage and 
            drainage cycles powered by accurate analytics. With one condensed dashboard for data input, 
            users can perform corrosion and risk assessments on demand. The service enables quick, 
            reliable decision-making for asset health, giving you confidence in both their storage 
            conditions and overall system resilience.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-black to-[#7C313D]">
            Fluid + AI = Indicator
          </h2>
          <p className="mt-4 text-lg text-black">
            Combining advanced fluid analysis with our proprietary AI algorithm, this feature delivers 
            quantitative assessments of tank deterioration over time. The system continuously monitors 
            the condition of the stored fluid, drawing patterns of corrosion and deterioration on internal 
            surfaces that are otherwise invisible without dismantling the product. From flow dynamics to 
            deposition and the wear of bottom plates, our solution offers an in-depth view into tank health, 
            empowering proactive maintenance to extend the life and integrity of each asset.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-black to-[#7C313D]">
            Stallion: Risk-Based Inspection + Acoustic Monitoring
          </h2>
          <p className="mt-4 text-lg text-black">
            Our Stallion feature provides an all-encompassing, digital replica of each asset, enabling 
            detailed health monitoring without the deployment of any additional sensors. Through this 
            technology, we offer component-level, daily visibility for essential equipment like distillation 
            columns, pipelines, and storage tanks. Stallion combines risk-based inspection (RBI) techniques 
            with acoustic monitoring, giving you a comprehensive assessment. As a one-stop health update for 
            critical assets, Stallion ensures that you have access to timely, precise data to optimize 
            performance and mitigate risks effectively.
          </p>
        </div>
      </div>
    </div>
  );
}
