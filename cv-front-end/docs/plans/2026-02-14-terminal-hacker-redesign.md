# Terminal Hacker Redesign — CV nbesoro

## Objectif

Ameliorer le design actuel du portfolio CV en appliquant une esthetique "Terminal Hacker" : ambiance sombre, typographie monospace, accents neon vert/cyan, effets de glow, et elements visuels rappelant un IDE/terminal. Le contenu et la structure restent identiques. L'interface est harmonisee en francais. L'ancienne version est conservee sous `/old`.

## Palette de couleurs

| Token | Hex | Usage |
|---|---|---|
| bg-primary | #0a0a0f | Fond principal (noir bleute) |
| bg-elevated | #12121a | Cartes, blocs sureleves |
| accent-green | #00ff9d | Accent primaire (terminal vert neon) |
| accent-cyan | #00b8ff | Accent secondaire (cyan electrique) |
| text-primary | #e0e0e0 | Texte principal |
| text-secondary | #6b7280 | Texte secondaire |
| border | #1e1e2e | Bordures et separateurs |

## Typographie

- **Display / Titres de section** : JetBrains Mono (Google Fonts) — commentaires de code : `// Biographie`, `# Competences`
- **Corps de texte** : Outfit (Google Fonts) — remplace Onest, moderne et geometrique
- **Tags / Labels** : JetBrains Mono petite taille

## Texture & Fond

- Grille de dots CSS (espacement ~40px, couleur #1e1e2e) sur le body
- Vignette radial-gradient sombre sur les bords
- Scan-line optionnel (tres subtil, anime)

## Sections

### Route /old
- Copie des pages actuelles (Home, Projects, Contact, Detail) pour comparaison
- Memes composants, renommes avec prefixe Old

### Navbar
- Lien actif avec prefixe `>_` et glow vert
- Transitions hover neon
- Textes : Accueil, Projets, Contact

### Hero (Accueil)
- Titre "Python" avec effet typing lettre par lettre (Framer Motion)
- Sous-titre comme commande shell : `$ ./nbesoro --role "developpeur back-end"`
- Portrait avec filtre verdatre subtil + bordure glow cyan
- Bouton scroll-down : contour vert neon pulsant

### Biographie
- Titre : `// Biographie` en JetBrains Mono vert neon
- Heading arriere-plan en #1e1e2e
- Bio dans un bloc terminal : fond #12121a, bordure #1e1e2e, header dots macOS (rouge/jaune/vert)
- Bouton : bordure verte, texte vert, hover -> fond vert + texte noir

### Stack
- Logos grayscale, hover -> glow vert/cyan
- Label nom en JetBrains Mono au hover

### Experiences
- Timeline en pointilles verts
- Noeuds : carre arrondi vert, icone `>`
- Tags dates : badge terminal (fond #12121a, bordure verte, texte vert mono)
- Tags technos : fond sombre, bordure #1e1e2e, hover glow

### Competences
- Titre : `# Competences`
- Categories comme blocs de code : nom en commentaire vert, technos comme variables

### Formation
- Cartes en fenetres terminal : header dots macOS, annee comme prompt `[2020]`
- Hover : bordure verte + glow subtil

### Projets (liste)
- Cartes : fond #12121a, bordure #1e1e2e, hover bordure verte + glow
- Image : overlay vert subtil au hover
- Icones sociales : glow vert au hover

### Detail projet
- Banner : overlay gradient noir -> transparent
- Tags technos terminal
- Bouton retour : `< cd ..` en JetBrains Mono

### Contact
- Badges : style terminal, bordure verte
- Calendly dans cadre terminal (header dots macOS)

### Animations
- Entree au scroll : leger glitch (decalage horizontal 2-3px puis stabilisation)
- Hover liens/boutons : glow neon
- Typing effect sur le Hero

### Traductions FR
- Home -> Accueil
- Projects -> Projets
- My biography -> // Biographie
- Experiences / professionals -> // Experiences / professionnelles
- Project name -> Nom du projet
- Contact me -> Me contacter
- retour -> `< cd ..`

## Contraintes techniques
- Next.js 13.5.4 App Router (pas de mise a jour de version)
- Tailwind CSS 3 (nouvelles couleurs via tailwind.config.ts)
- Framer Motion 10 pour les animations
- Pas de nouvelles dependances sauf polices Google Fonts (JetBrains Mono, Outfit)
