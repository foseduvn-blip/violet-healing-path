import { Users, Heart, Trophy, Star } from "lucide-react";
import instructorImage from "@/assets/instructor.jpg";

const stats = [
  { icon: Users, value: "400.000+", label: "Follower" },
  { icon: Heart, value: "30.000+", label: "Học viên" },
  { icon: Trophy, value: "10+", label: "Năm kinh nghiệm" },
];

const InstructorSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-lavender-pale/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={instructorImage}
                alt="ThS. Vũ Kim Khánh - Founder The Human Tree"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card rounded-2xl p-4 shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">Founder</p>
                  <p className="text-sm text-muted-foreground">The Human Tree</p>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Content Column */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Giảng viên
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
              ThS. Vũ Kim Khánh
            </h2>
            <p className="text-xl text-primary font-medium mb-6">
              Founder The Human Tree
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Người đã đồng hành cùng hàng chục ngàn phụ nữ Việt Nam trên hành trình 
              chữa lành và tìm lại hạnh phúc gia đình. Với hơn 10 năm kinh nghiệm trong 
              lĩnh vực tâm lý và phát triển bản thân, cô Khánh mang đến phương pháp 
              giảng dạy thực tiễn, đầy cảm hứng.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-card shadow-soft"
                >
                  <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <p className="font-display text-2xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
