import { Store, Utensils, TrendingUp } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

const steps = [
  {
    title: <a href="#" className="text-lg font-semibold text-gray-900 hover:text-[#7F011F]">
      Create your business account
    </a>,
    description: 'Set up your Topiza profile and tell customers what makes your business special.',
    Icon: Store,
  },
  {
    title: <a href="#" className="text-lg font-semibold text-gray-900 hover:text-[#7F011F]">
      Add your menu
    </a>,
    description: 'Showcase your dishes with clear descriptions so customers can find their favorites.',
    Icon: Utensils,
  },
  {
    title: <a href="#" className="text-lg font-semibold text-gray-900 hover:text-[#7F011F]">
      Grow with every order
    </a>,
    description: 'Reach more local customers and turn new orders into loyal regulars.',
    Icon: TrendingUp,
  },
]

function ThreeMs() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-[#fffaf0] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Your business, ready to grow
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(({ title, description, Icon }, index) => (
            <motion.article
              key={index}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.18,
                ease: 'easeOut',
              }}
              className="rounded-2xl border border-[#7F011F]/10 bg-white p-7 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7F011F]/10 text-[#7F011F]">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <span className="text-sm font-bold tracking-widest text-[#7F011F]/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThreeMs
