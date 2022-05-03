import { FeedbackType } from '../../data/feedbackTypes';
import { useState } from 'react';
import { SelectFeedbackTypeStep } from './steps/SelectFeedbackTypeStep';
import { FeedbackContentStep } from './steps/FeedbackContentStep';
import { FeedbackSentStep } from './steps/FeedbackSentStep';

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSentStep onFeedbackRestart={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <SelectFeedbackTypeStep
              onTypeChanged={(type) => setFeedbackType(type)}
            />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onStepBack={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Made with ♥ by{' '}
        <a
          href="https://github.com/wendell-kenneddy"
          rel="noopener noreferrer"
          target="_blank"
          className="underline underline-offset-1"
        >
          Wendell Kenneddy
        </a>
      </footer>
    </div>
  );
}
