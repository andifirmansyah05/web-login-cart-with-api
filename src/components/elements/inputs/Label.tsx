
interface LabelsProps {
  htmlFor: string;
  children: string;
}

const Label = ({ htmlFor, children }: LabelsProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-700 text-sm font-bold mb-2"
    >
      {children}
    </label>
  );
};

export default Label;
