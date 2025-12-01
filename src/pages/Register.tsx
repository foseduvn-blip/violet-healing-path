import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    problem: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.problem.trim()) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    toast.success("Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm.");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-card rounded-3xl p-8 shadow-elevated text-center animate-scale-in">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Đăng Ký Thành Công!
          </h2>
          <p className="text-muted-foreground mb-8">
            Cảm ơn bạn đã đăng ký. Đội ngũ tư vấn sẽ liên hệ với bạn trong thời gian sớm nhất.
          </p>
          <Link to="/">
            <Button variant="hero" size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay về trang chủ
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero py-12 px-4">
      <div className="container mx-auto max-w-lg">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại</span>
        </Link>

        {/* Form Card */}
        <div className="bg-card rounded-3xl p-8 shadow-elevated animate-fade-up">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-semibold text-foreground mb-3">
              Đăng Ký Tư Vấn
            </h1>
            <p className="text-muted-foreground">
              Điền thông tin để được tư vấn miễn phí về khóa học "Giải Mã Hạnh Phúc"
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground font-medium">
                Họ và tên <span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Nhập họ và tên của bạn"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="h-12 rounded-xl border-lavender/30 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-medium">
                Số điện thoại <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Nhập số điện thoại tư vấn"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 rounded-xl border-lavender/30 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="problem" className="text-foreground font-medium">
                Vấn đề bạn đang gặp phải <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="problem"
                placeholder="Chia sẻ vấn đề bạn muốn được tư vấn..."
                value={formData.problem}
                onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                className="min-h-[120px] rounded-xl border-lavender/30 focus:border-primary resize-none"
              />
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="xl" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                "Đang gửi..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Gửi Đăng Ký
                </>
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Thông tin của bạn được bảo mật tuyệt đối
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
