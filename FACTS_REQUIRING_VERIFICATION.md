# Facts requiring verification

Compiled during the site refresh on branch `site-refresh-2026-08`.

Each item is either (a) **retained on the public site** but not evidenced anywhere in this
repository, or (b) **removed from the public site** because it could not be supported.
Nothing in this list was invented or substituted with a guess.

---

## A. Claims deleted from the public site

| Claim | Was on | Why removed |
|---|---|---|
| "Chancellor's International Award" (Warwick) | `_tabs/about.md` | Confirmed not held. Deleted, not replaced. |
| "GPA: 4.0/4.0" (Warwick) | `_tabs/about.md` | Warwick does not issue a 4.0 GPA; no such figure exists. Deleted, not replaced. |
| "Outstanding Graduate (Top 5%)" (Southeast University) | `_tabs/about.md` | Award not in the ground-truth list and not evidenced in the repo. Removed. **Confirm if you want it restored.** |
| "4 Publications · 18 Citations · h-index 1 · i10-index 1" | `_tabs/analytics.md`, `_tabs/projects.md` | Hardcoded metrics with no as-of date, presented alongside a `{{ site.time }}` "Last updated" string that implied a live Scholar refresh. All removed; Google Scholar is now linked as the canonical record. |
| "Real publication data from 2021 to present" | `_tabs/analytics.md` | Earliest listed item is 2024. Removed. |
| "Climate Policy Integration" project | `_tabs/projects.md` | No output, date range or evidence in the repo beyond a generic description. Removed from Research. |
| "Key Collaborators" list with titles/affiliations (Alasdair Campbell, Shangfeng Du, Catalina Spataru, Georgios Nikiforidis, Y Li, J Ren) | `_tabs/analytics.md` | Job titles and affiliations for third parties, unverifiable from the repo, and one entry ("School of Chemical Engineering, Southeast University" for Shangfeng Du) conflicts with other repo references. Removed rather than corrected. |
| TianSu Energy collaboration paragraph | `_tabs/sponsor.md` | Asserts a commercial relationship not in the ground-truth list. Page unpublished; the paragraph was **not** relocated to About or Contact. **Confirm the relationship if you want it published.** |
| UCL email addresses (`Tianyi.ma.24@ucl.ac.uk`, `haotian.ma.24@ucl.ac.uk`) | `_posts/2025-05-17-17052025.md`, `_posts/2026-03-13-13032026.md` | Removed per instruction, pending confirmation that the account remains active post-award. Both replaced with `Tianyi-ma@outlook.com`. **Confirm whether the UCL address should be restored.** |

---

## B. Employment claims — REMOVED from the public site in the second pass

A repository-wide search for evidence of either employment found **none**:

- No post, page or data file mentions Huawei or GEIRI employment.
- The only Huawei/GEIRI artefacts in the repo are two logo images
  (`images/logos/HW.png`, `images/logos/GEIRI.png`), one of which appears solely as
  decoration in the unrendered `_posts/Template.txt`.
- Two 2024 posts mention "Munich Intersolar Conference Attendance" in a weekly
  time-tracking table. That is conference attendance, not evidence of employment.

The employer names, locations and dates were **retained** because you supplied and
corrected them directly (Huawei end date → Dec 2024; GEIRI location → Berlin /
Birmingham). First-party instruction is the strongest evidence available and is not
"old-file inertia".

Everything below was **removed from `_tabs/about.md`** because nothing in the repository
supports it. Nothing was reworded upward; the figures are reproduced here verbatim so you
can restore any you can evidence.

**Job titles removed** (present only in the pre-refresh file, never confirmed; they read as
self-authored positioning rather than formal titles):

- "Quantitative Researcher — Infrastructure & Energy Investments" (Huawei)
- "Quantitative Analyst — Early-Stage Energy Infrastructure Screening" (GEIRI)

**Quantitative claims removed:**

| Figure | Entry |
|---|---|
| 20-year DCF valuation models for energy-intensive real assets | Huawei |
| Tier III data centre, **12.895 MW** baseline IT load | Huawei |
| Monte Carlo frameworks for return distribution and tail exposure analysis | Huawei |
| Capital allocation across hybrid portfolios (PV, storage, hydrogen) under CAPEX-, total-cost- and emissions-oriented objectives | Huawei |
| **50% CO₂ reduction** within bounded valuation corridors | Huawei |
| Techno-economic inflection thresholds during PEM scale-up, **CAGR 52%** | GEIRI |
| Polarisation **RMSE < 15 mV**, lifetime drift **±3%** | GEIRI |
| **>300** Monte Carlo runs per case; P10/P50/P90 investment ranges | GEIRI |

**What now appears on the page** — employer, location, dates, and a single non-numeric
scope line:

- Huawei European Research Institute — Munich — May 2023 – Dec 2024 —
  "Techno-economic and system modelling of energy infrastructure."
- Global Energy Interconnection Research Institute — Berlin / Birmingham —
  Oct 2021 – Apr 2023 — "Modelling and techno-economic assessment of PEM electrolysis systems."

⚠️ **The two scope sentences were written during this refresh**, inferred from your
publication record rather than from any stated job description. They are deliberately
minimal, but they are still my wording, not yours. **Replace them with your actual role
descriptions, and restore any figures you can evidence.**

---

## C. 2026 IJHE paper — DOI resolved and verified

The proposed DOI **does** resolve. Metadata below was retrieved from the Crossref API
(`https://api.crossref.org/works/10.1016/j.ijhydene.2026.156855`), not from a guess:

- **Title:** Degradation-aware assessment of dominant factors in performance, durability, and cost of proton exchange membrane water electrolysers
- **Authors:** Tianyi Ma; Geng Qiao; Xiaoqiang Zhang; Dehua Hou; Catalina Spataru; Georgios Nikiforidis; Shangfeng Du
- **Journal:** International Journal of Hydrogen Energy
- **Volume:** 264
- **Article number:** 156855
- **Published:** August 2026
- **Publisher:** Elsevier BV
- **Elsevier PII:** S0360319926034932

The entry has been added to `_tabs/publications.md` with the resolved title. Please confirm
the volume number (264) and the author order, which come from Crossref rather than from the
published PDF.

---

## D. Publication metadata that could not be established

| Item | Issue | Action taken |
|---|---|---|
| "Design and Optimization of Binder-Free Rgo/Alo (Oh)/Al2o3 Aerogels for Energy Storage" (G Nikiforidis, S Ishaq, H Ma, Y Li, 2024) | The venue field in the old page contained a truncated fragment of the **title**, not a venue. No real venue is recoverable from the repo. | Listed under "Other" with **year only** (2024). The chemical formula casing was normalised to `RGO/AlO(OH)/Al₂O₃`; the wording is otherwise unchanged. **Confirm the venue** — this may be a preprint. |
| IET Conference Proceedings **CP963** 2025 (44), 149–154 | The conference *name* is not recorded anywhere in the repo, only the proceedings code. | Cited by proceedings code only. **Confirm the conference name** if you want it displayed. |

---

## E. Institution names restored into posts (previously swallowed by AI placeholders)

Where a name was unambiguously recoverable from the same post it was restored; otherwise the
placeholder line was deleted rather than guessed.

| File | Restored to | Basis |
|---|---|---|
| `_posts/2025-05-18-18052025.md` | **Tsinghua University** | Post title and body both name Tsinghua throughout |
| `_posts/2025-05-18-18052025.md` | **Dr. Meng Yao** | Same post: "Dr. Meng Yao received his B.S. degree…" and "Dr. Yao's prior work" |
| `_posts/2025-08-17-17082025.md` | **Institution of Engineering and Technology (IET)** | Expansion of the acronym already present in the same sentence. **Confirm** this is the right organisation rather than a specific named conference. |
| `_posts/2025-08-17-17082025.md` | **SPIES 2025** | Section heading in the same post |
| `_posts/2025-11-19-19112025.md` | **University of Cambridge** | Post title and image alt text |
| `_posts/2025-11-19-19112025.md` | **Contemporary Amperex Technology Co., Limited (CATL)** | Expansion of the acronym already present in the same sentence |

Two placeholders carried no recoverable content and were **deleted** rather than guessed:
`_posts/2025-08-17-17082025.md` line 21 and `_posts/2025-11-19-19112025.md` line 22.
One truncated sentence in `_posts/2025-05-18-18052025.md` ("…two-directional operation using")
was closed off rather than completed.

---

## F. Project status that could not be determined

| Project | Old status | New label | Note |
|---|---|---|---|
| Solar-thermal and PEM electrolysis platform (UCL–SJTU) | "Active" | `2025–2026` (year label, no status) | The source post says a SJTU visit to UCL was planned for the first half of 2026. Whether it happened is not recorded. **Confirm current status.** |
| Energy Storage & Governance (UCL–Tsinghua) | "Active" | removed from Research | Real collaboration with a dated post, but no output recorded. Kept in the writing archive only. **Confirm whether it should appear as a project.** |
| CATL Top-Talent Programme; IET & SPIES conference participation | "2025" | removed from Research | These are exchanges and conference attendance, not projects. Still present as dated posts. |

---

## G. Other items to confirm

- **UCL researcher profile link** (`https://profiles.ucl.ac.uk/101734-haotiantianyi-ma`) was removed
  from About. It is referenced by `_posts/2026-03-13-13032026.md`. Confirm whether the profile
  is still live post-award and whether you want it linked from Contact.
- **ORCID `0009-0008-3022-1636`** is published on the new Contact page, taken from
  `_posts/2026-03-13-13032026.md`. Not independently verified.
- **`yjdai@sjtu.edu.cn`** (Prof. Yanjun Dai, SJTU) is a third-party address in
  `_posts/2025-05-17-17052025.md`. Left untouched as instructed.
- **Funding figures** in `_posts/2025-05-17-17052025.md` (UCL £10,000; SJTU ¥50,000) are
  retained in the post and not evidenced elsewhere in the repo.
- **Giscus / utterances config** still points at the GitHub repository `tianyma/tianyma.github.io`.
  That is the real repository, not a site URL, so it was left unchanged — the `repo_id` is bound
  to it. Only the site `url` moved to `steedpower.com`.

---

## H. Second-pass removals (production audit)

A second audit was run against the refresh branch before merge. These items were removed or
reduced because repository evidence did not support them.

| Claim | Was on | Action | Why |
|---|---|---|---|
| UCL–SJTU "Solar-thermal and PEM electrolysis platform" as a **project** | Research page, home page | **Removed from both** | The only source is `_posts/2025-05-17-17052025.md`, which is titled "Joint Funding **Application**" and is written throughout in proposal language ("Lead Applicants", "Expected Impact", "Planned SJTU visit"). Whether it was funded or started is not recorded anywhere. Presenting a proposal as a running project is an over-claim. **Confirm the outcome and I will restore it with an accurate status.** |
| "UCL Funding: **£10,000**" / "SJTU Funding: **¥50,000**" | `_posts/2025-05-17-17052025.md` | **Amounts removed**, purpose text kept | Specific unverifiable monetary figures on a public page. |
| "Mr. Tianyi MA, **Ph.D. Candidate**, University College London" | `_posts/2025-05-17-17052025.md` | Reduced to "Tianyi Ma, University College London" | Asserted current doctoral candidacy. The PhD was awarded 28 July 2026. |
| "University College London **& Southeast University**" on the PEM electrolyser project | Research page | Reduced to "University College London" | Co-author affiliations are not recorded in the repo. The UCL attribution is supported (Spataru and Nikiforidis are co-authors on the IJHE paper). |
| `🤝 Special Thanks to All of You` linking to `/sponsor/` | Global footer, **every page** (`_data/locales/en.yml`) | Removed (`meta: ''`) | Pointed at the now-unpublished sponsor page — a **404 on every page of the site**. The markup was also malformed (`</href>` instead of `</a>`), leaving the `<a>` unclosed. |

### Still unverified and still on the site

- **UCL–Tsinghua collaboration** (`_posts/2025-05-18-18052025.md`). Self-authored, dated,
  describes an "ongoing" collaboration as of May 2025. Left as a dated archive record; it is
  **not** presented as a project on any professional page. Confirm whether it is still active.
- **CATL Top-Talent Programme** (`_posts/2025-11-19-19112025.md`). Self-authored record of
  attendance. Not on any professional page. No award or selection claim is made.
- **"Distinction"** on the Warwick MScR and Nottingham MSc entries, and the Warwick/Nottingham
  date ranges. These come from your pass-one ground-truth list, not from the repo.
