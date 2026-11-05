-- Sections de fin de chapitre du CCSP Official Study Guide (Summary + Exam Essentials), texte exact du livre
-- (copyright Wiley) : lecture réservée aux comptes connectés, jamais dans le dépôt ni dans l'APK.
create table if not exists public.ccsp_book_notes (
  chapter_id     int primary key references public.chapters(id) on delete cascade,
  summary        jsonb not null,   -- lignes (texte exact, anglais)
  summary_fr     jsonb,            -- traduction française
  essentials     jsonb not null,   -- lignes « - point » (texte exact, anglais)
  essentials_fr  jsonb             -- version française
);
alter table public.ccsp_book_notes enable row level security;
drop policy if exists "ccsp_book_notes_read_auth" on public.ccsp_book_notes;
create policy "ccsp_book_notes_read_auth" on public.ccsp_book_notes for select to authenticated using (true);
