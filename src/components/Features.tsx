import { title } from "process";
import EcosystemIcon from "../assets/icons/ecosystem.svg";
const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="text-white bg-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl tracking-tighter">Everything You need</h2>
        <div className="max-w-xl mx-auto">
        <p className="text-center mt-5
         text-xl text-white/70">
          Enjoy customizable lists, team work tools, and smart tracking all in one place 
          set tasks, get reminders, and see your progress simply and quickly
        </p>
        </div>
        
        <div className="mt-16 flex flex-col sm:flex-row gap-5">
          {features.map((feature) => (
            <div key={title} className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1">
              <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-xl">
                <EcosystemIcon />
              </div>
              <h3 className="mt-6 font-bold">{feature.title}</h3>
              <p className="mt-2 text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
