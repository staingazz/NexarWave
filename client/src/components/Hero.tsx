import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6 tracking-wider">
      Simplifying Real Estate Transactions
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-8">
        Be the first to know when we launch. Join our exclusive waitlist today!
      </p>
    </motion.div>
  )
}