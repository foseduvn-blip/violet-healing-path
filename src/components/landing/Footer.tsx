import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Giải Mã Hạnh Phúc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by The Human Tree</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
