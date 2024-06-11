/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronouns = ["the", "our"];
const adjectives = ["great", "big"];
const nouns = ["jogger", "racoon"];
const extensions = [".com", ".net", ".us", ".io"];

const bios = [];

for (const pronoun of pronouns) {
  for (const adjective of adjectives) {
    for (const noun of nouns) {
      for (const extension of extensions) {
        bios.push(`${pronoun}${adjective}${noun}${extension}`);
      }
    }
  }
}

for (const bio of bios) {
  console.log(bio);
}
