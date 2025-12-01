import { Button } from "@/components/ui/button";
import { Users, Award, Video } from "lucide-react";
import heroImage from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Người phụ nữ thiền định trong ánh sáng tím nhẹ nhàng"
          className="w-full h-full object-cover object-top opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32 min-h-screen flex items-center">
        <div className="max-w-2xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender-light/80 border border-lavender/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-lavender-dark">Khóa học chữa lành tâm hồn</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Giải Mã Hạnh Phúc
            <span className="block text-gradient mt-2">Hành Trình Chuyển Hóa Trong 3 Buổi</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Bạn đã mệt mỏi với những đêm dài suy nghĩ? Khóa học này sẽ giúp bạn tìm lại bình an, 
            kết nối với bản thân và những người thương yêu.
          </p>

          {/* CTA Button */}
          <Button variant="hero" size="xl" className="mb-12">
            Đăng Ký Ngay – Chỉ 499K
          </Button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            <div className="flex items-center gap-3 opacity-0 animate-fade-up delay-200" style={{ animationFillMode: 'forwards' }}>
              <div className="w-12 h-12 rounded-full bg-lavender-light flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-foreground">30.000+</p>
                <p className="text-sm text-muted-foreground">học viên</p>
              </div>
            </div>

            <div className="flex items-center gap-3 opacity-0 animate-fade-up delay-300" style={{ animationFillMode: 'forwards' }}>
              <div className="w-12 h-12 rounded-full bg-lavender-light flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-foreground">ThS. Vũ Kim Khánh</p>
                <p className="text-sm text-muted-foreground">Giảng viên</p>
              </div>
            </div>

            <div className="flex items-center gap-3 opacity-0 animate-fade-up delay-400" style={{ animationFillMode: 'forwards' }}>
              <div className="w-12 h-12 rounded-full bg-lavender-light flex items-center justify-center">
                <Video className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-foreground">Học qua Zoom</p>
                <p className="text-sm text-muted-foreground">Linh hoạt</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
