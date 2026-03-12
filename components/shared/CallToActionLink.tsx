import Link from "next/link"
import { Button } from "../ui/button"

const CallToActionLink = ({
  titel,
  fullWidth,
}: {
  titel?: string
  fullWidth?: boolean
}) => {
  return (
    <Button
      variant={"outline"}
      size="lg"
      className={`rounded-full border-none bg-amber-300 px-8 text-base font-semibold text-primary hover:border-amber-400 hover:bg-amber-400 ${fullWidth ? "w-full" : ""}`}
      asChild
    >
      <Link
        href="https://application-portal.umch.de"
        target="_blank"
        rel="noopener noreferrer"
      >
        {titel || "Apply Now"}
      </Link>
    </Button>
  )
}

export default CallToActionLink
