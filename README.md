# CCSP Training

Site de QCM pour le CCSP (Official Study Guide 3e éd. et Official Practice Tests 3e éd.), séparé du site CISSP
(https://hamzabenazouz.github.io/cissp/) mais branché sur la **même base Supabase** et le **même compte**.

- Site : https://hamzabenazouz.github.io/ccsp/ (GitHub Pages, branche `main`, dossier racine).
- Données : tables `chapters` / `questions` de Supabase, chapitres 201-210 (Study Guide) et 301-308 (Practice Tests).
  Le site ne télécharge que ces chapitres. Les sessions, réponses, marques et quiz sauvegardés sont dans les mêmes
  tables que le CISSP ; le site CCSP n'affiche que ce qui porte sur des questions CCSP, et « Réinitialiser » n'efface
  que les sessions CCSP.
- Stockage navigateur préfixé `ccsp-` (le site CISSP utilise `cissp-` sur le même domaine github.io).
- Les questions sont sous copyright Wiley : jamais dans ce dépôt (`private/` est ignoré). Pour tester en local,
  videz `js/config.js` et placez `private/ccsp_guide.json` + `private/ccsp_practice.json`.
- Seeds SQL : déjà chargés dans la base commune, rien à exécuter.
