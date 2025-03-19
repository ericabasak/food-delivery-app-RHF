import { useForm } from "react-hook-form";


type FoodDeliveryFormType = {
    customerName: string;
    phone: string;
}

export const FoodDeliveryForm = () => {

    const { register, handleSubmit } = useForm<FoodDeliveryFormType>();

    const onSubmit = (formData: FoodDeliveryFormType) => { console.log(formData)
    }

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <input 
        type="text" 
        placeholder='Customer Name'
        {...register("customerName", { value: "Erica"})}
        />
        <label>Customer Name</label>
        <input 
        type="text" 
        placeholder='phone'
        {...register("phone", { required: "Phone number is required"})} 
        />
        <label>Phone Number</label>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default FoodDeliveryForm
