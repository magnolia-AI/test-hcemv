'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Rent och friskt vatten för ditt hem
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Vi erbjuder marknadens bästa vattenfilter för att säkerställa att du och din familj får det renaste vattnet.
          </p>
          <div className="mt-12 flex gap-4 justify-center">
            <Button size="lg" className="px-8 bg-blue-600 hover:bg-blue-700">Se våra produkter</Button>
            <Button size="lg" variant="outline" className="px-8">Kontakta oss</Button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="container mx-auto px-4 py-24 bg-muted/30">
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Högsta kvalitet</Badge>
              <h3 className="text-xl font-semibold mb-3">Avancerad filtrering</h3>
              <p className="text-muted-foreground leading-relaxed">
                Våra filter använder den senaste teknologin för att avlägsna föroreningar, klor och tungmetaller.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Miljövänligt</Badge>
              <h3 className="text-xl font-semibold mb-3">Hållbar lösning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Minska användningen av plastflaskor och bidra till en bättre miljö med våra vattenfilter.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Support</Badge>
              <h3 className="text-xl font-semibold mb-3">Expert service</h3>
              <p className="text-muted-foreground leading-relaxed">
                Gratis installation och support från våra certifierade tekniker.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Redo att förbättra ditt vatten?
          </h2>
          <p className="text-muted-foreground mb-8">
            Kontakta oss idag för en gratis konsultation och vattenanalys.
          </p>
          <Button className="px-8 bg-blue-600 hover:bg-blue-700">
            Boka konsultation
          </Button>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <p className="text-sm text-muted-foreground">
                Email: info@vattenfilter.se<br />
                Tel: 08-123 45 67<br />
                Adress: Vattengatan 1, Stockholm
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Öppettider</h3>
              <p className="text-sm text-muted-foreground">
                Måndag-Fredag: 09:00-17:00<br />
                Lördag: 10:00-14:00<br />
                Söndag: Stängt
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Följ oss</h3>
              <p className="text-sm text-muted-foreground">
                Facebook<br />
                Instagram<br />
                LinkedIn
              </p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              © 2024 Vattenfilter AB. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}