import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ConfigPanel() {
  return (
    <fieldset className="grid gap-6 rounded-lg border p-4 w-full">
      <legend className="-ml-1 px-1 text-sm font-medium">Your Sticker</legend>
      <div className="grid gap-3">
        <Label htmlFor="place-visited">Place Visited</Label>
        <Input id="place-visited" placeholder="eg. Yellow Stone National Park" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="elements">Elements</Label>
        <Textarea id="elements" placeholder="eg. Bison, Snowmobile, Snow, Old faithful" className="min-h-[5rem]" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="elements">Colors</Label>
        <Textarea id="elements" placeholder="eg. Green, Brown" className="min-h-[5rem]" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="shape">Shape</Label>
        <Select defaultValue="rectangular">
          <SelectTrigger>
            <SelectValue placeholder="Select a Shape" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rectangular">Rectangular</SelectItem>
            <SelectItem value="circular">Circular</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="size">Sticker Size</Label>
        <RadioGroup defaultValue="3x3" className="grid-flow-col">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2x2" id="size-2x2" />
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
  );
}
