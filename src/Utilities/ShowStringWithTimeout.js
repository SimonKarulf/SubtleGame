export function showString(str1, str2, id1, id2, timeout = 15) {
    let output1 = '';
    let output2 = '';
    for (let i = 0; i < str1.length; i++) {
      setTimeout(() => {
        output1 += str1[i];
        if (document.getElementById(id1)) {
          document.getElementById(id1).innerHTML = output1;
        }
      }, i * timeout);
    }
    setTimeout(() => {
      for (let i = 0; i < str2.length; i++) {
        setTimeout(() => {
          output2 += str2[i];
          if (document.getElementById(id2)) {
            document.getElementById(id2).innerHTML = output2;
          }
        }, i * timeout);
      }
    }, str1.length * timeout);
  }
  