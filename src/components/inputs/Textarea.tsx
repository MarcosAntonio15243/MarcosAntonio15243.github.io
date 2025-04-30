import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}

export default function Textarea({ id, label, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="font-source-serif-4 font-light text-[1.1rem] capitalize text-[var(--color-dark-gray)]">{label}</label>
      <textarea className="w-full outline-none border-b-[1px] text-[var(--color-dark-blue)] border-b-[var(--color-dark-gray)] py-1 resize-none min-h-20" rows={1} {...props}></textarea>
    </div>
  )
}