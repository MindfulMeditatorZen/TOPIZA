import { Link } from 'react-router-dom'
import { MapPin, Search } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

function HeroNavi() {
  const shouldReduceMotion = useReducedMotion()
  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : delay, ease: 'easeOut' },
  })

  return (
    <div className="bg-[#fffaf0]">
      <motion.nav
        {...reveal()}
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-5 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <Link to="/" className="text-3xl font-extrabold tracking-tight text-[#7F011F]">
          TOPIZA
        </Link>
        <Link to="/signup" className="rounded-md bg-[#7F011F] px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-[#ff5252]">
          Get started
        </Link>
      </motion.nav>

      <main className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-16">
        <section className="text-center lg:text-left">
          <motion.p
            {...reveal(0.1)}
            className="font-semibold uppercase tracking-[0.2em] text-[#7F011F]"
          >
            Home of the best African Dishes
          </motion.p>
          <motion.h2
            {...reveal(0.2)}
            className="mx-auto mt-4 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:mx-0 lg:text-6xl"
          >
            Food delivery
            <span className="block text-[#7F011F]">made for you.</span>
          </motion.h2>
          <motion.p
            {...reveal(0.3)}
            className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-gray-600 lg:mx-0"
          >
            Find your next favorite meal and get it delivered fresh from the best
            local spots.
          </motion.p>
          <motion.form
            {...reveal(0.4)}
            className="mx-auto mt-8 flex w-full max-w-xl items-center gap-3 rounded-xl border border-gray-200 bg-white p-2 shadow-lg shadow-[#7F011F]/5 transition focus-within:border-[#7F011F] focus-within:ring-2 focus-within:ring-[#7F011F]/20 lg:mx-0"
            onSubmit={(event) => event.preventDefault()}
          >
            <MapPin aria-hidden="true" className="ml-2 size-5 shrink-0 text-[#7F011F]" />
            <label className="sr-only" htmlFor="delivery-address">
              Delivery address
            </label>
            <input
              id="delivery-address"
              type="text"
              placeholder="Enter your delivery address"
              className="min-w-0 flex-1 bg-transparent py-3 text-gray-900 outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              aria-label="Search delivery address"
              className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#7F011F] text-white transition-colors hover:bg-[#ff5252]"
            >
              <Search aria-hidden="true" className="size-5" />
            </button>
          </motion.form>
          <motion.div {...reveal(0.5)}>
            <Link to="/signup" className="mt-5 inline-block rounded-lg px-6 py-3 font-semibold text-[#7F011F] transition-colors hover:bg-[#7F011F]/10">
            Sign up to get started
            </Link>
          </motion.div>
        </section>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-3 rotate-3 rounded-[2rem] bg-[#7F011F]/10 sm:-inset-4"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-[#7F011F]/20">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=85"
              alt="A table filled with freshly prepared dishes"
              className="aspect-[4/3] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/3]"
            />
          </div>
          <div className="absolute -bottom-5 left-3 rounded-xl bg-white px-4 py-3 shadow-lg sm:bottom-5 sm:left-5 sm:px-5 sm:py-4">
            <p className="text-sm font-semibold text-gray-900">Fresh favorites</p>
            <p className="mt-1 text-xs text-gray-500">From local spots you love</p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default HeroNavi
