import { motion } from 'framer-motion'

const features = [
  {
    title: 'Early Access',
    description: 'Get first dibs when we launch',
    icon: '🚀',
  },
  {
    title: 'Special Offers',
    description: 'Exclusive deals for waitlist members',
    icon: '💎',
  },
  {
    title: 'Updates',
    description: 'Stay informed about our progress',
    icon: '📫',
  },
]

export default function Features() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}