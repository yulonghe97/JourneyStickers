import { Bird, Rabbit, Turtle } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function APIPanel() {
  return (
    <form className="grid w-full items-start gap-6">
      <fieldset className="grid gap-6 rounded-lg border p-4">
        <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
        <div className="grid gap-3">
          <Label htmlFor="model">Model</Label>
          <Select defaultValue="gpt4">
            <SelectTrigger id="model" className="items-start [&_[data-description]]:hidden">
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt4">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Rabbit className="size-5" />
                  <div className="grid gap-0.5">
                    <p>
                      <span className="font-medium text-foreground">DALL·E 3</span>
                    </p>
                    <p className="text-xs" data-description>
                      Powered by OpenAI
                    </p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="gemini" disabled>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Bird className="size-5" />
                  <div className="grid gap-0.5">
                    <p>
                      <span className="font-medium text-foreground">Gemini</span>
                    </p>
                    <p className="text-xs" data-description>
                      Powered by Gemini Pro Vision 1.0
                    </p>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* <div className="grid gap-3">
          <Label htmlFor="api-key">API Key</Label>
          <Input id="api-key" type="password" placeholder="Paste your API Key" />
        </div> */}
      </fieldset>
    </form>
  );
}
