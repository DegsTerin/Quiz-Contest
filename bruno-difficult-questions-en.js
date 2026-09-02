Object.assign(EN_QUESTION_TRANSLATIONS, {
  "bruno-massaranduba-2026-difficult-01": {
    prompt: "Read the passage: \"At 9 a.m., the system became slow. Restarting the service did not change the situation. At 10 a.m., enabling the secondary link reduced latency, although the server load remained unchanged.\" Which inference is supported by the information without going beyond it?",
    options: [
      "The network path contributed to the latency, but the passage does not show that it was the only possible cause.",
      "The stable load proves that the server remained the main cause and that changing the link merely masked the problem.",
      "The restart produced a temporary improvement, although the passage states that it did not change the situation before 10 a.m.",
      "Enabling the secondary link reduced server load because lower latency necessarily implies lower CPU usage.",
      "The fall in latency proves a permanent resolution, even without later measurements or investigation of other causes."
    ],
    explanation: "The only change associated with lower latency was the network path. This supports its contribution to the problem, but does not prove an exclusive cause or complete resolution."
  },
  "bruno-massaranduba-2026-difficult-02": {
    prompt: "Read this Portuguese passage: \"O diagnóstico de 2026 retomou as metas do plano de 2024. Esse plano previa revisão anual. 'Sem medir resultados, não há política sustentável', registrava ainda um parecer de 2022. Por isso, a equipe manteve indicadores comparáveis.\" Select the correct analysis of its textual construction.",
    options: [
      "The expression \"Esse plano\" anticipates the 2022 opinion, the quotation is indirect speech, and \"Por isso\" opposes the diagnosis.",
      "The expression \"Esse plano\" refers back to the 2024 plan; the quotation creates explicit intertextuality; and \"Por isso\" introduces a conclusion.",
      "The expression \"Esse plano\" refers to the targets, but the quotation removes the current voice and \"Por isso\" merely orders the dates chronologically.",
      "The dates provide enough temporal sequence to dispense with referential cohesion and turn the quotation into a simple paraphrase.",
      "The expression \"ainda\" replaces \"equipe\" as an anaphoric pronoun, and \"Por isso\" refers only to the expression \"revisão anual\"."
    ],
    explanation: "The demonstrative refers back to the plan already mentioned; the identified reproduction of another opinion creates an intertextual relationship; and the conclusive expression connects the decision to the preceding premises."
  },
  "bruno-massaranduba-2026-difficult-03": {
    prompt: "A municipal guide contains two passages. The first explains how soil sealing increases surface run-off. Under the heading \"Procedimentos obrigatórios\", the second states: \"Desligue a energia, procure um local elevado e aguarde o aviso da Defesa Civil.\" Which classification correctly combines discourse organisation and text type?",
    options: [
      "The first is narrative in a historical account; the second is descriptive in an informative notice.",
      "The first is injunctive in a normative text; the second is argumentative in a didactic text that defends a thesis.",
      "The first is descriptive in a technical entry; the second is expository in a rule that merely explains a phenomenon.",
      "The first is expository in a didactic text; the second is injunctive in a normative guidance text.",
      "Both are narrative because the causal relationship and imperative verbs arrange events in chronological sequence."
    ],
    explanation: "Explaining a causal relationship is exposition with a didactic purpose; directing the reader's conduct is injunction in guidance of a normative nature."
  },
  "bruno-massaranduba-2026-difficult-04": {
    prompt: "In the Portuguese sentence \"Somente após a auditoria os técnicos que haviam alterado a rota apresentaram os registros ao gestor\", the initial expression restricts the time of presentation, and the relative clause restricts the group of technicians. Which reordering preserves both meanings?",
    options: [
      "Os técnicos que haviam alterado a rota apresentaram os registros ao gestor somente após a auditoria.",
      "Somente os técnicos, que haviam alterado a rota, apresentaram após a auditoria os registros ao gestor.",
      "Após a auditoria, os técnicos apresentaram somente os registros que haviam alterado a rota ao gestor.",
      "Os técnicos, que haviam alterado a rota, somente apresentaram os registros após a auditoria ao gestor.",
      "Os registros somente após a auditoria apresentaram ao gestor os técnicos que haviam alterado a rota."
    ],
    explanation: "The wording keeps \"somente\" next to the temporal adjunct and retains the relative clause without commas, restricting the antecedent \"técnicos\"."
  },
  "bruno-massaranduba-2026-difficult-05": {
    prompt: "In a formal report, the statement O técnico afirmou: \"Não reiniciarei o servidor antes da cópia.\" must be converted into indirect speech. Which version preserves the meaning, uses appropriate punctuation, and maintains a formal register and referential function?",
    options: [
      "O técnico afirmou, \"que não reiniciará o servidor antes da cópia\".",
      "O técnico afirmou: que não reiniciaria o servidor antes da cópia.",
      "O técnico falou que não vai reiniciar o servidor antes da cópia, beleza?",
      "O técnico afirmou que não reiniciaria o servidor antes da cópia.",
      "O técnico afirmou que: não reiniciaria, o servidor antes da cópia."
    ],
    explanation: "In indirect speech, the conjunction \"que\" introduces the clause without a colon or quotation marks; with the reporting verb in the past, the future is appropriately shifted to the conditional form in Portuguese."
  },
  "bruno-massaranduba-2026-difficult-06": {
    prompt: "Analyse the Portuguese sentence: \"Infelizmente, a desconfiguração talvez tenha tornado o serviço inutilizável.\" Which statement correctly identifies word classes, word formation, and modality?",
    options: [
      "\"Infelizmente\" is an abstract noun; \"talvez\" expresses certainty; \"desconfiguração\" is a verb form; and \"inutilizável\" acts as an adverb.",
      "\"Desconfiguração\" is a primitive word; \"infelizmente\" and \"talvez\" are adjectives; \"inutilizável\" marks certainty, and the sentence contains no evaluation.",
      "\"Infelizmente\" is an evaluative adverb; \"talvez\" marks possibility; \"desconfiguração\" is a derived noun; and \"inutilizável\" is an adjective.",
      "\"Talvez\" is a causal conjunction; \"desconfiguração\" is a derived pronoun; and the prefixes in \"infelizmente\" and \"inutilizável\" indicate repetition.",
      "\"Infelizmente\" and \"talvez\" are time adverbs linked to \"tenha tornado\", whilst \"inutilizável\" names the process as a noun."
    ],
    explanation: "The adverbs mark evaluation and possibility respectively. \"Desconfiguração\" is formed by derivation and names a process; \"inutilizável\" attributes a property to the service."
  },
  "bruno-massaranduba-2026-difficult-07": {
    prompt: "A general dictionary records two senses of the Portuguese word \"nuvem\": the meteorological sense and, under the domain label \"Informática\", remote computing resources. Consider: I. The label delimits a specialist use. II. Context resolves the polysemy in \"Os arquivos serão mantidos na nuvem\". III. In that notice, replacing \"nuvem\" with \"Internet\" would necessarily preserve the same precision. Which statements are correct?",
    options: [
      "I only.",
      "III only.",
      "I and II only.",
      "II and III only.",
      "I, II, and III."
    ],
    explanation: "The label marks the technical domain, and context selects that polysemous sense. \"Internet\" and \"nuvem\" are not necessarily equivalent: cloud services use networks but designate a particular resource architecture."
  },
  "bruno-massaranduba-2026-difficult-08": {
    prompt: "Consider the Portuguese sentences: I. \"À medida que avançava, o técnico pôde concluir que o defeito não se devia à instalação.\" II. \"Daqui a duas horas, a equipe retornará à sala e entregará o relatório àquela gestora.\" III. \"Os itens permanecem à disposição de quem vier a revisá-los.\" Which are correct in spelling, accentuation, and use of the grave accent indicating crasis?",
    options: [
      "I only.",
      "II only.",
      "I, II, and III.",
      "I and III only.",
      "II and III only."
    ],
    explanation: "All three are correct: crasis occurs in \"à medida que\", in the constructions with \"instalação\" and \"sala\", before \"aquela\", and in \"à disposição\"; it does not occur in \"daqui a\" or before an infinitive."
  },
  "bruno-massaranduba-2026-difficult-09": {
    prompt: "A 2.4 TB storage device, using decimal units, was 5/8 full. A total of 180 GB was removed and then 135 GB was copied to it. What is the final usage in gigabytes and as an irreducible fraction of total capacity?",
    options: [
      "1,365 GB and 91/160.",
      "1,455 GB and 97/160.",
      "1,455 GB and 97/100.",
      "1,635 GB and 109/160.",
      "1,275 GB and 17/32."
    ],
    explanation: "As 2.4 TB is 2,400 GB, initial usage was 2,400 × 5/8 = 1,500 GB. After the operations: 1,500 − 180 + 135 = 1,455 GB; 1,455/2,400 reduces to 97/160."
  },
  "bruno-massaranduba-2026-difficult-10": {
    prompt: "Six technicians configure 180 computers in 5 hours with equal and constant productivity. A new procedure reduces each technician's productivity by 20%. How many technicians are required to configure 288 computers in 6 hours under the new procedure?",
    options: [
      "10 technicians.",
      "8 technicians.",
      "9 technicians.",
      "12 technicians.",
      "15 technicians."
    ],
    explanation: "Original productivity is 180 ÷ (6 × 5) = 6 computers per technician-hour. After a 20% reduction, it is 4.8. Therefore, 288 ÷ (6 × 4.8) = 10 technicians."
  },
  "bruno-massaranduba-2026-difficult-11": {
    prompt: "A reserve of R$10,000.00 earns compound interest of 10% per period for three periods. At the end, three expenses forming the arithmetic progression R$200.00, R$300.00, and R$400.00 are withdrawn. What balance remains?",
    options: [
      "R$12,100.00.",
      "R$12,310.00.",
      "R$13,410.00.",
      "R$12,410.00.",
      "R$14,210.00."
    ],
    explanation: "The amount is 10,000 × 1.10³ = R$13,310.00. The progression totals R$900.00, leaving R$12,410.00."
  },
  "bruno-massaranduba-2026-difficult-12": {
    prompt: "Over the real numbers, solve log₂(x − 1) + log₂(x + 1) = 3.",
    options: [
      "x = −3.",
      "x = −1.",
      "x = 1.",
      "x = √8.",
      "x = 3."
    ],
    explanation: "The domain requires x > 1. By the logarithm product rule, log₂[(x − 1)(x + 1)] = 3, so x² − 1 = 8 and x = ±3. Only x = 3 is in the domain."
  },
  "bruno-massaranduba-2026-difficult-13": {
    prompt: "A table relates concurrent users x to latency f(x): (20, 35 ms), (50, 50 ms), and (80, 65 ms). Assuming the graph is a straight line, which function models the data and what is the greatest number of users that keeps latency at no more than 60 ms?",
    options: [
      "f(x) = x + 15; no more than 45 users.",
      "f(x) = 0.5x + 15; no more than 90 users.",
      "f(x) = 0.5x + 25; no more than 70 users.",
      "f(x) = 2x − 5; no more than 32 users.",
      "f(x) = 25x + 0.5; no more than 2 users."
    ],
    explanation: "The change is 15 ms for 30 users, giving a slope of 0.5. Using (20, 35) gives an intercept of 25. Solving 0.5x + 25 ≤ 60 gives x ≤ 70."
  },
  "bruno-massaranduba-2026-difficult-14": {
    prompt: "Consider the parametric system (k − 1)x + 2y = 4 and 2x + 4y = 8. Which classification correctly relates parameter k to the number of solutions?",
    options: [
      "For k = 2, the system is inconsistent; for k ≠ 2, it has infinitely many solutions.",
      "For k = 2, it has infinitely many solutions; for k ≠ 2, it has a unique solution.",
      "For every real k, the system has exactly one solution.",
      "For k = 1, it has infinitely many solutions; for every other value, it is inconsistent.",
      "For k = 2, it has a unique solution; for k ≠ 2, it is inconsistent."
    ],
    explanation: "The determinant of [[k − 1, 2], [2, 4]] is 4(k − 2). For k ≠ 2, it is non-zero and there is a unique solution. For k = 2, the first equation is half the second, giving infinitely many solutions."
  },
  "bruno-massaranduba-2026-difficult-15": {
    prompt: "A cable will run in a straight line between opposite corners of an 8 m by 6 m room and must also cover a vertical difference of 2.4 m. Allowing for the three-dimensional route and adding 5% slack, approximately what minimum length should be purchased?",
    options: [
      "10.3 m.",
      "10.5 m.",
      "10.6 m.",
      "10.8 m.",
      "12.4 m."
    ],
    explanation: "The spatial diagonal is √(8² + 6² + 2.4²) = √105.76 ≈ 10.284 m. Including 5% slack gives 10.284 × 1.05 ≈ 10.8 m."
  },
  "bruno-massaranduba-2026-difficult-16": {
    prompt: "Of eight distinct devices, three are servers and five are workstations. Three devices are selected at random without replacement. What is the probability that the selection contains exactly two servers and one workstation?",
    options: [
      "12/56.",
      "5/28.",
      "15/56.",
      "5/14.",
      "3/8."
    ],
    explanation: "There are C(8,3) = 56 possible selections. The favourable selections are C(3,2) × C(5,1) = 3 × 5 = 15, so the probability is 15/56."
  },
  "bruno-massaranduba-2026-difficult-17": {
    prompt: "An exhibition about Massaranduba presents, in order, evidence of Indigenous presence, documents recording the arrival of German, Italian, Polish, and Luso-Brazilian groups around 1870, and later records of the consolidation of irrigated rice cultivation. Which interpretation respects the evidence and avoids anachronism?",
    options: [
      "The Indigenous evidence can be dated only from the 1870 documents and therefore does not indicate a presence before the recorded European settlement.",
      "The arrival of different groups in the nineteenth century explains Indigenous presence as a direct result of immigration and begins all regional occupation.",
      "The later prominence of rice allows the same activity to be assigned to every group from arrival, although the exhibition separates the periods.",
      "Local history combines earlier Indigenous presence, later settlement by different groups, and an economic transformation in which irrigated rice became prominent.",
      "The consolidation of rice ended all other economic activities, a conclusion proved by the order of the records without requiring further evidence."
    ],
    explanation: "This interpretation preserves the documented sequence and distinguishes earlier presence, plural settlement, and later economic development without reversing causes or excluding other activities."
  },
  "bruno-massaranduba-2026-difficult-18": {
    prompt: "Massaranduba is part of the Itapocu Valley, includes areas within the Itapocu River basin, and combines the importance of irrigated rice with industrial and service activities. Which territorial diagnosis properly relates geography and the economy?",
    options: [
      "Diversification reduces dependence on rice, so water management can be restricted to irrigated holdings without considering towns or roads.",
      "Water and land management must consider the basin: irrigation, urban areas, industry, roads, and municipalities share upstream and downstream risks and resources.",
      "Because irrigation depends on the basin, managing abstraction within the municipality is sufficient, as upstream and downstream uses do not affect supply or floods.",
      "Intermunicipal coordination should be limited to industry because farming, urban drainage, and roads produce effects only within each locality.",
      "Industrial growth replaced the economic role of rural areas, so drought affects farming but has no consequences for logistics or services."
    ],
    explanation: "Water, drainage, land occupation, and economic circulation cross municipal boundaries. Basin analysis connects rural production, urban activities, infrastructure, and risk prevention."
  },
  "bruno-massaranduba-2026-difficult-19": {
    prompt: "A public dashboard reports growth in formal employment, stable school attendance, and a fall in the coverage of a preventive health measure. Which conclusion supports a responsible decision about this social and economic situation?",
    options: [
      "The timing permits the conclusion that employment caused the preventive decline; because attendance did not change, education needs no further investigation.",
      "Stable attendance is sufficient to prove learning, so assessment resources can be transferred entirely to preventive health services.",
      "The indicators measure different dimensions; data must be disaggregated, causes investigated, and the preventive decline addressed without inferring causality or abandoning education monitoring.",
      "The employment gain offsets the preventive decline and permits reduced health measures provided that school attendance remains unchanged in the dashboard.",
      "Differences between dimensions make the dashboard methodologically invalid; it should be discarded without checking series, segments, definitions, or responsible sources."
    ],
    explanation: "Temporal correlation does not prove causation. Employment, attendance, and prevention measure different dimensions and require complementary data, distributional analysis, and specific responses."
  },
  "bruno-massaranduba-2026-difficult-20": {
    prompt: "A consortium intends to expand solar generation and battery storage, but some minerals and components come from concentrated international supply chains. Which strategy integrates technology, energy, geopolitics, sustainability, and ecology?",
    options: [
      "Prioritise the lowest initial cost and the manufacturer's warranty, leaving mineral origin, maintenance, and disposal for assessment only after purchase.",
      "Suspend batteries and retain solar generation alone because removing storage would eliminate mineral impacts without creating operational risks for the grid.",
      "Concentrate purchases with one international supplier under a long contract, treating scale and price as substitutes for logistical diversification.",
      "Compare efficiency and operational emissions but exclude mining, manufacture, transport, and end of life because they occur outside the consuming territory.",
      "Plan the grid and storage, diversify suppliers, assess the life cycle, require traceability and recycling, and mitigate impacts on water, soil, and biodiversity."
    ],
    explanation: "The energy transition requires technical reliability and analysis of the whole supply chain. Diversification, circularity, traceability, and environmental protection reduce geopolitical and socio-environmental risks."
  },
  "bruno-massaranduba-2026-difficult-21": {
    prompt: "A USB scanner powers on normally, but Windows identifies it as an unknown device. The same cable and port recognise another peripheral, and the scanning application reports that no source is available. Which initial diagnosis correctly integrates hardware, peripheral, and software evidence?",
    options: [
      "Enumeration as an unknown device confirms an internal fault, so the scanner should be replaced before available identifiers or drivers are checked.",
      "Because another peripheral works, the cable and port are validated for every USB class; only the scanning application should be reinstalled.",
      "The port and cable show signs of working; the compatible driver should be checked and installed, then the scanner selected and tested in the application.",
      "The scanner should be configured as an output device and the print service reinstalled because scanning sends data to the computer.",
      "The first step is to recreate the user profile and application cache even though Windows has not yet identified the device correctly."
    ],
    explanation: "The tests reduce the likelihood of a cable or port fault. Generic identification and the missing source in the application point first to a driver or software integration issue."
  },
  "bruno-massaranduba-2026-difficult-22": {
    prompt: "Analyse the statements about computer architecture. I. The address bus identifies memory or device locations, whilst the data bus carries values. II. RAM is volatile, and cache levels close to the processor reduce average access time for frequently used data. III. Every physically x16 PCI Express connector necessarily provides sixteen electrical lanes. Which statements are correct?",
    options: [
      "I only.",
      "I and II only.",
      "II and III only.",
      "I and III only.",
      "I, II, and III."
    ],
    explanation: "I and II correctly describe functions and properties. A slot with an x16 physical form may be electrically wired with fewer lanes, so statement III is absolute and false."
  },
  "bruno-massaranduba-2026-difficult-23": {
    prompt: "After a new NVMe SSD is installed, UEFI firmware lists it with the correct capacity, but Windows 10 does not show it in File Explorer. Disk Management shows the device as \"Not initialised\" and all its space as \"Unallocated\". Assuming there is no data to preserve, what action is appropriate?",
    options: [
      "Update UEFI before preparing the disk, although both firmware and Windows already detect the device and its capacity.",
      "Initialise the disk, create a volume, format it with an appropriate file system, and assign a drive letter.",
      "Reinstall only the controller driver and wait for unallocated space to turn into a volume automatically.",
      "Enable RAID, convert the disk, and create an array despite there being no second device or redundancy requirement.",
      "Reflash the SSD firmware before checking its partition table even though the hardware is enumerated correctly."
    ],
    explanation: "UEFI and Disk Management already detect the hardware. The storage must still be prepared logically so that a file system can be mounted and shown in File Explorer."
  },
  "bruno-massaranduba-2026-difficult-24": {
    prompt: "A workstation connected to a UPS shuts down only during CPU-intensive tests. The UPS shows a 35% load and stable output readings, whilst the CPU reaches 98 °C and the processor fan reports 0 RPM. Which procedure is best supported by the evidence?",
    options: [
      "Replace the UPS first because its 35% average reading might conceal peaks, without investigating the stopped fan or the 98 °C reading.",
      "Update firmware and raise the thermal limit before opening the case, keeping the load test running to see whether protection stops operating.",
      "Power down the workstation; inspect fan power and mounting, the heat sink, airflow, and thermal compound; correct faults and repeat a monitored test.",
      "Replace only the thermal compound and repeat the load test even if the fan still reports 0 RPM and its power has not been checked.",
      "Replace the internal power supply based on the shutdown without testing cooling because stable UPS output does not report CPU temperature."
    ],
    explanation: "The evidence weighs against UPS overload and points to a cooling fault. Thermal protection must not be bypassed; ventilation and heat dissipation must be corrected with the equipment powered down."
  },
  "bruno-massaranduba-2026-difficult-25": {
    prompt: "In Windows 10, an NTFS folder grants Modify to the Technicians group. The same user also belongs to the Temporary group, which has an explicit Deny Write permission on that folder. No other rule applies. What is the effective access?",
    options: [
      "Combine the groups' permissions and allow writing because Modify includes that right and was granted through a technical group.",
      "The user can read the permitted content but cannot write because an applicable explicit denial takes precedence for that right.",
      "Apply the denial only when it is assigned directly to the user because a denial inherited through group membership would not enter the effective-access calculation.",
      "Select the rule belonging to the group listed first in the ACL and ignore the user's other memberships when checking the write right.",
      "Deny read and execute as well because a write denial inherited through one group would automatically remove every other granted right."
    ],
    explanation: "Effective permissions combine applicable grants, but an explicit denial takes precedence for the denied right. It does not automatically remove distinct rights such as reading."
  },
  "bruno-massaranduba-2026-difficult-26": {
    prompt: "A Microsoft Word manual needs numbered chapters, different headers by section, figure captions, cross-references, and an updateable table of contents. After pages are inserted, all numbering must remain coherent. Which workflow meets the complete requirement?",
    options: [
      "Use direct formatting for headings, page breaks between chapters, and typed text for captions and references, updating numbers manually at the end.",
      "Link a multilevel list to heading styles, use section breaks, unlink each header from the previous section, insert captions and cross-references as fields, and update all fields and the table of contents.",
      "Apply heading styles and generate the table of contents, but keep one section, insert captions without automatic labels, and type references and numbers; then regenerate only the contents after each change.",
      "Separate chapters with section breaks, but format headings as body text, lock fields, and use independent text boxes for every reference.",
      "Create a table to imitate the contents page, use footnotes as captions, and restart figure numbering whenever a page is inserted."
    ],
    explanation: "Styles linked to the list structure and number chapters; a break creates sections, and turning off Link to Previous allows different headers. Captions and cross-references use fields, whose update propagates changes in text, order, and pagination."
  },
  "bruno-massaranduba-2026-difficult-27": {
    prompt: "In Brazilian Portuguese Excel, column A contains the department, B the status, and C the cost. Which formula sums costs for rows where the department is \"TI\" and the status is \"Ativo\"?",
    options: [
      "=SOMASE(A2:A100;\"TI\";B2:B100;\"Ativo\";C2:C100)",
      "=SOMA(A2:A100=\"TI\";B2:B100=\"Ativo\";C2:C100)",
      "=CONT.SES(A2:A100;\"TI\";B2:B100;\"Ativo\";C2:C100)",
      "=SOMASES(C2:C100;A2:A100;\"TI\";B2:B100;\"Ativo\")",
      "=SOMASES(A2:A100;C2:C100;\"TI\";B2:B100;\"Ativo\")"
    ],
    explanation: "SOMASES takes the range to sum first, followed by range-and-criterion pairs. It therefore sums C where A is \"TI\" and B is \"Ativo\"."
  },
  "bruno-massaranduba-2026-difficult-28": {
    prompt: "A team is preparing a restricted presentation. Authors must alter the file, reviewers may only comment, and external guests may only view it. The result will be checked in PowerPoint and distributed through an Outlook invitation. Which workflow configures and proves access correctly?",
    options: [
      "Give all three groups the Editor role, rely on email guidance to restrict reviewers and guests, and validate in PowerPoint only with the owner's account without simulating the other identities.",
      "Set authors as Commenters, reviewers as Viewers, and guests as Editors, then validate the link only in an author's existing authenticated session.",
      "Set authors as Editors, reviewers as Commenters, and guests as Viewers; test each role with representative accounts, check the file in PowerPoint, and send the validated link through Outlook.",
      "Publish the file on the Web without restriction and give only authors the Viewer role; treat anonymous opening as equivalent to testing all three roles.",
      "Keep the file private to its owner, attach copies in Outlook, and test appearance in a browser without verifying that commenting and editing are actually blocked."
    ],
    explanation: "The roles apply the required least privilege. Tests with representative identities prove actual behaviour, whilst PowerPoint, Outlook, and the browser validate content, distribution, and access."
  },
  "bruno-massaranduba-2026-difficult-29": {
    prompt: "There is an intact full backup from Sunday and incremental backups from Monday, Tuesday, and Wednesday. Tuesday's incremental is corrupt; the other files are intact, and there is no other copy of Tuesday's changes. What is the latest point whose recovery can be guaranteed by the available chain?",
    options: [
      "Sunday, because corruption in one incremental also invalidates all earlier incrementals in the same chain.",
      "Wednesday, by applying only Wednesday's incremental to the full backup because it contains every change since Sunday.",
      "Monday, by restoring Sunday's full backup and Monday's incremental; Tuesday's corruption prevents guaranteed later states.",
      "Wednesday, by applying Monday and Wednesday in sequence as though each incremental were cumulative from the full backup and automatically reconstructed the missing file.",
      "Tuesday, because the backup catalogue can reconstruct corrupt blocks even when there is no other copy of the data."
    ],
    explanation: "Each incremental depends on the state produced by its predecessor. The full backup plus Monday's incremental form an intact chain; without valid Tuesday changes, neither Tuesday nor Wednesday is guaranteed."
  },
  "bruno-massaranduba-2026-difficult-30": {
    prompt: "After an attachment is opened, a workstation runs an unknown process, starts unusual external connections, and tries to read saved credentials. Which initial response reduces risk without destroying useful evidence?",
    options: [
      "Keep the workstation connected to capture more traffic and perform ordinary tasks, postponing containment until the threat family is identified with certainty.",
      "Isolate the workstation from the network, preserve logs, invoke the response procedure, analyse it with updated safeguards, and change exposed credentials from a trusted device.",
      "Restart immediately in safe mode and remove the process before recording connections, processes, times, and other volatile evidence.",
      "Change credentials on the suspected workstation itself and keep its network session active, using the password change as the sole containment measure.",
      "Terminate the process and delete the attachment without isolating the workstation, retaining only the antivirus alert and omitting persistence analysis."
    ],
    explanation: "The behaviour is consistent with malware. Isolation limits communication and propagation, whilst preserved logs support analysis. Containment should follow the response process, and credentials should be changed from a trusted environment."
  },
  "bruno-massaranduba-2026-difficult-31": {
    prompt: "An extended-star network has two switches connected by two redundant Ethernet links. After the second, non-aggregated link is enabled, a broadcast storm and MAC-table instability appear. Which action preserves redundancy without retaining the Layer 2 loop?",
    options: [
      "Disable STP and keep both links forwarding, using storm control and a default route to limit symptoms without removing the logical cycle.",
      "Permanently removing one link stops the loop but eliminates the requested redundant contingency path between the switches.",
      "Enable and verify STP so that one redundant path is logically blocked and released if the active link fails.",
      "Place the management addresses in different subnets whilst leaving both links in the same layer 2 domain without a loop-prevention mechanism.",
      "Reduce host TTL values and apply an IP ACL to the ports even though Ethernet broadcast storms do not depend on these layer 3 fields."
    ],
    explanation: "STP calculates a loop-free logical tree whilst keeping a redundant link blocked. Following a failure, the topology can converge and release the alternate path without a broadcast storm."
  },
  "bruno-massaranduba-2026-difficult-32": {
    prompt: "Two switches in separate buildings will be linked by 180 m of fibre. One end has a 1000BASE-SX transceiver for 850 nm multimode fibre; the other end has not yet been specified. What must be validated to form an interoperable Ethernet link?",
    options: [
      "Validate connector fit and received power; if the modules fit the ports, different standards, wavelengths, and fibre types will negotiate automatically.",
      "A single-mode 1000BASE-LX transceiver at the other end whilst retaining multimode SX at the first because both operate at 1 Gbit/s.",
      "At both ends, Ethernet standard, speed, wavelength, fibre type, connectors, optical budget, distance, and switch-port support.",
      "Only the fibre's nominal distance because optical power, module standard, and port compatibility do not affect negotiation.",
      "A copper converter at only one end whilst retaining an optical transceiver with no compatible peer at the other end."
    ],
    explanation: "A link requires compatible media and optics at both ends. Matching speed or connector alone is insufficient: standard, wavelength, fibre, power, reach, and switch support must align."
  },
  "bruno-massaranduba-2026-difficult-33": {
    prompt: "In the TCP/IP model, host 192.168.10.20/24 sends a packet to server 203.0.113.50 through gateway 192.168.10.1. With no NAT, what happens to the addresses as the packet crosses the first router?",
    options: [
      "The host uses ARP to discover the remote server's MAC and sends the frame directly to that MAC through the router.",
      "The gateway replaces the destination IP with its own address at each hop and retains the source and destination MACs of the first frame until the remote server.",
      "The host sends an IP broadcast until it locates the server; the router preserves the Ethernet frame on the next link.",
      "The host uses ARP to resolve the gateway's MAC; at each routed hop, the router re-encapsulates the packet for the next link, whilst the final IP remains 203.0.113.50.",
      "DNS supplies the gateway's MAC and replaces the server IP with the local network's broadcast address."
    ],
    explanation: "Because the destination is outside the subnet, the host encapsulates the packet for the gateway MAC obtained through ARP. At each routed hop, the router re-encapsulates the packet for the next link; without NAT, the destination IP does not change."
  },
  "bruno-massaranduba-2026-difficult-34": {
    prompt: "A router has routes 172.16.0.0/12 via A, 172.20.0.0/16 via B, 172.20.8.0/21 via C, and a default route via D. To which next hop will a packet addressed to 172.20.15.200 be sent?",
    options: [
      "Via A because the aggregate /12 route covers the destination and its breadth would be evaluated before prefix length.",
      "Via C because 172.20.15.200 is in the 172.20.8.0/21 range and this is the most specific match.",
      "Via B because /16 is more specific than /12, but the /21 route would apply only to addresses up to 172.20.15.127.",
      "Via D because the /21 route ends at 172.20.14.255 and private routes cannot forward the specified host.",
      "The packet is discarded as the /21 subnet's broadcast address even though the broadcast for that block is 172.20.15.255."
    ],
    explanation: "The /21 prefix covers 172.20.8.0 through 172.20.15.255. As the destination matches /12, /16, and /21, the router selects the longest prefix, via C."
  },
  "bruno-massaranduba-2026-difficult-35": {
    prompt: "Two 2.4 GHz access points use the same SSID and security policy. They are close together, operate on the same wide channel at maximum power, and clients remain associated with the more distant point and suffer retransmissions. Which initial adjustment is most appropriate?",
    options: [
      "Reduce the power of both access points but retain the same wide channel, assessing signal strength without measuring co-channel interference.",
      "Choose non-overlapping channels but retain maximum power and the current placement without measuring cell overlap or client behaviour.",
      "Plan non-overlapping channels, adjust power and placement for suitable coverage, and validate roaming and interference with measurements.",
      "Use 40 MHz channels on every access point and lower power on the assumption that greater width always reduces interference in the 2.4 GHz band.",
      "Create different SSIDs to force manual selection of the nearest access point, accepting broken roaming without diagnosing channels or coverage."
    ],
    explanation: "Channel, width, power, and placement affect interference and cell size. The correction must be measured; distinct SSIDs interrupt roaming, and wide channels can increase overlap."
  },
  "bruno-massaranduba-2026-difficult-36": {
    prompt: "A computer records audio and video locally without faults and plays HTTPS streams. During a VoIP call, signalling successfully establishes the call and the other party hears the local user, but no returning RTP packets reach the computer. Which hypothesis should be investigated first?",
    options: [
      "A capture-device or driver fault even though local recording demonstrates that audio is delivered correctly to the application.",
      "Blocking or incorrect translation of returning RTP at the firewall/NAT, including advertised media ports and addresses.",
      "Codec incompatibility as the cause of no arriving packets, although a decoding failure would presuppose received RTP traffic to process.",
      "Proof that all UDP is allowed from the HTTPS test, inferring that application-level TCP connectivity also validates dynamic media ports.",
      "A DNS failure for the signalling server even though the call is established and the outgoing RTP stream reaches the other party."
    ],
    explanation: "Local capture and playback have evidence of working, and signalling completed. RTP missing in only one direction points to the media path, which is often affected by a firewall or NAT."
  },
  "bruno-massaranduba-2026-difficult-37": {
    prompt: "An unregistered device is connected to a network socket in an unlocked cabinet. Soon afterwards, monitoring records an internal scan originating from that port. Which response combines traffic analysis, policy, and physical and logical security?",
    options: [
      "Quarantine or disable the port, preserve and analyse logs, identify the device, control the cabinet, and apply network authentication and an authorised-device policy.",
      "Quarantine the port and immediately reimage the device before preserving logs or identifying its owner, treating reinstallation as sufficient proof of scope.",
      "Lock the cabinet and add the observed MAC to the allowed list, leaving the device connected and omitting analysis of the logs already produced.",
      "Apply an ACL against the scanned subnet but keep the unrecorded device on the port and do not review physical access, identity, or other targets.",
      "Disable the port until alerts stop, then restore the same access without identifying the device or establishing an admission policy."
    ],
    explanation: "Containment limits risk, whilst preserved logs and traffic support scope analysis. Physical control, access authentication, and inventory policy provide complementary layers."
  },
  "bruno-massaranduba-2026-difficult-38": {
    prompt: "In a relational database, Department(id, name) has primary key id, and Device(id, department_id, asset_number) has foreign key department_id referencing Department.id. Devices are linked to department 7. Which behaviour preserves referential integrity when that department is deleted?",
    options: [
      "Use NO ACTION and retain department_id = 7 because uniqueness of asset_number would also validate the existence of the referenced department.",
      "Reject deletion whilst references exist unless a configured action, such as CASCADE or valid SET NULL, handles dependent rows.",
      "Apply CASCADE to every foreign key even when the business rule requires device records and their asset numbers to be retained.",
      "Create a unique index on asset_number because indexes replace validation between department_id and Department.id.",
      "Use a higher transaction-isolation level, which automatically sets department_id to NULL without a referential action."
    ],
    explanation: "The foreign key prevents orphaned references. Deletion can occur only after dependent rows are handled or through a predefined referential action that is compatible with the model."
  },
  "bruno-massaranduba-2026-difficult-39": {
    prompt: "An account starts with a balance of 100. These commands run: BEGIN; UPDATE Account SET balance = balance - 20; SAVEPOINT s1; UPDATE Account SET balance = balance - 30; ROLLBACK TO s1; COMMIT. What balance is persisted, and how are UPDATE and the transaction-control commands classified?",
    options: [
      "Balance 50; UPDATE is DDL, whilst SAVEPOINT and COMMIT are DCL.",
      "Balance 70; UPDATE is DML, and only COMMIT belongs to TCL.",
      "Balance 80; UPDATE is DML, whilst BEGIN, SAVEPOINT, ROLLBACK TO, and COMMIT are TCL.",
      "Balance 100; UPDATE is DQL, and ROLLBACK TO also reverses the change made before the savepoint.",
      "Balance 80; UPDATE is DCL, whilst the remaining commands belong to DDL."
    ],
    explanation: "The first UPDATE reduces the balance to 80. The second takes it to 50, but ROLLBACK TO s1 reverses it; COMMIT persists 80. UPDATE is DML, whilst the other commands control the transaction (TCL)."
  },
  "bruno-massaranduba-2026-difficult-40": {
    prompt: "An inventory view based on Department(id, name) and Device(id, department_id) must list every department and its device count, including zero for departments with no devices. Which query meets the requirement without turning the outer join into an inner join?",
    options: [
      "SELECT d.id, d.name, COUNT(*) FROM Department d INNER JOIN Device e ON e.department_id = d.id GROUP BY d.id, d.name;",
      "SELECT d.id, d.name, COUNT(e.id) FROM Device e LEFT JOIN Department d ON d.id = e.department_id GROUP BY d.id, d.name;",
      "SELECT d.id, d.name, COUNT(e.id) FROM Department d LEFT JOIN Device e ON e.department_id = d.id GROUP BY d.id, d.name;",
      "SELECT d.id, d.name, COUNT(*) FROM Department d LEFT JOIN Device e ON e.department_id = d.id WHERE e.id IS NOT NULL GROUP BY d.id, d.name;",
      "SELECT d.id, d.name, COUNT(e.id) FROM Department d RIGHT JOIN Device e ON e.department_id = d.id GROUP BY d.id, d.name;"
    ],
    explanation: "Starting from Department and using LEFT JOIN preserves every department. COUNT(e.id) ignores the NULL produced where there is no device, returning zero, and GROUP BY keeps one row per department."
  }
});
