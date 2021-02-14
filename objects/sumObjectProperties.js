let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let salariesSum = 0;
  for (const salary in salaries) {
           salariesSum += salaries[salary];
  }