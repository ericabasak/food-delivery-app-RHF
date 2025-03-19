import { ChangeEvent, SyntheticEvent, useState } from 'react'


type FoodDeliveryFormType = {
    customerName: string;
    phone: string;
}

type FoodDeliveryFormErrorType = {
    customerName: string;
    phone: string;
}

export const TypicalForm = () => {
    const [values, setValues] = useState<FoodDeliveryFormType>({
        customerName: "",
        phone: ""
    });

    const [errors, setErrors] = useState<FoodDeliveryFormErrorType>({
        customerName: "",
        phone: "",
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const validateFormData = () => {
        let tempErrors: FoodDeliveryFormErrorType = {
            customerName: "",
            phone: "",
        }
        if (values.customerName === "")
        tempErrors.customerName = "Customer namer is required";
        if (values.phone === "")
        tempErrors.phone = "Phone number is required";
        setErrors(tempErrors);

        return Object.values(errors).every(x => x == "")
    }

    const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(values);

        if(validateFormData())
        console.log('form data ', values)
        else console.log('form is invalid')

    }
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
        <input name="customerName" type="text" placeholder='Customer Name' value={values.customerName} onChange={handleInputChange}/>
        <label>Customer Name</label>
        <input name="phone" type="text" placeholder='phone' value={values.phone} onChange={handleInputChange} />
        <label>Phone Number</label>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default FoodDeliveryForm
