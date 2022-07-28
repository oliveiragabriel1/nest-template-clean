export type ValueMail = {
  from: string;
  to: string;
  subject: string;
  text?: string;
  templateOrHTML?: string;
  attachments?: any[];
  replacements?: any;
};
