const SF6_COMBOS_DATA = {
  "ryu": {
    "character": "Ryu",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Hadoken",
        "notation": "2MK xx 236P",
        "damage": "~800",
        "notes": {
          "pt-BR": "Combo básico de confirm. Use LP Hadoken para ser mais seguro.",
          "en": "Basic confirm combo. Use LP Hadoken to be safer."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.LP",
        "combo": "cr.LP > cr.LP > cr.MK xx Hadoken",
        "notation": "2LP > 2LP > 2MK xx 236P",
        "damage": "~950",
        "notes": {
          "pt-BR": "Hit confirm de light. Pratique o timing do cancel.",
          "en": "Light hit confirm. Practice the cancel timing."
        },
        "situation": { "pt-BR": "Pressão close range", "en": "Close range pressure" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "st.HP (Punish Counter)",
        "combo": "st.HP (PC) > cr.HP xx H.Shoryuken > SA1",
        "notation": "5HP (PC) > 2HP xx 623HP > 236236P",
        "damage": "~3200",
        "notes": {
          "pt-BR": "Requer Punish Counter. Grande dano com 1 barra de super.",
          "en": "Requires Punish Counter. Big damage with 1 super bar."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > st.HP xx M.Tatsu > H.Shoryuken",
        "notation": "DR 5HP > 5HP xx 214MK > 623HP",
        "damage": "~2400",
        "notes": {
          "pt-BR": "Combo de Drive Rush. Gasta 3 barras de Drive.",
          "en": "Drive Rush combo. Consumes 3 Drive bars."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Anti-air cr.HP",
        "combo": "cr.HP (anti-air) > dash > cr.MP > st.MP xx L.Tatsu > SA1",
        "notation": "2HP (AA) > dash > 2MP > 5MP xx 214LK > 236236P",
        "damage": "~3500",
        "notes": {
          "pt-BR": "Anti-air combo. Requer timing preciso no dash.",
          "en": "Anti-air combo. Requires precise dash timing."
        },
        "situation": { "pt-BR": "Anti-air", "en": "Anti-air" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner Drive Rush",
        "combo": "DR st.HP > st.HP > cr.HP xx H.Shoryuken > OD Tatsu > SA3",
        "notation": "DR 5HP > 5HP > 2HP xx 623HP > 214KK > 236236KK",
        "damage": "~5000+",
        "notes": {
          "pt-BR": "Máximo dano no canto com 3 barras. Muito estiloso!",
          "en": "Maximum corner damage with 3 bars. Very stylish!"
        },
        "situation": { "pt-BR": "Corner combo", "en": "Corner combo" }
      }
    ]
  },
  "ken": {
    "character": "Ken",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Hadoken",
        "notation": "2MK xx 236P",
        "damage": "~800",
        "notes": { "pt-BR": "Confirm básico igual ao Ryu.", "en": "Basic confirm similar to Ryu." },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP",
        "combo": "st.MP > st.HP xx H.Shoryuken",
        "notation": "5MP > 5HP xx 623HP",
        "damage": "~1600",
        "notes": { "pt-BR": "Target combo simples com bom dano.", "en": "Simple target combo with good damage." },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.MK",
        "combo": "DR st.MK > st.HP xx M.Tatsu > H.Shoryuken",
        "notation": "DR 5MK > 5HP xx 214MK > 623HP",
        "damage": "~2500",
        "notes": { "pt-BR": "Combo padrão de Drive Rush do Ken.", "en": "Ken's standard Drive Rush combo." },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Overhead",
        "combo": "f+MK > cr.LP > st.LK xx L.Tatsu > Jinrai Kick",
        "notation": "6MK > 2LP > 5LK xx 214LK > 236KK",
        "damage": "~2200",
        "notes": { "pt-BR": "Combo de overhead. Use para abrir defesa.", "en": "Overhead combo. Use to open up defense." },
        "situation": { "pt-BR": "Mix-up", "en": "Mix-up" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "st.HP (Punish Counter)",
        "combo": "st.HP (PC) > st.HP xx H.Tatsu > dash > st.LP > SA1",
        "notation": "5HP (PC) > 5HP xx 214HK > dash > 5LP > 236236P",
        "damage": "~3800",
        "notes": { "pt-BR": "Máximo damage de Punish Counter com super.", "en": "Maximum Punish Counter damage with super." },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner juggle",
        "combo": "j.HP > st.HP > st.HP xx H.Tatsu > H.Shoryuken > SA3",
        "notation": "j.HP > 5HP > 5HP xx 214HK > 623HP > 236236KK",
        "damage": "~5200",
        "notes": { "pt-BR": "Full corner combo com 3 barras. Muito dano!", "en": "Full corner combo with 3 bars. Huge damage!" },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      }
    ]
  },
  "chun-li": {
    "character": "Chun-Li",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Lightning Kicks",
        "notation": "2MK xx 214K~K",
        "damage": "~900",
        "notes": { "pt-BR": "Confirm seguro e simples.", "en": "Safe and simple confirm." },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP",
        "combo": "st.MP > cr.MP xx M.Legs",
        "notation": "5MP > 2MP xx 214MK",
        "damage": "~1100",
        "notes": { "pt-BR": "Combo básico de close range.", "en": "Basic close range combo." },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Legs > dash > st.LK xx Lightning Kicks",
        "notation": "DR 5HP > 2HP xx 214HK > dash > 5LK xx 214K~K",
        "damage": "~2400",
        "notes": { "pt-BR": "Combo estável de Drive Rush.", "en": "Stable Drive Rush combo." },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Back throw (corner)",
        "combo": "Back throw (corner) > dash > st.MP > cr.HP xx SA2",
        "notation": "4LP+LK (corner) > dash > 5MP > 2HP xx 236236K",
        "damage": "~3000",
        "notes": { "pt-BR": "Setup de throw no canto.", "en": "Corner throw setup." },
        "situation": { "pt-BR": "Corner throw", "en": "Corner throw" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Tensho Kicks (anti-air)",
        "combo": "Tensho (AA) > dash > st.HP > cr.HP xx SA1",
        "notation": "214K (AA) > dash > 5HP > 2HP xx 214214K",
        "damage": "~3500",
        "notes": { "pt-BR": "Anti-air conversion difícil mas recompensador.", "en": "Difficult but rewarding anti-air conversion." },
        "situation": { "pt-BR": "Anti-air", "en": "Anti-air" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner max damage",
        "combo": "DR st.HP > st.HP > cr.HP xx H.Legs > dash > cr.MP xx SA1",
        "notation": "DR 5HP > 5HP > 2HP xx 214HK > dash > 2MP xx 214214K",
        "damage": "~4500",
        "notes": { "pt-BR": "Requer posicionamento no canto e 1 barra.", "en": "Requires corner positioning and 1 bar." },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      }
    ]
  },
  "guile": {
    "character": "Guile",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Sonic Boom",
        "notation": "2MK xx [4]6P",
        "damage": "~850",
        "notes": { "pt-BR": "Requer charge. Boom básico de confirm.", "en": "Requires charge. Basic Boom confirm." },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "Flash Kick",
        "combo": "Flash Kick (anti-air)",
        "notation": "[2]8K",
        "damage": "~1100",
        "notes": { "pt-BR": "Anti-air consistente. Mantenha o charge!", "en": "Consistent anti-air. Keep the charge!" },
        "situation": { "pt-BR": "Anti-air", "en": "Anti-air" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "cr.HP (Punish Counter)",
        "combo": "cr.HP (PC) > st.MP xx H.Flash Kick > SA1",
        "notation": "2HP (PC) > 5MP xx [2]8HK > [4]6[4]6P",
        "damage": "~3200",
        "notes": { "pt-BR": "Punish Counter com super. Mantenha os charges!", "en": "Punish Counter with super. Keep the charges!" },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush cr.MP",
        "combo": "DR cr.MP > st.HP xx Sonic Boom > SA1",
        "notation": "DR 2MP > 5HP xx [4]6P > [4]6[4]6P",
        "damage": "~2800",
        "notes": { "pt-BR": "Combo de Drive Rush com cancel em super.", "en": "Drive Rush combo with super cancel." },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner setup",
        "combo": "Corner throw > Sonic Boom > dash > cr.MP > cr.MP xx H.Flash Kick",
        "notation": "4LP+LK > [4]6P > dash > 2MP > 2MP xx [2]8HK",
        "damage": "~2400",
        "notes": { "pt-BR": "Okizeme de canto com boom. Timing específico.", "en": "Corner okizeme with boom. Specific timing." },
        "situation": { "pt-BR": "Corner okizeme", "en": "Corner okizeme" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Max punish",
        "combo": "st.HP (PC) > cr.HP xx H.Flash Kick > OD Sonic Hurricane > SA3",
        "notation": "5HP (PC) > 2HP xx [2]8HK > [4]6PP > [4]6[4]6KK",
        "damage": "~5500",
        "notes": { "pt-BR": "Dano máximo com 4 barras totais. Difícil de executar.", "en": "Maximum damage with 4 total bars. Hard to execute." },
        "situation": { "pt-BR": "Punish Counter corner", "en": "Punish Counter corner" }
      }
    ]
  },
  "luke": {
    "character": "Luke",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Sand Blast",
        "notation": "2MK xx 236P",
        "damage": "~900",
        "notes": { "pt-BR": "Confirm básico. Use LP para ser mais seguro.", "en": "Basic confirm. Use LP to be safer." },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP",
        "combo": "st.MP > st.HP xx Flash Knuckle",
        "notation": "5MP > 5HP xx 236K",
        "damage": "~1400",
        "notes": { "pt-BR": "Target combo simples com knockdown.", "en": "Simple target combo with knockdown." },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HK",
        "combo": "DR st.HK > st.HP xx M.Flash Knuckle > SA1",
        "notation": "DR 5HK > 5HP xx 236MK > 236236P",
        "damage": "~3200",
        "notes": { "pt-BR": "BnB de Drive Rush com super.", "en": "Drive Rush BnB with super." },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Flash Knuckle",
        "combo": "Flash Knuckle (CH) > OD Rising Upper > SA1",
        "notation": "236K (CH) > 623PP > 236236P",
        "damage": "~2800",
        "notes": { "pt-BR": "Counter hit conversion. Reação rápida necessária.", "en": "Counter hit conversion. Fast reaction required." },
        "situation": { "pt-BR": "Counter Hit", "en": "Counter Hit" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner juggle",
        "combo": "DR st.HK > st.HP > cr.HP xx H.Rising Upper > SA2",
        "notation": "DR 5HK > 5HP > 2HP xx 623HP > 214214P",
        "damage": "~4200",
        "notes": { "pt-BR": "Corner combo com ótimo dano e 2 barras.", "en": "Corner combo with great damage and 2 bars." },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Level 3 setup",
        "combo": "st.HP (PC) > st.HP > st.HP xx OD Flash Knuckle > SA3",
        "notation": "5HP (PC) > 5HP > 5HP xx 236KK > 236236KK",
        "damage": "~5800",
        "notes": { "pt-BR": "Dano extremo com Punish Counter e level 3.", "en": "Extreme damage with Punish Counter and level 3." },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      }
    ]
  },
  "kimberly": {
    "character": "Kimberly",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Spiral Arrow",
        "notation": "2MK xx 236K",
        "damage": "~850",
        "notes": {
          "pt-BR": "Confirm básico e seguro. Spiral Arrow é o principal special.",
          "en": "Basic safe confirm. Spiral Arrow is the main special."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.LP",
        "combo": "cr.LP > cr.LP > cr.MK xx Bushin Senpukyaku",
        "notation": "2LP > 2LP > 2MK xx 214K",
        "damage": "~1000",
        "notes": {
          "pt-BR": "Hit confirm de light. Fácil de executar.",
          "en": "Light hit confirm. Easy to execute."
        },
        "situation": { "pt-BR": "Pressão", "en": "Pressure" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Spiral Arrow > SA1",
        "notation": "DR 5HP > 2HP xx 236HK > 214214K",
        "damage": "~3000",
        "notes": {
          "pt-BR": "BnB de Drive Rush com super. Bom dano midscreen.",
          "en": "Drive Rush BnB with super. Good midscreen damage."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Bushin Dash (j.HK crossup)",
        "combo": "j.HK (crossup) > cr.MP > cr.MK xx H.Spiral Arrow",
        "notation": "j.HK > 2MP > 2MK xx 236HK",
        "damage": "~1800",
        "notes": {
          "pt-BR": "Combo de crossup. Confunde muito o oponente.",
          "en": "Crossup combo. Very confusing for the opponent."
        },
        "situation": { "pt-BR": "Mix-up / Crossup", "en": "Mix-up / Crossup" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner throw",
        "combo": "Corner throw > Bushin Jump > j.HK > cr.MP xx H.Spiral Arrow > SA2",
        "notation": "4LP+LK (corner) > 41236K > j.HK > 2MP xx 236HK > 236236K",
        "damage": "~3800",
        "notes": {
          "pt-BR": "Oki de canto com dash jump setup. Timing muito específico.",
          "en": "Corner oki with dash jump setup. Very specific timing."
        },
        "situation": { "pt-BR": "Corner okizeme", "en": "Corner okizeme" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter SA3",
        "combo": "st.HP (PC) > st.HP > cr.HP xx OD Spiral Arrow > SA3",
        "notation": "5HP (PC) > 5HP > 2HP xx 236KK > 236236KK",
        "damage": "~5200",
        "notes": {
          "pt-BR": "Dano máximo com Punish Counter e level 3.",
          "en": "Maximum damage with Punish Counter and level 3."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      }
    ]
  },
  "zangief": {
    "character": "Zangief",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MP",
        "combo": "cr.MP > cr.MP xx SPD",
        "notation": "2MP > 2MP xx 360P",
        "damage": "~1800",
        "notes": {
          "pt-BR": "Confirm em SPD. O SPD é imbloqueável se o oponente não pular.",
          "en": "Confirm into SPD. SPD is unblockable if opponent doesn't jump."
        },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.LK",
        "combo": "cr.LK > cr.LP > SPD",
        "notation": "2LK > 2LP > 360P",
        "damage": "~1600",
        "notes": {
          "pt-BR": "Hit confirm de light em throw. Funciona como mix-up.",
          "en": "Light hit confirm into throw. Works as a mix-up."
        },
        "situation": { "pt-BR": "Pressão", "en": "Pressure" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > st.HP xx H.Cyclone Lariat",
        "notation": "DR 5HP > 5HP xx 214KK",
        "damage": "~2200",
        "notes": {
          "pt-BR": "Combo de Drive Rush. Lariat faz juggle no canto.",
          "en": "Drive Rush combo. Lariat juggles in the corner."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Flying Powerbomb (720P)",
        "combo": "j.HP > 720P (Flying Powerbomb)",
        "notation": "j.HP > 720P",
        "damage": "~2600",
        "notes": {
          "pt-BR": "Jump-in confirm em 720. Difícil de defender. Use com cautela.",
          "en": "Jump-in confirm into 720. Hard to defend. Use with caution."
        },
        "situation": { "pt-BR": "Jump-in", "en": "Jump-in" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter",
        "combo": "st.HP (PC) > cr.HP xx OD Cyclone Lariat > H.SPD",
        "notation": "5HP (PC) > 2HP xx 214KK (OD) > 360HP",
        "damage": "~4000",
        "notes": {
          "pt-BR": "Punish Counter com OD Lariat em juggle para SPD. Alto dano.",
          "en": "Punish Counter with OD Lariat juggle into SPD. High damage."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner SA3",
        "combo": "st.HP (PC) > cr.HP xx H.Cyclone Lariat > H.SPD > SA3",
        "notation": "5HP (PC) > 2HP xx 214KK > 360HP > 720KK",
        "damage": "~6000+",
        "notes": {
          "pt-BR": "Dano absurdo no canto com level 3. Quase mata qualquer personagem!",
          "en": "Absurd corner damage with level 3. Almost kills any character!"
        },
        "situation": { "pt-BR": "Corner Punish Counter", "en": "Corner Punish Counter" }
      }
    ]
  },
  "jp": {
    "character": "JP",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.HP",
        "combo": "st.HP xx Torbalan (LP)",
        "notation": "5HP xx 236LP",
        "damage": "~1000",
        "notes": {
          "pt-BR": "Poke com confirm em Torbalan. Bom range e dano.",
          "en": "Poke with Torbalan confirm. Good range and damage."
        },
        "situation": { "pt-BR": "Neutro / Zoning", "en": "Neutral / Zoning" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.HP",
        "combo": "cr.HP xx Departure (HP)",
        "notation": "2HP xx 214HP",
        "damage": "~1100",
        "notes": {
          "pt-BR": "Confirm em Departure. Bom poke anti-approach.",
          "en": "Confirm into Departure. Good anti-approach poke."
        },
        "situation": { "pt-BR": "Anti-approach", "en": "Anti-approach" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Departure > SA1",
        "notation": "DR 5HP > 2HP xx 214HP > 236236P",
        "damage": "~2800",
        "notes": {
          "pt-BR": "BnB de Drive Rush do JP. Gasta drive mas confirma em super.",
          "en": "JP's Drive Rush BnB. Costs drive but confirms into super."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Amnesia (anti-air)",
        "combo": "Amnesia (AA) > dash > cr.HP xx H.Departure",
        "notation": "623P (AA) > dash > 2HP xx 214HP",
        "damage": "~2000",
        "notes": {
          "pt-BR": "Anti-air com Amnesia seguido de punição. Excelente anti-air.",
          "en": "Anti-air with Amnesia into punish. Excellent anti-air tool."
        },
        "situation": { "pt-BR": "Anti-air", "en": "Anti-air" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter SA2",
        "combo": "st.HK (PC) > cr.HP xx SA2",
        "notation": "5HK (PC) > 2HP xx 214214P",
        "damage": "~4500",
        "notes": {
          "pt-BR": "Punish Counter em st.HK confirma em SA2. Enorme dano.",
          "en": "Punish Counter on st.HK confirms into SA2. Massive damage."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner setup SA3",
        "combo": "DR st.HP > cr.HP xx OD Departure > Torbalan > SA3",
        "notation": "DR 5HP > 2HP xx 214PP > 236LP > 236236KK",
        "damage": "~5500+",
        "notes": {
          "pt-BR": "Combo longo de canto com OD Departure para maximizar dano com SA3.",
          "en": "Long corner combo with OD Departure to maximize damage into SA3."
        },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      }
    ]
  },
  "dhalsim": {
    "character": "Dhalsim",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.HP",
        "combo": "st.HP xx Yoga Fire (LP)",
        "notation": "5HP xx 236LP",
        "damage": "~900",
        "notes": {
          "pt-BR": "Poke longo com confirm em fireball. Excelente para zoning.",
          "en": "Long poke with fireball confirm. Excellent for zoning."
        },
        "situation": { "pt-BR": "Zoning", "en": "Zoning" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MP",
        "combo": "cr.MP xx Yoga Flame",
        "notation": "2MP xx 63214P",
        "damage": "~1000",
        "notes": {
          "pt-BR": "Confirm próximo. Yoga Flame tem bom dano e deixa oponente juggling.",
          "en": "Close confirm. Yoga Flame deals good damage and leaves opponent juggling."
        },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Teleport pressure",
        "combo": "Teleport > cr.MP > cr.HP xx Yoga Flame",
        "notation": "63214K > 2MP > 2HP xx 63214P",
        "damage": "~1800",
        "notes": {
          "pt-BR": "Teleport para cross-up e punição. Confunde muito o oponente.",
          "en": "Teleport for cross-up and punish. Very confusing for the opponent."
        },
        "situation": { "pt-BR": "Mix-up", "en": "Mix-up" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Yoga Flame > SA2",
        "notation": "DR 5HP > 2HP xx 63214HP > 214214K",
        "damage": "~3200",
        "notes": {
          "pt-BR": "Drive Rush confirm em super. Alto dano para Dhalsim.",
          "en": "Drive Rush confirm into super. High damage for Dhalsim."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Anti-air j.HP",
        "combo": "j.HP (AA) > Yoga Comet > cr.HP xx SA1",
        "notation": "j.HP (AA) > 214HP > 2HP xx 236236P",
        "damage": "~3500",
        "notes": {
          "pt-BR": "Anti-air com conversão completa em super. Muito difícil de executar.",
          "en": "Anti-air with full conversion into super. Very difficult to execute."
        },
        "situation": { "pt-BR": "Anti-air", "en": "Anti-air" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter + Teleport",
        "combo": "st.HP (PC) > Teleport > cr.HP xx H.Yoga Flame > SA3",
        "notation": "5HP (PC) > 63214P > 2HP xx 63214HP > 236236KK",
        "damage": "~5000+",
        "notes": {
          "pt-BR": "Combo único do Dhalsim com teleport mid-combo. Muito satisfatório!",
          "en": "Dhalsim's unique mid-combo teleport. Very satisfying to land!"
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      }
    ]
  },
  "ehonda": {
    "character": "E. Honda",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.LP",
        "combo": "cr.LP > cr.LP > cr.LK xx Hundred Hand Slap",
        "notation": "2LP > 2LP > 2LK xx 236P~P",
        "damage": "~900",
        "notes": {
          "pt-BR": "Hit confirm de light em Hundred Hand Slap. Simples e eficaz.",
          "en": "Light hit confirm into Hundred Hand Slap. Simple and effective."
        },
        "situation": { "pt-BR": "Pressão", "en": "Pressure" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx H.Headbutt",
        "notation": "2MK xx [4]6HP",
        "damage": "~1100",
        "notes": {
          "pt-BR": "Confirm com Headbutt. Requer charge. Excelente poke.",
          "en": "Confirm with Headbutt. Requires charge. Excellent poke."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Hundred Hand Slap > SA1",
        "notation": "DR 5HP > 2HP xx 236HP~P > 236236P",
        "damage": "~3000",
        "notes": {
          "pt-BR": "Drive Rush BnB com super. Muito dano para Honda.",
          "en": "Drive Rush BnB with super. Lots of damage for Honda."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Sumo Smash (overhead)",
        "combo": "Sumo Smash > cr.LP > cr.LK xx Hundred Hand Slap",
        "notation": "236K > 2LP > 2LK xx 236P~P",
        "damage": "~1600",
        "notes": {
          "pt-BR": "Overhead que abre defesa de crouch block. Mix-up poderoso.",
          "en": "Overhead that opens crouch block defense. Powerful mix-up."
        },
        "situation": { "pt-BR": "Mix-up overhead", "en": "Overhead mix-up" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter",
        "combo": "st.HP (PC) > cr.HP xx OD Hundred Hand Slap > SA2",
        "notation": "5HP (PC) > 2HP xx 236PP~P > 214214P",
        "damage": "~4500",
        "notes": {
          "pt-BR": "Punish Counter em OD HHS para SA2. Combo de alto dano.",
          "en": "Punish Counter into OD HHS for SA2. High damage combo."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner max",
        "combo": "DR st.HP > st.HP > cr.HP xx OD HHS > Headbutt juggle > SA3",
        "notation": "DR 5HP > 5HP > 2HP xx 236PP~P > [4]6HP > 236236KK",
        "damage": "~5800",
        "notes": {
          "pt-BR": "Combo de canto com juggle de Headbutt após OD HHS. Máximo dano.",
          "en": "Corner combo with Headbutt juggle after OD HHS. Maximum damage."
        },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      }
    ]
  },
  "blanka": {
    "character": "Blanka",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Rolling Attack (LP)",
        "notation": "2MK xx [4]6LP",
        "damage": "~850",
        "notes": {
          "pt-BR": "Confirm básico. Rolling Attack requer charge lateral.",
          "en": "Basic confirm. Rolling Attack requires side charge."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.LP",
        "combo": "cr.LP > cr.LP > cr.MK xx Electric Thunder",
        "notation": "2LP > 2LP > 2MK xx 236K",
        "damage": "~950",
        "notes": {
          "pt-BR": "Hit confirm de light em Electric Thunder. Simples.",
          "en": "Light hit confirm into Electric Thunder. Simple."
        },
        "situation": { "pt-BR": "Pressão", "en": "Pressure" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Rolling Attack > SA1",
        "notation": "DR 5HP > 2HP xx [4]6HP > 236236P",
        "damage": "~3000",
        "notes": {
          "pt-BR": "BnB com Drive Rush e super. Mantenha o charge!",
          "en": "Drive Rush BnB with super. Keep the charge!"
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Blanka-chan surprise",
        "combo": "Blanka-chan (M) > st.HP xx H.Rolling Attack",
        "notation": "236MK > 5HP xx [4]6HP",
        "damage": "~2000",
        "notes": {
          "pt-BR": "Setup com Blanka-chan para confirm. Muito criativo e eficaz.",
          "en": "Blanka-chan setup for confirm. Very creative and effective."
        },
        "situation": { "pt-BR": "Blanka-chan setup", "en": "Blanka-chan setup" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Anti-air Electric",
        "combo": "Electric Thunder (AA) > dash > cr.HP xx H.Rolling Attack",
        "notation": "236K (AA) > dash > 2HP xx [4]6HP",
        "damage": "~2200",
        "notes": {
          "pt-BR": "Anti-air com Electric e conversão. Exige boa reação.",
          "en": "Anti-air with Electric and conversion. Requires good reaction."
        },
        "situation": { "pt-BR": "Anti-air", "en": "Anti-air" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner SA3",
        "combo": "DR st.HP > cr.HP xx OD Rolling Attack > SA3",
        "notation": "DR 5HP > 2HP xx [4]6PP > 236236KK",
        "damage": "~5000+",
        "notes": {
          "pt-BR": "Dano máximo de Blanka com level 3 no canto.",
          "en": "Blanka's maximum damage with level 3 in the corner."
        },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      }
    ]
  },
  "juri": {
    "character": "Juri",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Fuhajin (store) > Fuharenkyaku",
        "notation": "2MK xx 214K (store) > 214K (release)",
        "damage": "~900",
        "notes": {
          "pt-BR": "Confirm básico com o sistema de armazenamento de ki. Practice o sistema!",
          "en": "Basic confirm with the ki storage system. Practice the system!"
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP",
        "combo": "st.MP > cr.MK xx H.Fuharenkyaku",
        "notation": "5MP > 2MK xx 214HK",
        "damage": "~1100",
        "notes": {
          "pt-BR": "Combo básico de close range com Fuharenkyaku pesado.",
          "en": "Basic close range combo with heavy Fuharenkyaku."
        },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Fuharenkyaku > SA2",
        "notation": "DR 5HP > 2HP xx 214HK > 236236K",
        "damage": "~3200",
        "notes": {
          "pt-BR": "BnB de Drive Rush com super. Ótimo dano para Juri.",
          "en": "Drive Rush BnB with super. Great damage for Juri."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Tensenrin (anti-air)",
        "combo": "Tensenrin (AA) > dash > cr.MK xx H.Fuharenkyaku",
        "notation": "623K (AA) > dash > 2MK xx 214HK",
        "damage": "~2000",
        "notes": {
          "pt-BR": "Anti-air DP com conversão. Requer dash após o hit.",
          "en": "Anti-air DP with conversion. Requires dash after the hit."
        },
        "situation": { "pt-BR": "Anti-air", "en": "Anti-air" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter Ki setup",
        "combo": "st.HP (PC) > st.HP xx Fuhajin (store all 3) > H.Fuharenkyaku (L+M+H) > SA1",
        "notation": "5HP (PC) > 5HP xx 214L+M+HK > 214HK (all) > 236236P",
        "damage": "~4200",
        "notes": {
          "pt-BR": "Punish Counter com ki totalmente carregado para máximo dano.",
          "en": "Punish Counter with fully stored ki for maximum damage."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner SA3",
        "combo": "DR st.HP > cr.HP xx OD Fuharenkyaku > SA3",
        "notation": "DR 5HP > 2HP xx 214KK > 236236KK",
        "damage": "~5500+",
        "notes": {
          "pt-BR": "Level 3 de Juri no canto. Dano massivo!",
          "en": "Juri's level 3 in the corner. Massive damage!"
        },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      }
    ]
  },
  "cammy": {
    "character": "Cammy",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Spiral Arrow",
        "notation": "2MK xx 236K",
        "damage": "~900",
        "notes": {
          "pt-BR": "BnB principal de Cammy. Spiral Arrow é seu principal cancel.",
          "en": "Cammy's main BnB. Spiral Arrow is her primary cancel."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.LP",
        "combo": "cr.LP > cr.LP > cr.MK xx L.Spiral Arrow",
        "notation": "2LP > 2LP > 2MK xx 236LK",
        "damage": "~1050",
        "notes": {
          "pt-BR": "Hit confirm de light. Use LP Spiral Arrow para mais segurança.",
          "en": "Light hit confirm. Use LP Spiral Arrow for more safety."
        },
        "situation": { "pt-BR": "Pressão", "en": "Pressure" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Spiral Arrow > SA1",
        "notation": "DR 5HP > 2HP xx 236HK > 214214K",
        "damage": "~3100",
        "notes": {
          "pt-BR": "BnB Drive Rush com super. Alto dano e boa posição.",
          "en": "Drive Rush BnB with super. High damage and good position."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Cannon Spike (anti-air)",
        "combo": "Cannon Spike (AA) > dash > cr.MP xx H.Spiral Arrow",
        "notation": "623K (AA) > dash > 2MP xx 236HK",
        "damage": "~1800",
        "notes": {
          "pt-BR": "Anti-air conversão. Cannon Spike é ótimo anti-air para Cammy.",
          "en": "Anti-air conversion. Cannon Spike is a great anti-air for Cammy."
        },
        "situation": { "pt-BR": "Anti-air", "en": "Anti-air" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "OD Hooligan",
        "combo": "OD Hooligan (dive) > cr.MP > cr.MK xx H.Spiral Arrow > SA2",
        "notation": "41236PP > 2MP > 2MK xx 236HK > 236236K",
        "damage": "~4000",
        "notes": {
          "pt-BR": "OD Hooligan dive para setup mix-up com confirm em super.",
          "en": "OD Hooligan dive for mix-up setup with super confirm."
        },
        "situation": { "pt-BR": "OD setup", "en": "OD setup" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner SA3",
        "combo": "DR st.HP > cr.HP xx OD Spiral Arrow > SA3",
        "notation": "DR 5HP > 2HP xx 236KK > 214214KK",
        "damage": "~5200",
        "notes": {
          "pt-BR": "Máximo dano de Cammy no canto com level 3.",
          "en": "Cammy's maximum corner damage with level 3."
        },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      }
    ]
  },
  "deejay": {
    "character": "Dee Jay",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Max Out (LP)",
        "notation": "2MK xx [4]6LP",
        "damage": "~850",
        "notes": {
          "pt-BR": "Confirm básico com Max Out. Requer charge lateral.",
          "en": "Basic confirm with Max Out. Requires side charge."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP",
        "combo": "st.MP > cr.MK xx Double Rolling Sobat",
        "notation": "5MP > 2MK xx 214K",
        "damage": "~1100",
        "notes": {
          "pt-BR": "Combo de close range com Sobat. Bom poke.",
          "en": "Close range combo with Sobat. Good poke."
        },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Max Out > SA1",
        "notation": "DR 5HP > 2HP xx [4]6HP > [4]6[4]6P",
        "damage": "~3000",
        "notes": {
          "pt-BR": "BnB de Drive Rush. Mantenha o charge para Max Out.",
          "en": "Drive Rush BnB. Keep the charge for Max Out."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Air Slasher bait",
        "combo": "Air Slasher whiff > st.HP xx H.Max Out",
        "notation": "[4]6LP (whiff) > 5HP xx [4]6HP",
        "damage": "~1600",
        "notes": {
          "pt-BR": "Air Slasher whiff para bait e confirm. Tático.",
          "en": "Air Slasher whiff as bait and confirm. Tactical."
        },
        "situation": { "pt-BR": "Neutro tático", "en": "Tactical neutral" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter",
        "combo": "st.HP (PC) > cr.HP xx OD Max Out > SA2",
        "notation": "5HP (PC) > 2HP xx [4]6PP > 214214K",
        "damage": "~4200",
        "notes": {
          "pt-BR": "Punish Counter com OD Max Out e super 2. Alto dano.",
          "en": "Punish Counter with OD Max Out and super 2. High damage."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner SA3",
        "combo": "DR st.HP > cr.HP xx OD Rolling Sobat > H.Max Out > SA3",
        "notation": "DR 5HP > 2HP xx 214KK > [4]6HP > [4]6[4]6KK",
        "damage": "~5500",
        "notes": {
          "pt-BR": "Combo de canto de alto nível com level 3. Requer boa execução.",
          "en": "High-level corner combo with level 3. Requires good execution."
        },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      }
    ]
  },
  "manon": {
    "character": "Manon",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Rond-Point (LK)",
        "notation": "2MK xx 214LK",
        "damage": "~900",
        "notes": {
          "pt-BR": "Confirm básico de Manon. Rond-Point tem bom dano.",
          "en": "Manon's basic confirm. Rond-Point deals good damage."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "Jete (overhead)",
        "combo": "Jete > cr.LP > cr.MK xx Rond-Point",
        "notation": "6MK > 2LP > 2MK xx 214K",
        "damage": "~1200",
        "notes": {
          "pt-BR": "Overhead com confirm. Excelente para abrir a defesa.",
          "en": "Overhead with confirm. Excellent for opening defense."
        },
        "situation": { "pt-BR": "Mix-up overhead", "en": "Overhead mix-up" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Rond-Point > SA1",
        "notation": "DR 5HP > 2HP xx 214HK > 236236P",
        "damage": "~3000",
        "notes": {
          "pt-BR": "BnB Drive Rush de Manon com super.",
          "en": "Manon's Drive Rush BnB with super."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Manège Doré (comando throw)",
        "combo": "Manège Doré (médio) > dash > cr.MP xx H.Rond-Point",
        "notation": "360MP > dash > 2MP xx 214HK",
        "damage": "~2200",
        "notes": {
          "pt-BR": "Após o command throw, dash e confirme. Aumenta o Médaille!",
          "en": "After command throw, dash and confirm. Increases Médaille!"
        },
        "situation": { "pt-BR": "Command throw", "en": "Command throw" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Médaille Max + Punish Counter",
        "combo": "st.HP (PC, Médaille 5) > cr.HP xx H.Rond-Point > SA2",
        "notation": "5HP (PC, Médaille 5) > 2HP xx 214HK > 214214P",
        "damage": "~5000+",
        "notes": {
          "pt-BR": "Com Médaille no máximo, o SA2 causa dano devastador.",
          "en": "With max Médaille, SA2 causes devastating damage."
        },
        "situation": { "pt-BR": "Punish Counter (Médaille max)", "en": "Punish Counter (Max Médaille)" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner SA3",
        "combo": "DR st.HP > cr.HP xx OD Rond-Point > SA3",
        "notation": "DR 5HP > 2HP xx 214KK > 236236KK",
        "damage": "~5500",
        "notes": {
          "pt-BR": "Level 3 no canto. Máximo dano de Manon.",
          "en": "Level 3 in the corner. Manon's maximum damage."
        },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      }
    ]
  },
  "marisa": {
    "character": "Marisa",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Gladius (HP)",
        "notation": "2MK xx 236HP",
        "damage": "~1000",
        "notes": {
          "pt-BR": "Confirm básico com Gladius. Marisa tem os maiores normals do jogo.",
          "en": "Basic confirm with Gladius. Marisa has the biggest normals in the game."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.HP",
        "combo": "st.HP > cr.HP xx Quadriga (HP)",
        "notation": "5HP > 2HP xx 214HP",
        "damage": "~1600",
        "notes": {
          "pt-BR": "Target combo simples. Enorme dano para combo básico.",
          "en": "Simple target combo. Massive damage for a basic combo."
        },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > st.HP > cr.HP xx H.Gladius > SA1",
        "notation": "DR 5HP > 5HP > 2HP xx 236HP > 236236P",
        "damage": "~3800",
        "notes": {
          "pt-BR": "BnB Drive Rush de Marisa. Enorme dano baseado em Drive Rush.",
          "en": "Marisa's Drive Rush BnB. Huge damage based on Drive Rush."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Punish Counter",
        "combo": "st.HK (PC) > st.HP xx H.Quadriga > SA2",
        "notation": "5HK (PC) > 5HP xx 214HP > 214214P",
        "damage": "~4500",
        "notes": {
          "pt-BR": "HK Punish Counter com super 2. Enorme janela de dano.",
          "en": "HK Punish Counter with super 2. Massive damage window."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Anti-air Quadriga",
        "combo": "Quadriga (AA) > dash > st.HP xx H.Gladius > SA1",
        "notation": "214HP (AA) > dash > 5HP xx 236HP > 236236P",
        "damage": "~3500",
        "notes": {
          "pt-BR": "Anti-air com Quadriga e conversão completa. Timing difícil.",
          "en": "Anti-air with Quadriga and full conversion. Difficult timing."
        },
        "situation": { "pt-BR": "Anti-air", "en": "Anti-air" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner SA3 max",
        "combo": "DR st.HP > st.HP > cr.HP xx OD Quadriga > SA3",
        "notation": "DR 5HP > 5HP > 2HP xx 214PP > 236236KK",
        "damage": "~6500+",
        "notes": {
          "pt-BR": "O combo de maior dano do jogo. Marisa causa destruição total no canto!",
          "en": "One of the highest damage combos in the game. Marisa causes total destruction in the corner!"
        },
        "situation": { "pt-BR": "Corner (nível máximo)", "en": "Corner (maximum level)" }
      }
    ]
  },
  "lily": {
    "character": "Lily",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Tomahawk Buster (LP)",
        "notation": "2MK xx 623LP",
        "damage": "~900",
        "notes": {
          "pt-BR": "Confirm básico de Lily. Tomahawk Buster é seu DP.",
          "en": "Lily's basic confirm. Tomahawk Buster is her DP."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.LP",
        "combo": "cr.LP > cr.LP > cr.MK xx Condor Dive",
        "notation": "2LP > 2LP > 2MK xx 63214K",
        "damage": "~1000",
        "notes": {
          "pt-BR": "Hit confirm com Condor Dive. Simples e eficaz.",
          "en": "Hit confirm with Condor Dive. Simple and effective."
        },
        "situation": { "pt-BR": "Pressão", "en": "Pressure" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Tomahawk Buster > SA1",
        "notation": "DR 5HP > 2HP xx 623HP > 236236P",
        "damage": "~2900",
        "notes": {
          "pt-BR": "BnB Drive Rush com super. Bom para Lily.",
          "en": "Drive Rush BnB with super. Good for Lily."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Warpath (arenas carregadas)",
        "combo": "Warpath (3 stocks) > st.HP > cr.HP xx H.Tomahawk Buster",
        "notation": "214K (3 stocks) > 5HP > 2HP xx 623HP",
        "damage": "~2500",
        "notes": {
          "pt-BR": "Com 3 estoques de vento, Warpath amplifica o dano. Gerencie seus estoques!",
          "en": "With 3 wind stocks, Warpath amplifies damage. Manage your stocks!"
        },
        "situation": { "pt-BR": "Warpath (3 stocks)", "en": "Warpath (3 stocks)" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter",
        "combo": "st.HP (PC) > cr.HP xx OD Tomahawk Buster > SA2",
        "notation": "5HP (PC) > 2HP xx 623PP > 214214P",
        "damage": "~4000",
        "notes": {
          "pt-BR": "Punish Counter com OD DP e super 2. Ótimo dano.",
          "en": "Punish Counter with OD DP and super 2. Great damage."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner Warpath max",
        "combo": "Warpath (3 stocks) > DR st.HP > cr.HP xx H.Buster > SA3",
        "notation": "214K (3) > DR 5HP > 2HP xx 623HP > 236236KK",
        "damage": "~5000+",
        "notes": {
          "pt-BR": "Lily no máximo poder: Warpath + Drive Rush + Level 3 no canto.",
          "en": "Lily at maximum power: Warpath + Drive Rush + Level 3 in corner."
        },
        "situation": { "pt-BR": "Corner (Warpath max)", "en": "Corner (Warpath max)" }
      }
    ]
  },
  "jamie": {
    "character": "Jamie",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Swing (LP) > Drink",
        "notation": "2MK xx 236LP > 214K (drink)",
        "damage": "~900",
        "notes": {
          "pt-BR": "Confirm básico. Aproveite para tomar drink e subir de nível!",
          "en": "Basic confirm. Take the opportunity to drink and level up!"
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP (Nível 2+)",
        "combo": "st.MP > cr.HP xx Swing",
        "notation": "5MP > 2HP xx 236P",
        "damage": "~1300",
        "notes": {
          "pt-BR": "Combo básico de nível 2+. Jamie fica mais forte com cada drink.",
          "en": "Basic combo at level 2+. Jamie gets stronger with each drink."
        },
        "situation": { "pt-BR": "Close range (Nível 2+)", "en": "Close range (Level 2+)" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush (Nível 3)",
        "combo": "DR st.HP > cr.HP xx H.Swing > SA1",
        "notation": "DR 5HP > 2HP xx 236HP > 236236P",
        "damage": "~3200",
        "notes": {
          "pt-BR": "Jamie no nível 3 com Drive Rush e super. Muito dano.",
          "en": "Jamie at level 3 with Drive Rush and super. Very damaging."
        },
        "situation": { "pt-BR": "Drive Rush (Nível 3)", "en": "Drive Rush (Level 3)" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Bakkai (nível 2)",
        "combo": "Bakkai (CH) > dash > cr.HP xx H.Swing > drink",
        "notation": "214K (CH) > dash > 2HP xx 236HP > 214K",
        "damage": "~2200",
        "notes": {
          "pt-BR": "Counter hit com Bakkai e conversão. Aproveite para beber!",
          "en": "Counter hit with Bakkai and conversion. Take the opportunity to drink!"
        },
        "situation": { "pt-BR": "Counter Hit", "en": "Counter Hit" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter (Nível 4)",
        "combo": "st.HK (PC, Nível 4) > cr.HP xx OD Swing > SA2",
        "notation": "5HK (PC, Lv4) > 2HP xx 236PP > 214214K",
        "damage": "~5000",
        "notes": {
          "pt-BR": "Jamie no nível máximo é devastador. Punish Counter com super 2.",
          "en": "Jamie at max level is devastating. Punish Counter with super 2."
        },
        "situation": { "pt-BR": "Punish Counter (Nível 4)", "en": "Punish Counter (Level 4)" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner SA3 (Nível 4)",
        "combo": "DR st.HP > cr.HP xx OD Swing > SA3 (Nível 4)",
        "notation": "DR 5HP > 2HP xx 236PP > 236236KK (Lv4)",
        "damage": "~6000+",
        "notes": {
          "pt-BR": "Jamie no nível 4 com SA3 no canto. Dano absurdo!",
          "en": "Jamie at level 4 with SA3 in the corner. Absurd damage!"
        },
        "situation": { "pt-BR": "Corner (Nível 4)", "en": "Corner (Level 4)" }
      }
    ]
  },
  "rashid": {
    "character": "Rashid",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Whirlwind Shot (LP)",
        "notation": "2MK xx 236LP",
        "damage": "~850",
        "notes": {
          "pt-BR": "Confirm básico com tornado. Rashid tem excelente mobilidade.",
          "en": "Basic confirm with tornado. Rashid has excellent mobility."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP",
        "combo": "st.MP > st.MK xx Rolling Assault",
        "notation": "5MP > 5MK xx 236K",
        "damage": "~1100",
        "notes": {
          "pt-BR": "Combo de close range com Rolling Assault.",
          "en": "Close range combo with Rolling Assault."
        },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Whirlwind Shot > SA1",
        "notation": "DR 5HP > 2HP xx 236HP > 236236P",
        "damage": "~3000",
        "notes": {
          "pt-BR": "BnB Drive Rush com super. Ótimo para Rashid.",
          "en": "Drive Rush BnB with super. Great for Rashid."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Eagle Spike (dive kick)",
        "combo": "Eagle Spike > cr.MP > cr.MK xx H.Whirlwind Shot",
        "notation": "214K > 2MP > 2MK xx 236HP",
        "damage": "~1800",
        "notes": {
          "pt-BR": "Confirm de dive kick. Eagle Spike é excelente tool de approach.",
          "en": "Dive kick confirm. Eagle Spike is an excellent approach tool."
        },
        "situation": { "pt-BR": "Eagle Spike approach", "en": "Eagle Spike approach" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter",
        "combo": "st.HP (PC) > cr.HP xx H.Rolling Assault > SA2",
        "notation": "5HP (PC) > 2HP xx 236HK > 214214P",
        "damage": "~4200",
        "notes": {
          "pt-BR": "Punish Counter com super 2. Rashid é muito rápido para punir.",
          "en": "Punish Counter with super 2. Rashid is very fast to punish."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner tornado setup SA3",
        "combo": "H.Whirlwind Shot (corner) > Eagle Spike > st.HP > SA3",
        "notation": "236HP (corner) > 214K > 5HP > 236236KK",
        "damage": "~5000+",
        "notes": {
          "pt-BR": "Setup único de Rashid com tornado no canto seguido de level 3.",
          "en": "Rashid's unique corner tornado setup followed by level 3."
        },
        "situation": { "pt-BR": "Corner tornado SA3", "en": "Corner tornado SA3" }
      }
    ]
  },
  "aki": {
    "character": "A.K.I.",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Fuoco Serpentino (LP)",
        "notation": "2MK xx 236LP",
        "damage": "~900",
        "notes": {
          "pt-BR": "Confirm básico de A.K.I. com veneno. Excelente alcance.",
          "en": "A.K.I.'s basic confirm with poison. Excellent range."
        },
        "situation": { "pt-BR": "Neutro / Zoning", "en": "Neutral / Zoning" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.LP",
        "combo": "cr.LP > cr.LP > cr.MK xx Yuzupoison",
        "notation": "2LP > 2LP > 2MK xx 214K",
        "damage": "~1000",
        "notes": {
          "pt-BR": "Hit confirm de light com Yuzupoison. Simples e com veneno.",
          "en": "Light hit confirm with Yuzupoison. Simple and applies poison."
        },
        "situation": { "pt-BR": "Pressão", "en": "Pressure" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Fuoco Serpentino > SA1",
        "notation": "DR 5HP > 2HP xx 236HP > 214214P",
        "damage": "~3100",
        "notes": {
          "pt-BR": "BnB Drive Rush de A.K.I. com super 1.",
          "en": "A.K.I.'s Drive Rush BnB with super 1."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Psychotoxin (slide)",
        "combo": "Psychotoxin (CH) > dash > cr.HP xx H.Fuoco Serpentino",
        "notation": "214HP (CH) > dash > 2HP xx 236HP",
        "damage": "~2000",
        "notes": {
          "pt-BR": "Counter hit com slide e conversão. A.K.I. tem ótimos poisons.",
          "en": "Counter hit with slide and conversion. A.K.I. has great poison setups."
        },
        "situation": { "pt-BR": "Counter Hit", "en": "Counter Hit" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter + veneno",
        "combo": "st.HP (PC, veneno) > cr.HP xx OD Fuoco > SA2",
        "notation": "5HP (PC, poison) > 2HP xx 236PP > 214214P",
        "damage": "~4500+",
        "notes": {
          "pt-BR": "Com veneno ativo, o dano é ainda maior. Punish Counter devastador.",
          "en": "With poison active, damage is even higher. Devastating Punish Counter."
        },
        "situation": { "pt-BR": "Punish Counter (com veneno)", "en": "Punish Counter (with poison)" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner SA3 + veneno",
        "combo": "DR st.HP > cr.HP xx OD Fuoco Serpentino > SA3",
        "notation": "DR 5HP > 2HP xx 236PP > 214214KK",
        "damage": "~5500+",
        "notes": {
          "pt-BR": "A.K.I. no máximo: veneno ativo + Drive Rush + Level 3.",
          "en": "A.K.I. at maximum: active poison + Drive Rush + Level 3."
        },
        "situation": { "pt-BR": "Corner (veneno ativo)", "en": "Corner (poison active)" }
      }
    ]
  },
  "ed": {
    "character": "Ed",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Psycho Spark (LK)",
        "notation": "2MK xx 236LK",
        "damage": "~850",
        "notes": {
          "pt-BR": "Confirm básico de Ed com Psycho Spark. Bom alcance.",
          "en": "Ed's basic confirm with Psycho Spark. Good range."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP",
        "combo": "st.MP > st.HP xx Psycho Blitz (LP)",
        "notation": "5MP > 5HP xx 214LP",
        "damage": "~1300",
        "notes": {
          "pt-BR": "Target combo simples com Psycho Blitz.",
          "en": "Simple target combo with Psycho Blitz."
        },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Psycho Blitz > SA1",
        "notation": "DR 5HP > 2HP xx 214HP > 236236P",
        "damage": "~3100",
        "notes": {
          "pt-BR": "BnB Drive Rush de Ed com super. Ótima relação custo-dano.",
          "en": "Ed's Drive Rush BnB with super. Great cost-to-damage ratio."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Psycho Knuckle",
        "combo": "Psycho Knuckle (CH) > cr.HP xx H.Psycho Blitz",
        "notation": "623P (CH) > 2HP xx 214HP",
        "damage": "~2200",
        "notes": {
          "pt-BR": "Counter hit com Knuckle e conversão. Ed tem excelentes tools.",
          "en": "Counter hit with Knuckle and conversion. Ed has excellent tools."
        },
        "situation": { "pt-BR": "Counter Hit", "en": "Counter Hit" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter",
        "combo": "st.HP (PC) > cr.HP xx OD Psycho Blitz > SA2",
        "notation": "5HP (PC) > 2HP xx 214PP > 214214P",
        "damage": "~4400",
        "notes": {
          "pt-BR": "Punish Counter com super 2 de Ed. Alto dano elegante.",
          "en": "Ed's Punish Counter with super 2. High and elegant damage."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner SA3",
        "combo": "DR st.HP > cr.HP xx OD Psycho Blitz > Psycho Knuckle > SA3",
        "notation": "DR 5HP > 2HP xx 214PP > 623P > 236236KK",
        "damage": "~5500+",
        "notes": {
          "pt-BR": "Combo de canto de nível máximo de Ed com level 3.",
          "en": "Ed's maximum level corner combo with level 3."
        },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      }
    ]
  },
  "akuma": {
    "character": "Akuma",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Gohadoken (LP)",
        "notation": "2MK xx 236LP",
        "damage": "~800",
        "notes": {
          "pt-BR": "Confirm básico. Akuma tem o Hadoken mais rápido do jogo.",
          "en": "Basic confirm. Akuma has the fastest Hadoken in the game."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.LP",
        "combo": "cr.LP > cr.LP > cr.MK xx L.Goshoryuken",
        "notation": "2LP > 2LP > 2MK xx 623LP",
        "damage": "~950",
        "notes": {
          "pt-BR": "Hit confirm de light em Goshoryuken. Akuma tem DP forte.",
          "en": "Light hit confirm into Goshoryuken. Akuma has a strong DP."
        },
        "situation": { "pt-BR": "Pressão", "en": "Pressure" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > st.HP xx H.Goshoryuken > SA1",
        "notation": "DR 5HP > 5HP xx 623HP > 236236P",
        "damage": "~3300",
        "notes": {
          "pt-BR": "BnB Drive Rush de Akuma com super.",
          "en": "Akuma's Drive Rush BnB with super."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Tatsumaki (air)",
        "combo": "j.Tatsumaki > cr.MP > cr.MK xx H.Goshoryuken",
        "notation": "j.214K > 2MP > 2MK xx 623HP",
        "damage": "~2200",
        "notes": {
          "pt-BR": "Air Tatsu confirm no solo. Excelente crossup tool de Akuma.",
          "en": "Air Tatsu confirm on landing. Excellent crossup tool for Akuma."
        },
        "situation": { "pt-BR": "Air Tatsu crossup", "en": "Air Tatsu crossup" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter + Demon Flip",
        "combo": "st.HP (PC) > Demon Flip (dive kick) > cr.HP xx H.Goshoryuken > SA2",
        "notation": "5HP (PC) > 623P > K > 2HP xx 623HP > 214214P",
        "damage": "~4500",
        "notes": {
          "pt-BR": "Combo único de Akuma com Demon Flip mid-combo. Alta habilidade.",
          "en": "Akuma's unique combo with Demon Flip mid-combo. High skill required."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Shun Goku Satsu (SA3)",
        "combo": "st.LP > st.LP > SA3 (Raging Demon)",
        "notation": "5LP > 5LP > LP+MK",
        "damage": "~4200 (fixo em 20%)",
        "notes": {
          "pt-BR": "Raging Demon! Requer que o oponente esteja em pé. Dano mínimo garantido de 20%.",
          "en": "Raging Demon! Requires opponent to be standing. Minimum guaranteed damage of 20%."
        },
        "situation": { "pt-BR": "Situacional (Raging Demon)", "en": "Situational (Raging Demon)" }
      }
    ]
  },
  "mbison": {
    "character": "M. Bison",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Psycho Inferno (LP)",
        "notation": "2MK xx 236LP",
        "damage": "~900",
        "notes": {
          "pt-BR": "Confirm básico de M. Bison com Psycho Power. Alcance excelente.",
          "en": "M. Bison's basic confirm with Psycho Power. Excellent range."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP",
        "combo": "st.MP > st.HP xx Psycho Blade",
        "notation": "5MP > 5HP xx 214P",
        "damage": "~1500",
        "notes": {
          "pt-BR": "Target combo simples com Psycho Blade. Muito dano para um básico.",
          "en": "Simple target combo with Psycho Blade. Very much damage for a basic."
        },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Psycho Blade > SA1",
        "notation": "DR 5HP > 2HP xx 214HP > 236236P",
        "damage": "~3200",
        "notes": {
          "pt-BR": "BnB Drive Rush de Bison. Psycho Power amplifica o dano.",
          "en": "Bison's Drive Rush BnB. Psycho Power amplifies damage."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Knee Press (crossup)",
        "combo": "Knee Press > cr.MP > cr.MK xx H.Psycho Inferno",
        "notation": "214K > 2MP > 2MK xx 236HP",
        "damage": "~1900",
        "notes": {
          "pt-BR": "Knee Press para crossup e confirm. Mix-up clássico de Bison.",
          "en": "Knee Press for crossup and confirm. Bison's classic mix-up."
        },
        "situation": { "pt-BR": "Knee Press crossup", "en": "Knee Press crossup" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter",
        "combo": "st.HK (PC) > cr.HP xx OD Psycho Blade > SA2",
        "notation": "5HK (PC) > 2HP xx 214PP > 214214P",
        "damage": "~5000",
        "notes": {
          "pt-BR": "Punish Counter com SA2. M. Bison voltou mais forte do que nunca!",
          "en": "Punish Counter with SA2. M. Bison came back stronger than ever!"
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner SA3 maximum",
        "combo": "DR st.HP > cr.HP xx OD Psycho Blade > H.Psycho Inferno > SA3",
        "notation": "DR 5HP > 2HP xx 214PP > 236HP > 236236KK",
        "damage": "~6500+",
        "notes": {
          "pt-BR": "O combo mais devastador de M. Bison no canto. Tirania total com Psycho Power!",
          "en": "M. Bison's most devastating corner combo. Total tyranny with Psycho Power!"
        },
        "situation": { "pt-BR": "Corner (máximo poder)", "en": "Corner (maximum power)" }
      }
    ]
  },
  "terry": {
    "character": "Terry",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Power Wave (LP)",
        "notation": "2MK xx 236LP",
        "damage": "~850",
        "notes": {
          "pt-BR": "Are You OK?! Confirm básico com Power Wave.",
          "en": "Are You OK?! Basic confirm with Power Wave."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP",
        "combo": "st.MP > st.HP xx Crack Shoot",
        "notation": "5MP > 5HP xx 214K",
        "damage": "~1400",
        "notes": {
          "pt-BR": "Combo básico com Crack Shoot. Terry tem target combos excelentes.",
          "en": "Basic combo with Crack Shoot. Terry has excellent target combos."
        },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Power Geyser > SA1",
        "notation": "DR 5HP > 2HP xx 41236HP > 236236P",
        "damage": "~3100",
        "notes": {
          "pt-BR": "BnB Drive Rush de Terry com super 1. Power Geyser é devastador.",
          "en": "Terry's Drive Rush BnB with super 1. Power Geyser is devastating."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Burn Knuckle",
        "combo": "Burn Knuckle (CH) > cr.HP xx H.Power Geyser",
        "notation": "41236LP (CH) > 2HP xx 41236HP",
        "damage": "~2200",
        "notes": {
          "pt-BR": "Counter hit com Burn Knuckle e conversão. Excelente ferramenta.",
          "en": "Counter hit with Burn Knuckle and conversion. Excellent tool."
        },
        "situation": { "pt-BR": "Counter Hit", "en": "Counter Hit" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter",
        "combo": "st.HP (PC) > cr.HP xx OD Power Geyser > Rising Tackle juggle > SA2",
        "notation": "5HP (PC) > 2HP xx 41236PP > [2]8K > 236236K",
        "damage": "~4800",
        "notes": {
          "pt-BR": "Punish Counter com OD Geyser para Rising Tackle juggle e SA2.",
          "en": "Punish Counter with OD Geyser into Rising Tackle juggle and SA2."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner SA3 (Buster Wolf)",
        "combo": "DR st.HP > cr.HP xx OD Power Geyser > Buster Wolf (SA3)",
        "notation": "DR 5HP > 2HP xx 41236PP > 41236236P",
        "damage": "~5500+",
        "notes": {
          "pt-BR": "Buster Wolf! SA3 do Terry. Dano enorme no canto. Iconic!",
          "en": "Buster Wolf! Terry's SA3. Huge corner damage. Iconic!"
        },
        "situation": { "pt-BR": "Corner (Buster Wolf)", "en": "Corner (Buster Wolf)" }
      }
    ]
  },
  "mai": {
    "character": "Mai",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Kachousen (LP)",
        "notation": "2MK xx 236LP",
        "damage": "~850",
        "notes": {
          "pt-BR": "Confirm básico com o leque de fogo. Mai tem excelente mobilidade.",
          "en": "Basic confirm with fire fan. Mai has excellent mobility."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP",
        "combo": "st.MP > cr.MK xx Ryuuenbu",
        "notation": "5MP > 2MK xx 214K",
        "damage": "~1100",
        "notes": {
          "pt-BR": "Combo básico com Ryuuenbu. Bom dano e posicionamento.",
          "en": "Basic combo with Ryuuenbu. Good damage and positioning."
        },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Ryuuenbu > SA1",
        "notation": "DR 5HP > 2HP xx 214HK > 236236P",
        "damage": "~3000",
        "notes": {
          "pt-BR": "BnB Drive Rush de Mai com super 1.",
          "en": "Mai's Drive Rush BnB with super 1."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Musasabi no Mai (dive)",
        "combo": "Musasabi no Mai (dive) > cr.MP > cr.MK xx H.Kachousen",
        "notation": "j.214K > 2MP > 2MK xx 236HP",
        "damage": "~1800",
        "notes": {
          "pt-BR": "Dive kick confirm no solo. Mai tem excelentes tools de approach aéreo.",
          "en": "Dive kick confirm on landing. Mai has excellent aerial approach tools."
        },
        "situation": { "pt-BR": "Dive kick approach", "en": "Dive kick approach" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter",
        "combo": "st.HP (PC) > cr.HP xx OD Ryuuenbu > SA2",
        "notation": "5HP (PC) > 2HP xx 214KK > 214214P",
        "damage": "~4200",
        "notes": {
          "pt-BR": "Punish Counter com super 2. Dano alto e estiloso para Mai.",
          "en": "Punish Counter with super 2. High and stylish damage for Mai."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner SA3",
        "combo": "DR st.HP > cr.HP xx OD Ryuuenbu > Hissatsu Shinobi-Bachi > SA3",
        "notation": "DR 5HP > 2HP xx 214KK > 360P > 236236KK",
        "damage": "~5500+",
        "notes": {
          "pt-BR": "Combo de canto máximo de Mai com command grab e level 3. Muito show!",
          "en": "Mai's maximum corner combo with command grab and level 3. Very flashy!"
        },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      }
    ]
  },
  "elena": {
    "character": "Elena",
    "combos": [
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "cr.MK",
        "combo": "cr.MK xx Rhino Horn (LK)",
        "notation": "2MK xx 214LK",
        "damage": "~900",
        "notes": {
          "pt-BR": "Confirm básico de Elena com Rhino Horn. Excelente range.",
          "en": "Elena's basic confirm with Rhino Horn. Excellent range."
        },
        "situation": { "pt-BR": "Neutro", "en": "Neutral" }
      },
      {
        "difficulty": { "pt-BR": "Básico", "en": "Basic" },
        "starter": "st.MP",
        "combo": "st.MP > st.HK xx Scratch Wheel",
        "notation": "5MP > 5HK xx 623K",
        "damage": "~1300",
        "notes": {
          "pt-BR": "Target combo com Scratch Wheel DP. Elena tem kicks poderosos.",
          "en": "Target combo with Scratch Wheel DP. Elena has powerful kicks."
        },
        "situation": { "pt-BR": "Close range", "en": "Close range" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Drive Rush st.HP",
        "combo": "DR st.HP > cr.HP xx H.Rhino Horn > SA1",
        "notation": "DR 5HP > 2HP xx 214HK > 236236K",
        "damage": "~3000",
        "notes": {
          "pt-BR": "BnB Drive Rush de Elena com super 1. Boa relação dano/custo.",
          "en": "Elena's Drive Rush BnB with super 1. Good damage/cost ratio."
        },
        "situation": { "pt-BR": "Drive Rush", "en": "Drive Rush" }
      },
      {
        "difficulty": { "pt-BR": "Intermediário", "en": "Intermediate" },
        "starter": "Healing (situacional)",
        "combo": "Healing (SA2 setup) > Drive Rush > cr.HP xx H.Rhino Horn",
        "notation": "SA2 (Healing) > DR 2HP xx 214HK",
        "damage": "~1500 + cura",
        "notes": {
          "pt-BR": "Elena pode se curar com SA2! Use para criar situações ofensivas.",
          "en": "Elena can heal with SA2! Use to create offensive situations."
        },
        "situation": { "pt-BR": "Healing setup", "en": "Healing setup" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Punish Counter",
        "combo": "st.HP (PC) > cr.HP xx OD Scratch Wheel > SA3",
        "notation": "5HP (PC) > 2HP xx 623KK > 236236KK",
        "damage": "~4500",
        "notes": {
          "pt-BR": "Punish Counter com OD Scratch Wheel e level 3. Máximo dano.",
          "en": "Punish Counter with OD Scratch Wheel and level 3. Maximum damage."
        },
        "situation": { "pt-BR": "Punish Counter", "en": "Punish Counter" }
      },
      {
        "difficulty": { "pt-BR": "Avançado", "en": "Advanced" },
        "starter": "Corner SA3 max",
        "combo": "DR st.HP > cr.HP xx OD Rhino Horn > Scratch Wheel > SA3",
        "notation": "DR 5HP > 2HP xx 214KK > 623HK > 236236KK",
        "damage": "~5500+",
        "notes": {
          "pt-BR": "Combo de canto máximo de Elena. Kicks de capoeira devastadores!",
          "en": "Elena's maximum corner combo. Devastating capoeira kicks!"
        },
        "situation": { "pt-BR": "Corner", "en": "Corner" }
      }
    ]
  }
};

// Derived combos object that respects the current language
let SF6_COMBOS = {};

function updateCombosLanguage() {
  const lang = (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('sf6-hub-lang') || 'pt-BR');
  SF6_COMBOS = {};

  for (const [key, data] of Object.entries(SF6_COMBOS_DATA)) {
    SF6_COMBOS[key] = {
      character: data.character,
      combos: data.combos.map(c => ({
        ...c,
        difficulty: c.difficulty[lang] || c.difficulty['en'],
        notes: c.notes[lang] || c.notes['en'],
        situation: c.situation[lang] || c.situation['en']
      }))
    };
  }
}

// Initial call
updateCombosLanguage();
