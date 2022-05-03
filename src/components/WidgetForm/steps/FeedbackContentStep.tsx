import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '../../../data/feedbackTypes';
import { ClosePopoverButton } from '../../ClosePopoverButton';
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onStepBack: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onStepBack,
  onFeedbackSent
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const { title, image } = feedbackTypes[feedbackType];

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log({ screenshot, comment });

    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={() => onStepBack()}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={image.src} alt={image.alt} className="w-6 h-6" />
          {title}
        </span>

        <ClosePopoverButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmit}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Tell us what's happening..."
          onChange={(e) => setComment(e.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            existingScreenshot={screenshot}
            onScreenshotTaken={(screenshot) => setScreenshot(screenshot)}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 font-medium transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={comment.length === 0}
          >
            Submit Feedback
          </button>
        </footer>
      </form>
    </>
  );
}
