import { Circle } from "lucide-react";
import womanWindowImage from "@/assets/woman-window.jpg";

const painPoints = [
  "Mỗi tối nằm xuống là trăm dòng suy nghĩ không ngừng.",
  "Vợ chồng xa cách, im lặng nhiều hơn nói.",
  "Con nhạy cảm, dễ buồn, dễ tổn thương.",
  "Bạn kiệt sức, nhưng vẫn phải gồng lên mỗi ngày.",
  "Thấy mình vô hình, cô đơn trong chính nhà mình.",
  "Chỉ mong được bình yên nhưng không biết bắt đầu từ đâu.",
];

const PainPointsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={womanWindowImage}
                alt="Người phụ nữ nhìn ra cửa sổ với ánh sáng tím pastel"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavender-dark/20 via-transparent to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lavender-light rounded-full blur-3xl opacity-60" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Nỗi đau thầm lặng
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8 leading-tight">
              Bạn có đang trong
              <span className="text-gradient block">tình trạng này?</span>
            </h2>

            <div className="space-y-5">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-lavender-pale/50 hover:bg-lavender-light/50 transition-all duration-300 group"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <Circle className="w-2 h-2 text-primary fill-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
