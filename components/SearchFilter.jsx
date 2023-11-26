"use client"

import Image from "next/image"


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

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "./ui/calendar"
import { format } from "date-fns"
import { useRouter } from "next/navigation"
import { useState } from "react"
import nProgress from "nprogress"

const FormSchema = z.object({
  type: z.string().optional(),
  location: z.string().optional(),
})



const SearchFilter = ({ tourTypes, tourLocations }) => {

  const searchParams = new URLSearchParams(window.location.search)

  const [showAll, setShowAll] = useState(searchParams.size > 0)

  const Router = useRouter()

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      location: "",
      type: "",
    },
  })

  async function onSubmit(data)  {
    const searchParams = new URLSearchParams(window.location.search)

    if (data.type) {
      searchParams.set('type', data.type)
    }

    if (data.location) {
      searchParams.set('location', data.location)
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    setShowAll(true)
    nProgress.start()
    Router.push(newPathname)
    nProgress.done()
  }

  function removeFilter () {

    const searchParams = new URLSearchParams(window.location.search)

    searchParams.delete('type')
    searchParams.delete('location')

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    setShowAll(false)
    nProgress.start()
    Router.push(newPathname)
    nProgress.done()
  }

  const types = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Chinese", value: "zh" },
  ]


  return (
    <div className='w-full lg:max-w-[320px] py-8 px-6 lg:pr-12'>
      <div className='bg-[#EDEDED] p-8 text-center'>
        <h2 className='text-4xl text-[#181E4B] font-bold'>Plan Your Trip</h2>
        <p className='my-4 text-lg !leading-[162%] max-w-[310px] mx-auto'>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
              className="w-fit mt-4"
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="relative mt-4">
                <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between bg-white text-[#181E4B] py-8 border-none text-lg truncate",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? tourTypes.find(
                            (type) => type.name === field.value
                          )?.title
                        : "Tour Type"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command>
                    <CommandInput placeholder="Search types?..." />
                    <CommandEmpty>No type found.</CommandEmpty>
                    <CommandGroup>
                      {tourTypes.map((type) => (
                        <CommandItem
                          value={type.title}
                          key={type.name}
                          onSelect={() => {
                            form.setValue("type", type.name)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              type.name === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {type.title}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
                </Popover>
                <FormMessage className="absolute left-5 text-red-800 font-bold" />
              </FormItem>
              )}
            />
          <FormField
            className="w-fit mt-4"
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="relative mt-4">
                <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between bg-white text-[#181E4B] py-8 border-none text-xl",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? tourLocations.find(
                            (type) => type.name === field.value
                          )?.name
                        : "Location"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command>
                    <CommandInput placeholder="Where to?..." />
                    <CommandEmpty>No type found.</CommandEmpty>
                    <CommandGroup>
                      {tourLocations.map((type) => (
                        <CommandItem
                          value={type.name}
                          key={type.name}
                          onSelect={() => {
                            form.setValue("location", type.name)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              type.name === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {type.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
                </Popover>
                <FormMessage className="absolute left-5 text-red-800 font-bold" />
              </FormItem>
              )}
            />
            <Button type="submit" size="xl" className="mt-4">
              Search
            </Button>
            {showAll && (
              <Button onClick={() => removeFilter()} size="sm" variant="ghost" type="button" className="block mx-auto mt-6">Remove filters</Button>
            )}
        </form>
        </Form>
      </div>
      <Image
        src="/travel-tour.png"
        alt="travel with us"
        width={519}
        height={420}
        className="object-cover mt-16 hidden lg:block"
      />
    </div>
  )
}

export default SearchFilter