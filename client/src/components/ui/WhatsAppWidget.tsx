import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/393505081212"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg text-white hover:bg-[#20bd5a] transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
}
