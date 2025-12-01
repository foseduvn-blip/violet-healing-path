import { Button } from "@/components/ui/button";
import closingBgImage from "@/assets/closing-bg.jpg";

const ClosingSection = () => {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={closingBgImage}
          alt="Hoa lavender trong ánh sáng ấm áp"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lavender-dark/90 via-lavender-dark/70 to-lavender-dark/90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-foreground leading-relaxed mb-8 italic">
            "Phụ nữ không cần phải hoàn hảo để được yêu.
            <span className="block mt-4">
              Chỉ cần hiểu chính mình – và sống đúng với bản chất yêu thương."
            </span>
          </blockquote>

          <p className="text-primary-foreground/80 text-lg mb-10">
            Hành trình hạnh phúc bắt đầu từ việc yêu thương chính bạn.
          </p>

          <a href="https://forms.gle/7knyFJkiygwicwzz8" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="default" 
              size="xl" 
              className="bg-card text-lavender-dark hover:bg-card/90 font-semibold shadow-elevated hover:scale-105 transform transition-all"
            >
              👉 Tôi Sẵn Sàng Thay Đổi – Đăng Ký Ngay
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
