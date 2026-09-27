# Notre Cahier de Complicité ❤️

Plus de 150 questions pour approfondir vos relations — en couple, entre amis, en famille ou entre collègues. 
En personne ou à distance, sans inscription, sans email, sans numéro de téléphone. Juste vos prénoms.

> 📚 **Documentation technique** : Consultez [`.devin/TECHNICAL_DOCUMENTATION.md`](.devin/TECHNICAL_DOCUMENTATION.md) pour les détails techniques et [`.devin/DEVELOPER_GUIDE.md`](.devin/DEVELOPER_GUIDE.md) pour le guide du développeur.

## ✨ Fonctionnalités

### Types de relations
- **4 types de relations** : 💕 Couple · 👥 Amis · 🏠 Famille · � Collègues
- **150+ questions** adaptées à chaque type de relation
- **Catégories personnalisées** selon le type de relation choisi
- **Interface adaptative** : labels et icônes changent selon la relation

### Jeu
- **Questions contextuelles** : chaque type de relation a ses propres questions adaptées
- 3 ambiances : 🌸 Doux · 🌊 Profond · 🔥 Piquant (pour couples)
- Système hybride : réponse parmi 4 propositions **ou** mots personnalisés
- **Journal** persistant (localStorage) : historique, recherche, export JSON
- **Banque de questions** éditable : ajoutez vos propres questions

### À deux, où que vous soyez
- **Mode local** : jouez côte à côte sur le même appareil, à tour de rôle
- **Mode en ligne** : l'un crée une session et partage un lien d'invitation
  (ou QR code, ou WhatsApp) ; l'autre ouvre le lien, entre son prénom, c'est tout
- Connexion **directe entre navigateurs** (WebRTC via PeerJS) — vos réponses ne
  transitent par aucun serveur après l'établissement de la liaison
- **Pastille de statut temps réel** : Réfléchit… / A répondu / En ligne / Hors ligne
- **Réactions en direct** : ❤️ 😂 🔥 qui s'envolent vers l'écran du partenaire
- **Réponses scellées** : personne ne voit la réponse de l'autre avant la
  révélation mutuelle — puis archivage dans les deux journaux
- **Reconnexion** : en cas de rechargement accidentel, un bandeau propose de
  reprendre la session exactement où elle en était (sessionStorage)

### Confort
- **Minuteur optionnel** par question (30 s / 1 min / 2 min) avec anneau de
  progression animé : rose → ambre → rouge pulsé. À l'expiration, une réponse
  « Temps écoulé » est honnêtement enregistrée et la partie avance
- Mélange uniforme des questions (Fisher-Yates)
- Réponses et prénoms échappés (protection XSS)

## 🚀 Lancement

Aucune installation, aucune dépendance, aucun build.

### Option A — Ouvrir directement

Double-cliquez sur `index.html`.

> ⚠️ La connexion en ligne (invitation) exige que le site soit servi en HTTP(S)
> et accessible par votre partenaire — voir les options B et C pour jouer à
> distance. En local, préférez l'option B même pour tester le mode en ligne.

### Option B — Serveur local (recommandé)

```bash
# Python (déjà installé sur la plupart des machines)
python3 -m http.server 8080

# ou Node.js
npx serve .
```

Puis ouvrez <http://localhost:8080>.

### Option C — Mettre en ligne (pour inviter vraiment à distance)

Le site est 100 % statique : n'importe quel hébergeur de fichiers convient.

| Hébergeur | Comment faire |
|---|---|
| **Netlify Drop** | Glissez-déposez le dossier sur <https://app.netlify.com/drop> — en ligne en 10 s, gratuit |
| **GitHub Pages** | Poussez les 3 fichiers dans un dépôt, activez Pages sur la branche principale |
| **Vercel** | `npx vercel` dans le dossier |
| **Cloudflare Pages** | Import du dossier dans le tableau de bord |
| N'importe quel hébergement web | Envoyez les 3 fichiers par FTP |

Ensuite, partagez simplement l'URL publique : le lien d'invitation fonctionnera
automatiquement (`https://votre-site.tld/?rejoindre=CODE`).

## 📁 Structure

```
├── index.html   Structure, onglets, écrans (jeu / invitation / connexion), sélecteur de relation
├── styles.css   Thème (glassmorphism rose/lavande), animations, minuteur, réactions
└── script.js    Questions (4 types de relations), logique de jeu, connexion P2P (PeerJS), journal, minuteur
```

## 🔧 Comment ça marche (notes techniques)

- **PeerJS + broker public** : l'établissement de la liaison passe par le broker
  gratuit de PeerJS (signalisation), puis les données circulent en direct et
  chiffrées entre les deux navigateurs. Aucune donnée n'est stockée ailleurs que
  dans vos navigateurs (localStorage pour le journal, sessionStorage pour la
  session en cours).
- **Codes de session** : 5 caractères (sans O/0/I/1), préfixe `cc-` côté broker.
  Une session ne peut accueillir que 2 joueurs ; un troisième reçoit un message
  clair.
- **Durée de vie** : une session existe tant que l'onglet de l'hôte est ouvert.
  Les deux joueurs peuvent se recharger et reprendre via le bandeau de
  reconnexion, mais si l'hôte ferme définitivement, il faut une nouvelle
  invitation.
- **Vie privée** : aucun compte, aucun cookie tiers, aucune donnée envoyée à un
  serveur à nous. Le journal reste dans le navigateur (pensez à l'exporter ou
  l'effacer depuis l'onglet Journal).

## 🧪 Vérification rapide

Après modification du code, trois contrôles utiles :

```bash
node --check script.js        # syntaxe
# puis tester un cycle complet dans deux onglets : créer une session, rejoindre
# via le lien, répondre chacun, révéler, avancer, se déconnecter, recharger.
```

---

Créé pour partager des moments uniques 💖
