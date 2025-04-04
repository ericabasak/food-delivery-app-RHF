import { useForm, FieldError } from "react-hook-form";
import { useRenderCount } from "./utils/useRenderCount";

type FoodDeliveryFormType = {
    orderNo: number;
    customerName: string;
    phone: string;
    email: string;
}

const RenderCount = useRenderCount();

export const FoodDeliveryForm = () => {

    const { register, handleSubmit, formState: errors } = useForm<FoodDeliveryFormType>({
        mode: "onChange",
        reValidateMode: "onSubmit",
        shouldFocusError: true,
        defaultValues: {
            orderNo: new Date().valueOf(),
            customerName: "",
            phone: "",
            email: "",
        }
    });

    const onSubmit = (formData: FoodDeliveryFormType) => { console.log(formData)}

    const onError = (err: FieldError) => {
        console.log("validation errors", err);
    }

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit, onError)}>
        <RenderCount />
        <input 
        type="text" 
        placeholder='Customer Name'
        {...register("customerName", { 
            required: true,
        })}
        />
        <label>Customer Name</label>
        {formState.errors.customerName && (<div>
        {formState.errors.customerName?.message}</div>)}
        <input 
        type="text" 
        placeholder='phone'
        {...register("phone", {
            required: "This is a required field",
            minLength: 10,
            maxLength: {
                value: 10,
                message: "Must be 10 digits",
            }
            
        })} 
        />
        <label>Phone Number</label>
        {formState.errors.phone && (<div>
        {formState.errors.phone?.message}</div>)}
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
        {...register("email", {
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "incorrect email",
            }

        } )}
        />
        <label>Email</label>
        {formState.errors.email && (<div>
        {formState.errors.email?.message}</div>)}
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default FoodDeliveryForm
