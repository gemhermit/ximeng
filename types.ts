export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface JobPosition {
  title: string;
  department: string;
  location: string;
  salary: string;
  colorClass: string;
}

export interface PartnerLogo {
  name: string;
  icon?: string;
  isText?: boolean;
  colorClass: string;
}