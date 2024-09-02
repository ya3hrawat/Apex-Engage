import { motion } from 'framer-motion';

const timelineItems = [
  {
    number: '01',
    title: 'Goal Alignment',
    description: "We start by understanding the Client’s brand identity, target audience and future goals & then we establish measurable targets.",
  },
  {
    number: '02',
    title: 'Research & Analysis',
    description: 'Our expert copywriters get into the research mode to come up with ideas that leave you with no other option other than predictable organic growth.',
  },
  {
    number: '03',
    title: 'Creation',
    description: "Produce high-quality, on-brand content including graphics, videos, stories, and reels.",
  },
  {
    number: '04',
    title: 'Engagement Strategy',
    description: "We create a plan to engage with followers, respond to comments, and interact with potential customers.",
  },
  {
    number: '05',
    title: 'Feedback',
    description: "Hold weekly review sessions with clients to gather feedback and discuss progress.",
  },
];

const Timeline = () => (
  <div className="relative mt-3 md:mt-12 ml-10 space-y-12">
    {timelineItems.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -250 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }} 
        viewport={{
          once: true,
        }}
        className="relative flex items-start"
      >
        <div className="absolute left-0 h-full border-l-2 border-gray-300"></div>
        <div className={`relative flex items-center justify-center w-6 h-6 ${index%2 === 0 ? 'bg-yellow-500' : 'bg-gray-500'} rounded-full -ml-3`}></div>
        <div className="ml-10">
          <h2 className={`${index%2 === 0 ? 'text-yellow-500' : 'text-gray-500'} text-3xl`}>{item.number}</h2>
          <h3 className="text-[#ff8c00] text-xl font-semibold mt-2">{item.title}</h3>
          <p className="text-[gray-400] mt-1">{item.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

export default Timeline;
