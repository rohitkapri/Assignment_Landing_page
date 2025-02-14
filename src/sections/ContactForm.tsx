'use client'
import { useEffect, useState } from "react"
import * as yup from 'yup';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const Contact = () => {
    // toast.configure();
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        timeframe: "",
        size: "",
        quantity:"",
        description: "",
    })
    type ErrorsType = {
        name?: string;
        email?: string;
        phone?: string;
        timeframe?: string;
        size?: string;
        quantity?: string;
        description?: string;
      };
      
      const [errors, setErrors] = useState<ErrorsType>({});
      

    const validationSchema = yup.object({
         name: yup.string().required("Name is Required"),
         email: yup.string().required("email is required").email("invalid email format"),
         phone: yup.string().matches(/^\d{10}$/, "Phone Number must be 10 digits").required(),
         timeframe: yup.string().required("time-frame is required"),
         size: yup.string().required("size is required"),
         quantity: yup.string().required("quantity is required"),
         description: yup.string().required("description is required"),
    });

    const validateField = async (name: string, value: string) => {
    try {
        const fieldSchema = yup.reach(validationSchema, name) as yup.Schema<string>;  
        await fieldSchema.validate(value); 
        setErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (error) {
        setErrors((prev) => ({
            ...prev,
            [name]: (error as yup.ValidationError).message,
        }));
    }
};
  


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=>{

        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
        validateField(name, value);

    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            await validationSchema.validate(formData, {abortEarly: false});
            setErrors({});
            console.log("Form submitted successfully:",formData);
            toast.success("Form submitted successfully!", { position: "top-right", autoClose: 3000 });
            setFormData({ name: "", email: "", phone: "", timeframe: "", size: "", quantity: "", description: "" });
            window.alert('Form submitted Successfully');
        }  
        catch (error) {
            const newErrors: { [key: string]: string } = {};
            (error as yup.ValidationError).inner.forEach((err) => {
              newErrors[err.path as string] = err.message;
            });
            setErrors(newErrors);
            }
            
    }

    useEffect(()=>{
        console.log(formData);
    },[formData]);
  return (
    <>
    <section className="lg:py-20 md:py-10 py-5 lg:px-20 md:px-10 px-5 lg:mb-20 mb-10">
      <div className="w-full flex flex-col items-center justify-center gap-20">

        <div><h1>REQUEST A QUOTE</h1></div>

        <form onSubmit={handleSubmit} className="w-full grid md:grid-cols-2 grid-cols-1 gap-10 ">
            <div className="flex flex-col gap-5">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-[6px]" />
                <p className="text-red-500">{errors.name}</p>
            </div>
            <div className="flex flex-col gap-5">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border border-gray-300 p-2 rounded-[6px]" />
                <p className="text-red-500">{errors.email}</p>
            </div>
            <div className="flex flex-col gap-5">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone}  onChange={handleInputChange}  className="w-full border border-gray-300 p-2 rounded-[6px]" />
                <p className="text-red-500">{errors.phone}</p>
            </div>
            <div className="flex flex-col gap-5">
                <label htmlFor="timeframe">Time Frame<span className="text-red-500">*</span></label>
                <select name="timeframe" className="border border-gray-300 p-2 w-full text-[#707070] font-light text-[14px] rounded-[6px]" value={formData.timeframe}  onChange={handleInputChange} >
                    <option value="" className="text-[#707070] font-light text-[14px]" disabled >Choose Time Frame</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="3-4 weeks">3-4 weeks</option>
                </select>
                <p className="text-red-500">{errors.timeframe}</p>
               
            </div>
            <div className="flex flex-col gap-5">
                <label htmlFor="">Size<span className="text-red-500">*</span></label>
                <select name="size" className="border border-gray-300 p-2 w-full text-[#707070] font-light text-[14px] rounded-[6px]" value={formData.size}  onChange={handleInputChange} >
                    <option value="" className="text-[#707070] font-light text-[14px]" disabled >Choose Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <p className="text-red-500">{errors.size}</p>
            </div>
            <div className="flex flex-col gap-5">
                <label htmlFor="">Quantity<span className="text-red-500">*</span></label>
                <select name="quantity" className="border border-gray-300 p-2 w-full text-[#707070] font-light text-[14px] rounded-[6px]" value={formData.quantity}  onChange={handleInputChange} >
                    <option value="" className="text-[#707070] font-light text-[14px]" disabled>Choose Quantity</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
                <p className="text-red-500">{errors.quantity}</p>
            </div>
            <div className="flex flex-col w-full md:col-span-2 gap-5">
                <label htmlFor="">Please Describe Your Project<span className="text-red-500">*</span></label>
               <textarea name="description" rows ={4} className="border border-gray-300 p-2 w-full placeholder:font-light rounded-[6px]" value={formData.description}  onChange={handleInputChange}  placeholder="Choose a project type "></textarea>
               <p className="text-red-500">{errors.description}</p>
            </div>

            <div className="flex flex-col md:col-span-2 gap-10 items-center justify-center">
            <p>By submitting this form you agree to our <a href="#" className="underline underline-offset-2">Terms of Service</a> and <a href="#" className="underline underline-offset-2">Privacy Policy</a> .</p>
            <button type="submit">
                        <span>Loerum Ipsum</span>
                        <Icon icon = "ep:right" width={24} height={20}/>
                    </button>
        </div>
        </form>

        


      </div>
    </section>
      
    </>
  )
}

export default Contact
