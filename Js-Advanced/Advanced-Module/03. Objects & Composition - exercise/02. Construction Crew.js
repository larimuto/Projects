function crew({ weight, experience, levelOfHydrated, dizziness }) {
  let worker = {
    weight,
    experience,
    levelOfHydrated,
    dizziness,
  };
  if (worker[dizziness] == true) {
    worker[levelOfHydrated] =
      this.levelOfHydrated + 0.1 * this.weight * this.experience;
    worker[dizziness] = false;
  }
  return worker;
}
console.log(
  crew({
    weight: 80,

    experience: 1,

    levelOfHydrated: 0,

    dizziness: true,
  })
);
//{ weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }