import { Star } from "lucide-react";
import womanBreakthroughImage from "@/assets/woman-breakthrough.jpg";
import womanSmileImage from "@/assets/woman-smile.jpg";
import womanNewPathImage from "@/assets/woman-new-path.jpg";

const sessions = [
  {
    number: "01",
    title: "Phá vỡ vòng lặp bế tắc",
    image: womanBreakthroughImage,
    description:
      "Hiểu gốc rễ nỗi khổ, nhận diện bản ngã, phá vỡ vòng lặp cảm xúc tiêu cực đã đeo bám bạn suốt bấy lâu.",
  },
  {
    number: "02",
    title: "Kết nối lại giá trị & niềm vui sống",
    image: womanSmileImage,
    description:
      "Quay về giá trị thật của bản thân, học cách giao tiếp yêu thương, chữa lành năng lượng bên trong.",
  },
  {
    number: "03",
    title: "Tìm ra con đường hạnh phúc",
    image: womanNewPathImage,
    description:
      "Xây dựng bản đồ sống an yên, phản ứng trưởng thành với mọi tình huống, kết nối bền vững với người thân.",
  },
];

const SessionsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Nội dung khóa học
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            3 Buổi Chuyển Hóa
            <span className="text-gradient block mt-2">Cuộc Sống Của Bạn</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={session.image}
                  alt={session.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                
                {/* Session Number */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-xs font-semibold text-primary bg-lavender-light/90 px-3 py-1 rounded-full">
                    Buổi {session.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4 leading-snug">
                  {session.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {session.description}
                </p>
              </div>

              {/* Decorative bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;
