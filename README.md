<div align="center">
  <h1>Quiz Contest</h1>
  <p><strong>A dependency-free, bilingual browser application for Brazilian public-exam preparation, deterministic written-exam sessions and LocalStorage-backed mistake review.</strong></p>
  <p>
    <a href="https://degsterin.github.io/quiz-contest/"><img alt="Live demo" src="https://img.shields.io/badge/live%20demo-GitHub%20Pages-2ea44f?style=flat-square&logo=github"></a>
    <img alt="Vanilla JavaScript" src="https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=111111">
    <img alt="LocalStorage persistence" src="https://img.shields.io/badge/persistence-LocalStorage-1d6f5f?style=flat-square">
    <img alt="Portuguese and British English" src="https://img.shields.io/badge/i18n-pt--BR%20%7C%20en--GB-2b2f31?style=flat-square">
    <a href="LICENSE"><img alt="MIT licence" src="https://img.shields.io/github/license/DegsTerin/quiz-contest?style=flat-square"></a>
  </p>
  <p>
    <a href="https://degsterin.github.io/quiz-contest/">Open the live application</a>
    ·
    <a href="https://github.com/DegsTerin/quiz-contest">Browse the source</a>
  </p>
</div>

![Quiz Contest demonstration in dark mode and British English](docs/quiz-contest-dark-en-gb.gif)

## Overview

Quiz Contest is a browser-based study application for Brazilian public-service competitions. It combines profile-specific exam sessions, isolated progress, bilingual question banks and a step-based mistake-review loop in a static site that can be deployed without a build pipeline or application server.

The product deliberately keeps its runtime boundary small: the browser renders the interface, runs the quiz engine and stores progress. There is no backend, account system or external service involved in a study session.

| Area | Implementation |
| --- | --- |
| Runtime | Browser-only HTML, CSS and vanilla JavaScript |
| Content | Two profiles and 100 active questions |
| Session strategies | Written-exam sequence for Bruno; study-oriented randomisation for Maria and review queues |
| Persistence | Versioned LocalStorage state, isolated by profile |
| Localisation | pt-BR by default, with an en-GB experience |
| Delivery | Static hosting through GitHub Pages; no build step |

## Product Capabilities

| Capability | Behaviour |
| --- | --- |
| Independent profiles | Bruno and Maria use separate question banks, progress records and session policies. |
| Written-exam fidelity | Bruno's full quiz follows the notice subject order and keeps a deterministic A–E answer layout. |
| Study variation | Maria's full quiz and mistake-review queues randomise questions and alternatives. |
| Immediate feedback | Every answer is evaluated in the browser and followed by an explanation. |
| Adaptive mistake review | Incorrect answers are scheduled to reappear; consecutive correct answers clear the review requirement. |
| Durable local progress | Totals, per-question history, selected profile, language and theme survive page reloads. |
| Bilingual interface | Controls, questions, alternatives and explanations are available in pt-BR and en-GB. |
| Responsive themes | The interface supports light and dark themes across desktop and narrow viewports. |
| Zero-install delivery | There are no runtime packages, server processes or environment variables to configure. |

## Study Engine

### Full quiz

A session policy is selected from the active profile:

- Bruno's main queue preserves the authored 1–40 written-exam sequence.
- Bruno's A–E alternatives use a seeded deterministic permutation derived from the question ID. This keeps the layout stable without exposing the answer-key pattern.
- Maria's main queue is randomised and gives greater priority to questions with a lower correct-answer streak.
- Review queues can randomise alternatives so that study recall does not depend on a memorised position.

### Mistake review

The review mechanism is based on answered-question steps, not elapsed time:

1. An incorrect answer marks the question as needing review and schedules it for the next review step.
2. Due review items are shuffled before they are presented.
3. A correct review answer increases the streak and, while the question is not yet mastered, schedules it at a longer step interval.
4. Two consecutive correct answers clear the review requirement.
5. State is saved after every answer.

This is a focused in-session learning loop rather than a time-based spaced-repetition system.

## Question Banks and Provenance

| Profile | Active bank | Main-session behaviour |
| --- | --- | --- |
| Bruno | 40 author-created, non-official practice questions aligned with Massaranduba Municipal Public Competition Notice 001/2026 for IT Technician | Fixed written-exam order with stable alternatives |
| Maria | 60 original FURB objective-test questions for AEE/Mixed and Libras Interpreter roles, SED/SC Notice 793/2026, with the preliminary answer key | Randomised, streak-aware study order |

### Bruno written-exam sequence

| Question range | Subject | Questions | Notice points each | Notice total |
| --- | --- | ---: | ---: | ---: |
| 1–8 | Portuguese Language | 8 | 2 | 16 |
| 9–16 | Mathematics and Logical Reasoning | 8 | 2 | 16 |
| 17–20 | General Knowledge | 4 | 2 | 8 |
| 21–40 | Role-Specific Knowledge | 20 | 3 | 60 |
| **Total** |  | **40** |  | **100** |

Every active question has five alternatives and one designated answer. Bruno's questions and explanations are independent study material; they are not copied from an official test and do not constitute an official answer key.

The dashboard intentionally reports raw correct-answer counts and accuracy. It does not calculate the notice-weighted score or determine whether an official pass threshold has been met.

## Architecture

~~~mermaid
flowchart LR
  Host["GitHub Pages or a static server"] --> UI

  subgraph Browser["Browser runtime"]
    UI["index.html + style.css"]
    Engine["app.js<br/>rendering, sessions, review and i18n"]
    Banks["Question-bank and en-GB scripts"]
    State[("Versioned LocalStorage")]

    UI <--> Engine
    Banks --> Engine
    Engine <--> State
  end
~~~

### Runtime boundary

- The application loads classic JavaScript files directly from the static host.
- There is no API, backend, database, server-side session, authentication or authorisation flow.
- The application does not handle credentials, access tokens, refresh tokens, cookies or secrets.
- Progress is not uploaded and there is no cross-device synchronisation.
- Localisation dictionaries ship with the application; no translation API is called at runtime.
- No package manager, framework or build output is required.

## State, Privacy and Security Boundary

The application stores only study state and interface preferences in the current browser origin.

| LocalStorage key | Purpose |
| --- | --- |
| <code>static-quiz-system-state-v3-bruno</code> | Bruno's totals and per-question progress |
| <code>static-quiz-system-state-v2-maria</code> | Maria's totals and per-question progress |
| <code>static-quiz-system-active-profile</code> | Last selected profile |
| <code>static-quiz-system-active-language</code> | Last selected language |
| <code>static-quiz-system-theme</code> | Last selected theme |

Per-question state records correct and incorrect totals, the current streak, the last result, whether review is required and the number of review attempts.

<code>Reset Progress</code> removes only the active profile's versioned progress record. The other profile and interface preferences remain available.

LocalStorage is browser-local, unencrypted and removable through browser settings. The application does not request sensitive personal data, and progress should not be treated as a portable backup.

## Internationalisation

pt-BR is the default experience. The en-GB mode is implemented with static, ID-based dictionaries:

- interface copy and category labels live in <code>app.js</code>;
- shared and legacy question translations live in <code>questions-en.js</code>;
- active profile translations live in <code>bruno-hard-questions-en.js</code> and <code>maria-hard-questions-en.js</code>.

Questions, alternatives and explanations switch without restarting the session. Portuguese source passages may remain in Portuguese where the language itself is the subject being assessed.

## Accessibility and Responsive Behaviour

The interface includes practical accessibility and responsive behaviours:

- native button controls for primary actions and alternatives;
- <code>aria-pressed</code> state for profile, language and theme controls;
- polite <code>aria-live</code> announcements for questions and feedback;
- programmatic focus movement when a new question or completion state is rendered;
- visible keyboard focus styling;
- responsive layouts at 840 px and 520 px breakpoints.

These implementation details are not a formal WCAG conformance claim.

## Repository Structure

| Path | Responsibility |
| --- | --- |
| <code>index.html</code> | Semantic page structure, controls and script loading |
| <code>style.css</code> | Responsive layout, design tokens, themes and component states |
| <code>app.js</code> | Rendering, localisation, session scheduling, review logic and persistence |
| <code>questions.js</code> | Question factory, base banks, profile metadata and registry |
| <code>bruno-hard-questions.js</code> | Active Massaranduba IT Technician practice bank |
| <code>maria-hard-questions.js</code> | Active FURB AEE/Mixed and Libras bank |
| <code>questions-en.js</code> | Shared and legacy en-GB question translations |
| <code>bruno-hard-questions-en.js</code> | en-GB translations for Bruno's active bank |
| <code>maria-hard-questions-en.js</code> | en-GB translations for Maria's active bank |
| <code>docs/quiz-contest-dark-en-gb.gif</code> | Animated README demonstration |
| <code>LICENSE</code> | MIT licence terms and copyright notice |

## Run Locally

No dependency installation is required.

~~~bash
git clone https://github.com/DegsTerin/quiz-contest.git
cd quiz-contest
python -m http.server 8000
~~~

Open <http://localhost:8000> in a browser.

Opening <code>index.html</code> directly is also supported by the current architecture, but a local static server more closely matches the deployed HTTP environment.

## Deployment

The live application is available at [degsterin.github.io/quiz-contest](https://degsterin.github.io/quiz-contest/).

The repository keeps <code>index.html</code> and all runtime assets at the root, so the same files can be served by GitHub Pages or another static host. There is no compilation step or generated distribution directory.

## Engineering Decisions

| Decision | Rationale | Trade-off |
| --- | --- | --- |
| Static browser-only architecture | Minimises deployment and operational complexity | No accounts, server validation or cross-device synchronisation |
| Versioned per-profile LocalStorage | Prevents unrelated profiles and incompatible bank revisions from sharing state | Progress remains tied to one browser and breaking revisions may start with fresh state |
| Profile-specific session policies | Preserves written-exam fidelity for Bruno while retaining study variation for Maria | The engine must maintain both deterministic and randomised paths |
| Seeded Bruno answer ordering | Produces a stable paper-style A–E layout without exposing the source-key sequence | Deliberate reshuffling requires a seed or question-ID change |
| Static localisation dictionaries | Removes runtime translation dependencies and keeps copy reviewable in source control | Translation parity must be maintained when content changes |

## Development Quality Gate

The repository does not currently include a package manifest, automated test suite or CI workflow. A safe content or engine change should therefore include, at minimum:

- JavaScript syntax checks for every script;
- a browser smoke test in pt-BR and en-GB;
- a full-session check for both profiles;
- verification of question counts, five-option shape and translation coverage;
- a LocalStorage compatibility check for both versioned profile keys.

Automating these checks is the highest-priority engineering improvement.

## Roadmap

- Add a checked-in regression suite for question-bank, ordering and storage invariants.
- Run the regression suite through GitHub Actions.
- Add progress export and import.
- Add notice-weighted score calculation as a clearly separate result.
- Add subject-level filters, analytics and keyboard shortcuts.

## Licence

Quiz Contest is released under the [MIT License](LICENSE).

Copyright (c) 2026 Bruno Araújo - DegsTerin.

## Disclaimer

Quiz Contest is an independent educational project. Bruno's profile is author-created and non-official. Maria's profile preserves source exam wording and a preliminary answer key. Candidates should always consult the applicable notice, amendments and final official answer key as the authoritative sources.

## Maintainer

Built and maintained by [DegsTerin](https://github.com/DegsTerin).
