import { useForm } from "react-hook-form";
import { useRenderCount } from "./utils/useRenderCount";

type FoodDeliveryFormType = {
    orderNo: number;
    customerName: string;
    phone: string;
    email: string;
}

const RenderCount = useRenderCount();

export const FoodDeliveryForm = () => {

    const { register, handleSubmit } = useForm<FoodDeliveryFormType>({
        defaultValues: {
            orderNo: new Date().valueOf(),
            customerName: "",
            phone: "",
            email: "",
        }
    });

    const onSubmit = (formData: FoodDeliveryFormType) => { console.log(formData)}

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <RenderCount />
        <input 
        type="text" 
        placeholder='Customer Name'
        {...register("customerName")}
        />
        <label>Customer Name</label>
        <input 
        type="text" 
        placeholder='phone'
        {...register("phone")} 
        />
        <label>Phone Number</label>
        <input
        type="text"
        placeholder="Order Number"
        {...register("orderNo")}
        
        />
        <label>Order Number</label>
        <input
        type="text"
        placeholder="email"
        disabled
        {...register("email")}
        />
        <label>Email</label>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default FoodDeliveryForm
