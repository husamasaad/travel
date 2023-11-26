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
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "./ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import FromModal from "./FromModal"
import { useState } from "react"


const FormSchema = z.object({
  destination: z.string().min(2, {
    message: "Please Provide Your Destination",
  }),
  type: z.string().min(2, {
    message: "Please Chose a type",
  }),
  date: z.date()
})


const HeroForm = () => {

  const [showModal, setShowModal] = useState(false)

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      destination: "",
      type: "",
      duration: null,
    },
  })

  async function onSubmit(data)  {
    setShowModal(true)
  }



  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-fit bg-[#F3F3F399] p-8 mt-16 flex flex-col md:flex-row md:items-center gap-y-8 text-white rounded-sm shadow-btnShadow flex-wrap">
          <FormField
            className="w-fit"
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem className="max-lg:border-b lg:border-r relative">
                  <FormControl>
                    <Input {...field} className="w-full md:w-[200px] text-xl font-semibold no-focus bg-transparent border-none text-white placeholder:text-white" placeholder="Where to ?"/>
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
                <FormItem className="max-lg:border-b lg:border-r relative">
                  <FormControl>
                    <Input {...field} className="w-full md:w-[200px] text-xl font-semibold no-focus bg-transparent border-none text-white placeholder:text-white" placeholder="Tour Type ?"/>
                  </FormControl>
                  <FormMessage className="absolute left-5 text-red-800 font-bold" />
                </FormItem>
              )}
            />
            <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className=" max-lg:border-b relative lg:mr-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left w-full md:w-[200px] text-xl font-semibold no-focus bg-transparent border-none text-white placeholder:text-white",
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
            <Button type="submit" onSubmit={onSubmit} size="xl" className="ml-auto">
                Submit
            </Button>
        </form>
      </Form>
      {showModal && <FromModal data={form.getValues()} setShowModal={setShowModal} />}
    </>
  )
}

export default HeroForm