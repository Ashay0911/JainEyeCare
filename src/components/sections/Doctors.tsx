import { motion } from 'framer-motion';
import { Award, Star, GraduationCap, Wrench } from 'lucide-react';
import doctorImage from '@/assets/dr-aarti-jain.jpg';

const Doctors = () => {
  const doctor = {
    name: 'Dr. Aarti Jain',
    specialization: 'Vitreoretina and Cataract Surgeon',
    image: doctorImage,
    qualifications: [
      'MBBS (Datta Meghe Institute of Medical Sciences), Wardha',
      'DNB in Ophthalmology (Aravind Eye Institute), Pondicherry',
      'Fellowship in Vitreoretina Surgery (Giridhar Eye Institute), Kochi',
      'FICO, UK',
    ],
    expertise: [
      'Retinal Diseases : Diagnosis and Treatment in form of Laser, intravitreal injections and surgery',
      'Diabetic Retinopathy: surgery for advanced diabetic retinopathy',
      'Cataract Surgery: phacoemulsification with premium IOLs',
      'Uveitis',
      'Glaucoma'
    ],
    awards: [
      'Presented a paper at the European Society of Retina Specialists (EURETINA) conference in Vienna, 2018',
      'Written a chapter on Genetics in Age Related Macular Degeneration in book of Genetics of Ocular Diseases - Sringer',
      'Multiple publications in indexed journals',
    ],
  };

  return (
    <section id="doctors" className="py-10 md:py-14 bg-gradient-to-r from-background via-background-light to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet Our <span className="text-gradient-medical">Eye Specialist</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our dedicated ophthalmologist provides personalized, quality eye care 
            with modern expertise and compassionate service.
          </p>
        </motion.div>

          {/* Doctor Card */}
        <div className="flex justify-center">
          <motion.div
            className="w-full max-w-6xl bg-card rounded-3xl shadow-lg overflow-hidden border border-border/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Image Column */}
              <div className="md:col-span-1">
                <img
                  src={doctor.image}
                  alt={`Professional headshot of ${doctor.name}`}
                  className="w-full h-full object-cover object-top md:rounded-l-3xl"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Details Column */}
              <div className="md:col-span-2 p-6 md:p-7 lg:p-8 flex flex-col gap-6">
                {/* Header */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    {doctor.name}
                  </h3>
                  <p className="text-primary text-lg font-medium mt-1">
                    {doctor.specialization}
                  </p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 gap-6">
                  {/* Qualifications */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                      Qualifications
                    </h4>
                    <ul className="space-y-3">
                      {doctor.qualifications.map((qual, qualIndex) => (
                        <li key={qualIndex} className="flex items-start space-x-3 text-muted-foreground">
                          <Star className="h-4 w-4 text-primary/80 fill-primary/30 mt-1 flex-shrink-0" />
                          <span className="text-sm">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recognition */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Recognition & Awards
                    </h4>
                    <ul className="space-y-3">
                      {doctor.awards.map((award, awardIndex) => (
                        <li key={awardIndex} className="flex items-start space-x-3 text-muted-foreground">
                          <Award className="h-4 w-4 text-primary/80 mt-1 flex-shrink-0" />
                          <span className="text-sm">{award}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Areas of Expertise */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground flex items-center">
                      <Wrench className="h-5 w-5 mr-2 text-primary" />
                      Areas of Expertise
                    </h4>
                    <ul className="space-y-3">
                      {doctor.expertise.map((exp, expIndex) => (
                        <li key={expIndex} className="flex items-start space-x-3 text-muted-foreground">
                          <Star className="h-4 w-4 text-primary/80 fill-primary/30 mt-1 flex-shrink-0" />
                          <span className="text-sm">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Doctors;