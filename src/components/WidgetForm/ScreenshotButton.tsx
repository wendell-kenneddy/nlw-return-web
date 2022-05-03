import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Loading } from '../Loading';

interface ScreenshotButtonProps {
  existingScreenshot: string | null;
  onScreenshotTaken: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  existingScreenshot,
  onScreenshotTaken
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');
    onScreenshotTaken(base64Image);

    setIsTakingScreenshot(false);
  }

  return existingScreenshot ? (
    <button
      type="button"
      className="p-1 w-10 h-10 rounded border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-400 transition-colors"
      style={{
        backgroundImage: `url(${existingScreenshot})`,
        backgroundPosition: 'right bottom',
        backgroundSize: 180
      }}
      onClick={() => onScreenshotTaken(null)}
    >
      <Trash weight="fill" />
    </button>
  ) : (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
