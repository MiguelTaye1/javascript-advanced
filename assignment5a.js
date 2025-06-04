// Arrow function to calculate simple interest for three individuals
const calculateSimpleInterest = (p1, r1, t1, p2, r2, t2, p3, r3, t3) => {
  const si1 = (p1 * r1 * t1) / 100;
  const si2 = (p2 * r2 * t2) / 100;
  const si3 = (p3 * r3 * t3) / 100;

  return {
    person1: si1,
    person2: si2,
    person3: si3
  };
};

// Example 
const results = calculateSimpleInterest(1414, 5, 2, 1700, 4, 3, 20000, 3.5, 1);
console.log(results);


