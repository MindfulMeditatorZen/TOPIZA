import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import countries from './countriesData'

function OperateCountry() {
  const shouldReduceMotion = useReducedMotion()
  const [searchTerm, setSearchTerm] = useState('')
  const filteredCountries = countries.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-[#fffaf0] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          className="mb-8 inline-flex rounded-md px-3 py-2 font-semibold text-[#7F011F] transition-colors hover:bg-[#7F011F]/10"
        >
          Back to home
        </Link>
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }}
          className="mb-8 text-center text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          Countries we operate in
        </motion.h1>
        <motion.label
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.1, ease: 'easeOut' }}
          className="mx-auto mb-8 flex max-w-xl items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 shadow-sm transition focus-within:border-[#7F011F] focus-within:ring-4 focus-within:ring-[#7F011F]/10"
        >
          <Search aria-hidden="true" className="size-5 shrink-0 text-[#7F011F]" />
          <span className="sr-only">Search countries</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search countries..."
            className="min-w-0 flex-1 bg-transparent py-3.5 text-gray-900 outline-none placeholder:text-gray-400"
          />
        </motion.label>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCountries.map(({ image, name, imageDescription }, index) => (
            <motion.article
              key={name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : Math.min(index * 0.04, 0.24),
                ease: 'easeOut',
              }}
              className="overflow-hidden rounded-2xl border border-[#7F011F]/10 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={image}
                alt={imageDescription}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <h2 className="px-5 py-4 text-xl font-semibold text-[#7F011F]">
                {name}
              </h2>
            </motion.article>
          ))}
        </div>
        {filteredCountries.length === 0 && (
          <p className="py-12 text-center text-gray-500" role="status">
            No countries found. Try a different search.
          </p>
        )}
      </div>
    </main>
  )
}

export default OperateCountry
