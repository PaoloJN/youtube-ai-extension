import { cn } from "@/lib/utils"

interface MarkdownProps {
  markdown: string
  className?: string
}

export default function Markdown({ markdown, className }: MarkdownProps) {
  // prettier-ignore
  const convertToHtml = (markdownText: string) => {
    // Convert headers with Tailwind classes
    markdownText = markdownText.replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold">$1</h3>')
    markdownText = markdownText.replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold">$1</h2>')
    markdownText = markdownText.replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mb-4">$1</h1>')

    // Convert bold text with Tailwind
    markdownText = markdownText.replace(/\*\*(.*)\*\*/gim, '<strong class="font-bold">$1</strong>')

    // Convert italic text with Tailwind
    markdownText = markdownText.replace(/\*(.*)\*/gim, '<i class="italic">$1</i>')

    // Convert links with Tailwind
    markdownText = markdownText.replace(/\[([^[]+)\]\((.*)\)/gim, '<a href="$2" class="text-blue-500 hover:text-blue-700">$1</a>')

    // Convert blockquotes with Tailwind
    markdownText = markdownText.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-gray-500 pl-4">$1</blockquote>')

    // Convert unordered lists
    markdownText = markdownText.replace(/^(?:-|\+|\*)\s+(.+)$/gim, '<li class="list-disc ml-5 text-[12px]">$1</li>')
    markdownText = markdownText.replace(/((?:<li class="list-disc ml-5">.+<\/li>\s*)+)/gim, '<ul class="list-inside">$1</ul>')

    // Convert ordered lists
    markdownText = markdownText.replace(/^\d+\.\s+(.+)$/gim, '<li class="list-decimal ml-5 text-[12px]">$1</li>')
    markdownText = markdownText.replace(/((?:<li class="list-decimal ml-5">.+<\/li>\s*)+)/gim, '<ol class="list-decimal pl-5">$1</ol>')

    // Handle paragraphs by wrapping non-tagged text in <p>
    markdownText = markdownText.replace(/^(?!<(?:ul|ol|li|h1|h2|h3|h4|h5|h6|blockquote|a|strong|i|em|div|p)\b)[^<]+/gim, '<p class="text-[12px]">$&</p>')

    // Replace line breaks with <br>
    markdownText = markdownText.replace(/\n/g, "<br>")

    return markdownText
  }

  const htmlContent = convertToHtml(markdown)

  return (
    <div
      className={cn("prose dark:prose-dark", className)}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}
