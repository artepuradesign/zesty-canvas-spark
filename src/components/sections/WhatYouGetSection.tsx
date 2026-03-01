import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, LayoutDashboard, Code2, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    icon: FileSearch,
    title: 'Consultas CPF/CNPJ',
    desc: 'Rápidas e completas',
    link: '/planos-publicos',
    gradient: 'from-violet-500 to-purple-600',
    bgGlow: 'bg-violet-500/10',
    iconBg: 'bg-violet-500/15',
    borderHover: 'hover:border-violet-400/50',
  },
  {
    icon: LayoutDashboard,
    title: 'Módulos empresariais',
    desc: 'Administre estoque, vendas, clientes',
    link: '/planos-publicos',
    gradient: 'from-blue-500 to-cyan-500',
    bgGlow: 'bg-blue-500/10',
    iconBg: 'bg-blue-500/15',
    borderHover: 'hover:border-blue-400/50',
  },
  {
    icon: Code2,
    title: 'API própria',
    desc: 'Integre no seu app',
    link: '/api',
    gradient: 'from-emerald-500 to-teal-500',
    bgGlow: 'bg-emerald-500/10',
    iconBg: 'bg-emerald-500/15',
    borderHover: 'hover:border-emerald-400/50',
  },
  {
    icon: Car,
    title: 'Veículos & Marketplace',
    desc: 'Em breve: placa, RENAVAM + anúncios',
    link: null,
    badge: 'Em breve',
    gradient: 'from-amber-500 to-orange-500',
    bgGlow: 'bg-amber-500/10',
    iconBg: 'bg-amber-500/15',
    borderHover: 'hover:border-amber-400/50',
  },
];

const WhatYouGetSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-background via-card/30 to-background border-y border-border/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Recursos
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            O que você ganha
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Tudo o que sua empresa precisa em uma só plataforma
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-xl ${card.borderHover} transition-all duration-300 cursor-pointer overflow-hidden`}
              onClick={() => card.link && navigate(card.link)}
            >
              {/* Background glow effect */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 ${card.bgGlow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {card.badge && (
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded-full border border-amber-500/20">
                  {card.badge}
                </span>
              )}

              <div className={`relative h-14 w-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <card.icon className={`h-7 w-7 text-foreground/80 relative z-10`} />
              </div>

              <h3 className="font-bold text-foreground text-lg mb-1.5 relative z-10">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 relative z-10">{card.desc}</p>

              {card.link && (
                <span className="inline-flex items-center text-xs font-semibold text-primary group-hover:gap-2 gap-1 transition-all relative z-10">
                  Saiba mais
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
