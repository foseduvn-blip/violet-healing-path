import healingImage from "@/assets/healing-meditation.jpg";

const WhatIsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-lavender-pale/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Về khóa học
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8 leading-tight">
            Giải Mã Hạnh Phúc
            <span className="text-gradient"> là gì?</span>
          </h2>

          {/* Featured Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-card mb-12 max-w-2xl mx-auto">
            <img
              src={healingImage}
              alt="Hoa lavender tím trong ánh sáng ấm áp - biểu tượng chữa lành"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              <strong className="text-foreground font-display">Giải Mã Hạnh Phúc</strong> là hành trình{" "}
              <span className="text-primary font-semibold">3 buổi – 6 giờ</span> giúp phụ nữ hiểu chính mình, 
              tháo gỡ nỗi đau, chữa lành cảm xúc, kết nối lại với chồng – con – bản thân.
            </p>
            <p>
              Không phải lý thuyết khô khan, đây là hành trình{" "}
              <em className="text-foreground">nhận thức – quan sát – chuyển hóa</em>. 
              Mỗi bài học được thiết kế để bạn áp dụng ngay vào cuộc sống.
            </p>
            <p className="font-display text-xl text-foreground italic border-l-4 border-primary pl-6 text-left">
              "Khi bạn thay đổi năng lượng bên trong, cả mối quan hệ sẽ thay đổi theo."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
