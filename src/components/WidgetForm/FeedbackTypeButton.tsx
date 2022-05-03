import { ButtonHTMLAttributes } from 'react';

interface FeedbackTypeButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

export function FeedbackTypeButton({
  title,
  image,
  ...props
}: FeedbackTypeButton) {
  return (
    <button
      className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:outline-none focus:border-brand-500"
      type="button"
      {...props}
    >
      <img src={image.src} alt={image.alt} />
      <span>{title}</span>
    </button>
  );
}
