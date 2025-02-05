const findTheOldest = function (people) {
  let modified = people.map((person) => {
    let today = new Date().getFullYear();
    console.log({ today });
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = today;
    }
    return person;
  });

  let sorted = modified.sort(
    (a, b) => b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth)
  );
  console.log({ sorted });
  console.log({ modified });
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
