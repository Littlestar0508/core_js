// union type 합집합

let str: "name" | "age" | "address";

str = "address";

type CompanyA = {
  companyName: string;
  since: number;
};

type CompanyB = {
  ceo: string;
};

type Company = CompanyA & CompanyB;

// intersection type 교집합

type _Company = CompanyA | CompanyB;

const company1: _Company = {
  companyName: "8b-studio",
  since: 2022,
};

const company2: _Company = {
  companyName: "apple",
  ceo: "steve",
};

interface CompanyC extends CompanyA {
  ceo: string;
}
