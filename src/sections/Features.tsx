import EcosystemIcon from "@/assets/ecosystem.svg";

const features = [
    {
        title: 'Goal Setting and Tracking',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        title: 'Integration',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
        title: 'Secure',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    }
];

export const Features = () => {
    return (
        <div className="bg-[#D1D0CE] py-[60px] sm:py-24">
            <div className="container">
                <h2 className="text-center font-sans text-black text-5xl tracking-tighter">Everything You Need To Know</h2>
                <div className="max-w-xl mx-auto">
                    <p className="text-center font-sans mt-5 text-xl text-black">
                        Learn the key factors of corrosion, types, and how to extend material
                        lifespan with simple, effective prevention tips
                    </p>
                </div>
                <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:gap-8">
                    {features.map(({ title, description }) => (
                        <div key={title} className="border border-black px-5 py-10 font-[Nunito] text-center rounded-2xl sm:flex-1 sm:w-1/3">
                            <div className="inline-flex h-14 w-14 bg-gradient-to-b from-green-600 to-black text-white justify-center items-center rounded-lg">
                                <EcosystemIcon />
                            </div>
                            <h3 className="mt-6 font-sans font-bold text-black">{title}</h3>
                            <p className="mt-2 font-sans text-black">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
