import useSWRMutation from "swr/mutation";
import { ImageConfiguration } from "@/interface/interfaces";

export function useGenerateImage({ onSuccess } : { onSuccess?: (data: any) => void}){
  const buildPrompt = (config: ImageConfiguration) => {
    return `Generate a printable computer sticker with the following elements: Colors: ${config.colors}; Shape: ${config.shape}; Place: ${config.placeVisited}; Elements: ${config.elements}; Style: ${config.style} style`;
  };

  const fetcher = async (url: string, { arg }: { arg: ImageConfiguration }) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API}`,
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: buildPrompt(arg),
        n: 1,
        size: "1024x1024",
      }),
    });
    return response.json();
  };

  const {
    trigger: generate,
    data,
    error,
    isMutating: loading,
  } = useSWRMutation("https://api.openai.com/v1/images/generations", fetcher, {
    onSuccess: onSuccess
  });

  return { generate, data, error, loading };
}
