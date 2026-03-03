import { motion } from 'framer-motion'
import { Linkedin, Twitter } from 'lucide-react'
import SectionLabel from '../shared/SectionLabel'
import useReducedMotion from '../../hooks/useReducedMotion'
import { team } from '../../content/content'

// Import team images
import nakamuraImg from '../../assets/teams/team.png'
import booneImg from '../../assets/teams/v_team.jpg'
import sharmaImg from '../../assets/teams/team1.jpg'
import  chenImg from '../../assets/teams/team2.jpg'
import ibrahimImg from '../../assets/teams/team5.png'
import laurentImg from '../../assets/teams/t_test2.png'

const imageMap = {
  chen: chenImg,
  boone: booneImg,
  sharma: sharmaImg,
  laurent: laurentImg,
  ibrahim: ibrahimImg,
  nakamura: nakamuraImg,
}

const Team = () => {
  const reduced = useReducedMotion()

  return (
    <section className="py-24 md:py-32 bg-bg-secondary" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionLabel text={team.eyebrow} />
        <h2 id="team-heading" className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary max-w-4xl leading-tight">
          {team.headline}
        </h2>
        <p className="font-inter text-base md:text-lg text-text-muted mt-6 max-w-3xl leading-relaxed">
          {team.intro}
        </p>

        {/* Team cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.members.map((member, i) => {
            const ImageSrc = imageMap[member.id]
            return (
              <motion.div
                key={member.id}
                className="bg-bg-card border border-white/[0.08] overflow-hidden group hover:border-teal-border hover:-translate-y-1 transition-all duration-300"
                initial={reduced ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-bg-secondary">
                  <img 
                    src={ImageSrc} 
                    alt={`Portrait of ${member.name}`} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-lg lg:text-xl text-text-primary">{member.name}</h3>
                  <p className="font-inter text-sm lg:text-base text-teal-primary mt-1">{member.title}</p>
                  <p className="font-inter text-sm lg:text-base text-text-muted mt-3 leading-relaxed">{member.bio}</p>
                  <div className="flex items-center gap-3 mt-4">
                    <a href={member.linkedin} className="text-text-dim hover:text-teal-primary transition-colors" aria-label={`${member.name} LinkedIn`}>
                      <Linkedin size={16} aria-hidden="true" />
                    </a>
                    <a href={member.twitter} className="text-text-dim hover:text-teal-primary transition-colors" aria-label={`${member.name} Twitter`}>
                      <Twitter size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Team
