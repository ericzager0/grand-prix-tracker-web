import ButtonChecker from "./ButtonChecker";

export interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonText?: string;
  placeholder?: string;
}

export default function EmailInput({
  email, 
  setEmail, 
  onSubmit, 
  buttonText = "Sumarme", 
  placeholder = "tu@email.com"
}: EmailInputProps) {
    return (
      <form
        onSubmit={onSubmit}
        className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-sm border border-[#33343D] bg-[#131318] px-4 py-3.5 text-sm text-[#F3F1EA] placeholder-[#5C5D66] outline-none transition-colors focus:border-[#E10600]"
        />
        <ButtonChecker
          className="px-6 py-3.5"
          showArrow={true}
          type="submit"
        >
          {buttonText}
        </ButtonChecker>
      </form>
    );
}