'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from 'react'
import { Header } from '@/components/header'
const formSchema = z.object({
  name: z.string().min(2, "Namnet måste vara minst 2 tecken"),
  email: z.string().email("Ogiltig e-postadress"),
  phone: z.string().min(6, "Ogiltigt telefonnummer"),
  message: z.string().min(10, "Meddelandet måste vara minst 10 tecken")
})
export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSubmitted(true)
    form.reset()
  }
  return (
    <main className="min-h-screen bg-background">
      <Header />
            {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="max-w-[800px] mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">Sveriges ledande vattenfilter</Badge>
            <h1 className="text-5xl font-bold tracking-tight lg:text-6xl text-gray-900 mb-6">
              Rent vatten för en hälsosammare vardag
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-[600px] mx-auto">
              Professionella vattenreningslösningar för hem och företag med 10 års garanti och kostnadsfri installation.
            </p>
            <div className="mt-12 flex gap-4 justify-center">
              <Button size="lg" className="px-8 bg-blue-600 hover:bg-blue-700">Boka kostnadsfri konsultation</Button>
              <Button size="lg" variant="outline" className="px-8">Se våra lösningar</Button>
            </div>
          </div>
        </div>
      </section>
      {/* Rest of the existing content... */}
      {/* Stats Section */}
      <section className="py-12 bg-white border-y" id="tjanster">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600 mt-2">År i branschen</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">10k+</div>
              <div className="text-gray-600 mt-2">Nöjda kunder</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600 mt-2">Nöjd-kund-garanti</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600 mt-2">Support</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-24 bg-gray-50" id="produkter">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Varför välja våra vattenfilter?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vi erbjuder marknadens mest avancerade vattenreningssystem med beprövad teknologi och omfattande garantier.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Certifierad teknik</Badge>
                <h3 className="text-xl font-semibold mb-3">Avancerad filtrering</h3>
                <p className="text-gray-600 leading-relaxed">
                  Våra system avlägsnar 99.9% av alla föroreningar, inklusive mikroplaster, bakterier och tungmetaller.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Miljöcertifierad</Badge>
                <h3 className="text-xl font-semibold mb-3">Hållbar investering</h3>
                <p className="text-gray-600 leading-relaxed">
                  Spara tusentals kronor årligen och minska din miljöpåverkan genom att sluta köpa flaskvatten.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Premium service</Badge>
                <h3 className="text-xl font-semibold mb-3">Komplett support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kostnadsfri installation, löpande service och teknisk support dygnet runt.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="py-24 bg-white" id="kontakt">
        <div className="container mx-auto px-4">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Kontakta oss</h2>
              <p className="text-gray-600">
                Fyll i formuläret nedan för att boka en kostnadsfri konsultation eller ställa frågor om våra produkter.
              </p>
            </div>
                        {isSubmitted ? (
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="text-green-800 font-semibold text-lg mb-2">Tack för ditt meddelande!</h3>
                <p className="text-green-700">Vi återkommer till dig så snart som möjligt.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Namn</FormLabel>
                          <FormControl>
                            <Input placeholder="Ditt namn" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                                        <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-post</FormLabel>
                          <FormControl>
                            <Input placeholder="din@email.se" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon</FormLabel>
                        <FormControl>
                          <Input placeholder="Ditt telefonnummer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meddelande</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Skriv ditt meddelande här..." 
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Skicka meddelande
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white" id="om-oss">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Om oss</h3>
              <p className="text-gray-400">
                Sveriges ledande leverantör av vattenreningssystem med över 15 års erfarenhet i branschen.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Kontakt</h3>
              <p className="text-gray-400">
                Email: info@vattenfilter.se<br />
                Tel: 08-123 45 67<br />
                Adress: Vattengatan 1, Stockholm
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Öppettider</h3>
              <p className="text-gray-400">
                Måndag-Fredag: 09:00-17:00<br />
                Lördag: 10:00-14:00<br />
                Söndag: Stängt
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Certifieringar</h3>
              <p className="text-gray-400">
                ISO 9001:2015<br />
                Svensk Miljöbas<br />
                AAA-rating
              </p>
            </div>
          </div>
          <div className="text-center mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              © 2024 PureWater AB. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}