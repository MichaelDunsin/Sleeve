/**
 * Renders copy for the public page. Research flags ([VERIFY …]) belong to the
 * data file and the research notes, never to the page, so they are stripped
 * here as a safety net.
 */
export function VerifyText({ text }: { text: string }) {
  return <>{text.replace(/\s*\[VERIFY[^\]]*\]/g, '')}</>
}
