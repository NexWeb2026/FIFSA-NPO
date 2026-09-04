import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFoundPage() {
  usePageMeta("Page not found", "The requested FIFSA page could not be found.");

  return (
    <section className="min-h-[70vh] bg-paper pt-32">
      <Container className="py-24 text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-ocean">404</p>
        <h1 className="mt-4 text-balance font-heading text-4xl font-extrabold text-ink sm:text-5xl">This page has moved.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">
          The route you requested is not available in the new FIFSA site structure.
        </p>
        <Button asChild className="mt-8">
          <Link to="/">Return home</Link>
        </Button>
      </Container>
    </section>
  );
}
