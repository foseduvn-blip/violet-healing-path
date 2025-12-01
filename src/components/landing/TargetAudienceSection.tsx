import { Heart, Sparkles, Users } from "lucide-react";
import tiredWomanImage from "@/assets/tired-woman.jpg";
import peacefulRestImage from "@/assets/peaceful-rest.jpg";
import happyFamilyImage from "@/assets/happy-family.jpg";

const audiences = [
  {
    icon: Heart,
    title: "Phụ nữ mệt mỏi trong hôn nhân",
    description: "Bạn đã cố gắng rất nhiều nhưng vẫn cảm thấy kiệt sức và cô đơn.",
    image: tiredWomanImage,
  },
  {
    icon: Sparkles,
    title: "Người muốn bình an – không còn suy nghĩ nhiều",
    description: "Bạn mong muốn tâm trí được nghỉ ngơi, không còn lo lắng triền miên.",
    image: peacefulRestImage,
  },
  {
    icon: Users,
    title: "Người muốn kết nối lại với chồng/con",
    description: "Bạn khao khát mối quan hệ ấm áp, thấu hiểu và yêu thương.",
    image: happyFamilyImage,
  },
];

const TargetAudienceSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Dành cho bạn
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Ai nên tham gia
            <span className="text-gradient block mt-2">khóa học này?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={audience.image}
                  alt={audience.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Icon */}
                <div className="absolute bottom-4 left-6">
                  <div className="w-14 h-14 rounded-2xl gradient-cta flex items-center justify-center shadow-glow">
                    <audience.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 pt-4">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 leading-snug">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
