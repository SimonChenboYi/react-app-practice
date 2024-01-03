interface AlertProps {
  children: string;
}

export const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};
