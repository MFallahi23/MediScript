import "./CustomTextarea.scss";

interface iCustomTextarea {
  text: string;
  rows: number;
  name: string;
}

const CustomTextarea: React.FC<iCustomTextarea> = ({ text, rows, name }) => {
  return (
    <div className="custom-textarea">
      <label htmlFor={name} className="custom-textarea__label">
        {text}
      </label>
      <textarea
        className="custom-textarea__field"
        name={name}
        id={name}
        rows={rows}
      ></textarea>
    </div>
  );
};

export default CustomTextarea;
