import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import WaitlistForm from './components/WaitlistForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Something Amazing is Coming
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Be the first to know when we launch. Join our exclusive waitlist today!
            </p>
          </motion.div>

          <div className="flex justify-center">
            <WaitlistForm />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
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
            ].map((feature, index) => (
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
        </div>
      </div>
    </div>
  );
}

export default App;