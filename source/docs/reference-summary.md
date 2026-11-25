# Project reference summary

This implementation consolidates the supplied Stitch screens into a single Arabic, right-to-left portal with responsive navigation and a persistent audio player.

## Product sections

- Home and global search.
- Surah index, Juz index, reader, last-read position, saved ayahs, and local reading notes.
- Reciter directory and live radio.
- Tafsir lookup with a source fallback.
- Library and lessons links to their original publishers until a verified catalog and reuse rights are available.
- Hijri date, prayer times, city selection, calculation method, and local date adjustment.
- About, data-source attribution, and privacy details.

## Content rules

Quran text and tafsir are requested from external sources; this repository does not manually author Quranic text. The app shows source links when remote data cannot be loaded. User notes and favorites stay in browser storage. Previously opened surahs are cached in IndexedDB for offline reading.
