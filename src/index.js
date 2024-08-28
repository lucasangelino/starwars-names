import uniqueRandomArray from "unique-random-array";
import starWarsNames from "./starwars-names.json"; //assert { type: "json" };

module.exports = {
  all: starwarsNames,
  random: uniqueRandomArray(starwarsNames),
};
