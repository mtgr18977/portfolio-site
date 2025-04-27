"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Gamepad2, FileText, Code, Pencil, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import PortfolioItem from "@/components/portfolio-item"
import DocumentationItem from "@/components/documentation-item"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6" />
            <span className="text-lg font-bold">Paulo Guilherme Pilotti Duarte</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              {t("nav.about")}
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4">
              {t("nav.experience")}
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              {t("nav.skills")}
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:underline underline-offset-4">
              {t("nav.portfolio")}
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              {t("nav.contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button asChild className="hidden md:inline-flex">
              <Link href="#contact">{t("button.contact")}</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    {t("hero.title")}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("hero.subtitle")}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#portfolio">{t("hero.cta.work")}</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#contact">{t("hero.cta.contact")}</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Link
                    href="https://www.linkedin.com/in/paulogpd/"
                    className="hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://github.com/mtgr18977"
                    className="hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://paulopilotti.itch.io/"
                    className="hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Gamepad2 className="h-5 w-5" />
                    <span className="sr-only">itch.io</span>
                  </Link>
                  <Link href="mailto:paulo@paulogpd.com.br" className="hover:text-foreground">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                  <Image
                    src="/images/profile.png"
                    alt="Paulo Guilherme Pilotti Duarte"
                    fill
                    className="object-cover rounded-full border-4 border-background"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t("about.badge")}</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t("about.title")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("about.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{t("about.documentation.title")}</h3>
                      <p className="text-muted-foreground">{t("about.documentation.description")}</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{t("about.strategy.title")}</h3>
                      <p className="text-muted-foreground">{t("about.strategy.description")}</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{t("about.translation.title")}</h3>
                      <p className="text-muted-foreground">{t("about.translation.description")}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col space-y-4 bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold">{t("about.goals.title")}</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>{t("about.goals.item1")}</li>
                  <li>{t("about.goals.item2")}</li>
                  <li>{t("about.goals.item3")}</li>
                  <li>{t("about.goals.item4")}</li>
                  <li>{t("about.goals.item5")}</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    +55 51 9 9958 7120
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">{t("experience.badge")}</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t("experience.title")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("experience.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl space-y-6 py-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold">Technical Writer @ senhasegura</h3>
                      <p className="text-sm text-muted-foreground">Jun/2023 - Presente</p>
                    </div>
                    <Badge className="w-fit">{t("experience.current")}</Badge>
                  </div>
                  <p className="mt-4">
                    Documentação de API, PAM (Privileged Access Management), Dispositivos, DevOps e Cibersegurança.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline">API</Badge>
                    <Badge variant="outline">PAM</Badge>
                    <Badge variant="outline">DevOps</Badge>
                    <Badge variant="outline">Cibersegurança</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div>
                    <h3 className="text-xl font-bold">Technical Writer @ Azion Technologies</h3>
                    <p className="text-sm text-muted-foreground">Jul/2022 - Mai/2023</p>
                  </div>
                  <p className="mt-4">Documentação de API, edge e desenvolvimento web.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline">API</Badge>
                    <Badge variant="outline">Edge Computing</Badge>
                    <Badge variant="outline">Web Development</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div>
                    <h3 className="text-xl font-bold">Technical Writer and Translator (Autônomo)</h3>
                    <p className="text-sm text-muted-foreground">2011 - 2022</p>
                  </div>
                  <p className="mt-4">Serviços de escrita técnica e tradução para diversos clientes e projetos.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline">Tradução</Badge>
                    <Badge variant="outline">Localização</Badge>
                    <Badge variant="outline">Documentação</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div>
                    <h3 className="text-xl font-bold">Pesquisador NLP @ Termisul/UFRGS</h3>
                    <p className="text-sm text-muted-foreground">Mar/2011 - Nov/2014</p>
                  </div>
                  <p className="mt-4">Pesquisa em processamento de linguagem natural e linguística computacional.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline">NLP</Badge>
                    <Badge variant="outline">Pesquisa</Badge>
                    <Badge variant="outline">Linguística</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t("education.badge")}</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t("education.title")}</h2>
              </div>
            </div>
            <div className="mx-auto max-w-5xl space-y-6 py-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Bacharelado em Análise e Desenvolvimento de Sistemas</h3>
                  <p className="text-sm text-muted-foreground">Cruzeiro do Sul | 2024 - 2026 (Previsto)</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Bacharelado em Letras - Inglês</h3>
                  <p className="text-sm text-muted-foreground">
                    Universidade Federal do Rio Grande do Sul (UFRGS) | 2011 - 2016
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">{t("skills.badge")}</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t("skills.title")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("skills.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Pencil className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{t("skills.writing.title")}</h3>
                  </div>
                  <div className="mt-4 grid gap-2">
                    <Badge className="w-fit">Documentação Técnica</Badge>
                    <Badge className="w-fit">UX Writing</Badge>
                    <Badge className="w-fit">Documentação de API</Badge>
                    <Badge className="w-fit">Guias de Estilo</Badge>
                    <Badge className="w-fit">Estratégia de Conteúdo</Badge>
                    <Badge className="w-fit">Arquitetura de Informação</Badge>
                    <Badge className="w-fit">Tradução (EN-PT)</Badge>
                    <Badge className="w-fit">Localização</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{t("skills.technical.title")}</h3>
                  </div>
                  <div className="mt-4 grid gap-2">
                    <Badge className="w-fit">JavaScript</Badge>
                    <Badge className="w-fit">React JS</Badge>
                    <Badge className="w-fit">NextJS</Badge>
                    <Badge className="w-fit">Python (NLP)</Badge>
                    <Badge className="w-fit">PHP</Badge>
                    <Badge className="w-fit">MySQL</Badge>
                    <Badge className="w-fit">MS SQL</Badge>
                    <Badge className="w-fit">Git / GitHub</Badge>
                    <Badge className="w-fit">UML</Badge>
                    <Badge className="w-fit">Unity3D</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{t("skills.tools.title")}</h3>
                  </div>
                  <div className="mt-4 grid gap-2">
                    <Badge className="w-fit">Jira</Badge>
                    <Badge className="w-fit">Azure DevOps</Badge>
                    <Badge className="w-fit">VSCode</Badge>
                    <Badge className="w-fit">Docs as Code</Badge>
                    <Badge className="w-fit">Markdown</Badge>
                    <Badge className="w-fit">Scrum</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t("portfolio.badge")}</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t("portfolio.title")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("portfolio.description")}
                </p>
              </div>
            </div>
            <Tabs defaultValue="all" className="mt-12">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">{t("portfolio.tab.all")}</TabsTrigger>
                  <TabsTrigger value="documentation">{t("portfolio.tab.documentation")}</TabsTrigger>
                  <TabsTrigger value="projects">{t("portfolio.tab.projects")}</TabsTrigger>
                  <TabsTrigger value="websites">{t("portfolio.tab.websites")}</TabsTrigger>
                  <TabsTrigger value="games">{t("portfolio.tab.games")}</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <PortfolioItem
                    title="Documentação @ senhasegura"
                    description="Contribuições para a documentação oficial de PAM Core, DevOps Secret Manager e Main Settings."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["PAM", "DevOps", "Documentação Técnica"]}
                    links={[
                      { url: "https://docs.senhasegura.io/docs/pt/pam-core", label: "PAM Core (PT)" },
                      {
                        url: "https://docs.senhasegura.io/docs/pt/devops-secret-manager",
                        label: "DevOps Secret Manager (PT)",
                      },
                      { url: "https://docs.senhasegura.io/docs/en/main-settings", label: "Main Settings (EN)" },
                    ]}
                  />
                  <PortfolioItem
                    title="Leiturabilidade"
                    description="Ferramenta para análise de legibilidade de textos em português."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Python", "NLP", "Ferramenta"]}
                    links={[{ url: "https://github.com/mtgr18977/leiturabilidade", label: "GitHub" }]}
                  />
                  <PortfolioItem
                    title="Docs-to-Doc"
                    description="Ferramenta de migração para markdown."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Ferramenta", "Markdown", "Migração"]}
                    links={[{ url: "https://github.com/mtgr18977/Docs-to-Doc", label: "GitHub" }]}
                  />
                  <PortfolioItem
                    title="Dashboard Brasileirão"
                    description="Análise de dados do campeonato brasileiro de futebol."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Web", "Análise de Dados", "JavaScript"]}
                    links={[{ url: "https://paulogpd.com.br/brasileirao/", label: "Ver Site" }]}
                  />
                  <PortfolioItem
                    title="Buscador de Trabalhos Remotos"
                    description="Ferramenta para buscar oportunidades de trabalho remoto."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Web", "JavaScript", "Ferramenta"]}
                    links={[{ url: "https://paulogpd.com.br/jobs/", label: "Ver Site" }]}
                  />
                  <PortfolioItem
                    title="Jogos"
                    description="Jogos desenvolvidos e publicados na plataforma itch.io."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Unity3D", "Jogos", "Desenvolvimento"]}
                    links={[{ url: "https://paulopilotti.itch.io/", label: "itch.io" }]}
                  />
                </div>
              </TabsContent>
              <TabsContent value="documentation" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <PortfolioItem
                    title="Documentação @ senhasegura"
                    description="Contribuições para a documentação oficial de PAM Core, DevOps Secret Manager e Main Settings."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["PAM", "DevOps", "Documentação Técnica"]}
                    links={[
                      { url: "https://docs.senhasegura.io/docs/pt/pam-core", label: "PAM Core (PT)" },
                      {
                        url: "https://docs.senhasegura.io/docs/pt/devops-secret-manager",
                        label: "DevOps Secret Manager (PT)",
                      },
                      { url: "https://docs.senhasegura.io/docs/en/main-settings", label: "Main Settings (EN)" },
                    ]}
                  />
                  <DocumentationItem
                    title="Manage Notifications"
                    description="Guia sobre como gerenciar notificações no senhasegura."
                    url="http://docs.senhasegura.io/docs/en/notification-how-to-manage-notifications"
                  />
                  <DocumentationItem
                    title="Manage Master Key"
                    description="Documentação sobre gerenciamento de chave mestra."
                    url="https://docs.senhasegura.io/docs/how-to-manage-the-master-key"
                  />
                  <DocumentationItem
                    title="Open Backup Files"
                    description="Guia sobre como abrir arquivos de backup."
                    url="https://docs.senhasegura.io/docs/how-to-open-backup-files"
                  />
                  <DocumentationItem
                    title="Change Default Passwords (Orbit CLI)"
                    description="Documentação sobre alteração de senhas padrão via CLI."
                    url="https://docs.senhasegura.io/docs/orbit-cli-how-to-change-default-passwords"
                  />
                  <DocumentationItem
                    title="Manage Maintenance Mode"
                    description="Guia sobre gerenciamento do modo de manutenção."
                    url="https://docs.senhasegura.io/docs/how-to-manage-maintenance-mode"
                  />
                </div>
              </TabsContent>
              <TabsContent value="projects" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <PortfolioItem
                    title="Leiturabilidade"
                    description="Ferramenta para análise de legibilidade de textos em português."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Python", "NLP", "Ferramenta"]}
                    links={[{ url: "https://github.com/mtgr18977/leiturabilidade", label: "GitHub" }]}
                  />
                  <PortfolioItem
                    title="Docs-to-Doc"
                    description="Ferramenta de migração para markdown."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Ferramenta", "Markdown", "Migração"]}
                    links={[{ url: "https://github.com/mtgr18977/Docs-to-Doc", label: "GitHub" }]}
                  />
                  <PortfolioItem
                    title="FerramentasSimplesWeb"
                    description="Coleção de ferramentas web."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Web", "Ferramentas", "JavaScript"]}
                    links={[{ url: "https://github.com/mtgr18977/FerramentasSimplesWeb", label: "GitHub" }]}
                  />
                  <PortfolioItem
                    title="Verbalize"
                    description="Editor e analisador de leiturabilidade em pt-BR."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["NLP", "Editor", "Análise"]}
                    links={[{ url: "https://github.com/mtgr18977/Verbalize", label: "GitHub" }]}
                  />
                  <PortfolioItem
                    title="Blog App"
                    description="Aplicação de publicação de blogs, feita em Javascript."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["JavaScript", "Web", "Blog"]}
                    links={[{ url: "https://github.com/mtgr18977/blog-app", label: "GitHub" }]}
                  />
                </div>
              </TabsContent>
              <TabsContent value="websites" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <PortfolioItem
                    title="Dashboard Brasileirão"
                    description="Análise de dados do campeonato brasileiro de futebol."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Web", "Análise de Dados", "JavaScript"]}
                    links={[{ url: "https://paulogpd.com.br/brasileirao/", label: "Ver Site" }]}
                  />
                  <PortfolioItem
                    title="Buscador de Trabalhos Remotos"
                    description="Ferramenta para buscar oportunidades de trabalho remoto."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Web", "JavaScript", "Ferramenta"]}
                    links={[{ url: "https://paulogpd.com.br/jobs/", label: "Ver Site" }]}
                  />
                  <PortfolioItem
                    title="Jogos HTML/JS"
                    description="Coleção de jogos desenvolvidos em HTML e JavaScript."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Web", "Jogos", "JavaScript"]}
                    links={[{ url: "https://paulogpd.com.br/jogos/", label: "Ver Site" }]}
                  />
                  <PortfolioItem
                    title="Pensamentos Soltos"
                    description="Blog com pensamentos e reflexões."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Web", "Blog", "Pessoal"]}
                    links={[{ url: "https://paulogpd.com.br/pensamentos/", label: "Ver Site" }]}
                  />
                  <PortfolioItem
                    title="Blog Pessoal"
                    description="Blog com artigos e reflexões pessoais."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Web", "Blog", "Pessoal"]}
                    links={[{ url: "https://ivory-goldfish.pikapod.net/", label: "Ver Site" }]}
                  />
                </div>
              </TabsContent>
              <TabsContent value="games" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <PortfolioItem
                    title="Jogos (itch.io)"
                    description="Jogos desenvolvidos e publicados na plataforma itch.io."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Unity3D", "Jogos", "Desenvolvimento"]}
                    links={[{ url: "https://paulopilotti.itch.io/", label: "Ver no itch.io" }]}
                  />
                  <PortfolioItem
                    title="Jogos HTML/JS"
                    description="Coleção de jogos desenvolvidos em HTML e JavaScript."
                    image="/placeholder.svg?height=200&width=300"
                    tags={["Web", "Jogos", "JavaScript"]}
                    links={[{ url: "https://paulogpd.com.br/jogos/", label: "Ver Site" }]}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">{t("services.badge")}</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t("services.title")}</h2>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Card className="bg-teal-50 border-teal-200">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-semibold text-teal-800">{t("services.main.title")}</h3>
                    <p className="text-teal-700">{t("services.main.description")}</p>
                    <h4 className="font-semibold text-teal-800 mt-2">{t("services.list.title")}</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-teal-700">
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {t("services.list.item1")}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {t("services.list.item2")}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {t("services.list.item3")}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {t("services.list.item4")}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {t("services.list.item5")}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {t("services.list.item6")}
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {t("services.list.item7")}
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t("contact.badge")}</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t("contact.title")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("contact.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{t("contact.email")}</h3>
                    <p className="text-muted-foreground">paulo@paulogpd.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">LinkedIn</h3>
                    <p className="text-muted-foreground">linkedin.com/in/paulogpd</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">GitHub</h3>
                    <p className="text-muted-foreground">github.com/mtgr18977</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Gamepad2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">itch.io</h3>
                    <p className="text-muted-foreground">paulopilotti.itch.io</p>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Paulo Guilherme Pilotti Duarte. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/paulogpd/"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/mtgr18977"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://paulopilotti.itch.io/"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Gamepad2 className="h-5 w-5" />
              <span className="sr-only">itch.io</span>
            </Link>
            <Link href="mailto:paulo@paulogpd.com.br" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
