import { Users, Heart, Trophy, Star } from "lucide-react";
import instructorImage from "@/assets/instructor.jpg";
import tiktokProfile from "@/assets/tiktok-profile.png";
import facebookProfile from "@/assets/facebook-profile.png";

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
            <p className="text-xl text-primary font-medium mb-4">
              Founder The Human Tree
            </p>

            {/* Social Links with Images */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a 
                href="https://tiktok.com/@vukimkhanh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 pr-4 rounded-xl bg-card shadow-soft hover:shadow-elevated transition-all group"
              >
                <img 
                  src={tiktokProfile} 
                  alt="TikTok @vukimkhanh" 
                  className="w-12 h-12 rounded-lg object-cover object-top"
                />
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">256K</span>
                </div>
              </a>
              <a 
                href="https://facebook.com/vukimkhanhofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 pr-4 rounded-xl bg-card shadow-soft hover:shadow-elevated transition-all group"
              >
                <img 
                  src={facebookProfile} 
                  alt="Facebook Vũ Kim Khánh" 
                  className="w-12 h-12 rounded-lg object-cover object-top"
                />
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">162K</span>
                </div>
              </a>
            </div>

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
