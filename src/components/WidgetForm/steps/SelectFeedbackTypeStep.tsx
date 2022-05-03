import { FeedbackType, feedbackTypes } from '../../../data/feedbackTypes';
import { ClosePopoverButton } from '../../ClosePopoverButton';
import { FeedbackTypeButton } from '../FeedbackTypeButton';

interface SelectFeedbackTypeStepProps {
  onTypeChanged: (type: FeedbackType) => void;
}

export function SelectFeedbackTypeStep({
  onTypeChanged
}: SelectFeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Leave your Feedback</span>

        <ClosePopoverButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, val]) => {
          const { image, title } = val;

          return (
            <FeedbackTypeButton
              title={title}
              image={image}
              key={key}
              onClick={() => onTypeChanged(key as FeedbackType)}
            />
          );
        })}
      </div>
    </>
  );
}
