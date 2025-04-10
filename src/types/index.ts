export interface INavItems {
  name: string;
  url: string;
  active?: boolean;
  hasSubRoute?: boolean;
  subItems?: ISubItems[];
}

export interface ISubItems {
  name: string;
  url: string;
}
