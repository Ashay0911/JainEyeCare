import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

const reviews = [
  { name: 'Atul Khope', text: 'My mother-in-law underwent cataract surgery by Dr. Aarti Jain. The procedure was efficient, budget-friendly, and followed by regular, attentive follow-ups. Highly appreciate the care.', rating: 5 },
  { name: 'Devarshi Patrikar', text: 'Dr. Aarti treated both me and my daughter with patience and care. She explained every step and the causes clearly, and recommended the right medicines. Truly professional and compassionate.', rating: 5 },
  { name: 'Nalini Meshram', text: 'My sister’s cataract operation was handled professionally by Dr. Aarti. She made the patient comfortable and guided us step-by-step at every visit. We are very happy with the results.', rating: 5 },
  { name: 'Arvind Dixit', text: 'Wonderfully skilled. I have been taking retina injections for 3 years and have full confidence in her care. Highly recommended.', rating: 5 },
  { name: 'Siddhant Pandey', text: 'Great experience at Jain Eye Care. Dr. Aarti was kind, explained everything clearly, and made the process comfortable.', rating: 5 },
  { name: 'Vyoma Dalal', text: 'Dr. Aarti treated my grandmother for a retinal issue with expertise and compassion from consultation to follow-ups. Strongly recommended.', rating: 5 },
  { name: 'Aviral Jain', text: 'Visited for glaucoma evaluation. Dr. Aarti was patient, thorough, and provided a complete diagnosis. Very satisfied.', rating: 5 },
  { name: 'Ashish Somajoshilwar', text: 'Visited for my aunt. Dr. Aarti is very caring and makes patients feel comfortable. Excellent experience.', rating: 5 },
  { name: 'Rajendra Jadhao', text: 'Visited for a retina checkup today. Very satisfied with the detailed and careful examination.', rating: 5 },
  { name: 'Ravi Jain', text: 'Kind by nature and a knowledgeable, experienced ophthalmologist. Highly recommended.', rating: 5 },
  { name: 'Prakash Kamble', text: 'Quick and effective eye injection treatment with noticeable improvement. Highly skilled and professional.', rating: 5 },
  { name: 'Sandip Deogade', text: 'First eye checkup for my daughter. Everything was explained clearly and kindly. Staff is polite. Highly recommended.', rating: 5 },
  { name: 'Anil Kohade', text: 'Thorough check-up with the latest instruments. The clinic is neat and clean. Very good experience.', rating: 5 },
  { name: 'Prashik Dongre', text: 'Outstanding care—professionalism, expertise, and compassion made my visit exceptional. Thank you, Dr. Aarti.', rating: 5 },
  { name: 'Vivek Kashyap', text: 'Excellent treatment and consultation from Dr. Aarti Jain. Thank you!', rating: 5 },
  { name: 'Jennifer Kathleen', text: 'Caring and professional. She patiently explains procedures and puts patients at ease. Highly recommended.', rating: 5 },
  { name: 'Srikant Gedam', text: 'Helpful and not in a rush; took time to diagnose and explain medication. Appreciated the detailed approach.', rating: 5 },
  { name: 'Dhanashree Jain', text: 'Retina surgery for my cousin went very well with a good post-op outcome. Professional and skilled doctor.', rating: 5 },
  { name: 'Anil Gupta', text: 'Visited with wife and son for vision issues. Skilled doctor, clean clinic, and excellent care.', rating: 5 },
  { name: 'Ajinkya Gokhale', text: 'Hygienic clinic with advanced treatment. Proper follow-up and courteous staff. Clear guidance throughout.', rating: 5 },
  { name: 'Mayur Jirapure', text: 'Excellent service and a caring doctor. Highly recommended.', rating: 5 },
  { name: 'Peehu Jain', text: 'Best place for eye care. Genuine, caring, and detail-oriented. Wonderful experience with great results.', rating: 5 },
  { name: 'Sneha Panwar', text: 'Wonderful experience. Dr. Aarti guided us on eye care and regular checkups with clear advice.', rating: 5 },
  { name: 'Malvika', text: 'Dedicated doctor with a keen eye for detail. Timely treatment and sound advice. Highly recommended.', rating: 5 },
  { name: 'Sanya Pandey', text: 'My father’s cataract surgery went very well. We are happy and satisfied with the results.', rating: 5 },
  { name: 'Shrikant Mane', text: 'Very cordial and caring. Helped me choose the right vision number with patience.', rating: 5 },
  { name: 'Shweta Jain', text: 'One of the best clinics. Friendly and helpful doctor with accurate diagnosis. Highly recommended.', rating: 5 },
  { name: 'Nidhi Tiwari', text: 'Professional, thorough, and clear in explaining results. Friendly staff and excellent experience.', rating: 5 },
  { name: 'Krishan Singh Shekhawat', text: 'Very patient and calm with children. Great experience for my daughter’s eye issue.', rating: 5 },
  { name: 'Cosmic Dust', text: 'Excellent service. Dr. Aarti takes time to understand concerns and explains the treatment path clearly.', rating: 5 },
  { name: 'Esha Madarwar', text: 'Highly satisfying and detailed eye check-up. Very professional approach.', rating: 5 },
  { name: 'Dr. Anshul Agrawal', text: 'Retina issue post pregnancy was treated with care and continuous support. Thank you, ma’am.', rating: 5 },
  { name: 'Mahavir Bhatt', text: 'Humble and professional doctor with great hospitality and kind staff.', rating: 5 },
  { name: 'Sarvesh Bawane', text: 'Thorough examination and detailed explanation of the treatment plan. Highly recommended.', rating: 5 },
  { name: 'Prashant Jain', text: 'Superb doctor with excellent communication and compassion. Highly appreciated.', rating: 5 },
  { name: 'Rahul M.', text: 'Calm and composed surgeon who provided timely and proper treatment. Very thankful to her and the team.', rating: 5 },
  { name: 'Abhinav Wankhede', text: 'Thorough, kind, and experienced. Highly recommend for any eye-related problems.', rating: 5 },
  { name: 'Mayur Kashyap', text: 'Superb doctor—best ophthalmologist in Nagpur.', rating: 5 },
  { name: 'Romy Barik', text: 'The right place for all eye concerns. Meticulous treatment and highly recommended.', rating: 5 },
  { name: 'Mohini Meshram', text: 'Great ambiance and clear diagnosis with understandable explanations. Very sweet doctor.', rating: 5 },
  { name: 'Aanchal Bawa', text: 'Very nice clinic and staff. The doctor examined my relative patiently.', rating: 5 },
  { name: 'Shaurya Jaiswal', text: 'Excellent ophthalmologist—cooperative and helpful. Best experience so far.', rating: 5 },
  { name: 'Sakshi Ramteke', text: 'Most helpful, cooperative, and very intelligent. Brilliant surgery done successfully. Thank you so much, Dr. Aarti Jain.', rating: 5 },
  { name: 'Prerna H', text: 'Highly proficient in diagnosis and treatment. Had a very nice experience—highly recommended.', rating: 5 },
  { name: 'Sangwin Gawande', text: 'Great doctor with deep knowledge. All queries about eye health were answered. Totally recommend.', rating: 5 },
  { name: 'Pharmacy Officer', text: 'Very good experience.', rating: 5 },
  { name: 'Pramod Sinha', text: 'Neat and clean setup, new machines, and thorough checkup. I recommend to family and friends. Thank you, Dr. Jain.', rating: 5 },
  { name: 'Mayank Garg', text: 'Amazing doctor with the perfect balance of care and concern. Treated me really well—highly recommended.', rating: 5 },
  { name: 'Dr. Meenakshi Deb', text: 'Excellent professional skills, excellent setup, and good staff members.', rating: 5 },
  { name: 'Bhushan Mohite', text: 'Very good hospitality. Doctor is polite and clears doubts. Nice experience.', rating: 5 },
  { name: 'Dr. Rohit Rao', text: 'Fantastic service. Dr. Aarti is an expert in managing all retina diseases.', rating: 5 },
  { name: 'Ashray Jain', text: 'Amazing experience. Simple, gentle behavior; studies the patient and problem meticulously. Easy to interact and discuss.', rating: 5 },
  { name: 'Patel Bhavin Kumar', text: 'Excellent service. Will definitely recommend Dr. Aarti Jain.', rating: 5 },
  { name: 'Sachin Anjikar', text: 'All machines are good and the checkup was done properly.', rating: 5 },
  { name: 'Dr. Charu Chaudhary', text: 'Best ophthalmologist and retina specialist in Nagpur. Kind-hearted with great expertise.', rating: 5 },
  { name: 'Atul Kumbhare', text: 'Great eye exam, very knowledgeable, and great service.', rating: 5 },
  { name: 'Srashti Pradeep Soni', text: 'Good experience.', rating: 5 },
  { name: 'Praveen Ji', text: "Ma'am’s behavior is very nice.", rating: 5 },
  { name: 'Uttam Rabade', text: 'Excellent treatment and good support from the doctor and staff.', rating: 5 },
  { name: 'Nomaan Gagan', text: 'Very good hospitality and a great place for eye checkups.', rating: 5 },
  { name: 'Chandan Pongde', text: 'Great experience.', rating: 5 },
  { name: 'Vishal Thakare', text: 'Very nice experience. I recommend this doctor to others.', rating: 5 },
  { name: 'Nitesh Choudhary', text: 'Great service. Thanks for your time and effort. I am happy with the services.', rating: 5 },
  { name: 'Guruji NIFT', text: 'Great satisfaction and good treatment.', rating: 5 },
  { name: 'Vijay Pichore', text: 'Excellent job by Dr. Aarti ma’am.', rating: 5 },
  { name: 'Ashishkumar D.', text: 'Good doctor!', rating: 5 },
  { name: 'Netal Sarda', text: 'Very humble nature and great hospitality.', rating: 5 },
  { name: 'Mahesh Jain', text: 'Very good doctor.', rating: 5 },
  { name: 'Prachi Shirbhayye', text: 'Overall experience was good.', rating: 5 },
  { name: 'Shachi Saraf', text: 'It was a pleasant experience.', rating: 5 },
  { name: 'Shreya Chichghare', text: 'Best doctor.', rating: 5 },
  { name: 'Vandana Marotkar', text: 'Good doctor and hospital.', rating: 5 },
  { name: 'Podhi Mootai', text: 'Good.', rating: 5 },
  { name: 'Rahul S', text: 'Good experience.', rating: 5 },
  { name: 'Kamlesh Dipani', text: 'Very good treatment by Dr. Aarti Jain. One of the best surgeons in Nagpur. 15 months of experience with her—truly satisfied.', rating: 5 },
];

// Trim the last 30 reviews from display as requested
const displayReviews = reviews.slice(0, Math.max(0, reviews.length - 30));

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const reviewsPerView = 4;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(displayReviews.length / reviewsPerView));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(displayReviews.length / reviewsPerView)) % Math.ceil(displayReviews.length / reviewsPerView));
  };

  return (
    <section id="reviews" className="py-10 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Patients Say</h2>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Modern Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl">
            {/* Reviews Carousel */}
            <motion.div
              className="flex"
              ref={containerRef}
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {Array.from({ length: Math.ceil(displayReviews.length / reviewsPerView) }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayReviews.slice(pageIndex * reviewsPerView, (pageIndex + 1) * reviewsPerView).map((r, idx) => (
                      <motion.article
                        key={pageIndex * reviewsPerView + idx}
                        className="bg-card rounded-2xl p-6 shadow-card border border-border/60 text-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                      >
                        <div className="flex justify-center items-center gap-1 mb-4" aria-label={`${r.rating} out of 5 stars`}>
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                          ))}
                        </div>
                        <blockquote className="text-sm text-muted-foreground mb-4 italic leading-relaxed">
                          "{r.text}"
                        </blockquote>
                        <div className="font-semibold text-foreground text-base">{r.name}</div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Navigation Buttons - Modern Style */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={prevReview}
                className="rounded-full bg-background/80 backdrop-blur-sm border-2 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={nextReview}
                className="rounded-full bg-background/80 backdrop-blur-sm border-2 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Dot Indicators - Modern Style */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {Array.from({ length: Math.ceil(displayReviews.length / reviewsPerView) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 h-3 bg-primary' 
                    : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;


