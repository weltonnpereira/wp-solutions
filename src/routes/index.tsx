import { createFileRoute } from "@tanstack/react-router";
import {
  Rocket,
  MonitorSmartphone,
  Cpu,
  Zap,
  Gauge,
  Smartphone,
  Code2,
  ArrowRight,
  MessageCircle,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import logoAsset from "@/assets/logotipo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WP Solutions | Landing Pages e Sistemas Web de Alta Conversão" },
      {
        name: "description",
        content:
          "Criamos landing pages, sistemas web e automações sob medida para pequenas e médias empresas venderem mais. Orçamento rápido pelo WhatsApp.",
      },
      { property: "og:title", content: "WP Solutions | Desenvolvimento Inteligente" },
      {
        property: "og:description",
        content:
          "Landing pages focadas em vendas, sistemas web em React e Node e automações inteligentes para escalar seu negócio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento.";

const services = [
  {
    icon: Rocket,
    title: "Landing Pages Focadas em Vendas",
    desc: "Design moderno e otimizado para transformar cliques em leads no seu WhatsApp.",
  },
  {
    icon: MonitorSmartphone,
    title: "Sistemas Web e SaaS",
    desc: "Soluções exclusivas em Node e React para automatizar a gestão do seu negócio.",
  },
  {
    icon: Cpu,
    title: "Automações Inteligentes",
    desc: "Integração de processos e extração de dados para você economizar tempo.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Entrega rápida",
    desc: "Projetos no ar em dias, não em meses. Sprints curtas e comunicação direta com quem desenvolve.",
  },
  {
    icon: Gauge,
    title: "Alta performance",
    desc: "Carregamento em milissegundos, notas altas no PageSpeed e SEO técnico desde o primeiro commit.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    desc: "Mais de 80% dos seus visitantes vêm do celular. Construímos pensando neles primeiro.",
  },
  {
    icon: Code2,
    title: "Stack moderna",
    desc: "React, Node e infraestrutura em nuvem: código limpo, seguro e pronto para escalar.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#servicos"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-4 focus:py-2"
      >
        Ir para o conteúdo
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:flex sm:justify-between">
          <a href="/" className="flex min-w-0 items-center gap-2.5">
            <img
              src={logoAsset.url}
              alt="WP Solutions"
              className="h-10 w-10 shrink-0 rounded-lg object-cover"
              width={40}
              height={40}
            />
            <span className="truncate font-display text-base font-bold tracking-tight sm:text-lg">
              WP Solutions
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
            {[
              ["Serviços", "#servicos"],
              ["Benefícios", "#beneficios"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="grid-backdrop relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
            Desenvolvimento Inteligente para PMEs
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            Transforme Visitantes em Clientes com{" "}
            <span className="text-gradient">Soluções Digitais</span> de Alta Conversão.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Criamos Landing Pages, Sistemas Web e Automações sob medida para pequenas e médias
            empresas escalarem suas vendas.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold sm:text-base"
            >
              Quero um Orçamento Rápido
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#servicos"
              className="btn-outline inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold sm:text-base"
            >
              Ver Nossos Serviços
            </a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Serviços</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Tecnologia sob medida para vender mais
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="glass-card rounded-2xl p-7">
              <span className="bg-brand inline-flex h-12 w-12 items-center justify-center rounded-xl">
                <Icon className="h-6 w-6 text-background" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="border-y border-border bg-secondary/25">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
                Por que a WP Solutions
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Velocidade, performance e código que dura.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Cada projeto nasce enxuto, rápido e preparado para crescer junto com a sua operação —
                sem templates genéricos e sem retrabalho.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass-card rounded-2xl p-6">
                  <Icon className="h-5 w-5 text-cyan" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="contato" className="mx-auto max-w-4xl px-5 py-24 text-center sm:py-28">
        <h2 className="text-3xl font-extrabold sm:text-5xl">
          Pronto para <span className="text-gradient">modernizar sua empresa?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
          Conte seu desafio em uma conversa rápida e receba um plano claro de execução.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow mt-10 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold sm:text-lg"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Falar com um Especialista no WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WP Solutions — Desenvolvimento Inteligente
          </p>
          <div className="flex items-center gap-4">
            {[
              [Instagram, "Instagram", "https://instagram.com"],
              [Linkedin, "LinkedIn", "https://linkedin.com"],
              [Github, "GitHub", "https://github.com"],
            ].map(([Icon, label, href]) => {
              const I = Icon as typeof Instagram;
              return (
                <a
                  key={label as string}
                  href={href as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label as string}
                  className="text-muted-foreground transition-colors hover:text-cyan"
                >
                  <I className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
