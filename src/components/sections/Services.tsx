import { motion } from 'framer-motion';
import { 
  Eye, 
  Scissors, 
  Baby, 
  Camera,
  Heart
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      Icon: Eye,
      title: 'Comprehensive Eye Exam',
      description: 'Complete vision testing and eye health screening with state-of-the-art diagnostics.',
      features: ['Vision testing', 'Anterior segment examination', 'Retina examination'],
    },
    {
      Icon: Eye,
      title: 'Advanced Diagnostics',
      description: 'State-of-the-art imaging and diagnostic equipment for precise eye care.',
      features: ['OCT scanning', 'Digital Fundus Camera','Automated Perimetry',"Green Laser"],
    },
    {
      Icon: Eye,
      title: 'Cataract Surgery',
      description: 'Advanced phacoemulsification with premium intraocular lens options.',
      features: ['Premium IOLs', 'Multifocal', 'EDOF', 'Advance Monofocal'],
    },
    {
      Icon: Eye,
      title: 'Retina Disease',
      description: 'Specialized diagnosis and treatment of various retinal conditions.',
      features: ['Diabetic retinopathy', 'Retinal detachment', 'Macular diseases', 'Hypertensive Retinopathy'],
    },
    
    {
      Icon: Eye,
      title: 'Retina Treatment',
      description: 'Comprehensive care for diabetes-related eye conditions with advanced treatment options.',
      features: ['Intravitreal injections', 'Vitrectomy surgery', 'SFIOL'],
    },
    {
      Icon: Eye,
      title: 'Glaucoma Care',
      description: 'Diagnosis and treatment of glaucoma to preserve vision.',
      features: ['Laser iridotomy', 'Gonioscopy','Trabeculectomy surgery'],
    },
  ];

  return (
    <section id="services" className="py-10 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-gradient-medical">Eye Care</span> Solutions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From routine eye exams to advanced surgical procedures, we offer a complete range 
            of eye care services using the latest technology and techniques.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map(({ Icon, title, description, features }, index) => (
            <motion.div
              key={title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Service Icon */}
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-medical rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
              </motion.div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-medical opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA removed per request */}
      </div>
    </section>
  );
};

export default Services;