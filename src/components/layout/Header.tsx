import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, HeartHandshake, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { mainNav } from "../../data/navigation";
import { organisation } from "../../data/site";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const topOfHero = !scrolled;

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        scrolled ? "border-b border-ink/10 bg-paper/94 shadow-sm backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center gap-4 px-5 sm:px-8 lg:px-12 xl:gap-5 xl:px-16">
        <Link to="/" className="flex items-center gap-3" aria-label="FIFSA home">
          <span className={cn("rounded-brand transition", topOfHero ? "bg-white p-1.5 shadow-soft" : "bg-white/0 p-0")}>
            <img className="h-12 w-auto object-contain sm:h-14" src={organisation.logo} alt="FIFSA logo" />
          </span>
          <span className={cn("hidden max-w-40 text-sm font-extrabold leading-tight transition xl:block", topOfHero ? "text-white" : "text-ink")}>
            {organisation.name}
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {mainNav.map((item) =>
            item.items ? (
              <DropdownMenu.Root key={item.label} modal={false}>
                <DropdownMenu.Trigger
                  className={cn(
                    "group inline-flex min-h-11 items-center gap-1 rounded-brand px-3 text-sm font-bold transition-all duration-200 ease-out data-[state=open]:scale-[0.98]",
                    topOfHero ? "text-white hover:bg-white/12" : "text-ink hover:bg-ink/5",
                  )}
                >
                  {item.label} <ChevronDown size={16} className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                  align="start"
                  sideOffset={12}
                  className="dropdown-content z-50 grid min-w-64 gap-1 rounded-brand border border-ink/10 bg-white p-2 shadow-soft"
                >
                  <DropdownMenu.Item asChild>
                    <Link className="rounded-brand px-3 py-2 text-sm font-bold text-ink transition-all duration-150 hover:bg-ocean/8 hover:pl-4" to={item.href}>
                      Overview
                    </Link>
                  </DropdownMenu.Item>
                  {item.items.map((subItem) => (
                    <DropdownMenu.Item asChild key={subItem.href}>
                      <Link className="rounded-brand px-3 py-2 text-sm font-medium text-muted transition-all duration-150 hover:bg-ocean/8 hover:pl-4 hover:text-ocean" to={subItem.href}>
                        {subItem.label}
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            ) : (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "rounded-brand px-3 py-3 text-sm font-bold transition",
                    topOfHero ? "text-white hover:bg-white/12" : "text-ink hover:bg-ink/5",
                    isActive && (topOfHero ? "bg-white/12 text-sun" : "bg-ocean/10 text-ocean"),
                  )
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <Button asChild variant="donate" className="ml-auto hidden xl:inline-flex" icon={<HeartHandshake size={18} />}>
          <Link to="/donate">Donate</Link>
        </Button>

        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Dialog.Trigger asChild>
            <Button
              variant="outline"
              className={cn("ml-auto h-11 w-11 px-0 xl:hidden", topOfHero && "border-white/35 bg-white/10 text-white hover:bg-white/18")}
              aria-label="Open menu"
              icon={<Menu size={22} />}
            />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="mobile-menu-overlay fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm" />
            <Dialog.Content className="mobile-menu-content fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col overflow-y-auto bg-paper p-5 shadow-soft sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <Dialog.Title className="font-heading text-xl font-extrabold text-ink">FIFSA</Dialog.Title>
                <Dialog.Close asChild>
                  <Button variant="ghost" className="h-11 w-11 px-0" aria-label="Close menu" icon={<X size={22} />} />
                </Dialog.Close>
              </div>
              <div className="mt-8 grid gap-3">
                {mainNav.map((item) => (
                  <div key={item.label} className="border-b border-ink/10 pb-3">
                    <Link className="block py-2 font-heading text-2xl font-extrabold text-ink" to={item.href}>
                      {item.label}
                    </Link>
                    {item.items ? (
                      <div className="grid gap-1 pb-2">
                        {item.items.map((subItem) => (
                          <Link key={subItem.href} className="rounded-brand py-2 text-sm font-semibold text-muted" to={subItem.href}>
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <Button asChild variant="donate" className="mt-8" icon={<HeartHandshake size={18} />}>
                <Link to="/donate">Donate now</Link>
              </Button>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
