import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtsImageUrl from '../assets/thoughts.svg';

export type FeedbackType = keyof typeof feedbackTypes;

export const feedbackTypes = {
  BUG: {
    title: 'Bug',
    image: {
      src: bugImageUrl,
      alt: 'Image of a bug'
    }
  },
  IDEA: {
    title: 'Idea',
    image: {
      src: ideaImageUrl,
      alt: 'Image of a lamp'
    }
  },
  OTHER: {
    title: 'Other',
    image: {
      src: thoughtsImageUrl,
      alt: 'Image of a thoughts cloud'
    }
  }
};
