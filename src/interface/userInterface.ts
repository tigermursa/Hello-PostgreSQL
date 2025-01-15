interface Address {
  presentAddress: string;
  permanentAddress: string;
}

interface Phone {
  numberOne: string;
  numberTwo: string;
}

interface School {
  schoolOne: string;
  schoolTwo: string;
}

interface Education {
  school: School;
  college: string;
  university: string;
}

export interface UserInterface {
  username: string;
  email: string;
  address: Address[];
  phone: Phone[];
  education: Education;
  gender: "male" | "female";
  age: number;
  sscBoard: string;
  sscGPA: number;
  hscBoard: string;
  hscGPA: number;
  universityRoll: string;
}
