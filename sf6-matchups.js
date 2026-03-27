// Matchup knowledge base for SF6
const SF6_MATCHUPS_DATA = {
  // ───────── RYU ─────────
  "ryu-vs-ken": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Ambos têm fireball game forte — neutro equilibrado",
        "Ken tem melhor pressão close range com run",
        "Ryu tem melhor controle de espaço com cr.MK",
        "Cuidado com Jinrai Kick do Ken após bloqueio"
      ],
      "en": [
        "Both have strong fireball game — balanced neutral",
        "Ken has better close range pressure with run",
        "Ryu has better space control with cr.MK",
        "Watch out for Ken's Jinrai Kick after block"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Parry para lidar com pressão do Ken",
        "Mantenha distância média com cr.MK e Hadoken",
        "Anti-air é crucial — Ken tem muitas opções de pulo"
      ],
      "en": [
        "Use Parry to deal with Ken's pressure",
        "Maintain medium distance with cr.MK and Hadoken",
        "Anti-air is crucial — Ken has many jump options"
      ]
    },
    dangerousMoves: ["Ken's Jinrai Kick", "Ken's DR st.MP"],
    yourTools: {
      "pt-BR": ["cr.MK poke", "Parry", "Anti-air Shoryuken"],
      "en": ["cr.MK poke", "Parry", "Anti-air Shoryuken"]
    }
  },
  "ryu-vs-guile": {
    rating: "4-6",
    difficulty: { "pt-BR": "Desvantagem", "en": "Disadvantage" },
    keyPoints: {
      "pt-BR": [
        "Guile controla o ritmo com Sonic Boom",
        "Difícil se aproximar contra Sonic Boom + Flash Kick",
        "Guile tem melhores normals no neutro",
        "Drive Rush é essencial para fechar distância"
      ],
      "en": [
        "Guile controls the rhythm with Sonic Boom",
        "Hard to approach against Sonic Boom + Flash Kick",
        "Guile has better normals in neutral",
        "Drive Rush is essential to close distance"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Drive Rush para passar por Sonic Booms",
        "Pule Sonic Booms com timing e faça j.HK",
        "Pressione quando Guile não tem charge",
        "Parry pode absorver Sonic Boom mas gasta drive"
      ],
      "en": [
        "Use Drive Rush to get through Sonic Booms",
        "Jump over Sonic Booms with timing and use j.HK",
        "Press when Guile has no charge",
        "Parry can absorb Sonic Boom but consumes drive"
      ]
    },
    dangerousMoves: ["Sonic Boom", "Flash Kick", "Guile's st.HP"],
    yourTools: {
      "pt-BR": ["Drive Rush", "Jump-in timing", "cr.MK whiff punish"],
      "en": ["Drive Rush", "Jump-in timing", "cr.MK whiff punish"]
    }
  },
  "ryu-vs-jp": {
    rating: "4-6",
    difficulty: { "pt-BR": "Desvantagem", "en": "Disadvantage" },
    keyPoints: {
      "pt-BR": [
        "JP pode criar fantasmas à distância que dificultam o approach",
        "Torbalan controla o espaço de longa distância",
        "Ryu precisa usar Drive Rush para se aproximar com segurança",
        "Se aproximar é difícil mas não impossível"
      ],
      "en": [
        "JP can create distant ghosts that complicate approach",
        "Torbalan controls long-range space",
        "Ryu needs Drive Rush to approach safely",
        "Approaching is difficult but not impossible"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Parry para absorver Torbalan",
        "Drive Rush sobre fireball e punir Departure",
        "Anti-air Shoryuken em qualquer pulo do JP",
        "Não fique no espaço de conforto do JP"
      ],
      "en": [
        "Use Parry to absorb Torbalan",
        "Drive Rush through fireball and punish Departure",
        "Anti-air Shoryuken on any JP jump",
        "Don't stay in JP's comfort zone"
      ]
    },
    dangerousMoves: ["Torbalan", "JP's Departure", "JP's j.HP ghost setup"],
    yourTools: {
      "pt-BR": ["Drive Rush approach", "Parry", "Anti-air Shoryuken"],
      "en": ["Drive Rush approach", "Parry", "Anti-air Shoryuken"]
    }
  },
  "ryu-vs-cammy": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Cammy tem mais mobilidade e rush down",
        "Ryu tem melhor controle de espaço com Hadoken",
        "Cannon Spike é forte anti-air mas punível",
        "Matchup equilibrado que depende muito de leitura"
      ],
      "en": [
        "Cammy has more mobility and rush down",
        "Ryu has better space control with Hadoken",
        "Cannon Spike is strong AA but punishable",
        "Even matchup that depends heavily on reads"
      ]
    },
    tips: {
      "pt-BR": [
        "Anti-air Shoryuken para pulos e Hooligan",
        "Mantenha distância para usar Hadoken",
        "Punir Cannon Spike em -9 com cr.MK",
        "Cuidado com Spiral Arrow em fireballs"
      ],
      "en": [
        "Anti-air Shoryuken for jumps and Hooligan",
        "Maintain distance to use Hadoken",
        "Punish Cannon Spike at -9 with cr.MK",
        "Watch out for Spiral Arrow through fireballs"
      ]
    },
    dangerousMoves: ["Cannon Spike (AA trade)", "Hooligan Combination", "OD Spiral Arrow"],
    yourTools: {
      "pt-BR": ["Anti-air Shoryuken", "cr.MK zoning", "Hadoken spacing"],
      "en": ["Anti-air Shoryuken", "cr.MK zoning", "Hadoken spacing"]
    }
  },
  "ryu-vs-akuma": {
    rating: "4-6",
    difficulty: { "pt-BR": "Desvantagem", "en": "Disadvantage" },
    keyPoints: {
      "pt-BR": [
        "Akuma tem Hadoken mais rápido e fireball game superior",
        "Demon Flip cria mix-ups impossíveis de defender",
        "Akuma tem menos vida — foque em maximizar dano",
        "Goshoryuken é forte anti-air contra pulos de Ryu"
      ],
      "en": [
        "Akuma has faster Hadoken and superior fireball game",
        "Demon Flip creates impossible-to-defend mix-ups",
        "Akuma has less health — focus on maximizing damage",
        "Goshoryuken is strong AA against Ryu's jumps"
      ]
    },
    tips: {
      "pt-BR": [
        "Parry o Demon Flip para mudar a situação",
        "Não pule descuidadamente — Goshoryuken pune pulos",
        "Tente maximizar dano quando Akuma cometer erros",
        "SA1 punit fireball de Akuma no bloqueio"
      ],
      "en": [
        "Parry the Demon Flip to turn the situation around",
        "Don't jump carelessly — Goshoryuken punishes jumps",
        "Try to maximize damage when Akuma makes mistakes",
        "SA1 can punish Akuma's blocked fireballs"
      ]
    },
    dangerousMoves: ["Demon Flip mix-up", "j.Tatsumaki crossup", "Gohadoken barrage"],
    yourTools: {
      "pt-BR": ["Parry (Demon Flip)", "Anti-air Shoryuken", "SA1 punish"],
      "en": ["Parry (Demon Flip)", "Anti-air Shoryuken", "SA1 punish"]
    }
  },

  // ───────── KEN ─────────
  "ken-vs-guile": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Ken tem ferramentas para lidar com zoning",
        "Jinrai Kick passa por Sonic Boom",
        "Run permite se aproximar rápido",
        "Guile ainda controla neutro de longe"
      ],
      "en": [
        "Ken has tools to deal with zoning",
        "Jinrai Kick goes through Sonic Boom",
        "Run allows quick approach",
        "Guile still controls neutral from afar"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Jinrai Kick para passar Sonic Boom",
        "Run > throw é forte contra Guile defensive",
        "Cuidado com Flash Kick após pressão",
        "Mix throw e shimmy após knockdown"
      ],
      "en": [
        "Use Jinrai Kick to pass Sonic Boom",
        "Run > throw is strong against defensive Guile",
        "Watch out for Flash Kick after pressure",
        "Mix throw and shimmy after knockdown"
      ]
    },
    dangerousMoves: ["Flash Kick", "Guile's cr.HP AA"],
    yourTools: {
      "pt-BR": ["Jinrai Kick", "Run pressure", "DR st.MP"],
      "en": ["Jinrai Kick", "Run pressure", "DR st.MP"]
    }
  },
  "ken-vs-zangief": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "Ken tem mobilidade superior para evitar SPD",
        "Run permite criar espaço rapidamente",
        "Zangief sofre com o fireball game de Ken",
        "Shoryuken pune qualquer tentativa de approach de Zangief"
      ],
      "en": [
        "Ken has superior mobility to avoid SPD",
        "Run allows quickly creating space",
        "Zangief suffers against Ken's fireball game",
        "Shoryuken punishes any of Zangief's approach attempts"
      ]
    },
    tips: {
      "pt-BR": [
        "Mantenha distância e use Hadoken",
        "Não fique em range de SPD/grab",
        "Shoryuken anti-air em qualquer pulo de Zangief",
        "Run para escapar de Lariat e criar espaço"
      ],
      "en": [
        "Maintain distance and use Hadoken",
        "Don't stay in SPD/grab range",
        "Shoryuken AA any of Zangief's jumps",
        "Run to escape Lariat and create space"
      ]
    },
    dangerousMoves: ["SPD (all ranges)", "Lariat", "OD Cyclone Lariat"],
    yourTools: {
      "pt-BR": ["Hadoken spacing", "Anti-air Shoryuken", "Run mobility"],
      "en": ["Hadoken spacing", "Anti-air Shoryuken", "Run mobility"]
    }
  },
  "ken-vs-m. bison": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Ambos têm excelente pressão close range",
        "M. Bison tem melhor zoning com Psycho Inferno",
        "Ken tem melhor mobilidade com Run",
        "Knee Press crossup é o maior perigo"
      ],
      "en": [
        "Both have excellent close range pressure",
        "M. Bison has better zoning with Psycho Inferno",
        "Ken has better mobility with Run",
        "Knee Press crossup is the biggest danger"
      ]
    },
    tips: {
      "pt-BR": [
        "Anti-air Shoryuken qualquer Knee Press aéreo",
        "Jinrai Kick para passar Psycho Inferno",
        "Pressão de Run é muito eficaz contra Bison defensivo",
        "Cuidado com o grande dano de Bison em Punish Counter"
      ],
      "en": [
        "Anti-air Shoryuken any aerial Knee Press",
        "Jinrai Kick to get through Psycho Inferno",
        "Run pressure is very effective against defensive Bison",
        "Watch out for Bison's high Punish Counter damage"
      ]
    },
    dangerousMoves: ["Knee Press crossup", "Psycho Blade", "Psycho Inferno"],
    yourTools: {
      "pt-BR": ["Anti-air Shoryuken", "Run pressure", "Jinrai Kick"],
      "en": ["Anti-air Shoryuken", "Run pressure", "Jinrai Kick"]
    }
  },

  // ───────── LUKE ─────────
  "luke-vs-jp": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "Luke tem ferramentas para lidar com zoning do JP",
        "Flash Knuckle passa por Torbalan",
        "JP é frágil sob pressão",
        "Cuidado com Departure do JP"
      ],
      "en": [
        "Luke has tools to deal with JP's zoning",
        "Flash Knuckle goes through Torbalan",
        "JP is fragile under pressure",
        "Watch out for JP's Departure"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Flash Knuckle para fechar gap",
        "Pressão constante é a chave",
        "Não deixe JP jogar o jogo dele",
        "Anti-air é crítico contra j.HP do JP"
      ],
      "en": [
        "Use Flash Knuckle to close gap",
        "Constant pressure is key",
        "Don't let JP play his game",
        "Anti-air is critical against JP's j.HP"
      ]
    },
    dangerousMoves: ["JP's Torbalan", "JP's Departure", "JP's j.HP"],
    yourTools: {
      "pt-BR": ["Flash Knuckle", "st.HP AA", "Drive Rush pressure"],
      "en": ["Flash Knuckle", "st.HP AA", "Drive Rush pressure"]
    }
  },
  "luke-vs-zangief": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "Luke pode manter Zangief longe com Sand Blast",
        "st.HP anti-air pune pulos de Zangief",
        "Drive Rush permite sair de situações difíceis",
        "Zangief causa dano devastador se conseguir entrar"
      ],
      "en": [
        "Luke can keep Zangief at bay with Sand Blast",
        "st.HP AA punishes Zangief's jumps",
        "Drive Rush allows escaping difficult situations",
        "Zangief deals devastating damage if he gets in"
      ]
    },
    tips: {
      "pt-BR": [
        "Mantenha Sand Blast para controlar espaço",
        "Anti-air consistente é essencial",
        "Não fique em grab range",
        "Maximize dano em qualquer erro de Zangief"
      ],
      "en": [
        "Keep Sand Blast to control space",
        "Consistent AA is essential",
        "Don't stay in grab range",
        "Maximize damage on any Zangief mistake"
      ]
    },
    dangerousMoves: ["SPD", "Flying Powerbomb (720P)", "Cyclone Lariat"],
    yourTools: {
      "pt-BR": ["Sand Blast spacing", "st.HP AA", "Drive Rush escape"],
      "en": ["Sand Blast spacing", "st.HP AA", "Drive Rush escape"]
    }
  },
  "luke-vs-akuma": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Ambos têm excelente pressure e fireball game",
        "Akuma tem menos vida — Luke pode terminar rapidamente",
        "Demon Flip é perigoso mas punível com AA correto",
        "Luke tem normals superiores de perto"
      ],
      "en": [
        "Both have excellent pressure and fireball game",
        "Akuma has less health — Luke can finish quickly",
        "Demon Flip is dangerous but punishable with correct AA",
        "Luke has superior normals up close"
      ]
    },
    tips: {
      "pt-BR": [
        "Anti-air rigoroso para Demon Flip",
        "Aproveite a baixa vida de Akuma para maximizar dano",
        "Flash Knuckle passa por Gohadoken",
        "Pressão consistente derruba o game plan de Akuma"
      ],
      "en": [
        "Strict AA for Demon Flip",
        "Take advantage of Akuma's low health to maximize damage",
        "Flash Knuckle goes through Gohadoken",
        "Consistent pressure collapses Akuma's game plan"
      ]
    },
    dangerousMoves: ["Demon Flip mix-up", "j.Tatsumaki", "Raging Demon (SA3)"],
    yourTools: {
      "pt-BR": ["st.HP AA", "Flash Knuckle approach", "Sand Blast spacing"],
      "en": ["st.HP AA", "Flash Knuckle approach", "Sand Blast spacing"]
    }
  },

  // ───────── CAMMY ─────────
  "cammy-vs-zangief": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "Cammy tem mobilidade para evitar grabs",
        "Spiral Arrow mantém Zangief longe",
        "Zangief tem dificuldade pegando Cammy",
        "Cuidado com lariat e SPD range"
      ],
      "en": [
        "Cammy has mobility to avoid grabs",
        "Spiral Arrow keeps Zangief away",
        "Zangief has trouble catching Cammy",
        "Watch out for lariat and SPD range"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Spiral Arrow para manter distância",
        "Dive Kick para cruzar e escapar",
        "Não fique em grab range",
        "Poke com st.MK e cr.MK"
      ],
      "en": [
        "Use Spiral Arrow to maintain distance",
        "Dive Kick to cross up and escape",
        "Don't stay in grab range",
        "Poke with st.MK and cr.MK"
      ]
    },
    dangerousMoves: ["SPD (all ranges)", "Lariat", "st.HP"],
    yourTools: {
      "pt-BR": ["Spiral Arrow", "Dive Kick", "Mobility"],
      "en": ["Spiral Arrow", "Dive Kick", "Mobility"]
    }
  },
  "cammy-vs-dhalsim": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "Cammy tem mobilidade para penetrar no zoning de Dhalsim",
        "Hooligan Combination passa por Yoga Fire",
        "Dhalsim sofre muito sob pressão constante",
        "Teleporte de Dhalsim pode resetar situação"
      ],
      "en": [
        "Cammy has mobility to penetrate Dhalsim's zoning",
        "Hooligan Combination goes through Yoga Fire",
        "Dhalsim suffers greatly under constant pressure",
        "Dhalsim's teleport can reset the situation"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Hooligan para se aproximar através de fireballs",
        "Pressão constante uma vez perto é chave",
        "Anti-air em Dhalsim no ar — ele pula muito",
        "Quando ele teleportar, leia a direção e punish"
      ],
      "en": [
        "Use Hooligan to approach through fireballs",
        "Constant pressure once close is key",
        "AA Dhalsim in the air — he jumps a lot",
        "When he teleports, read the direction and punish"
      ]
    },
    dangerousMoves: ["Yoga Fire (fullscreen)", "Yoga Flame (close)", "Teleport mix-up"],
    yourTools: {
      "pt-BR": ["Hooligan Combination", "Spiral Arrow dash", "Dive Kick approach"],
      "en": ["Hooligan Combination", "Spiral Arrow dash", "Dive Kick approach"]
    }
  },
  "cammy-vs-jp": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "Cammy tem as ferramentas certas para lidar com JP",
        "Hooligan passa por Torbalan",
        "JP é frágil sob pressão de Cammy",
        "Cuidado com anti-airs de JP"
      ],
      "en": [
        "Cammy has the right tools to deal with JP",
        "Hooligan goes through Torbalan",
        "JP is fragile under Cammy's pressure",
        "Watch out for JP's anti-airs"
      ]
    },
    tips: {
      "pt-BR": [
        "Hooligan para se aproximar através de Torbalan",
        "Pressão constante depois de entrar",
        "Cannon Spike para qualquer pulo de JP",
        "Dive Kick para crossup mix-up"
      ],
      "en": [
        "Hooligan to approach through Torbalan",
        "Constant pressure after getting in",
        "Cannon Spike for any JP jump",
        "Dive Kick for crossup mix-up"
      ]
    },
    dangerousMoves: ["JP's Departure (AA)", "Torbalan (fullscreen)", "JP's j.HP ghost"],
    yourTools: {
      "pt-BR": ["Hooligan Combination", "Cannon Spike AA", "Dive Kick mix-up"],
      "en": ["Hooligan Combination", "Cannon Spike AA", "Dive Kick mix-up"]
    }
  },

  // ───────── GUILE ─────────
  "guile-vs-dhalsim": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "Sonic Boom controla o espaço melhor que Yoga Fire",
        "Guile tem melhor anti-air com Flash Kick",
        "Dhalsim precisa teleportar para se aproximar",
        "Guile vence o fireball war no geral"
      ],
      "en": [
        "Sonic Boom controls space better than Yoga Fire",
        "Guile has better AA with Flash Kick",
        "Dhalsim needs to teleport to approach",
        "Guile wins the fireball war overall"
      ]
    },
    tips: {
      "pt-BR": [
        "Lance Sonic Boom em cadência para controlar espaço",
        "Flash Kick para qualquer tentativa de aproximação aérea",
        "Quando Dhalsim teleportar, tenha Flash Kick pronto",
        "Drive Rush para se aproximar quando necessário"
      ],
      "en": [
        "Throw Sonic Boom rhythmically to control space",
        "Flash Kick for any aerial approach attempt",
        "When Dhalsim teleports, have Flash Kick ready",
        "Drive Rush to approach when necessary"
      ]
    },
    dangerousMoves: ["Dhalsim's Teleport mix-up", "Yoga Comet", "Long range normals"],
    yourTools: {
      "pt-BR": ["Sonic Boom spacing", "Flash Kick AA", "cr.HP anti-air"],
      "en": ["Sonic Boom spacing", "Flash Kick AA", "cr.HP anti-air"]
    }
  },
  "guile-vs-rashid": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Rashid tem mobilidade para lidar com Sonic Boom",
        "Eagle Spike passa por cima de Sonic Boom",
        "Guile tem melhor zoning estático",
        "Rashid tem mix-up superior de perto"
      ],
      "en": [
        "Rashid has mobility to deal with Sonic Boom",
        "Eagle Spike goes over Sonic Boom",
        "Guile has better static zoning",
        "Rashid has superior close range mix-up"
      ]
    },
    tips: {
      "pt-BR": [
        "Flash Kick anti-air em Eagle Spike",
        "Mantenha Sonic Boom para controlar espaço",
        "Cuidado com Rolling Assault em bloqueio de Boom",
        "Drive Rush para manter pressão quando necessário"
      ],
      "en": [
        "Flash Kick AA on Eagle Spike",
        "Keep Sonic Boom to control space",
        "Watch out for Rolling Assault on Boom block",
        "Drive Rush to maintain pressure when needed"
      ]
    },
    dangerousMoves: ["Eagle Spike approach", "Rolling Assault", "Rashid's Whirlwind Shot"],
    yourTools: {
      "pt-BR": ["Sonic Boom spacing", "Flash Kick AA", "Boom > Flash Kick setplay"],
      "en": ["Sonic Boom spacing", "Flash Kick AA", "Boom > Flash Kick setplay"]
    }
  },

  // ───────── CHUN-LI ─────────
  "chun-li-vs-ryu": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Ambos têm bom controle de espaço e fireball game",
        "Chun-Li tem kicks de range superior",
        "Ryu tem Shoryuken mais forte como anti-air",
        "Lightning Kicks superam fireball war de perto"
      ],
      "en": [
        "Both have good space control and fireball game",
        "Chun-Li has superior range kicks",
        "Ryu has stronger Shoryuken as anti-air",
        "Lightning Kicks win the close fireball war"
      ]
    },
    tips: {
      "pt-BR": [
        "Tensho Kicks para anti-air de pulos de Ryu",
        "Kikouken (fireball) para controlar distância",
        "cr.MK e st.MK têm ótimo alcance para poking",
        "Drive Rush para confirmar em Lightning Kicks"
      ],
      "en": [
        "Tensho Kicks AA for Ryu's jumps",
        "Kikouken (fireball) to control distance",
        "cr.MK and st.MK have great range for poking",
        "Drive Rush to confirm into Lightning Kicks"
      ]
    },
    dangerousMoves: ["Ryu's Anti-air Shoryuken", "Ryu's cr.MK whiff punish", "OD Tatsu combo"],
    yourTools: {
      "pt-BR": ["Tensho Kicks AA", "st.MK / cr.MK poke", "Lightning Kicks pressure"],
      "en": ["Tensho Kicks AA", "st.MK / cr.MK poke", "Lightning Kicks pressure"]
    }
  },
  "chun-li-vs-guile": {
    rating: "4-6",
    difficulty: { "pt-BR": "Desvantagem", "en": "Disadvantage" },
    keyPoints: {
      "pt-BR": [
        "Guile controla o espaço melhor com Sonic Boom + Flash Kick",
        "Chun-Li tem dificuldade passando pelo zoning de Guile",
        "Tensho Kicks para anti-air em pulos de Guile",
        "Kikouken não tem vantagem clara contra Sonic Boom"
      ],
      "en": [
        "Guile controls space better with Sonic Boom + Flash Kick",
        "Chun-Li has difficulty getting through Guile's zoning",
        "Tensho Kicks for AA on Guile's jumps",
        "Kikouken has no clear advantage against Sonic Boom"
      ]
    },
    tips: {
      "pt-BR": [
        "Drive Rush para se aproximar com segurança",
        "Tensho Kicks reage a qualquer pulo de Guile",
        "Lightning Kicks são mais eficazes de perto",
        "Procure gaps no Sonic Boom coverage de Guile"
      ],
      "en": [
        "Drive Rush to approach safely",
        "Tensho Kicks react to any Guile jump",
        "Lightning Kicks are more effective up close",
        "Look for gaps in Guile's Sonic Boom coverage"
      ]
    },
    dangerousMoves: ["Sonic Boom", "Flash Kick", "Guile's st.HP"],
    yourTools: {
      "pt-BR": ["Drive Rush approach", "Tensho Kicks AA", "Lightning Kicks close"],
      "en": ["Drive Rush approach", "Tensho Kicks AA", "Lightning Kicks close"]
    }
  },

  // ───────── ZANGIEF ─────────
  "zangief-vs-jp": {
    rating: "3-7",
    difficulty: { "pt-BR": "Grande Desvantagem", "en": "Heavy Disadvantage" },
    keyPoints: {
      "pt-BR": [
        "JP pode criar fantasmas à distância que tornam o approach quase impossível",
        "Torbalan e Departure juntos criam um muro difícil de quebrar",
        "Zangief precisa de muita leitura para se aproximar",
        "Uma vez próximo, SPD resolve tudo — mas chegar lá é o problema"
      ],
      "en": [
        "JP can create distant ghosts making approach almost impossible",
        "Torbalan and Departure together create a hard-to-break wall",
        "Zangief needs a lot of reads to approach",
        "Once close, SPD solves everything — but getting there is the problem"
      ]
    },
    tips: {
      "pt-BR": [
        "Corra entre as fireballs com timing preciso",
        "OD Cyclone Lariat absorve alguns projéteis",
        "Drive Rush é essencial para fechar a distância",
        "Uma vez dentro, não dê espaço — pressão máxima"
      ],
      "en": [
        "Run between fireballs with precise timing",
        "OD Cyclone Lariat absorbs some projectiles",
        "Drive Rush is essential to close the gap",
        "Once inside, give no space — maximum pressure"
      ]
    },
    dangerousMoves: ["Torbalan fullscreen", "JP's Departure AA", "JP's ghost setplay"],
    yourTools: {
      "pt-BR": ["OD Cyclone (absorb)", "Drive Rush approach", "SPD once in range"],
      "en": ["OD Cyclone (absorb)", "Drive Rush approach", "SPD once in range"]
    }
  },
  "zangief-vs-dhalsim": {
    rating: "4-6",
    difficulty: { "pt-BR": "Desvantagem", "en": "Disadvantage" },
    keyPoints: {
      "pt-BR": [
        "Dhalsim tem alcance infinitamente maior que Zangief",
        "Yoga Fire mantém Zangief à distância",
        "Teleporte de Dhalsim permite escapar de SPD",
        "Zangief tem dificuldade se aproximando"
      ],
      "en": [
        "Dhalsim has infinitely greater range than Zangief",
        "Yoga Fire keeps Zangief at distance",
        "Dhalsim's teleport allows escaping SPD",
        "Zangief has difficulty approaching"
      ]
    },
    tips: {
      "pt-BR": [
        "Lariat absorve Yoga Fire — use com sabedoria",
        "Drive Rush para fechar distância rapidamente",
        "Quando Dhalsim teleportar, tenha grab pronto",
        "Use pulos com timing para evitar fireballs"
      ],
      "en": [
        "Lariat absorbs Yoga Fire — use wisely",
        "Drive Rush to close distance quickly",
        "When Dhalsim teleports, have grab ready",
        "Use jumps with timing to avoid fireballs"
      ]
    },
    dangerousMoves: ["Yoga Fire", "Yoga Flame (close)", "Teleport escape"],
    yourTools: {
      "pt-BR": ["Cyclone Lariat (absorb)", "Drive Rush approach", "SPD / Flying Powerbomb"],
      "en": ["Cyclone Lariat (absorb)", "Drive Rush approach", "SPD / Flying Powerbomb"]
    }
  },

  // ───────── JURI ─────────
  "juri-vs-ryu": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Juri tem kicks superiores e range similar a Ryu",
        "Ki storage torna Juri imprevisível",
        "Ryu tem Shoryuken mais confiável como anti-air",
        "Juri tem combo potencial superior com ki completo"
      ],
      "en": [
        "Juri has superior kicks and similar range to Ryu",
        "Ki storage makes Juri unpredictable",
        "Ryu has more reliable Shoryuken as AA",
        "Juri has higher combo potential with full ki"
      ]
    },
    tips: {
      "pt-BR": [
        "Armazene ki enquanto faz pressão",
        "Fuharenkyaku HK tem ótimo dano no confirm",
        "Tensenrin para anti-air em pulos de Ryu",
        "Alterne entre Fuhajin e ataques normais"
      ],
      "en": [
        "Store ki while applying pressure",
        "HK Fuharenkyaku has great confirm damage",
        "Tensenrin AA for Ryu's jumps",
        "Alternate between Fuhajin and normal attacks"
      ]
    },
    dangerousMoves: ["Ryu's Anti-air Shoryuken", "Ryu's OD Tatsu", "Ryu's SA1 punish"],
    yourTools: {
      "pt-BR": ["Ki storage management", "Tensenrin AA", "Fuharenkyaku confirm"],
      "en": ["Ki storage management", "Tensenrin AA", "Fuharenkyaku confirm"]
    }
  },
  "juri-vs-cammy": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Ambas são personagens de rush down com excelente mobilidade",
        "Cammy tem Cannon Spike superior como anti-air",
        "Juri tem maior potencial de dano com ki carregado",
        "Mix-up de Cammy vs ki de Juri — leitura é fundamental"
      ],
      "en": [
        "Both are rush down characters with excellent mobility",
        "Cammy has superior Cannon Spike as AA",
        "Juri has higher damage potential with stored ki",
        "Cammy's mix-up vs Juri's ki — reads are fundamental"
      ]
    },
    tips: {
      "pt-BR": [
        "Tensenrin AA em pulos e Hooligan de Cammy",
        "Armazene ki durante neutral para confirm pesado",
        "Fuharenkyaku supera Spiral Arrow em poke range",
        "Não gaste ki sem confirmar um hit"
      ],
      "en": [
        "Tensenrin AA on Cammy's jumps and Hooligan",
        "Store ki during neutral for heavy confirm",
        "Fuharenkyaku beats Spiral Arrow in poke range",
        "Don't spend ki without confirming a hit"
      ]
    },
    dangerousMoves: ["Cammy's Cannon Spike", "Hooligan Combination", "OD Spiral Arrow"],
    yourTools: {
      "pt-BR": ["Tensenrin AA", "Ki storage confirm", "cr.MK poke"],
      "en": ["Tensenrin AA", "Ki storage confirm", "cr.MK poke"]
    }
  },

  // ───────── JP ─────────
  "jp-vs-ryu": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "JP controla o espaço melhor com Torbalan + fantasmas",
        "Departure cria ameaça em múltiplas distâncias",
        "Ryu precisa usar Drive Rush para se aproximar",
        "JP vence o fireball war com suas tools únicas"
      ],
      "en": [
        "JP controls space better with Torbalan + ghosts",
        "Departure creates threats at multiple distances",
        "Ryu needs Drive Rush to approach",
        "JP wins the fireball war with his unique tools"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Amnesia como anti-air confiável",
        "Torbalan no timing de pulo para controle total",
        "Departure no espaço de mid-range para wall",
        "Cuidado com SA1 de Ryu em fireballs bloqueadas"
      ],
      "en": [
        "Use Amnesia as reliable AA",
        "Torbalan at jump timing for full control",
        "Departure in mid-range space for wall",
        "Watch out for Ryu's SA1 on blocked fireballs"
      ]
    },
    dangerousMoves: ["Ryu's Drive Rush approach", "Ryu's SA1 punish", "Parry + punish"],
    yourTools: {
      "pt-BR": ["Torbalan spacing", "Amnesia AA", "Departure wall"],
      "en": ["Torbalan spacing", "Amnesia AA", "Departure wall"]
    }
  },

  // ───────── DHALSIM ─────────
  "dhalsim-vs-marisa": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "Marisa é lenta e Dhalsim pode explorar isso ao máximo",
        "Yoga Fire mantém Marisa na distância ideal",
        "Teleporte permite escapar da poderosa pressão de Marisa",
        "Dhalsim sofre muito se Marisa conseguir entrar"
      ],
      "en": [
        "Marisa is slow and Dhalsim can exploit this to the fullest",
        "Yoga Fire keeps Marisa at the ideal distance",
        "Teleport allows escaping Marisa's powerful pressure",
        "Dhalsim suffers a lot if Marisa manages to get in"
      ]
    },
    tips: {
      "pt-BR": [
        "Zoning máximo — nunca deixe Marisa se aproximar",
        "Teleporte quando Marisa está prestes a entrar",
        "st.HP e cr.HP têm range suficiente para punir Gladius",
        "Yoga Comet anti-air para pulos agressivos de Marisa"
      ],
      "en": [
        "Maximum zoning — never let Marisa get close",
        "Teleport when Marisa is about to close in",
        "st.HP and cr.HP have enough range to punish Gladius",
        "Yoga Comet AA for Marisa's aggressive jumps"
      ]
    },
    dangerousMoves: ["Marisa's DR st.HP", "Quadriga (punish range)", "Marisa's SA3 corner"],
    yourTools: {
      "pt-BR": ["Yoga Fire fullscreen", "Teleport escape", "Long-range normals"],
      "en": ["Yoga Fire fullscreen", "Teleport escape", "Long-range normals"]
    }
  },

  // ───────── AKUMA ─────────
  "akuma-vs-ryu": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "Akuma tem Hadoken mais rápido e fireball game superior",
        "Demon Flip cria mix-up que Ryu luta para defender",
        "Akuma tem menos vida — aproveite qualquer abertura",
        "Air Tatsu crossup é muito difícil de anti-air corretamente"
      ],
      "en": [
        "Akuma has faster Hadoken and superior fireball game",
        "Demon Flip creates mix-up that Ryu struggles to defend",
        "Akuma has less health — take advantage of any opening",
        "Air Tatsu crossup is very difficult to AA correctly"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Demon Flip para criar mix-up mental",
        "Gohadoken mais rápido vence troca de fireball",
        "Goshoryuken em qualquer pulo de Ryu",
        "Cuide da baixa vida — não se exponha"
      ],
      "en": [
        "Use Demon Flip to create mental mix-up",
        "Faster Gohadoken wins fireball exchange",
        "Goshoryuken on any Ryu jump",
        "Be careful with low health — don't expose yourself"
      ]
    },
    dangerousMoves: ["Ryu's Shoryuken vs Demon Flip", "Ryu's SA1 on fireballs", "Ryu's cr.MK poke"],
    yourTools: {
      "pt-BR": ["Demon Flip mix-up", "Gohadoken speed", "Goshoryuken AA"],
      "en": ["Demon Flip mix-up", "Gohadoken speed", "Goshoryuken AA"]
    }
  },
  "akuma-vs-zangief": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "Akuma pode manter Zangief longe com Gohadoken",
        "Demon Flip cria situações onde Zangief não pode fazer grab",
        "Zangief causa dano devastador — Akuma tem baixa vida",
        "Air Tatsu crossup é difícil de lidar para Zangief"
      ],
      "en": [
        "Akuma can keep Zangief at bay with Gohadoken",
        "Demon Flip creates situations where Zangief can't grab",
        "Zangief deals devastating damage — Akuma has low health",
        "Air Tatsu crossup is hard for Zangief to deal with"
      ]
    },
    tips: {
      "pt-BR": [
        "Gohadoken para controlar espaço e forçar pulo",
        "Goshoryuken anti-air em qualquer pulo de Zangief",
        "Não fique em range de grab — mobilidade é tudo",
        "Demon Flip dive para mix-up uma vez perto"
      ],
      "en": [
        "Gohadoken to control space and force jump",
        "Goshoryuken AA on any Zangief jump",
        "Don't stay in grab range — mobility is everything",
        "Demon Flip dive for mix-up once close"
      ]
    },
    dangerousMoves: ["SPD (all ranges)", "Zangief's Lariat AA", "Flying Powerbomb (720P)"],
    yourTools: {
      "pt-BR": ["Gohadoken spacing", "Goshoryuken AA", "Demon Flip mobility"],
      "en": ["Gohadoken spacing", "Goshoryuken AA", "Demon Flip mobility"]
    }
  },

  // ───────── M. BISON ─────────
  "m. bison-vs-ryu": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Bison tem Psycho Inferno similar ao Hadoken de Ryu",
        "Knee Press cria cross-up que Ryu tem dificuldade defendendo",
        "Ryu tem Shoryuken mais confiável como anti-air",
        "Ambos têm excelente poke game com normals"
      ],
      "en": [
        "Bison has Psycho Inferno similar to Ryu's Hadoken",
        "Knee Press creates crossup Ryu has difficulty defending",
        "Ryu has more reliable Shoryuken as AA",
        "Both have excellent poke game with normals"
      ]
    },
    tips: {
      "pt-BR": [
        "Knee Press para criar situações de crossup",
        "Psycho Blade para punish e cancel de normals",
        "Cuidado com Shoryuken de Ryu em Knee Press",
        "st.HP tem range excelente para poking"
      ],
      "en": [
        "Knee Press to create crossup situations",
        "Psycho Blade for punish and normal cancel",
        "Watch out for Ryu's Shoryuken on Knee Press",
        "st.HP has excellent range for poking"
      ]
    },
    dangerousMoves: ["Ryu's Anti-air Shoryuken", "Ryu's SA1 on fireballs", "Ryu's cr.MK range"],
    yourTools: {
      "pt-BR": ["Knee Press crossup", "Psycho Blade punish", "st.HP poke"],
      "en": ["Knee Press crossup", "Psycho Blade punish", "st.HP poke"]
    }
  },
  "m. bison-vs-guile": {
    rating: "4-6",
    difficulty: { "pt-BR": "Desvantagem", "en": "Disadvantage" },
    keyPoints: {
      "pt-BR": [
        "Guile controla o espaço melhor com Sonic Boom",
        "Psycho Inferno é mais lento e menos eficaz que Sonic Boom",
        "Bison precisa usar Knee Press para se aproximar",
        "Flash Kick pune Knee Press mal espaçado"
      ],
      "en": [
        "Guile controls space better with Sonic Boom",
        "Psycho Inferno is slower and less effective than Sonic Boom",
        "Bison needs to use Knee Press to approach",
        "Flash Kick punishes poorly spaced Knee Press"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Drive Rush para passar Sonic Boom",
        "Knee Press bem espaçado para se aproximar",
        "st.HP tem range para poking no neutro",
        "Pressão próxima é chave — Bison domina close range"
      ],
      "en": [
        "Use Drive Rush to get through Sonic Boom",
        "Well-spaced Knee Press to approach",
        "st.HP has range for neutral poking",
        "Close pressure is key — Bison dominates close range"
      ]
    },
    dangerousMoves: ["Sonic Boom", "Flash Kick AA", "Guile's st.HP range"],
    yourTools: {
      "pt-BR": ["Drive Rush approach", "Knee Press spacing", "Close range dominance"],
      "en": ["Drive Rush approach", "Knee Press spacing", "Close range dominance"]
    }
  },

  // ───────── TERRY ─────────
  "terry-vs-ryu": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Terry tem Power Wave que compete com Hadoken",
        "Burn Knuckle penetra fireball e cria mix-up",
        "Ambos têm excelentes anti-airs",
        "Rising Tackle de Terry é forte anti-air mas tem risco"
      ],
      "en": [
        "Terry has Power Wave that competes with Hadoken",
        "Burn Knuckle penetrates fireball and creates mix-up",
        "Both have excellent anti-airs",
        "Terry's Rising Tackle is strong AA but risky"
      ]
    },
    tips: {
      "pt-BR": [
        "Burn Knuckle passa por Hadoken para approach",
        "Rising Tackle para anti-air com charge",
        "Power Geyser é excelente para punish",
        "Crack Shoot cria situação de mix-up agressiva"
      ],
      "en": [
        "Burn Knuckle goes through Hadoken for approach",
        "Rising Tackle for AA with charge",
        "Power Geyser is excellent for punish",
        "Crack Shoot creates aggressive mix-up situation"
      ]
    },
    dangerousMoves: ["Ryu's Anti-air Shoryuken", "Ryu's Tatsu at Rising Tackle recovery", "Ryu's SA1"],
    yourTools: {
      "pt-BR": ["Burn Knuckle approach", "Rising Tackle AA", "Power Geyser punish"],
      "en": ["Burn Knuckle approach", "Rising Tackle AA", "Power Geyser punish"]
    }
  },
  "terry-vs-akuma": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Terry tem normals superiores de perto com maior dano",
        "Akuma tem mais mobilidade com Demon Flip",
        "Terry tem mais vida que Akuma — jogue longo",
        "Burn Knuckle passa por Gohadoken"
      ],
      "en": [
        "Terry has superior close range normals with more damage",
        "Akuma has more mobility with Demon Flip",
        "Terry has more health than Akuma — play long",
        "Burn Knuckle goes through Gohadoken"
      ]
    },
    tips: {
      "pt-BR": [
        "Anti-air Akuma em qualquer Demon Flip",
        "Burn Knuckle para approach através de fireball",
        "Rising Tackle para anti-air confiável",
        "Power Geyser pune qualquer erro de Akuma"
      ],
      "en": [
        "AA Akuma on any Demon Flip",
        "Burn Knuckle to approach through fireball",
        "Rising Tackle for reliable AA",
        "Power Geyser punishes any Akuma mistake"
      ]
    },
    dangerousMoves: ["Demon Flip mix-up", "j.Tatsumaki crossup", "Akuma's Raging Demon"],
    yourTools: {
      "pt-BR": ["Rising Tackle AA", "Burn Knuckle approach", "Power Geyser punish"],
      "en": ["Rising Tackle AA", "Burn Knuckle approach", "Power Geyser punish"]
    }
  },

  // ───────── MARISA ─────────
  "marisa-vs-zangief": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Ambos têm enorme dano e querem jogar de perto",
        "Marisa tem range levemente superior com seus normals gigantes",
        "Zangief tem SPD que ignora bloqueio — ameaça constante",
        "Quem cometer o primeiro erro grande perde o round"
      ],
      "en": [
        "Both have huge damage and want to play close",
        "Marisa has slightly superior range with her giant normals",
        "Zangief has SPD that ignores blocking — constant threat",
        "Whoever makes the first big mistake loses the round"
      ]
    },
    tips: {
      "pt-BR": [
        "Gladius tem range para poking com segurança",
        "Quadriga como anti-air em pulos de Zangief",
        "Não fique em range de SPD — use espaçamento",
        "SA2 de Marisa causa enorme dano se aterrissar"
      ],
      "en": [
        "Gladius has safe poking range",
        "Quadriga as AA on Zangief's jumps",
        "Don't stay in SPD range — use spacing",
        "Marisa's SA2 causes huge damage if it lands"
      ]
    },
    dangerousMoves: ["Zangief's SPD", "Flying Powerbomb (720P)", "Cyclone Lariat (AA)"],
    yourTools: {
      "pt-BR": ["Gladius poke", "Quadriga AA", "st.HP range advantage"],
      "en": ["Gladius poke", "Quadriga AA", "st.HP range advantage"]
    }
  },
  "marisa-vs-dhalsim": {
    rating: "3-7",
    difficulty: { "pt-BR": "Grande Desvantagem", "en": "Heavy Disadvantage" },
    keyPoints: {
      "pt-BR": [
        "Dhalsim pode fugir de Marisa indefinidamente com teleporte",
        "Yoga Fire controla o espaço que Marisa precisa para se aproximar",
        "Marisa é enorme e mais fácil de acertar com fireballs",
        "Uma vez dentro, Marisa causa dano devastador"
      ],
      "en": [
        "Dhalsim can escape Marisa indefinitely with teleport",
        "Yoga Fire controls the space Marisa needs to approach",
        "Marisa is large and easier to hit with fireballs",
        "Once inside, Marisa deals devastating damage"
      ]
    },
    tips: {
      "pt-BR": [
        "Drive Rush é sua única ferramenta consistente de approach",
        "Quadriga pode anti-air ataques aéreos de Dhalsim",
        "Quando ele teleportar, reaja rapidamente com grab ou normal",
        "Parry em Yoga Fire para avançar com drive"
      ],
      "en": [
        "Drive Rush is your only consistent approach tool",
        "Quadriga can AA Dhalsim's aerial attacks",
        "When he teleports, react quickly with grab or normal",
        "Parry Yoga Fire to advance with drive"
      ]
    },
    dangerousMoves: ["Yoga Fire (keeps you out)", "Yoga Flame (close punish)", "Teleport escape"],
    yourTools: {
      "pt-BR": ["Drive Rush approach", "Quadriga AA", "Parry + advance"],
      "en": ["Drive Rush approach", "Quadriga AA", "Parry + advance"]
    }
  },

  // ───────── KIMBERLY ─────────
  "kimberly-vs-guile": {
    rating: "4-6",
    difficulty: { "pt-BR": "Desvantagem", "en": "Disadvantage" },
    keyPoints: {
      "pt-BR": [
        "Guile controla o espaço onde Kimberly quer operar",
        "Flash Kick pune Bushin Jump descent",
        "Kimberly precisa de mix-up criativo para entrar",
        "Uma vez dentro, Kimberly tem excelente pressão"
      ],
      "en": [
        "Guile controls the space Kimberly wants to operate in",
        "Flash Kick punishes Bushin Jump descent",
        "Kimberly needs creative mix-up to get in",
        "Once inside, Kimberly has excellent pressure"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Bushin Jump com timing para evitar Flash Kick",
        "Spiral Arrow passa por Sonic Boom em distâncias certas",
        "Crossup com j.HK após Drive Rush de perto",
        "Pressure implacável uma vez que esteja dentro"
      ],
      "en": [
        "Use Bushin Jump with timing to avoid Flash Kick",
        "Spiral Arrow passes through Sonic Boom at right distances",
        "Crossup with j.HK after close Drive Rush",
        "Relentless pressure once you're inside"
      ]
    },
    dangerousMoves: ["Flash Kick (AA vs Bushin Jump)", "Sonic Boom zoning", "Guile's st.HP"],
    yourTools: {
      "pt-BR": ["Spiral Arrow approach", "Bushin Jump timing", "j.HK crossup"],
      "en": ["Spiral Arrow approach", "Bushin Jump timing", "j.HK crossup"]
    }
  },

  // ───────── RASHID ─────────
  "rashid-vs-dhalsim": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "Rashid tem mobilidade superior para lidar com zoning de Dhalsim",
        "Rolling Assault passa por Yoga Fire",
        "Eagle Spike permite approach aéreo criativo",
        "Whirlwind Shot combina com neutralizar Yoga Fire"
      ],
      "en": [
        "Rashid has superior mobility to deal with Dhalsim's zoning",
        "Rolling Assault goes through Yoga Fire",
        "Eagle Spike allows creative aerial approach",
        "Whirlwind Shot combines to neutralize Yoga Fire"
      ]
    },
    tips: {
      "pt-BR": [
        "Rolling Assault para se aproximar através de Yoga Fire",
        "Whirlwind Shot para criar pressão de meia distância",
        "Eagle Spike como approach imprevisível",
        "Uma vez dentro, Rashid domina com rush down"
      ],
      "en": [
        "Rolling Assault to approach through Yoga Fire",
        "Whirlwind Shot to create mid-range pressure",
        "Eagle Spike as unpredictable approach",
        "Once inside, Rashid dominates with rush down"
      ]
    },
    dangerousMoves: ["Dhalsim Teleport escape", "Yoga Flame (close punish)", "Long-range normals"],
    yourTools: {
      "pt-BR": ["Rolling Assault (through Yoga Fire)", "Eagle Spike approach", "Whirlwind Shot"],
      "en": ["Rolling Assault (through Yoga Fire)", "Eagle Spike approach", "Whirlwind Shot"]
    }
  },

  // ───────── MAI ─────────
  "mai-vs-ryu": {
    rating: "5-5",
    difficulty: { "pt-BR": "Equilibrado", "en": "Even" },
    keyPoints: {
      "pt-BR": [
        "Ambos têm fireball game competitivo",
        "Musasabi no Mai cria approach aéreo único",
        "Ryu tem anti-air mais confiável com Shoryuken",
        "Mai tem mobilidade superior e mais opções de mix-up"
      ],
      "en": [
        "Both have competitive fireball game",
        "Musasabi no Mai creates unique aerial approach",
        "Ryu has more reliable AA with Shoryuken",
        "Mai has superior mobility and more mix-up options"
      ]
    },
    tips: {
      "pt-BR": [
        "Kachousen para controlar espaço de médio alcance",
        "Musasabi no Mai dive para approach inesperado",
        "Ryuuenbu para confirm de perto com bom dano",
        "Cuidado com anti-air Shoryuken de Ryu em dive kick"
      ],
      "en": [
        "Kachousen to control medium-range space",
        "Musasabi no Mai dive for unexpected approach",
        "Ryuuenbu for close confirm with good damage",
        "Watch out for Ryu's AA Shoryuken on dive kick"
      ]
    },
    dangerousMoves: ["Ryu's AA Shoryuken vs dive", "Ryu's Tatsu vs approach", "Ryu's SA1"],
    yourTools: {
      "pt-BR": ["Kachousen spacing", "Musasabi no Mai dive", "Ryuuenbu pressure"],
      "en": ["Kachousen spacing", "Musasabi no Mai dive", "Ryuuenbu pressure"]
    }
  },

  // ───────── ELENA ─────────
  "elena-vs-zangief": {
    rating: "6-4",
    difficulty: { "pt-BR": "Vantagem", "en": "Advantage" },
    keyPoints: {
      "pt-BR": [
        "Elena tem mobilidade e kicks de longo alcance para manter Zangief longe",
        "Rhino Horn é excelente para manter distância segura",
        "SA2 de Healing pode recuperar dano de errros",
        "Zangief causa dano enorme se conseguir entrar"
      ],
      "en": [
        "Elena has mobility and long-range kicks to keep Zangief away",
        "Rhino Horn is excellent for maintaining safe distance",
        "Healing SA2 can recover damage from mistakes",
        "Zangief deals huge damage if he gets in"
      ]
    },
    tips: {
      "pt-BR": [
        "Use Rhino Horn para criar distância quando necessário",
        "Scratch Wheel como anti-air em qualquer pulo de Zangief",
        "Healing SA2 para recuperar situação após erro",
        "cr.MK e st.HK têm ótimo range para poking"
      ],
      "en": [
        "Use Rhino Horn to create distance when needed",
        "Scratch Wheel as AA on any Zangief jump",
        "Healing SA2 to recover situation after mistakes",
        "cr.MK and st.HK have great range for poking"
      ]
    },
    dangerousMoves: ["Zangief's SPD", "Lariat (AA)", "Flying Powerbomb (720P)"],
    yourTools: {
      "pt-BR": ["Rhino Horn spacing", "Scratch Wheel AA", "Healing SA2"],
      "en": ["Rhino Horn spacing", "Scratch Wheel AA", "Healing SA2"]
    }
  },

  // ───────── DEFAULT FALLBACK ─────────
  "default": {
    rating: "5-5",
    difficulty: { "pt-BR": "Desconhecido", "en": "Unknown" },
    keyPoints: {
      "pt-BR": [
        "Matchup ainda sendo estudado pela comunidade",
        "Conhecimento específico limitado",
        "Foque nos fundamentos do seu personagem",
        "Estude os golpes e frame data do oponente"
      ],
      "en": [
        "Matchup still being studied by the community",
        "Limited specific knowledge",
        "Focus on your character's fundamentals",
        "Study opponent's moves and frame data"
      ]
    },
    tips: {
      "pt-BR": [
        "Aprenda os golpes puníveis do oponente",
        "Identifique os melhores pokes de cada um",
        "Teste diferentes estratégias em treino",
        "Assista replays de top players"
      ],
      "en": [
        "Learn opponent's punishable moves",
        "Identify best pokes for each",
        "Test different strategies in training",
        "Watch top player replays"
      ]
    },
    dangerousMoves: {
        "pt-BR": ["Especiais do oponente", "Normals de alcance"],
        "en": ["Opponent specials", "Long range normals"]
    },
    yourTools: {
      "pt-BR": ["Seus melhores pokes", "Anti-airs", "Drive system"],
      "en": ["Your best pokes", "Anti-airs", "Drive system"]
    }
  }
};

let SF6_MATCHUPS = {};

function updateMatchupsLanguage() {
  const lang = (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('sf6-hub-lang') || 'pt-BR');
  SF6_MATCHUPS = {};

  for (const [key, data] of Object.entries(SF6_MATCHUPS_DATA)) {
    SF6_MATCHUPS[key] = {
      rating: data.rating,
      difficulty: data.difficulty[lang] || data.difficulty['en'],
      keyPoints: data.keyPoints[lang] || data.keyPoints['en'],
      tips: data.tips[lang] || data.tips['en'],
      dangerousMoves: Array.isArray(data.dangerousMoves) ? data.dangerousMoves : (data.dangerousMoves[lang] || data.dangerousMoves['en']),
      yourTools: Array.isArray(data.yourTools) ? data.yourTools : (data.yourTools[lang] || data.yourTools['en'])
    };
  }
}

updateMatchupsLanguage();

// Helper function to get matchup data
function getMatchupData(char1, char2) {
  const key1 = `${char1.toLowerCase()}-vs-${char2.toLowerCase()}`;
  const key2 = `${char2.toLowerCase()}-vs-${char1.toLowerCase()}`;

  if (SF6_MATCHUPS[key1]) {
    return { ...SF6_MATCHUPS[key1], perspective: char1 };
  } else if (SF6_MATCHUPS[key2]) {
    const reversed = { ...SF6_MATCHUPS[key2] };
    if (reversed.rating !== "5-5") {
      const [a, b] = reversed.rating.split('-');
      reversed.rating = `${b}-${a}`;
      const lang = localStorage.getItem('sf6-hub-lang') || 'pt-BR';
      if (reversed.difficulty === "Advantage" || reversed.difficulty === "Vantagem") {
        reversed.difficulty = (lang === 'en' ? "Disadvantage" : "Desvantagem");
      } else if (reversed.difficulty === "Disadvantage" || reversed.difficulty === "Desvantagem") {
        reversed.difficulty = (lang === 'en' ? "Advantage" : "Vantagem");
      } else if (reversed.difficulty === "Heavy Disadvantage" || reversed.difficulty === "Grande Desvantagem") {
        reversed.difficulty = (lang === 'en' ? "Heavy Advantage" : "Grande Vantagem");
      }
    }
    return { ...reversed, perspective: char1 };
  }

  return { ...SF6_MATCHUPS.default, perspective: char1 };
}

// Get all available characters from combos
function getAvailableCharacters() {
  if (typeof SF6_COMBOS_DATA !== 'undefined') {
    return Object.values(SF6_COMBOS_DATA).map(c => c.character).sort();
  }
  return [];
}
