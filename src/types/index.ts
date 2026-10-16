export interface Lead {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  occupation: string;
  createdAt: string;
  source: string;
  note?: string;
}

export interface Course {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  tag?: string;
  highlights?: string[];
}

export interface AIAssistant {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TrainingStep {
  step: string;
  title: string;
  description: string;
  isGold?: boolean;
}

export interface Statistic {
  value: string;
  number: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}
