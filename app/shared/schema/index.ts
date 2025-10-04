export type Id = number;

export interface IWord {
  id: Id;
  text: string;
}

export interface IDictionary {
  words: IWord[];
}

export type IWordSeen = IWord & {
  wasGuessed: boolean;
};

export interface IPlayer {
  id: Id;
  name?: string;
  team?: ITeam;
  wordsCreated: IWord[];
  wordsSeen: IWordSeen[];
}

export interface ITeam {
  id: Id;
  players: IPlayer[];
}
