"use client";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ImageConfiguration } from "@/interface/interfaces";
import { useEffect } from "react";


interface ConfigPanelProps {
  onSubmit: SubmitHandler<ImageConfiguration>;
}

export default function ConfigPanel({ onSubmit } : ConfigPanelProps) {

  const form = useForm<ImageConfiguration>();
  const { formState: { errors } } = form;

  const validateCommaSeparated = (value: string) => {
    if (!value) return "Required";
    return value.split(",").every((v: string) => v.trim() !== "") || "Entries must be comma-separated";
  };

  return (
    <Form {...form}>
      <form id="sticker-form" onSubmit={form.handleSubmit(onSubmit)} className="w-full flex">
        <fieldset className="grid gap-6 rounded-lg border p-4 w-full">
          <legend className="-ml-1 px-1 text-sm font-medium">Your Sticker</legend>
          <FormField
            control={form.control}
            name="placeVisited"
            rules={{ required: "Place visited is required." }}
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-3">
                  <FormLabel htmlFor="place-visited">Place Visited</FormLabel>
                  <FormControl>
                    <Input id="place-visited" placeholder="eg. Yellow Stone National Park" {...field} />
                  </FormControl>
                  <FormMessage>{errors.placeVisited?.message}</FormMessage>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="elements"
            rules={{ validate: validateCommaSeparated }}
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-3">
                  <FormLabel htmlFor="elements">Elements</FormLabel>
                  <FormControl>
                    <Textarea
                      id="elements"
                      placeholder="eg. Bison, Snowmobile, Snow, Old faithful"
                      className="min-h-[5rem]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>{errors.elements?.message}</FormMessage>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="colors"
            rules={{ validate: validateCommaSeparated }}
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-3">
                  <FormLabel htmlFor="colors">Colors</FormLabel>
                  <FormControl>
                    <Textarea id="colors" placeholder="eg. Green, Brown" className="min-h-[5rem]" {...field} />
                  </FormControl>
                  <FormMessage>{errors.colors?.message}</FormMessage>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shape"
            rules={{ required: "Shape is required." }}
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-3">
                  <FormLabel htmlFor="shape">Shape</FormLabel>
                  <Select defaultValue={field.value} onValueChange={field.onChange} {...field}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Shape" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="rectangular">Rectangular</SelectItem>
                      <SelectItem value="circular">Circular</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{errors.shape?.message}</FormMessage>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="style"
            rules={{ required: "Style is required." }}
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-3">
                  <FormLabel htmlFor="style">Style</FormLabel>
                  <Select defaultValue={field.value} onValueChange={field.onChange} {...field}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Style" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="minimalism">Minimalism</SelectItem>
                      <SelectItem value="retro">Retro</SelectItem>
                      <SelectItem value="cartoonism">Cartoonism</SelectItem>
                      <SelectItem value="sketch">Sketch</SelectItem>
                      <SelectItem value="pop-art">Pop Art</SelectItem>
                      <SelectItem value="graffiti">Graffiti</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{errors.style?.message}</FormMessage>
                </div>
              </FormItem>
            )}
          />
          <div className="grid gap-3">
            <Label htmlFor="size">Sticker Size</Label>
            <RadioGroup defaultValue="3x3" className="grid-flow-col">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="TwoByTwo" id="size-2x2" />
                <Label htmlFor="size-2x2">2x2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3x3" id="size-3x3" />
                <Label htmlFor="size-3x3">3x3</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="4x4" id="size-4x4" />
                <Label htmlFor="size-4x4">4x4</Label>
              </div>
            </RadioGroup>
          </div>
        </fieldset>
      </form>
    </Form>
  );
}
