import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Em bận không học live thì sao?",
    answer:
      "Đừng lo! Tất cả các buổi học đều được ghi hình lại. Bạn có thể xem lại bất cứ lúc nào phù hợp với lịch trình của mình. Video được lưu trữ vĩnh viễn trong hệ thống học viên.",
  },
  {
    question: "Học 1 mình, chồng có thay đổi không?",
    answer:
      "Có! Đây là điều kỳ diệu của khóa học này. Khi bạn thay đổi năng lượng bên trong, cách bạn giao tiếp và phản ứng sẽ khác đi. Và điều này tự nhiên ảnh hưởng đến chồng và con bạn. Nhiều học viên phản hồi rằng chồng họ \"như đổi người\" sau khi họ hoàn thành khóa học.",
  },
  {
    question: "Có phù hợp với phụ nữ chưa kết hôn không?",
    answer:
      "Hoàn toàn phù hợp! Khóa học không chỉ về hôn nhân, mà còn về việc hiểu bản thân, chữa lành những tổn thương từ quá khứ, và xây dựng mối quan hệ lành mạnh với mọi người xung quanh – gia đình, bạn bè, đồng nghiệp, và đặc biệt là với chính mình.",
  },
  {
    question: "Các buổi học có được ghi hình không?",
    answer:
      "Có, tất cả các buổi học đều được ghi hình với chất lượng cao. Bạn sẽ nhận được link video sau mỗi buổi học và có thể xem lại không giới hạn số lần.",
  },
  {
    question: "Có hỗ trợ sau khóa học không?",
    answer:
      "Chắc chắn rồi! Sau khóa học, bạn sẽ được tham gia vào cộng đồng học viên để tiếp tục chia sẻ, học hỏi và nhận hỗ trợ từ cô Khánh và các học viên khác. Đây là một gia đình lớn đồng hành cùng bạn trên hành trình hạnh phúc.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-lavender-pale/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-lavender-light flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Câu hỏi thường gặp
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Bạn có thắc mắc?
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 shadow-soft border-none"
              >
                <AccordionTrigger className="text-left font-display text-lg font-medium text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
