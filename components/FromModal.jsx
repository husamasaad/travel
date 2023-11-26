"use client"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CalendarIcon, X } from "lucide-react"
import { Calendar } from "./ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { useState } from "react"
import toast from "react-hot-toast"
import { sendTourRequest } from "@/lib/telegramBotSend"


const FormSchema = z.object({
  destination: z.string().min(2, {
    message: "Please Provide Your Destination",
  }),
  email: z.string().email({
    message: "Please provide a valid email.",
  }),
  type: z.string().min(2, {
    message: "Please Chose a type",
  }),
  date: z.date(),
  phone: z.string().refine(value => /^\+\d{1,3}\d{3}\d{3}\d{4}$/.test(value), {
    message: "Please provide a valid phone number in the format: '+XXXXXXXXXXXXX'.",
  }),
  numberOfTickets: z.string().min(1, {
    message: "Please provide a valid number of tickets",
  }),
});

const FromModal = ({ data, setShowModal }) => {
  
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      destination: data.destination,
      type: data.type,
      date: data.date,
      email: "",
      phone: "",
      numberOfTickets: "",
    },
  });

  const onSubmit = async (data) => {

    const res = sendTourRequest(data)
    toast.promise(res, {
      loading: 'just a sec',
      success: 'Your Request is Recieved.',
      error: 'Please try again later',
    })

    const result = await res

    if (result) {
      form.reset()
      setShowModal(false)
    }
  };

  return (
    <div className='fixed min-h-screen w-[100vw] bg-black/70 top-0 left-0 flex-center p-6 !z-[1000]'>
      <div className='bg-white w-[90vw] max-h-[90vh] max-w-[500px] p-6 rounded-2xl overflow-y-scroll relative z-[50]'>
        <Button onClick={() => setShowModal(false)} type="button" variant="ghost" className="absolute top-5 rounded-full p-2 right-5 z-50 cursor-pointer">
          <X />
        </Button>
        <h2 className='text-center text-3xl text-[#181E4B] font-bold'>Build Your Own Package</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
            <FormField
              className="w-fit"
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem className="relative border p-4 rounded-2xl mb-6">
                  <FormLabel className="text-lg text-black/60">Destination:</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full text-xl font-semibold border-none no-focus bg-transparent text-[#181E4B]" placeholder="make sure it is valid.." />
                  </FormControl>
                  <FormMessage className="absolute left-5 text-red-800 font-bold" />
                </FormItem>
              )}
            />
            <FormField
              className="w-fit"
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="relative border p-4 rounded-2xl mb-8">
                  <FormLabel className="text-lg text-black/60">Tour Type:</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full text-xl font-semibold border-none no-focus bg-transparent text-[#181E4B]" placeholder="Where to ?" />
                  </FormControl>
                  <FormMessage className="absolute left-5 text-red-800 font-bold" />
                </FormItem>
              )}
            />
            {/* New Fields */}
            <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className=" relative border p-4 rounded-2xl mb-8">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full text-xl font-semibold border-none no-focus bg-transparent text-[#181E4B]",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date()
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage className="absolute left-5 text-red-800 font-bold" />
              </FormItem>
            )}
          />
            <FormField
              className="w-fit"
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative border p-4 rounded-2xl mb-8">
                  <FormLabel className="text-lg text-black/60">Email:</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" className="w-full text-xl font-semibold border-none no-focus bg-transparent text-[#181E4B]" placeholder="Enter your email address" />
                  </FormControl>
                  <FormMessage className="absolute left-5 text-red-800 font-bold" />
                </FormItem>
              )}
            />
            <FormField
              className="w-fit"
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="relative border p-4 rounded-2xl mb-8">
                  <FormLabel className="text-lg text-black/60">Phone:</FormLabel>
                  <FormControl>
                    <Input {...field} type="tel" className="w-full text-xl font-semibold border-none no-focus bg-transparent text-[#181E4B]" placeholder="Enter your phone number" />
                  </FormControl>
                  <FormMessage className="absolute left-5 text-red-800 font-bold" />
                </FormItem>
              )}
            />
            <FormField
              className="w-fit"
              control={form.control}
              name="numberOfTickets"
              render={({ field }) => (
                <FormItem className="relative border p-4 rounded-2xl mb-8">
                  <FormLabel className="text-lg text-black/60">Number of Tickets:</FormLabel>
                  <FormControl>
                    <Input onChange={(e) => field.onChange(parseInt(e.target.value, 10) || undefined)}  {...field} type="number" className="w-full text-xl font-semibold border-none no-focus bg-transparent text-[#181E4B]" placeholder="Enter the number of tickets" />
                  </FormControl>
                  <FormMessage className="absolute left-5 text-red-800 font-bold" />
                </FormItem>
              )}
            />
            <Button type="submit" onSubmit={onSubmit} size="xl" className="w-[60%] block mx-auto">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}


export default FromModal