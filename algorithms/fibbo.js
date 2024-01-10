fibbo = (init) => {
    if (init === 0) {
      return 0;
    } else {
      if (init === 1) {
        return 1;
      } else {
        return fibbo(init - 1) + fibbo(init - 2);
      }
    }
  };
  
  for (i = 0; i <= 110; i++) {
    console.log(fibbo(i));
  }