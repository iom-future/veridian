import { motion } from 'framer-motion'
import SectionLabel from '../shared/SectionLabel'
import useReducedMotion from '../../hooks/useReducedMotion'
import { verticals } from '../../content/content'

// Import images for each vertical
import pharmaImg from '../../assets/fields/medicine.jpg'
import aerospaceImg from '../../assets/fields/aerospace.jpg'
import foodImg from '../../assets/fields/food.jpg'
import electronicImg from '../../assets/fields/Electronic.jpg'

const imageMap = {
  pharma: pharmaImg,
  defense: aerospaceImg,
  food: foodImg,
  luxury: electronicImg,
}

const slideVariants = (direction, reduced) =>
  reduced
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      }

const Verticals = () => {
  const reduced = useReducedMotion()

  return (
    <section className="py-24 md:py-32 bg-bg-secondary" aria-labelledby="verticals-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel text={verticals.eyebrow} />
        <h2 id="verticals-heading" className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary max-w-4xl leading-tight">
          {verticals.headline}
        </h2>
        <p className="font-inter text-base md:text-lg text-text-muted mt-6 max-w-3xl leading-relaxed">
          {verticals.intro}
        </p>

        {/* Vertical cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {verticals.items.map((item, i) => {
            const ImageSrc = imageMap[item.id]
            return (
              <motion.div
                key={item.id}
                className="flex flex-col bg-bg-card border border-white/[0.08] hover:border-teal-border/30 transition-all duration-500 group overflow-hidden"
                {...slideVariants('up', reduced)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={ImageSrc}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent opacity-60" />
                </div>

                {/* Text Content */}
                <div className="p-8 relative z-10">
                  <h3 className="font-playfair font-semibold text-2xl lg:text-3xl text-text-primary mb-4 group-hover:text-teal-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                   <p className="font-inter text-base lg:text-lg text-text-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Verticals
