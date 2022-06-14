// create group type
export interface Group {
  id: number;
  name: string;
  people: Person[];
  parent: Group;
  groups: Group[];
  created_at: string;
  updated_at: string;
}

// create rank type
export interface Rank {
  id: number;
  name: string;
  shortname: string;
  created_at: string;
  updated_at: string;
}

// create person type
export interface Person {
  id: number;
  firstname: string;
  lastname: string;
  rank: Rank;
  groups: Group[];
  created_at: string;
  updated_at: string;
}

// create time slot type
export interface TimeSlot {
  id: number;
  name: string;
  start: string;
  end: string;
  created_at: string;
  updated_at: string;
}
