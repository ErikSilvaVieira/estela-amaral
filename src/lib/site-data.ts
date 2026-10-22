import { BookOpen, HeartHandshake, MessageCircleHeart, ShieldCheck, Shirt, Store } from "@/lib/icons";
import type { BenefitItem, NavigationItem, TestimonialItem } from "@/types/site";

export const WHATSAPP_URL = "https://wa.me/5551993007777?text=Olá!%20Vim%20pelo%20site%20da%20Estela%20Amaral%20e%20gostaria%20de%20conhecer%20as%20peças.";
export const navigation: NavigationItem[] = [
	{ label: "Feminino", href: "#feminino" }, { label: "Masculino", href: "#masculino" },
	{ label: "Catálogo", href: "#catalogo" }, { label: "Nossa loja", href: "#nossa-loja" }, { label: "Contato", href: "#contato" },
];
export const benefits: BenefitItem[] = [
	{ icon: MessageCircleHeart, title: "Atendimento personalizado", short: "Atendimento" },
	{ icon: HeartHandshake, title: "Looks para todas as ocasiões", short: "Feminino" },
	{ icon: Shirt, title: "Estilo e conforto para eles", short: "Masculino" },
	{ icon: BookOpen, title: "Baixe nosso catálogo de coleções", short: "Catálogo" },
	{ icon: Store, title: "Conheça a Estela Amaral e nossa história", short: "Nossa loja" },
	{ icon: ShieldCheck, title: "Seus dados protegidos", short: "Compra segura" },
];
export const testimonials: TestimonialItem[] = [
	{ name: "Juliana S.", text: "Amei as peças da Estela Amaral! Qualidade impecável e tudo chegou com muito carinho." },
	{ name: "Patrícia L.", text: "As roupas são lindas, modernas e me fazem sentir ainda mais confiante. Super recomendo!" },
	{ name: "Camila R.", text: "Atendimento maravilhoso e peças de excelente qualidade. Sempre compro e indico!" },
];
