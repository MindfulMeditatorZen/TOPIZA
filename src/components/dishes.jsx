import { Link } from 'react-router-dom'
import popularDishes from './popularDishesData'
import { motion, useReducedMotion } from 'motion/react'

function Dishes() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-[#fffaf0] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Popular dishes
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularDishes.slice(0, 4).map(({ image, name, price, button }, index) => (
            <motion.article
              key={name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: 'easeOut',
              }}
              className="overflow-hidden rounded-2xl border border-[#7F011F]/10 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={image}
                alt={name}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                <p className="mt-2 text-lg font-medium text-[#7F011F]">
                  ${price.toFixed(2)}
                </p>
                <Link
                  to="/signup"
                  className="mt-4 block w-full cursor-pointer rounded-md bg-[#7F011F] px-4 py-2 text-center text-white transition-colors duration-300 hover:bg-[#ff5252]"
                >
                  {button}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/popular-dishes"
            className="rounded-md border border-[#7F011F] px-6 py-3 font-semibold text-[#7F011F] transition-colors duration-300 cursor-pointer hover:bg-[#7F011F] hover:text-white"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Dishes
