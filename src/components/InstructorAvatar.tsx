import { getInitials } from "@/lib/getInitials";

type InstructorAvatarProps = {
  name: string;
};

export default function InstructorAvatar({ name }: InstructorAvatarProps) {
  const initials = getInitials(name);

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold">
      {initials}
    </div>
  );
}
