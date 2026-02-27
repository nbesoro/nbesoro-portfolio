# Terminal Hacker Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transformer le portfolio CV nbesoro en esthetique "Terminal Hacker" (neon vert/cyan, typo monospace, effets glow) tout en conservant l'ancienne version sur `/old`.

**Architecture:** On garde la structure Next.js 13 App Router existante. Les anciens composants sont copies dans `src/components/sections-old/` et les anciennes pages deviennent des routes sous `src/app/old/`. Les nouveaux styles passent par Tailwind config (nouvelles couleurs) + globals.css (textures, animations). Les composants existants sont modifies sur place.

**Tech Stack:** Next.js 13.5.4, React 18, Tailwind CSS 3, Framer Motion 10, Google Fonts (JetBrains Mono, Outfit)

---

### Task 1: Sauvegarder l'ancienne version sous /old

**Files:**
- Create: `src/app/old/page.tsx`
- Create: `src/app/old/layout.tsx`
- Create: `src/app/old/contact/page.tsx`
- Create: `src/app/old/project/page.tsx`
- Create: `src/app/old/project/details/[id]/page.tsx`
- Create: `src/components/sections-old/` (copie complete de `src/components/sections/`)
- Create: `src/components/layouts-old/` (copie de Navbar.tsx et Footer.tsx)

**Step 1: Copier les composants actuels**

```bash
cp -r src/components/sections src/components/sections-old
cp -r src/components/layouts src/components/layouts-old
```

**Step 2: Creer le layout /old**

`src/app/old/layout.tsx` :
```tsx
import Footer from '@/components/layouts-old/Footer'

export default function OldLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className='overflow-hidden'>{children}</main>
      <Footer />
    </div>
  )
}
```

**Step 3: Creer les pages /old**

`src/app/old/page.tsx` — copie de `src/app/page.tsx` mais avec imports depuis `sections-old/` et `layouts-old/`

`src/app/old/contact/page.tsx` — copie de `src/app/contact/page.tsx` avec imports old

`src/app/old/project/page.tsx` — copie de `src/app/project/page.tsx` avec imports old

`src/app/old/project/details/[id]/page.tsx` — copie de `src/app/project/details/[id]/page.tsx` avec imports old

**Step 4: Verifier**

Run: `npm run dev` puis visiter `http://localhost:3000/old`
Expected: L'ancienne version s'affiche identiquement

**Step 5: Commit**

```bash
git add src/app/old src/components/sections-old src/components/layouts-old
git commit -m "feat: save old version under /old route"
```

---

### Task 2: Mettre a jour Tailwind config avec la nouvelle palette

**Files:**
- Modify: `tailwind.config.ts`

**Step 1: Remplacer la config des couleurs**

Dans `tailwind.config.ts`, remplacer le bloc `colors` dans `theme.extend` par :

```ts
colors: {
  "white": "#ffffff",
  "terminal": {
    "bg": "#0a0a0f",
    "elevated": "#12121a",
    "green": "#00ff9d",
    "cyan": "#00b8ff",
    "border": "#1e1e2e",
    "text": "#e0e0e0",
    "muted": "#6b7280",
  },
  "dark": {
    "50": "#FDFDFD",
    "100": "#F3F3F3",
    "200": "#E7E7E7",
    "300": "#BABABA",
    "400": "#757575",
    "500": "#191919",
    "600": "#151212",
    "700": "#120C0D",
    "800": "#0E0709",
    "900": "#0C0407",
  },
  "blue": {
    "50": "#E5F3FC",
    "100": "#D1E4F7",
    "200": "#A6C8F0",
    "300": "#719BD3",
    "400": "#466CA7",
    "500": "#19376D",
    "600": "#122A5D",
    "700": "#0C1F4E",
    "800": "#07153F",
    "900": "#040E34",
  },
},
```

**Step 2: Verifier que le build passe**

Run: `npm run build`
Expected: Build success sans erreur

**Step 3: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat: add terminal hacker color palette to tailwind config"
```

---

### Task 3: Mettre a jour les fonts (JetBrains Mono + Outfit)

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/components/ui/typographies/Typography.tsx`

**Step 1: Remplacer Onest par Outfit + JetBrains Mono dans layout.tsx**

Dans `src/app/layout.tsx`, remplacer :
```tsx
import { Onest } from 'next/font/google'

const onest = Onest({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})
```

Par :
```tsx
import { Outfit, JetBrains_Mono } from 'next/font/google'

const outfit = Outfit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})
```

Et remplacer `className={onest.className}` par `className={`${outfit.variable} ${jetbrainsMono.variable} ${outfit.className}`}`

**Step 2: Mettre a jour Typography.tsx**

Dans `src/components/ui/typographies/Typography.tsx`, remplacer l'import Manrope par :
```tsx
import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});
```

Remplacer `TypographyFont = ['manrope']` par `TypographyFont = ['mono']`
Remplacer `font === 'manrope' && manrope.className` par `font === 'mono' && jetbrainsMono.className`

**Step 3: Verifier**

Run: `npm run dev`
Expected: Le site utilise Outfit comme police par defaut

**Step 4: Commit**

```bash
git add src/app/layout.tsx src/components/ui/typographies/Typography.tsx
git commit -m "feat: replace fonts with Outfit + JetBrains Mono"
```

---

### Task 4: Mettre a jour globals.css (fond, textures, animations)

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Remplacer le contenu de globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-bg: #0a0a0f;
  --color-elevated: #12121a;
  --color-green: #00ff9d;
  --color-cyan: #00b8ff;
  --color-text: #e0e0e0;
  --color-muted: #6b7280;
  --color-border: #1e1e2e;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  color: var(--color-text);
  background: var(--color-bg);
  background-image: radial-gradient(circle, var(--color-border) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Vignette overlay */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.6) 100%);
  pointer-events: none;
  z-index: 9999;
}

.main-container {
  @apply max-w-[1440px] px-[20px] sm:px-[30px] md:px-[100px] mx-auto;
}

.base-pad {
  @apply px-8 sm:px-10 md:px-20 lg:px-28;
}

/* Terminal window header (3 dots) */
.terminal-header {
  @apply flex items-center gap-[6px] px-[16px] py-[12px] border-b border-terminal-border;
}
.terminal-dot {
  @apply h-[10px] w-[10px] rounded-full;
}
.terminal-dot-red { @apply bg-[#ff5f57]; }
.terminal-dot-yellow { @apply bg-[#ffbd2e]; }
.terminal-dot-green { @apply bg-[#28c840]; }

/* Terminal block */
.terminal-block {
  @apply bg-terminal-elevated border border-terminal-border rounded-[8px] overflow-hidden;
}

/* Neon glow effects */
.glow-green {
  box-shadow: 0 0 10px rgba(0, 255, 157, 0.3), 0 0 20px rgba(0, 255, 157, 0.1);
}
.glow-cyan {
  box-shadow: 0 0 10px rgba(0, 184, 255, 0.3), 0 0 20px rgba(0, 184, 255, 0.1);
}
.glow-green-text {
  text-shadow: 0 0 10px rgba(0, 255, 157, 0.5), 0 0 20px rgba(0, 255, 157, 0.2);
}
.glow-cyan-text {
  text-shadow: 0 0 10px rgba(0, 184, 255, 0.5), 0 0 20px rgba(0, 184, 255, 0.2);
}

/* Glitch animation for scroll reveal */
@keyframes glitch {
  0% { transform: translate(0); }
  10% { transform: translate(-3px, 0); }
  20% { transform: translate(3px, 0); }
  30% { transform: translate(-2px, 0); }
  40% { transform: translate(2px, 0); }
  50% { transform: translate(0); }
  100% { transform: translate(0); }
}
.animate-glitch {
  animation: glitch 0.4s ease-in-out;
}

/* Bounce */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
}
.animate_bounce {
  animation: bounce 4s infinite;
}

/* Neon pulse */
@keyframes neon-pulse {
  0%, 100% { box-shadow: 0 0 5px rgba(0, 255, 157, 0.3), 0 0 10px rgba(0, 255, 157, 0.1); }
  50% { box-shadow: 0 0 15px rgba(0, 255, 157, 0.5), 0 0 30px rgba(0, 255, 157, 0.2); }
}
.animate-neon-pulse {
  animation: neon-pulse 2s ease-in-out infinite;
}

/* Typing cursor */
@keyframes blink-cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.typing-cursor::after {
  content: '|';
  color: var(--color-green);
  animation: blink-cursor 0.8s step-end infinite;
  margin-left: 2px;
}

/* Animated scroll inside */
.animted_inside div img {
  width: 100%;
  object-fit: cover;
  position: relative;
  transition: ease-in-out 3s;
  top: 0;
}
.animted_inside:hover div img {
  transform: translateY(calc(-100% + 30rem));
}

/* Limit text */
.--limit-text-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}

/* Scan line effect (subtle) */
@keyframes scanline {
  0% { top: -10%; }
  100% { top: 110%; }
}
.scanline::after {
  content: '';
  position: fixed;
  top: -10%;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to bottom, transparent, rgba(0, 255, 157, 0.05), transparent);
  animation: scanline 8s linear infinite;
  pointer-events: none;
  z-index: 9998;
}
```

**Step 2: Verifier**

Run: `npm run dev`
Expected: Fond noir bleute avec grille de dots, vignette sur les bords

**Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: terminal hacker globals — dark bg, dot grid, glow utilities, animations"
```

---

### Task 5: Mettre a jour la Navbar

**Files:**
- Modify: `src/components/layouts/Navbar.tsx`

**Step 1: Restyle la Navbar en terminal**

Remplacer le contenu de `Navbar.tsx` par :

```tsx
"use client";
import Link from "next/link";
import Typography from "../ui/typographies/Typography";
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation'
import Image from "next/image";

export default function Navbar() {
    const pathname = usePathname()
    const isProjectPage = /^\/project(\/details\/[^/]+)?/.test(pathname);

    const links = [
        { href: '/', label: 'Accueil', active: pathname === '/' },
        { href: '/project', label: 'Projets', active: isProjectPage },
        { href: '/contact', label: 'Contact', active: pathname === '/contact' },
    ];

    return (
        <div className="main-container py-[3rem] relative z-[100]">
            <div className="flex items-center justify-between relative z-[100]">
                <Link href={'/'}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, x: [-20, 10, 0] }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                    >
                        <div className="h-[6rem] w-[18rem] relative hidden md:block">
                            <Image src="/assets/logos/logo_1.svg" fill className="object-contain" alt="logo" priority />
                        </div>
                        <div className="h-[4rem] w-[4rem] relative block md:hidden">
                            <Image src="/assets/logos/logo_2.svg" fill className="object-contain" alt="logo" />
                        </div>
                    </motion.div>
                </Link>

                <ul className="flex items-center gap-[2rem] md:gap-[4rem] relative z-[100]">
                    {links.map((link, idx) => (
                        <motion.li
                            key={link.href}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, x: [-20, 10, 0] }}
                            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 + idx * 0.2 }}
                        >
                            <Link href={link.href}>
                                <div className="relative group">
                                    <span className={`font-mono text-[1.4rem] md:text-[1.8rem] transition-all duration-300 ease-linear ${
                                        link.active
                                            ? 'text-terminal-green glow-green-text'
                                            : 'text-terminal-muted group-hover:text-terminal-green'
                                    }`}>
                                        {link.active && <span className="opacity-60">{'> '}</span>}
                                        {link.label}
                                    </span>
                                    {link.active && (
                                        <div className="absolute -bottom-[4px] left-0 h-[2px] w-full bg-terminal-green glow-green" />
                                    )}
                                </div>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div className="absolute top-0 left-0 h-[12rem] w-full bg-terminal-bg/80 z-[60] hidden sm:block backdrop-blur-sm"></div>
        </div>
    );
}
```

**Step 2: Verifier**

Run: `npm run dev`
Expected: Navbar avec texte mono, lien actif en vert neon avec `>` prefixe et underline glow

**Step 3: Commit**

```bash
git add src/components/layouts/Navbar.tsx
git commit -m "feat: terminal hacker navbar — neon green active state, mono font"
```

---

### Task 6: Mettre a jour le Footer

**Files:**
- Modify: `src/components/layouts/Footer.tsx`

**Step 1: Restyle le Footer**

Remplacer le contenu :

```tsx
"use client";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa6"
import Link from "next/link";

export default function Footer() {
    return (
        <div className="main-container py-[10rem]">
            <div className="flex items-center justify-center gap-[3rem] text-[2.2rem]">
                <Link href={"https://www.linkedin.com/in/nbe-soro/"} target="_blank">
                    <BsLinkedin className="text-terminal-muted hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(0,255,157,0.5)] transition-all duration-300 ease-linear" />
                </Link>
                <Link href={"https://gitlab.com/Soro08"} target="_blank">
                    <FaGitlab className="text-terminal-muted hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(0,255,157,0.5)] transition-all duration-300 ease-linear" />
                </Link>
                <Link href={"https://github.com/Soro08"} target="_blank">
                    <BsGithub className="text-terminal-muted hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(0,255,157,0.5)] transition-all duration-300 ease-linear" />
                </Link>
                <Link href={"https://www.youtube.com/@nbesoro"} target="_blank">
                    <BsYoutube className="text-terminal-muted hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(0,255,157,0.5)] transition-all duration-300 ease-linear" />
                </Link>
            </div>
            <div className="h-[1px] w-full my-[4rem] border-t border-dashed border-terminal-border" />
            <div className="text-center">
                <span className="font-mono text-[1.4rem] text-terminal-muted opacity-50">
                    {`// ${new Date().getFullYear()} nbesoro. All rights reserved.`}
                </span>
            </div>
        </div>
    )
}
```

**Step 2: Commit**

```bash
git add src/components/layouts/Footer.tsx
git commit -m "feat: terminal footer — neon hover, dashed separator, mono copyright"
```

---

### Task 7: Mettre a jour le Hero (Accueil)

**Files:**
- Modify: `src/components/sections/home/Hero.tsx`

**Step 1: Restyle le Hero avec typing effect et commande shell**

```tsx
"use client";
import Image from "next/image";
import { BsArrowDown } from 'react-icons/bs'
import { motion } from "framer-motion"
import Link from "next/link";

const typingContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.5 }
    }
};

const typingChar = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
};

export default function Hero() {
    const title = "Python";

    return (
        <div className="h-[calc(100vh-180px)] sm:h-[calc(100vh-100px)] relative">
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[13rem] sm:top-[16rem] md:top-[20rem] left-1/2 flex flex-col items-start -space-y-[2rem] md:-space-y-[4rem] lg:-space-y-[8rem] z-50">
                <motion.span
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: [200, -20, 0] }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="font-mono text-[1.2rem] md:text-[1.6rem] lg:text-[1.8rem] text-terminal-green glow-green-text block pl-3 md:pl-6"
                >
                    {"$ ./nbesoro --role \"developpeur back-end\""}
                </motion.span>
                <motion.div
                    variants={typingContainer}
                    initial="hidden"
                    whileInView="show"
                    className="flex"
                >
                    {title.split("").map((char, idx) => (
                        <motion.span
                            key={idx}
                            variants={typingChar}
                            className="text-[8rem] sm:text-[16rem] md:text-[20rem] lg:text-[25rem] text-terminal-text font-[700] uppercase glow-cyan-text"
                        >
                            {char}
                        </motion.span>
                    ))}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 1.5 }}
                        className="text-[8rem] sm:text-[16rem] md:text-[20rem] lg:text-[25rem] text-terminal-green font-[300]"
                    >|</motion.span>
                </motion.div>
            </div>
            <div className="absolute top-0 left-0 h-[calc(100vh-100px)] sm:h-screen w-full bg-terminal-bg/80 z-[60]"></div>
            <div className="absolute bottom-[-5rem] sm:bottom-[-10rem] -translate-x-1/2 left-1/2 z-50">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [20, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
                    className="h-[50rem] sm:h-[60rem] lg:h-[82rem] w-[40rem] sm:w-[50rem] lg:w-[72rem] relative"
                >
                    <Image
                        src={'/assets/nbesoro/soro.png'}
                        fill
                        sizes="(max-width: 640px) 40rem, (max-width: 1024px) 50rem, 72rem"
                        alt="portrait"
                        className="object-contain mix-blend-luminosity opacity-80 hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
                    />
                </motion.div>
            </div>
            <div className="absolute bottom-[-4rem] sm:bottom-14 left-[45%] md:left-1/2 -translate-x-1/2 animate_bounce z-[60]">
                <Link href="#biographie">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: [-20, 20, 0] }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
                        className="border border-terminal-green h-[8rem] w-[5rem] rounded-full flex items-center justify-center text-terminal-green cursor-pointer animate-neon-pulse hover:bg-terminal-green hover:text-terminal-bg transition-all duration-300 ease-out"
                    >
                        <BsArrowDown className="text-[22px]" />
                    </motion.div>
                </Link>
            </div>
        </div>
    );
}
```

**Step 2: Commit**

```bash
git add src/components/sections/home/Hero.tsx
git commit -m "feat: terminal hero — typing effect, shell command, neon glow"
```

---

### Task 8: Mettre a jour Biography

**Files:**
- Modify: `src/components/sections/home/Biography.tsx`

**Step 1: Restyle avec bloc terminal et dots macOS**

```tsx
"use client";
import Typography from "@/components/ui/typographies/Typography";
import { UserType } from "@/utils/type";
import { motion } from "framer-motion"
import Link from "next/link";

type PropsType = {
    userInfo: UserType;
}

export default function Biography({ userInfo } : PropsType) {
    return (
        <div id="biographie" className="main-container py-[6rem] md:py-[10rem] mt-[8rem] sm:mt-0">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [50, -10, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <span className="font-mono text-[1.6rem] md:text-[2rem] text-terminal-green glow-green-text">
                    {'// Biographie'}
                </span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: [50, -10, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="mt-[2rem]"
            >
                <Typography
                    label={`${userInfo?.first_name} ${userInfo?.last_name}`}
                    variant='h1'
                    weight={800}
                    color={'white'}
                    as='span'
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [50, -10, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="max-w-[100rem] mt-[3rem] mb-[4rem]"
            >
                <div className="terminal-block">
                    <div className="terminal-header">
                        <div className="terminal-dot terminal-dot-red" />
                        <div className="terminal-dot terminal-dot-yellow" />
                        <div className="terminal-dot terminal-dot-green" />
                        <span className="font-mono text-[1.2rem] text-terminal-muted ml-[8px]">bio.txt</span>
                    </div>
                    <div className="p-[20px] md:p-[30px]">
                        <Typography
                            label={userInfo?.bio}
                            variant='md'
                            weight={400}
                            color={'dark-400'}
                            as='span'
                        />
                    </div>
                </div>
            </motion.div>
            <Link href={'/contact'}>
                <button className="px-[4rem] py-[1rem] rounded-full border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-bg transition-all duration-300 ease-out glow-green">
                    <span className="font-mono text-[14px] leading-[26px] font-[500]">{'> Me contacter'}</span>
                </button>
            </Link>
        </div>
    )
}
```

**Step 2: Commit**

```bash
git add src/components/sections/home/Biography.tsx
git commit -m "feat: terminal biography — code comment title, terminal block bio"
```

---

### Task 9: Mettre a jour Stack

**Files:**
- Modify: `src/components/sections/home/Stack.tsx`

**Step 1: Restyle avec glow hover et labels mono**

```tsx
"use client";
import { TechnologieType } from "@/utils/type";
import Image from "next/image";

type PropsType = {
    stacks: TechnologieType[]
}

export default function Stack({stacks}: PropsType) {
    return (
        <div className="main-container py-[6rem] md:py-[10rem]">
            <div className="flex flex-wrap items-center justify-center gap-[5rem] max-w-[100rem] mx-auto">
                {stacks.map((d, k) => (
                    <div key={k} className="group flex flex-col items-center gap-[8px]">
                        <div className="relative h-[4rem] md:h-[6rem] w-[8rem] md:w-[10rem] grayscale group-hover:grayscale-0 group-hover:drop-shadow-[0_0_12px_rgba(0,255,157,0.4)] transition-all duration-300 ease-linear">
                            <Image
                                src={d?.logo}
                                fill
                                alt={d?.title}
                                className="object-contain"
                            />
                        </div>
                        <span className="font-mono text-[1.1rem] text-terminal-muted opacity-0 group-hover:opacity-100 group-hover:text-terminal-green transition-all duration-300">
                            {d?.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
```

**Step 2: Commit**

```bash
git add src/components/sections/home/Stack.tsx
git commit -m "feat: terminal stack — glow hover, mono labels"
```

---

### Task 10: Mettre a jour Experience

**Files:**
- Modify: `src/components/sections/home/Experience.tsx`

**Step 1: Restyle timeline terminal avec noeuds et pointilles verts**

```tsx
"use client";
import Tag from "@/components/ui/tag/Tag";
import Typography from "@/components/ui/typographies/Typography";
import { motion } from "framer-motion"
import { ExperienceType } from "@/utils/type";

type PropsType = {
    experiences: ExperienceType[];
}

const formatDateIntl = (alpha: any) => {
    const date = new Date(alpha);
    let formattedDate = null
    if(alpha) {
      formattedDate = new Intl.DateTimeFormat('fr-FR', {
        year: 'numeric',
        month: 'long',
      }).format(date);
    }
    return formattedDate;
};

export default function Experience({experiences}: PropsType) {
    return (
        <div className="main-container py-[6rem] md:py-[10rem]">
            <div className="mb-[4rem]">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [50, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <span className="font-mono text-[1.6rem] md:text-[2rem] text-terminal-green glow-green-text">
                        {'// Experiences'}
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [-50, 10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="mt-[1rem]"
                >
                    <Typography
                        label={'professionnelles'}
                        variant='h1'
                        weight={800}
                        color={'white'}
                        as='span'
                    />
                </motion.div>
            </div>
            <div className="space-y-[10rem]">
                {
                    experiences?.map((experience, idx) =>(
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, y: [100, 0] }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="flex items-start gap-[2rem] sm:gap-[4rem] relative before:absolute before:h-full before:w-[2px] before:border-l-[2px] before:border-dashed before:border-terminal-green/40 before:left-[2.4rem] sm:before:left-[3rem]"
                        >
                            <div className="h-[5rem] sm:h-[6rem] w-[5rem] sm:w-[6rem] rounded-[8px] border border-terminal-green bg-terminal-elevated relative flex items-center justify-center shrink-0 glow-green">
                                <span className="font-mono text-terminal-green text-[2rem] font-bold">{'>'}</span>
                            </div>
                            <div className="flex flex-col items-start gap-4 capitalize">
                                <span className="inline-block font-mono text-[1.4rem] px-[16px] py-[6px] rounded-full border border-terminal-green/50 text-terminal-green bg-terminal-elevated">
                                    {`${experience?.start ? formatDateIntl(experience?.start) : "Aujourd'hui"} - ${experience?.end ? formatDateIntl(experience?.end) : "Aujourd'hui" }`}
                                </span>
                                <div className="mt-[2rem] space-y-4">
                                    <div className="max-w-[50rem]">
                                        <Typography
                                            label={`${experience?.job} - ${experience?.company}`}
                                            variant='md'
                                            weight={400}
                                            color={'white'}
                                            as='span'
                                        />
                                    </div>
                                    {
                                        experience?.works?.map((work, idx) =>(
                                            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] lg:gap-[20rem] !mt-[2rem] !mb-[4rem]">
                                                <div>
                                                    <div className="flex items-center gap-3">
                                                        <span className="font-mono text-[1.4rem] text-terminal-muted">Projet :</span>
                                                        <Typography
                                                            label={work?.title}
                                                            variant='md'
                                                            weight={400}
                                                            color={'white'}
                                                            as='span'
                                                        />
                                                    </div>
                                                    <ul className="space-y-8 !mt-[2rem]">
                                                        {
                                                            work?.task?.map((el, idx) =>(
                                                                <li key={idx} className="flex items-center gap-4">
                                                                    <span className="font-mono text-terminal-green text-[1.2rem]">{'>'}</span>
                                                                    <Typography
                                                                        label={el}
                                                                        variant='base'
                                                                        weight={400}
                                                                        color={'white'}
                                                                        as='span'
                                                                    />
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div>
                                                    <span className="font-mono text-[1.4rem] text-terminal-muted">Environnement technique</span>
                                                    <div className="flex items-center flex-wrap gap-8 mt-[2rem]">
                                                        {
                                                            work?.technologies?.map((tech, idx) =>(
                                                                <Tag
                                                                    key={idx}
                                                                    size={'lg'}
                                                                    label={tech?.title}
                                                                />
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}
```

**Step 2: Commit**

```bash
git add src/components/sections/home/Experience.tsx
git commit -m "feat: terminal experience — dashed green timeline, node icons, mono dates"
```

---

### Task 11: Mettre a jour Skills

**Files:**
- Modify: `src/components/sections/home/Skills.tsx`

**Step 1: Restyle en blocs de code**

```tsx
"use client";
import Typography from "@/components/ui/typographies/Typography";
import { categoryType } from "@/utils/type";
import { motion } from "framer-motion"

type PropsType = {
  skills: categoryType;
}

export default function Skills({skills} : PropsType) {
    return (
        <div className="main-container py-[6rem] md:py-[10rem]">
            <div className="text-center mb-[6rem]">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [50, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <span className="font-mono text-[1.6rem] md:text-[2rem] text-terminal-green glow-green-text">
                        {'# Competences'}
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [-50, 10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="mt-[2rem]"
                >
                    <div className="max-w-[50rem] mx-auto">
                        <Typography
                            label={"Decouvrez les competences polyvalentes de Soro N'Be dans divers domaines, pret a apporter une valeur ajoutee a vos projets et initiatives."}
                            variant='base'
                            weight={400}
                            color={'dark-400'}
                            as='span'
                        />
                    </div>
                </motion.div>
            </div>
            <div className="flex items-start sm:items-center justify-start sm:justify-center gap-x-[8rem] sm:gap-x-[10rem] gap-y-[6rem] sm:gap-y-[10rem] flex-wrap">
                {skills.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-8 relative min-w-[20rem] flex-wrap"
                    >
                        <div className="absolute top-[-24px] left-0">
                            <span className="font-mono text-[1.4rem] text-terminal-green/40 whitespace-nowrap">{`// ${item?.name}`}</span>
                        </div>
                        {item.technologies.map((subItem, subIndex) => (
                            <span
                                key={subIndex}
                                className="text-[1.8rem] md:text-[2rem] leading-[2.8rem] md:leading-[3rem] font-[400] text-terminal-text whitespace-nowrap hover:text-terminal-cyan transition-colors duration-200"
                            >
                                {subItem?.title}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
```

**Step 2: Commit**

```bash
git add src/components/sections/home/Skills.tsx
git commit -m "feat: terminal skills — code comment categories, clean layout"
```

---

### Task 12: Mettre a jour Formation

**Files:**
- Modify: `src/components/sections/home/Formation.tsx`

**Step 1: Restyle en fenetres terminal**

```tsx
"use client";
import Typography from "@/components/ui/typographies/Typography";
import { FormationType } from "@/utils/type";
import { motion } from "framer-motion"

type PropsType = {
    formations: FormationType[];
}

export default function Formation({formations}: PropsType) {
    return (
        <div className="main-container py-[6rem] md:py-[10rem]">
            <div className="mb-[4rem]">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [50, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <span className="font-mono text-[1.6rem] md:text-[2rem] text-terminal-green glow-green-text">
                        {'// Formation'}
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [50, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="mt-[1rem]"
                >
                    <Typography
                        label={'et education'}
                        variant='h1'
                        weight={800}
                        color={'white'}
                        as='span'
                    />
                </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    formations?.map((formation, idx) =>(
                        <div key={idx} className="terminal-block group hover:border-terminal-green/50 hover:glow-green transition-all duration-300">
                            <div className="terminal-header">
                                <div className="terminal-dot terminal-dot-red" />
                                <div className="terminal-dot terminal-dot-yellow" />
                                <div className="terminal-dot terminal-dot-green" />
                                <span className="font-mono text-[1.1rem] text-terminal-muted ml-[8px]">{formation?.school}</span>
                            </div>
                            <div className="p-[20px]">
                                <span className="font-mono text-[1.4rem] text-terminal-green">{`[${formation?.year}]`}</span>
                                <div className="block mt-[1.5rem]">
                                    <Typography
                                        label={`${formation?.school} - ${formation?.diploma}`}
                                        variant='md'
                                        weight={400}
                                        color={'white'}
                                        as='span'
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
```

**Step 2: Commit**

```bash
git add src/components/sections/home/Formation.tsx
git commit -m "feat: terminal formation — window cards with macOS dots, year prompt"
```

---

### Task 13: Mettre a jour Tag component

**Files:**
- Modify: `src/components/ui/tag/Tag.tsx`

**Step 1: Restyle le Tag en style terminal**

```tsx
"use client";
import * as React from 'react';
import type { IconType } from 'react-icons';

const TAG_SIZE = ['base', 'md', 'lg'] as const;
type TagSize = (typeof TAG_SIZE)[number];

type TagProps = {
  label?: string;
  size?: TagSize;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      label,
      className,
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`
          ${size === 'base' && 'px-[16px] py-[8px] text-[12px]'}
          ${size === 'md' && 'px-[18px] py-[8px] text-[14px]'}
          ${size === 'lg' && 'px-[22px] py-[8px] text-[16px]'}
          inline-flex items-center gap-2 bg-terminal-elevated border border-terminal-border rounded-full font-mono text-terminal-text hover:border-terminal-green/30 transition-colors duration-200
          ${className}
        `}
        {...rest}
      >
        {LeftIcon && (
          <div>
            <LeftIcon size="1em" className={`${leftIconClassName}`} />
          </div>
        )}
        <span>{label}</span>
        {RightIcon && (
          <div>
            <RightIcon size="1em" className={`${rightIconClassName}`} />
          </div>
        )}
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
```

**Step 2: Commit**

```bash
git add src/components/ui/tag/Tag.tsx
git commit -m "feat: terminal tag — mono font, bordered, hover glow"
```

---

### Task 14: Mettre a jour ScrollToTop

**Files:**
- Modify: `src/components/ui/ScrollToTop.tsx`

**Step 1: Restyle en bouton terminal neon**

```tsx
"use client";

import { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton) return null;

  return (
    <button type="button" onClick={scrollToTop}>
      <div className="h-[6rem] w-[6rem] bg-terminal-bg rounded-full border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-bg flex items-center justify-center fixed bottom-[4rem] md:bottom-[6rem] right-[4rem] md:right-[6rem] animate-neon-pulse z-50 transition-all duration-300 ease-out">
        <BsArrowUpShort className="text-[3rem]" />
      </div>
    </button>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/ui/ScrollToTop.tsx
git commit -m "feat: terminal scroll-to-top — neon green pulse"
```

---

### Task 15: Mettre a jour les pages Contact

**Files:**
- Modify: `src/components/sections/contact/Hero.tsx`
- Modify: `src/components/sections/contact/Calendar.tsx`

**Step 1: Restyle Contact Hero**

```tsx
"use client"

import Typography from "@/components/ui/typographies/Typography"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <div className="main-container py-[4rem] md:py-[6rem] lg:py-[10rem]">
            <div className="flex flex-col space-y-8 max-w-[60rem] mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [20, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <span className="font-mono text-[1.6rem] text-terminal-green glow-green-text">{'// Contact'}</span>
                    <Typography
                        label='Contact'
                        variant='h1'
                        weight={500}
                        color={'white'}
                        as='h1'
                        className="mt-[1rem]"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [-20, 10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <Typography
                        label="Utilisez les informations ci-dessous pour me contacter directement ou pour prendre rendez-vous en ligne."
                        variant='base'
                        weight={500}
                        color={'dark-400'}
                        as='span'
                    />
                </motion.div>
            </div>
        </div>
    )
}
```

**Step 2: Restyle Calendar**

```tsx
"use client"

import Typography from "@/components/ui/typographies/Typography"
import Link from "next/link"
import { BsFillEnvelopeFill, BsFillPhoneFill, BsLinkedin } from "react-icons/bs"

export default function Calendar() {
    return (
        <div className="main-container py-[6rem]">
            <div className="flex flex-wrap items-center gap-[2rem] justify-center mb-[10rem]">
                <Link href={'https://www.linkedin.com/in/nbe-soro/'} target="_blank">
                    <div className="inline-flex items-center gap-6 border border-terminal-border bg-terminal-elevated rounded-full px-[22px] py-[8px] hover:border-terminal-green/50 transition-all duration-300">
                        <BsLinkedin className="text-terminal-green text-[1.6rem]" />
                        <span className="font-mono text-[1.4rem] text-terminal-text">LinkedIn</span>
                    </div>
                </Link>
                <div className="inline-flex items-center gap-6 border border-terminal-border bg-terminal-elevated rounded-full px-[22px] py-[8px]">
                    <BsFillEnvelopeFill className="text-terminal-green text-[1.6rem]" />
                    <span className="font-mono text-[1.4rem] text-terminal-text">bonjour@nbesoro.com</span>
                </div>
                <div className="inline-flex items-center gap-6 border border-terminal-border bg-terminal-elevated rounded-full px-[22px] py-[8px]">
                    <BsFillPhoneFill className="text-terminal-green text-[1.6rem]" />
                    <span className="font-mono text-[1.4rem] text-terminal-text">+225 07 482 781 74</span>
                </div>
            </div>
            <div className="text-center mb-[4rem]">
                <span className="font-mono text-[1.6rem] md:text-[2rem] text-terminal-green glow-green-text">
                    {"$ calendly --book \"Soro N'Be\""}
                </span>
            </div>
            <div className="terminal-block">
                <div className="terminal-header">
                    <div className="terminal-dot terminal-dot-red" />
                    <div className="terminal-dot terminal-dot-yellow" />
                    <div className="terminal-dot terminal-dot-green" />
                    <span className="font-mono text-[1.1rem] text-terminal-muted ml-[8px]">calendly.app</span>
                </div>
                <div className="h-[80rem]">
                    <iframe src="https://calendly.com/nbesoro/30min" className="h-full w-full" />
                </div>
            </div>
        </div>
    )
}
```

**Step 3: Commit**

```bash
git add src/components/sections/contact/Hero.tsx src/components/sections/contact/Calendar.tsx
git commit -m "feat: terminal contact — FR text, shell command calendly, terminal badges"
```

---

### Task 16: Mettre a jour les pages Projets

**Files:**
- Modify: `src/components/sections/project/Hero.tsx`
- Modify: `src/components/sections/project/CurrentProject.tsx`
- Modify: `src/components/sections/project/DetailProject.tsx`

**Step 1: Restyle Project Hero**

```tsx
"use client"

import Typography from "@/components/ui/typographies/Typography"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <div className="main-container py-[4rem] md:py-[6rem] lg:py-[10rem]">
            <div className="flex flex-col space-y-8 max-w-[60rem] mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [20, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <span className="font-mono text-[1.6rem] text-terminal-green glow-green-text">{'// Projets'}</span>
                    <Typography
                        label='Projets'
                        variant='h1'
                        weight={500}
                        color={'white'}
                        as='h1'
                        className="mt-[1rem]"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [-20, 10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <Typography
                        label="Explorez mes realisations professionnelles, ou chaque projet demontre mon expertise et ma passion pour l'excellence."
                        variant='base'
                        weight={500}
                        color={'dark-400'}
                        as='span'
                    />
                </motion.div>
            </div>
        </div>
    )
}
```

**Step 2: Restyle CurrentProject**

```tsx
"use client"

import Typography from "@/components/ui/typographies/Typography"
import { projectType } from "@/utils/type"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BsGithub } from "react-icons/bs"
import { TfiWorld } from "react-icons/tfi"

type PropsType = {
    projects: projectType;
}
export default function CurrentProject({projects} : PropsType) {
    const router = useRouter()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem]">
            {projects.map((d) => (
                <div
                    key={d?.slug}
                    onClick={() => router.push(`/project/details/${d?.slug}`)}
                    className="terminal-block cursor-pointer group hover:border-terminal-green/50 transition-all duration-300"
                >
                    <div className="h-[30rem] w-full overflow-hidden relative">
                        <Image src={d?.image} alt={d?.title} fill sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-terminal-green/0 group-hover:bg-terminal-green/5 transition-all duration-300" />
                    </div>
                    <div className="p-[16px]">
                        <Typography
                            label={d?.description}
                            variant='base'
                            weight={500}
                            color={'dark-400'}
                            as='span'
                            className="--limit-text-3"
                        />
                        <div className="flex items-center gap-6 mt-[2rem]">
                            {d?.github && (
                                <Link href={d?.github} target="_blank" onClick={(e) => e.stopPropagation()}>
                                    <div className="px-6 py-4 rounded-full border border-terminal-border text-terminal-muted hover:text-terminal-green hover:border-terminal-green/50 transition-all duration-300 ease-linear">
                                        <BsGithub className="text-[2.2rem]" />
                                    </div>
                                </Link>
                            )}
                            {d?.website && (
                                <Link href={d?.website} target="_blank" onClick={(e) => e.stopPropagation()}>
                                    <div className="px-6 py-4 rounded-full border border-terminal-border text-terminal-muted hover:text-terminal-green hover:border-terminal-green/50 transition-all duration-300 ease-linear">
                                        <TfiWorld className="text-[2.2rem]" />
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
```

**Step 3: Restyle DetailProject**

```tsx
"use client"

import Tag from "@/components/ui/tag/Tag"
import Typography from "@/components/ui/typographies/Typography"
import Image from "next/image"
import Link from "next/link"
import { BsGithub } from "react-icons/bs"
import { motion } from "framer-motion"
import { TfiWorld } from "react-icons/tfi"
import { useState, useEffect } from "react"
import { singularProjectType } from "@/utils/type"
import connectedClient from "@/utils/axios"

type PropsType = {
    slug: string;
}

export default function DetailProject({ slug }: PropsType) {
    const [project, setProject] = useState<singularProjectType | null>(null);

    useEffect(() => {
        if (!slug) return;
        connectedClient.get(`/projects/${slug}/`)
            .then((res: any) => { setProject(res.data); })
            .catch((err: Error) => { console.error(err); });
    }, [slug]);

    return (
        <div className="main-container py-[6rem]">
            <Link href="/project">
                <div className="inline-flex items-center gap-4 mb-6 group">
                    <span className="font-mono text-[1.6rem] text-terminal-muted group-hover:text-terminal-green transition-all duration-300">
                        {'< cd ..'}
                    </span>
                </div>
            </Link>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [20, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="rounded-[8px] h-[40rem] border border-terminal-border relative overflow-hidden"
            >
                {project?.banner && (
                    <Image src={project.banner} alt="banner" fill className="object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg/80 to-transparent" />
                <div className="absolute bottom-10 left-10 flex items-center gap-5">
                    {project?.github && (
                        <Link href={project.github} target="_blank">
                            <div className="px-6 py-4 rounded-full border border-terminal-border bg-terminal-bg/60 text-terminal-muted hover:text-terminal-green hover:border-terminal-green/50 backdrop-blur-sm transition-all duration-300">
                                <BsGithub className="text-[2.2rem]" />
                            </div>
                        </Link>
                    )}
                    {project?.website && (
                        <Link href={project.website} target="_blank">
                            <div className="px-6 py-4 rounded-full border border-terminal-border bg-terminal-bg/60 text-terminal-muted hover:text-terminal-green hover:border-terminal-green/50 backdrop-blur-sm transition-all duration-300">
                                <TfiWorld className="text-[2.2rem]" />
                            </div>
                        </Link>
                    )}
                </div>
            </motion.div>
            <div className="mt-[4rem] flex lg:flex-row flex-col gap-y-[4rem] lg:gap-y-0 items-start justify-between">
                <div className="flex flex-col items-start space-y-4 lg:space-y-6 flex-1 shrink-0">
                    <span className="font-mono text-[1.4rem] text-terminal-muted">Nom du projet</span>
                    <Typography
                        label={project?.title}
                        variant='3xl'
                        weight={600}
                        color={'white'}
                        as='span'
                    />
                </div>
                <div className="flex-1">
                    <span className="font-mono text-[1.4rem] text-terminal-green">{'// Technologies'}</span>
                    <div className="flex flex-wrap items-center gap-4 mt-[2rem]">
                        {project?.technologies?.map((tech, idx) => (
                            <Tag key={idx} size={'lg'} label={tech?.title} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-[4rem] mt-[10rem] md:mt-[20rem]">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [-50, 10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-full lg:w-1/2"
                >
                    <Typography
                        label={project?.description}
                        variant='xl'
                        weight={500}
                        color={'dark-400'}
                        as='span'
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: [50, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-full lg:w-1/2"
                >
                    <div className="terminal-block h-[40rem] lg:h-[50rem] flex items-center justify-center relative overflow-hidden">
                        {!project?.feature_video && project?.feature_img ? (
                            <div className="relative h-[35rem] lg:h-[45rem] w-[35rem] lg:w-[45rem]">
                                <Image src={project.feature_img} alt="feature" className="object-cover" fill />
                            </div>
                        ) : project?.feature_video ? (
                            <iframe
                                src={project.feature_video}
                                title="video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="h-full w-full"
                            />
                        ) : null}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
```

**Step 4: Commit**

```bash
git add src/components/sections/project/Hero.tsx src/components/sections/project/CurrentProject.tsx src/components/sections/project/DetailProject.tsx
git commit -m "feat: terminal projects — FR text, terminal cards, cd.. back button, gradient overlay"
```

---

### Task 17: Ajouter scanline au layout

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Ajouter la classe scanline au body**

Dans `layout.tsx`, ajouter `scanline` a la className du body :

```tsx
<body className={`${outfit.variable} ${jetbrainsMono.variable} ${outfit.className} scanline`}>
```

**Step 2: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add subtle CRT scanline effect to body"
```

---

### Task 18: Verification finale

**Step 1:** Run `npm run dev` et verifier visuellement chaque page
- `/` : Hero typing + bio terminal + stack glow + experiences dashed + skills code + formation cards
- `/project` : Hero FR + cards terminal
- `/project/details/[id]` : cd.. back + gradient banner + terminal tags
- `/contact` : badges terminal + calendly terminal window
- `/old` : ancienne version intacte

**Step 2:** Run `npm run build`
Expected: Build success

**Step 3:** Commit final si ajustements

```bash
git add -A
git commit -m "feat: terminal hacker redesign complete"
```
