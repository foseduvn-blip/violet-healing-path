import { Button } from "@/components/ui/button";
import { Check, Clock, Video, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import paymentQR from "@/assets/payment-qr.jpg";

const features = [
  "3 buổi học trực tiếp qua Zoom",
  "Mỗi buổi 2 giờ – tổng 6 giờ",
  "Tài liệu học tập đầy đủ",
  "Hỗ trợ sau khóa học",
  "Ghi hình để xem lại",
];

const PricingSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Đầu tư cho bản thân
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Thông tin
            <span className="text-gradient block mt-2">học phí</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Pricing Card */}
          <div className="relative bg-card rounded-3xl p-8 lg:p-12 shadow-elevated border border-lavender/20 overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-muted-foreground mb-2">Học phí trọn khóa</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-display text-5xl lg:text-6xl font-bold text-gradient">
                    499.000
                  </span>
                  <span className="text-2xl text-muted-foreground">đ</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Một lần thanh toán, học trọn đời
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-lavender-light flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Course Info */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-lavender-pale/50">
                  <Clock className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-muted-foreground">Thời lượng</p>
                    <p className="font-semibold text-foreground">3 buổi × 2 giờ</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-lavender-pale/50">
                  <Video className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-muted-foreground">Hình thức</p>
                    <p className="font-semibold text-foreground">Online - Zoom</p>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-lavender-pale/50 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span className="font-semibold text-foreground">Thông tin thanh toán</span>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  {/* QR Code */}
                  <div className="flex-shrink-0">
                    <img 
                      src={paymentQR} 
                      alt="Mã QR thanh toán ACB" 
                      className="w-48 h-auto rounded-xl shadow-soft"
                    />
                  </div>
                  {/* Bank Info */}
                  <div className="space-y-2 text-muted-foreground text-center md:text-left">
                    <p>Ngân hàng: <span className="text-foreground font-medium">ACB</span></p>
                    <p>Số tài khoản: <span className="text-foreground font-medium">35263888</span></p>
                    <p>Chủ tài khoản: <span className="text-foreground font-medium">Vũ Kim Khánh</span></p>
                    <p className="text-sm italic pt-2">Quét mã QR để chuyển khoản nhanh</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link to="/dang-ky">
                <Button variant="hero" size="xl" className="w-full">
                  👉 Đăng Ký Ngay – Số Lượng Giới Hạn
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
