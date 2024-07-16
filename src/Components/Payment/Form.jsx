import { useFormik } from "formik";
import './Form.css'

const Form = (props) =>{
  const formik = useFormik({
    initialValues: {
        key: Math.random(),
        cNumber: "",
        cName: "",
        Date: "",
        CVV: "",
    },
    onSubmit: (values) => {
      props.handleAddress(values);
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Card Number</label>
          <input
            type="number"
            value={formik.values.cNumber}
            onChange={formik.handleChange}
            name="cNumber"
            placeholder="xxxx xxxx xxxx xxxx"
          />
        </div>
        <div>
          <label>Card Name</label>
          <input
            type="text"
            value={formik.values.cName}
            onChange={formik.handleChange}
            name="cName"
            placeholder="Robert Fox"
          />
        </div>
        <div className="lower">
            <div className="date">
            <label>Expiry Date</label>
            <input
                type="text"
                value={formik.values.Date}
                onChange={formik.handleChange}
                name="Date"
                placeholder="mm/yy"
            />
            </div>
            <div className="cvv">
            <label>CVV</label>
            <input
                type="number"
                value={formik.values.CVV}
                onChange={formik.handleChange}
                name="CVV"
                placeholder="zzz"
            />
            </div>
        </div>
        <button>Add Card</button>
      </form>
    </div>
  );
}

export default Form