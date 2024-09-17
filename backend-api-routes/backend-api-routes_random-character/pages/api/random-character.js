import Chance from "chance";

const chance = new Chance();

console.log(chance);

const character = {
  firstName: chance.first(),
  lastName: chance.last(),
};

export default function handler(req, res) {
  res.status(200).json(getAllProducts(chance));
}
