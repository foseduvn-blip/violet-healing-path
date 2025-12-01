import { Check } from "lucide-react";
import motherChildImage from "@/assets/mother-child.jpg";
import coupleLoveImage from "@/assets/couple-love.jpg";
import happyFamilyImage from "@/assets/happy-family.jpg";
import heroWomanImage from "@/assets/hero-woman.jpg";

const benefits = [
  "Ngủ sâu – tâm trí nhẹ nhàng hơn mỗi ngày.",
  "Bớt cãi vã – nhiều kết nối yêu thương.",
  "Chồng dịu lại – lắng nghe nhiều hơn.",
  "Con bình an – ít khóc – ít giận dữ.",
  "Năng lượng tích cực – thu hút cơ hội tốt đẹp.",
  "Bạn trở thành phiên bản an yên – tự tin – được yêu.",
];

const galleryImages = [
  { src: motherChildImage, alt: "Mẹ và con cười hạnh phúc" },
  { src: coupleLoveImage, alt: "Vợ chồng nhìn nhau dịu dàng" },
  { src: heroWomanImage, alt: "Phụ nữ thiền trong ánh sáng tím" },
  { src: happyFamilyImage, alt: "Gia đình hạnh phúc bên nhau" },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-lavender-pale/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Kết quả sau khóa học
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Cuộc sống của bạn
            <span className="text-gradient block mt-2">sẽ khác đi</span>
          </h2>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-soft group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
                </div>
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
