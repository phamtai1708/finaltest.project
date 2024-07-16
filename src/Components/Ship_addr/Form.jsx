import { useFormik } from "formik";
import { v4 as uuidv4 } from 'uuid';
import './Form.css'

const Form = (props) =>{
  const formik = useFormik({
    initialValues: {
        key: uuidv4(),
        Name: "",
        Mobile: "",
        Flat: "",
        Area: "",
        City: "",
        Country: "",
        defaultAddress: false,
    },
    onSubmit: (values) => {
      props.handleAddress(values);
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={formik.values.Name}
            onChange={formik.handleChange}
            name="Name"
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label>Mobile Number</label>
          <input
            type="number"
            value={formik.values.Mobile}
            onChange={formik.handleChange}
            name="Mobile"
            placeholder="Enter Mobile Number"
          />
        </div>
        <div>
          <label>Flat, House no., Building, Company, Apartment</label>
          <input
            type="text"
            value={formik.values.Flat}
            onChange={formik.handleChange}
            name="Flat"
          />
        </div>
        <div>
          <label>Area, Street, Village</label>
          <input
            type="text"
            value={formik.values.Area}
            onChange={formik.handleChange}
            name="Area"
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            value={formik.values.City}
            onChange={formik.handleChange}
            name="City"
          />
        </div>
        <div>
          <label>Country</label>
          <input
            type="text"
            value={formik.values.Country}
            onChange={formik.handleChange}
            name="Country"
          />
        </div>
        <div className="default">
          <label>Use as my default address</label>
          <input
            type="checkbox"
            value={formik.values.defaultAddress}
            onChange={formik.handleChange}
            name="defaultAddress"
          />
        </div>
        <button>Add new address</button>
      </form>
    </div>
  );
}

export default Form