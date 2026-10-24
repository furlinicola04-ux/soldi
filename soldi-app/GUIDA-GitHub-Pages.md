# Come mettere "I miei soldi" sul telefono

Ci vogliono circa 10 minuti. Non serve installare niente sul computer: si fa tutto dal sito di GitHub.

## I file da caricare

Sono nella cartella `soldi-pwa`. Sono 6 file:

- `index.html` (l'app)
- `sw.js` (la copia offline)
- `manifest.webmanifest` (nome, colore e icona dell'app)
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` (le icone)

## 1. Crea l'account GitHub

1. Vai su https://github.com e premi **Sign up**.
2. Scegli un nome utente: comparirà nell'indirizzo dell'app, per esempio `nicolafurli.github.io/soldi`.

## 2. Crea il repository

1. In alto a destra premi **+** e poi **New repository**.
2. In **Repository name** scrivi `soldi`.
3. Lascia **Public**. GitHub Pages è gratis solo per i repository pubblici. Si vede il codice dell'app, ma **i tuoi dati non ci sono**: restano solo sul telefono.
4. Premi **Create repository**.

## 3. Carica i file

1. Nella pagina del repository premi il link **uploading an existing file**, oppure **Add file → Upload files**.
2. Trascina i 6 file della cartella `soldi-pwa`. Trascina i file, non la cartella.
3. In fondo premi **Commit changes**.

## 4. Accendi GitHub Pages

1. Nel repository vai su **Settings**, poi **Pages** nel menu a sinistra.
2. In **Source** scegli **Deploy from a branch**.
3. In **Branch** scegli **main** e **/ (root)**, poi premi **Save**.
4. Aspetta 1-2 minuti e ricarica la pagina. In alto comparirà **"Your site is live at https://TUONOME.github.io/soldi/"**.

## 5. Installa l'app sul telefono

Apri l'indirizzo dal telefono **con internet attivo**, almeno la prima volta: è così che salva la copia offline.

- **iPhone (Safari):** tasto **Condividi**, poi **Aggiungi alla schermata Home**, poi **Aggiungi**.
- **Android (Chrome):** menu **⋮**, poi **Installa app** (o **Aggiungi a schermata Home**).

Da qui in poi apri "Soldi" dall'icona: si apre a schermo intero e funziona anche senza rete.

## 6. Porta i dati dall'artifact (facoltativo)

Se hai già inserito movimenti nell'artifact su claude.ai:

1. Nell'artifact vai su **Conti**, poi **Scarica backup**, e salvalo su File o Drive.
2. Nell'app sul telefono vai su **Conti**, poi **Ripristina da un backup**, e scegli quel file.

## Da sapere

- **I dati sono solo sul telefono.** Ogni tanto vai su **Conti → Scarica backup** e tienilo su iCloud o Drive. Se cambi telefono o cancelli i dati di Safari/Chrome, lo ripristini da lì.
- **Rugby e PAF:** l'app conta da sola i mercoledì del mese in corso. Se ne salti uno, o ne fai uno in più, usa **−** e **+** nella previsione. Puoi cambiare giorno e importi in **Fissi → Appuntamenti pagati**.
- **Per aggiornare l'app:** carica di nuovo `index.html` su GitHub (Add file → Upload files) e, in `sw.js`, cambia `soldi-v1` in `soldi-v2`. Il telefono prende la versione nuova la volta dopo che apri l'app con internet.
