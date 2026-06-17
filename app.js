(function() {
  const Q = [
    ["A frenzied Vault scientist yells, \"I'm going to put my quantum harmonizer in your photonic resonation chamber!\" What's your response?",
      ["\"But Doctor, wouldn't that cause a parabolic destabilization of the fission singularity?\"","\"Yeah? Up yours too, buddy!\"","Say nothing, grab a nearby pipe, and hit the scientist in the head to knock him out.","Say nothing, but slip away before the scientist can continue his rant."],
      ["Science","Speech","Melee Weapons","Sneak"]],
    ["A patient with a strange infection on his foot stumbles into the Clinic. It's spreading fast, but the doctor stepped out. What do you do?",
      ["Amputate the foot before the infection spreads.","Scream for help.","Medicate the infected area to the best of your abilities.","Restrain the patient, and merely observe as the infection spreads."],
      ["Melee Weapons","Speech","Medicine","Science"]],
    ["You find a young boy lost in the lower levels. He's hungry and frightened, and has stolen property on him. What do you do?",
      ["Give the boy a hug and tell him everything will be okay.","Confiscate the property by force, and leave him there as punishment.","Pick the boy's pocket to take the property for yourself, and leave him to his fate.","Lead the boy to safety, then turn him over to the Overseer."],
      ["Speech","Unarmed","Sneak",""]],
    ["You made one of the Vault 101 baseball teams! Which position do you prefer?",
      ["Pitcher","Catcher","Designated Hitter","None, you wish the Vault had a soccer team."],
      ["Explosives","Big Guns","Melee Weapons","Unarmed"]],
    ["Your grandmother invites you to tea, but gives you a pistol and orders you to kill another Vault resident. What do you do?",
      ["Obey your elder and kill the resident with the pistol.","Offer your most prized possession for the resident's life.","Ask Granny for a minigun instead. After all, you don't want to miss.","Throw your tea in Granny's face."],
      ["Small Guns","Barter","Big Guns","Explosives"]],
    ["Old Mr. Abernathy has locked himself in his quarters again, and you've been ordered to get him out. How do you proceed?",
      ["Use a bobby pin to pick the lock on the door.","Trade a Vault hoodlum for his cherry bomb and blow open the lock.","Go to the armory, retrieve a laser pistol, and blow the lock off.","Walk away, and let the old coot rot."],
      ["Lockpick","Explosives","Energy Weapons","Repair"]],
    ["You've been exposed to radiation, and a mutated hand has grown out of your stomach! What's the best course of treatment?",
      ["A bullet to the brain.","Large doses of anti-mutagen agent.","Prayer. Maybe God will spare you in exchange for a life of pious devotion.","Removal of the mutated tissue with a precision laser."],
      ["Small Guns","Medicine","Barter","Energy Weapons"]],
    ["A fellow resident has a Grognak the Barbarian comic book, issue number 1. You want it. What's the best way to obtain it?",
      ["Trade the comic book for one of your own valuable possessions.","Steal the comic book at gunpoint.","Sneak into his quarters, and steal it from his desk.","Slip knock-out drops into his Nuka-Cola, and take it when he's unconscious."],
      ["Barter","Small Guns","Sneak","Medicine"]],
    ["You decide to play a prank on your father. You sneak into his private restroom when no one is looking, and...",
      ["Loosen some bolts on the pipes. When the sink turns on, the room will flood.","Put a firecracker in the toilet. That's sure to cause some chaos.","Break into the medicine cabinet and replace his blood pressure pills with sugar pills.","Manipulate the wattage on his razor, so he'll get a shock next time he shaves."],
      ["Repair","Explosives","Medicine","Lockpick"]],
    ["Who is indisputably the most important person in Vault 101: he who shelters us from the harshness of the atomic wasteland?",
      ["The Overseer","The Overseer","The Overseer","The Overseer"],
      ["","","",""]]
  ];
  const R = {
    Barter:["VAULT CHAPLAIN","They say the G.O.A.T. never lies. According to this, you're slated to be the next Vault... Chaplain. God help us all."],
    "Big Guns":["LAUNDRY CANNON OPERATOR","Well, according to this, you're in line to be trained as a Laundry Cannon Operator. First time for everything, indeed."],
    "Energy Weapons":["PEDICURIST","It's nice to know I can still be surprised. Pedicurist! I might have guessed Manicurist, or even Masseuse. But apparently you're a foot person."],
    Explosives:["WASTE MANAGEMENT SPECIALIST","It says here you're perfectly suited for a career as a Waste Management Specialist. A specialist, mind you, not just a dabbler. Congratulations!"],
    Lockpick:["VAULT LOYALTY INSPECTOR","Huh. \"Vault Loyalty Inspector\"... I thought that had been phased out decades ago. Well, sounds like a job right up your alley, hmm?"],
    Medicine:["CLINICAL TEST SUBJECT","Interesting. \"Clinical Test Subject\"... sounds like something you should excel at. I guess you and your dad will be working together."],
    "Melee Weapons":["FRY COOK","Looks like the diner's going to get a new Fry Cook. I'll just say this once: hold the mustard, extra pickles. Ha ha ha."],
    Repair:["JUKEBOX TECHNICIAN","Thank goodness. We're finally getting a new Jukebox Technician. That thing hasn't worked right since old Joe Palmer passed."],
    Science:["PIP-BOY PROGRAMMER","Well, well. Pip-Boy Programmer, eh? Stanley will finally have someone to talk shop with."],
    "Small Guns":["TATTOO ARTIST","Huh. I wonder who will be brave enough to be your first customer as the Vault's new Tattoo Artist? I promise it won't be me."],
    Sneak:["SHIFT SUPERVISOR","Apparently you're management material. You're going to be trained as a Shift Supervisor. Could I be talking to the next Overseer? Stranger things have happened."],
    Speech:["MARRIAGE COUNSELOR","Wow. Wow. Says here you're going to be the Vault's Marriage Counselor. Almost makes me want to get married, just to be able to avail myself of your services."],
    Unarmed:["LITTLE LEAGUE COACH","I always thought you'd have a career in professional sports. You're the new Vault Little League coach! Congratulations."]
  };
  let scores = {}, qi = -1, sel = 0, wrapCache;

  function drawGoat(cy) {
    h.setColor(3);
    h.fillEllipse(190, cy + 25, 290, cy + 75);
    h.fillEllipse(165, cy + 10, 199, cy + 40);
    h.fillEllipse(280, cy + 10, 314, cy + 40);
    h.setColor(0);
    h.fillEllipse(175, cy + 17, 189, cy + 27);
    h.fillEllipse(290, cy + 17, 304, cy + 27);
    h.setColor(3);
    h.fillCircle(240, cy, 38);
    for (let i = 0; i < 8; i++) {
      h.drawLine(212 + i, cy - 25, 204 + i, cy - 53);
      h.drawLine(268 - i, cy - 25, 276 - i, cy - 53);
    }
    h.setColor(0);
    h.fillCircle(222, cy - 7, 5);
    h.fillCircle(258, cy - 7, 5);
    h.fillEllipse(232, cy + 11, 248, cy + 21);
    h.setColor(3);
    h.drawLine(228, cy + 19, 240, cy + 25);
    h.drawLine(252, cy + 19, 240, cy + 25);
    h.setColor(0);
    h.fillRect(165, cy + 69, 178, cy + 81);
    h.fillRect(202, cy + 69, 215, cy + 81);
    h.fillRect(265, cy + 69, 278, cy + 81);
    h.fillRect(302, cy + 69, 315, cy + 81);
  }

  function drawTitle() {
    h.clear(0);
    h.setColor(2).setFontMonofonto96().setFontAlign(0, 0).drawString("G.O.A.T.", 240, 100);
    drawGoat(190);
    h.setColor(3).setFontMonofonto18().setFontAlign(0, 0).drawString("Press left wheel to start!", 240, 290);
    h.flip();
    Pip.lastFlip = getTime();
  }

  function wrap(i) {
    if (wrapCache && wrapCache.i === i) return wrapCache;
    const q = h.setFontMonofonto16().wrapString(Q[i][0], 440);
    const a = Q[i][1].map((t) => h.setFontMonofonto14().wrapString(t, 410));
    wrapCache = { i: i, q: q, a: a };
    return wrapCache;
  }

  function drawQuestion() {
    h.clear(0);
    const w = wrap(qi), c = w.q;
    h.setColor(1).setFontMonofonto14().setFontAlign(-1, -1).drawString("QUESTION " + (qi + 1) + " OF 10", 14, 6);
    h.setColor(3).setFontMonofonto16().setFontAlign(-1, -1);
    let y = 26;
    for (let i = 0; i < c.length; i++) { h.drawString(c[i], 14, y); y += 18; }
    y += 8;
    for (let i = 0; i < 4; i++) {
      const rows = w.a[i], rh = 15 * rows.length + 8;
      if (i === sel) Pip.shadeBox(14, y, 466, y + rh);
      h.setColor(i === sel ? 0 : 2).setFontMonofonto14().setFontAlign(-1, -1);
      for (let r = 0; r < rows.length; r++) h.drawString(rows[r], 28, y + 4 + r * 15);
      y += rh + 5;
    }
    h.flip();
    Pip.lastFlip = getTime();
  }

  function drawResult() {
    let best = "", top = -1;
    const keys = Object.keys(scores).sort();
    for (let k = 0; k < keys.length; k++) if (scores[keys[k]] > top) { top = scores[keys[k]]; best = keys[k]; }
    const job = R[best];
    h.clear(0);
    h.setColor(1).setFontMonofonto28().setFontAlign(0, -1).drawString("G.O.A.T. RESULTS", 240, 30);
    h.setColor(3).setFontMonofonto23().setFontAlign(0, -1).drawString(job[0], 240, 90);
    const flav = h.setFontMonofonto16().wrapString(job[1], 400);
    h.setColor(2).setFontMonofonto16().setFontAlign(0, -1);
    let y = 140;
    for (let i = 0; i < flav.length; i++) { h.drawString(flav[i], 240, y); y += 20; }
    h.setColor(1).setFontMonofonto14().setFontAlign(0, 1).drawString("Press left wheel to retake the test.", 240, 300);
    h.flip();
    Pip.lastFlip = getTime();
  }

  function nextQuestion() {
    qi++;
    if (qi >= 10) { drawResult(); return; }
    sel = 0;
    drawQuestion();
  }

  function onKnob1(dir) {
    if (qi < 0) {
      if (dir === 0) { Pip.playSound("TAB"); scores = {}; nextQuestion(); }
      return;
    }
    if (qi >= 10) {
      if (dir === 0) { Pip.playSound("TAB"); qi = -1; drawTitle(); }
      return;
    }
    if (dir) {
      sel = E.clip(sel + dir, 0, 3);
      Pip.playSound("SCROLL");
      drawQuestion();
    } else {
      Pip.playSound("TAB");
      const skill = Q[qi][2][sel];
      if (skill) scores[skill] = (scores[skill] || 0) + 1;
      nextQuestion();
    }
  }

  Pip.onExclusive("knob1", onKnob1);
  drawTitle();

  return {
    id: "GOATTEST",
    notDefault: true,
    fullscreen: true,
    remove: function() {
      Pip.removeListener("knob1", onKnob1);
      Pip.audioStop();
      h.clear();
    }
  };
});
