


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { inputFields } from "@/constants"
import { getMinDate } from "@/lib/utils"
import { sendTourBooking } from "@/lib/telegramBotSend"
import toast from "react-hot-toast"


const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Please provide your name",
  }).max(50, {
    message: "that is too long.."
  }),
  email: z.string().email({
    message: "Please provide a valid email address",
  }),
  phone: z.string().min(10, {
    message: "Please provide a valid phone number with at least 10 digits",
  }).max(15, {
    message: "Please provide a valid phone number with at most 15 digits",
  }),
  tickets: z.string().min(1, {
    message: "Please provide a valid number of tickets",
  }),
  message: z.string().max(1000, {
    message: "that is too long..",
  }),
});

const BookingForm = ({ tour }) => {


  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      tickets: "",
      message: "",
    },
  })

  async function onSubmit(data)  {
    
    const res = sendTourBooking(data, tour.name, tour.price, getMinDate(tour.upcoming_dates))
    toast.promise(res, {
      loading: 'just a sec',
      success: 'Your Request is Recieved.',
      error: 'Please try again later',
    })

    const result = await res

    if (result) {
      form.reset()
    }
  }


  return (
    <div className='bg-[#EDEDED] px-4 md:px-8 py-8 text-center'>
      <h2 className='text-4xl text-[#181E4B] font-bold'>Book This Tour</h2>
      <p className='my-4 text-lg !leading-[162%] max-w-[310px] mx-auto'>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {inputFields.map(item => (
            <FormField
            className="w-full"
              control={form.control}
              name={item.fieldName}
              render={({ field }) => (
                <FormItem className="relative mt-6">
                  <FormControl>
                    <Input {...field} className="w-full text-xl text-[#181E4B] py-10 pl-4 no-focus bg-white border-none font-bold placeholder:text-black/25" placeholder={item.placeholder}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
            <FormField
            className="w-full"
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="relative mt-6">
                  <FormControl>
                    <Textarea
                      placeholder="Leave us a note or a message"
                      className="resize-x-none w-full text-xl text-[#181E4B] py-6 pl-4 no-focus bg-white border-none font-bold placeholder:text-black/25"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-6 w-[70%] min-w-fit" size="xl">Book Now</Button>
        </form>
      </Form>
    </div>
  )
}

export default BookingForm