const languages = [
    `the end.`,
    `終わり。`,
    `fin.`,
    `النهاية`,
    `das ende.`,
    `tamat.`,
    `son.`,
    `het einde.`,
    `kонец.`,
    `끝.`,
    `پایان.`,
    `finis.`,
    `slutet.`,
  ];
  
  const target = document.getElementById("fin");
  
  function tamat(content) {
    target.innerHTML = content;
  }
  
  function invokeRandomly() {
    let rnd = Math.floor(Math.random() * languages.length);
    tamat(languages[rnd]);
    loop();
  }
  
  function loop() {
    setTimeout(invokeRandomly, 83); // 83 ms is 1 frame 12fps
  }

  loop();  