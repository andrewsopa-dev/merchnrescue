import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default async function DashboardPage() {
  const session = await auth()
 
  if (!session?.user) {
    redirect("/api/auth/signin")
  }
 
  return (
    <div className="min-h-screen bg-brand-black text-white flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 md:py-24">
        <Container>
          <SectionHeading
              kicker="Dashboard"
              title="HQ Portal"
              subtitle="Manage your quotes, orders, and team assets."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 md:col-span-1 border-white/10 bg-white/5">
                <div className="flex flex-col items-center text-center gap-4 mb-6">
                    {session.user.image ? (
                        <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-brand-teal">
                            <Image src={session.user.image} alt={session.user.name || "User"} fill className="object-cover" />
                        </div>
                    ) : (
                        <div className="h-24 w-24 rounded-full bg-brand-teal flex items-center justify-center text-3xl font-bold font-display tracking-widest text-[#111]">
                            {session.user.name?.charAt(0) || session.user.email?.charAt(0) || "U"}
                        </div>
                    )}
                    <div>
                        <h2 className="text-xl font-bold font-display uppercase tracking-wide">{session.user.name}</h2>
                        <p className="text-sm text-white/50">{session.user.email}</p>
                    </div>
                </div>
            </Card>
            <Card className="p-6 md:col-span-2 border-white/10 bg-white/5 flex flex-col">
                <h3 className="text-lg font-bold font-display uppercase tracking-widest text-brand-teal mb-4">Recent Deployments</h3>
                <div className="flex-grow flex flex-col items-center justify-center text-center py-12 text-white/50 border border-dashed border-white/10 rounded-sm hover:border-white/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-4 text-white/20"
                    >
                      <path d="M20.9 9.3V7.1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2.2" />
                      <line x1="3" x2="21" y1="13" y2="13" />
                      <path d="M12 21h8a2 2 0 0 0 2-2v-4" />
                      <path d="m3 16 3-3" />
                      <path d="m6 16-3-3" />
                      <path d="m6 16 3 3" />
                      <path d="m9 16-3 3" />
                      <path d="M10 16.5v.5" />
                    </svg>
                    <p className="mb-6 font-medium tracking-wide">No active deployments found for this operative.</p>
                    <a href="/products" className="bg-brand-teal text-[#111] px-6 py-2 uppercase tracking-widest font-bold text-xs hover:bg-[#156666] hover:text-white transition-colors">
                        Requisition Gear
                    </a>
                </div>
            </Card>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
